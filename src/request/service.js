import HttpErrorCode from "@/config/HttpErrorCode";
import store from "@/store";
import { gotoLogin } from "@/utils/nav";
import axios from "axios";

const service = axios.create({
    // 在请求地址前面加上baseURL
    baseURL: 'http://localhost:5000',
    // 当发送跨域请求时携带cookie
    withCredentials: true,
    timeout: 5000,
  });

service.interceptors.request.use(
  config => {
      return config;
  },
  error => {
      return Promise.reject(error);
  }

);
//创建相应拦截器
service.interceptors.response.use(
  response => {
      const res = response.data;
      if(res.errno === HttpErrorCode.NOT_LOGIN) {
        store.commit('UserStore/setUser',null)
        gotoLogin()
      }
      return res;
  },
  error => {
      return Promise.reject(error);
  }
);

export default service;