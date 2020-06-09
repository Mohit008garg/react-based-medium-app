/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getUserToken } from '../utils/utils';


axios.interceptors.request.use((config) => {
    config.headers.authorization = getUserToken() !== null ? `Token ${getUserToken()}` : '';
    return config;
}, ((error) =>
    Promise.reject(error)
));


const requestConfig = {
    withCredentials: true,
    'Content-Type': 'application/json'
};

const get = (url, params = null) => {
    const paramsConfig = { withCredentials: true };
    if (params) {
        paramsConfig.params = params;
    }
    return axios.get(url, paramsConfig);
};

const post = (url, data = null) => axios.post(url, data, requestConfig);

const put = (url, data) => axios.put(url, data, requestConfig);

const deleteEntity = (url) => axios.delete(url, requestConfig);

export default {
    get,
    post,
    put,
    deleteEntity
};
