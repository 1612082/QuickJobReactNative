import axios from 'axios';
const client = axios.create({
    baseURL: "http://192.168.100.4:8000/",
    headers: {
        Accept: 'application/json',
    },
    // data: {
    //     id: 'password',
    //     scope: '*',
    // },
});
export default client;
function getUrl(config) {
    if (config.baseURL) { return config.url.replace(config.baseURL, ''); }
    return config.url;
}
// Intercept all request
client.interceptors.request.use(
    config => {
        console.log(
            `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
            'color: #0086b3; font-weight: bold', config);
        return config;
    }, error => Promise.reject(error),
);
// Intercept all responses
client.interceptors.response.use(
    async response => {
        console.log(
            `%c ${response.status} - ${getUrl(response.config)}:`,
            'color: #008000; font-weight: bold',
            response,
        );
        return response;
    },
    error => {
        return Promise.reject(error);
    });