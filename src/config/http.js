import Vue from "vue";
import axios from "axios";

//全局使用axios
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://elm.cangdu.org";
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 统一Get请求
export function get(url, params) {
  return http(url, params, "GET");
}

//统一POST（json）请求
export function post(url, params) {
  return http(url, params, "POST");
}

const http = (url, params, method) => {
  let reqConfig = {
    method: method,
    url: url
  };
  if ("POST" == method.toLocaleUpperCase()) {
    reqConfig.data = params;
  } else {
    reqConfig.params = params;
  }
  return new Promise((resolve, reject) => {
    axios(reqConfig)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
};
