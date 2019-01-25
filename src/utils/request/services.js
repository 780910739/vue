import axios from 'axios'
import { HOSTS } from './global'

import Loading from './../js/loading';

const loading = new Loading();
// 设置请求初始值
const service = axios.create({
  baseURL: HOSTS.REQUEST_HOST,
  timeout:5000, // 设置超时时间
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'} // 默认请求头
})

// request 请求拦截器
service.interceptors.request.use(
  request => {
    // console.log(request)
    // request.baseURL="./"
    // request.headers={'Content-Type': 'application/json;charset=UTF-8'}
    // console.log(request.host)
    request.withCredentials = true; //请求带上cookie 相关信息

    if (!request.hideLoading) {
      loading.show();
    }
    if (!navigator.onLine) {//关掉网络
      let errData = {};
      errData.status = 666;
      errData.statusText = "网络连接失败";
      return Promise.reject(errData)
    }
    return request

  }, error => {
    return Promise.reject(error)
  }
)

// response 响应拦截器
service.interceptors.response.use(
  response => {
    loading.hide();
    return response
  },
  error => {
    loading.hide();
    //请求超时
    if (error.toString().indexOf("timeout") != -1 || (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1)) {
      let timeOutData = {};
      timeOutData.status = 408;
      return Promise.reject(timeOutData)
    }
    return Promise.reject(error)
  }
)

export default service
