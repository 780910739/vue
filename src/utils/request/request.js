import toast from './../js/toast';
import service from './services';
import router from './../../router';
import {Tools} from './../js/tool';
import HTTP_CONSTANT from './httpCons';
import qs from "qs";

export function HTTP_POST({url, json = {}, options = {}}) {
  return new Promise((resolve, reject) => {
    service.post(url, qs.stringify(json), options)
      .then((data) => successProcessFunc(data, resolve, reject, options.onSuccess, options.onFailure, options.isToast), (data) => failProcessFunc(data, options.onTimeout))
      .catch(errorProcessFunc)
  })
}

export function HTTP_GET({url, json = {}, options = {}}) {
  return new Promise((resolve, reject) => {
    service.get(url,Object.assign({params: json}, options))
      .then((data) => successProcessFunc(data, resolve, reject, options.onSuccess, options.onFailure), (data) => failProcessFunc(data, options.onTimeout))
      .catch(errorProcessFunc)
  })
}

function errorProcessFunc(data) {
  toast(JSON.stringify(data));
}

function successProcessFunc(data, resolve, reject, successCallback, failureCallback, isToast = true) {
  let returnData;
  if (!Tools.data.check.isEmpty(data) && !Tools.data.check.isEmpty(data.data)) {
    if (!Tools.data.check.isEmpty(data.data.errCode) || !Tools.data.check.isEmpty(data.data.code)) {
      returnData = data.data;
      if (data.data.errCode === "0000" || data.data.code === "0000") {
        if (isFunction(successCallback)) {
          returnData = successCallback(data.data) || data.data;
        }
        resolve(returnData)
      } else if (data.data.errCode === "9998") {
        // session超时
        router.push("login");
      } else {
        if (isFunction(failureCallback)) {
          returnData = failureCallback(data.data) || data.data;
        } else {
          if (isToast) {
            toast(data.data.errInfo);
          }
        }
        reject(returnData);
      }
    }
  } else {
    if (!Tools.data.check.isEmpty(data.dataText)) {
      toast(data.dataText);
    } else {
      toast(HTTP_CONSTANT.ERROR_INFO.HTTP_FETCH_ONCALLBACK_RESPONSE_DATA_NULL);
    }
  }
}

function failProcessFunc(data, timeoutProcessFunc = defaultTimeoutFunc) {
  // console.log("失败回调===》")
  console.log(data)


  var errorInfo = data.statusText || HTTP_CONSTANT.ERROR_INFO.HTTP_FETCH_ONCALLBACK_RESPONSE_ERROR;
  if (data.status === 408) {
    timeoutProcessFunc(data);
  } else if (data.status === 666) {
    toast(errorInfo);
  } else {
    toast(errorInfo + "(" + data.status + ")");
  }
}

function nothingFunc(data) {

}

function defaultErrorFunc(data) {
  var errInfo = data.errInfo || HTTP_CONSTANT.ERROR_INFO.HTTP_FETCH_ONCALLBACK_RESPONSE_ERROR;
  toast(errInfo);
}

function defaultTimeoutFunc(data) {
  var errInfo = data.statusText ? data.statusText + "(" + data.status + ")" : HTTP_CONSTANT.ERROR_INFO.HTTP_FETCH_ONCALLBACK_RESPONSE_TIMEOUT;
  toast(errInfo);
}

function isFunction(func) {
  return Object.prototype.toString.call(func) === "[object Function]";
}

