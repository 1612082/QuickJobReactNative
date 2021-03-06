import axios from 'axios';
import { Alert } from 'react-native';
import SyncStorage from 'sync-storage';
const getAccessToken = () => {
    try {
        const retrievedItem = SyncStorage.get('tokem');
        if (retrievedItem !== null) {
            const item = JSON.parse(retrievedItem);
            console.log(item);
            const authorization = `Bearer ${item}`;
            // We have data!!
            return authorization;
        } return null;
    } catch (error) {
        // Error retrieving data
    }
};
const loginClient = axios.create({
    baseURL: "http://192.168.100.4:8000/",
    headers: {
        Accept: 'application/json',
    },
});
const getLoginClient = () => {
    loginClient.defaults.headers.common.Authorization = getAccessToken();
    return loginClient;
};
export default getLoginClient;
function getUrl(config) {
    if (config.baseURL) {
        return config.url.replace(config.baseURL, '');
    }
    return config.url;
}
// Intercept all requests
loginClient.interceptors.request.use(
    config => {
        console.log(`%c ${config.method.toUpperCase()} - ${getUrl(config)}:`, 'color: #0086b3; font-weight: bold', config,);
        return config;
    }, error => Promise.reject(error));
// Intercept all responses
loginClient.interceptors.response.use(
    response => {
        if (response.status === 401) {
            try {
                const value = SyncStorage.get('tokenData');
                if (value !== null) {
                    // We have data!!
                    SyncStorage.clear();
                    NavigationService.navigate('Home');
                }
            } catch (error) {
                // Error retrieving data
                console.log(error, 'logged in client error');
            }
        } console.log(`%c ${response.status} - ${getUrl(response.config)}:`, 'color: #008000; font-weight: bold', response,); return response;
    },
    error => {
        console.log(error, 'error console');
        if (error.response.status === 429) {
            Alert.alert('Too many requests. Please try again later.');
        } console.log(`%c ${error.response.status} - ${getUrl(error.response.config)}:`, 'color: #a71d5d; font-weight: bold', error.response,);
        return Promise.reject(error);
    });