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
    if (SyncStorage.get('token')) {
        let token = JSON.parse(SyncStorage.get('token'));
        config.headers.Authorization = token ? `Bearer ${token}` : "";
    }
    return config;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error);
        if (error.response.status === 401) {
            console.log(error.response);
            Alert.alert(
                'Tài khoản của bạn đã hết hạn đăng nhập',
                'Vui lòng đăng nhập lại',
                [
                    {
                        text: 'OK', onPress: () => {
                            SyncStorage.getAllKeys().map(k => SyncStorage.remove(k));
                            // history.push("/login");
                            // MyStore.dispatch({
                            //     type: "USER_LOG_OUT",
                            // });
                        }
                    }
                ],
                { cancelable: false }
            );
        }
        return Promise.reject(error);
    }
);

export default axios;
