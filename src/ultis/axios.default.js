import Axios from "axios";
import SyncStorage from "sync-storage";
import { Alert } from "react-native";

let axios = Axios.create({
  baseURL: "http://192.168.100.4:8000/",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //get token
  if (SyncStorage.get("token")) {
    let token = JSON.parse(SyncStorage.get("token"));
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }
  return config;
});

function getUrl(config) {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, "");
  }
  return config.url;
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "error console");
    console.log(
      `%c ${error.response.status} - ${getUrl(error.response.config)}:`,
      "color: #a71d5d; font-weight: bold",
      error.response
    );
    if (error.response.status === 401) {
      Alert.alert(
        "Tài khoản của bạn đã hết hạn đăng nhập",
        "Vui lòng đăng nhập lại",
        [
          {
            text: "OK",
            onPress: () => {
              SyncStorage.getAllKeys().map((k) => SyncStorage.remove(k));
              // history.push("/login");
              // MyStore.dispatch({
              //     type: "USER_LOG_OUT",
              // });
            },
          },
        ],
        { cancelable: false }
      );
    }
    return Promise.reject(error);
  }
);

export default axios;
