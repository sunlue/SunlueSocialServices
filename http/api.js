import axios from 'axios';
import config from './config';
import qs from 'qs';
import Cookies from "js-cookie";


export default function $axios(options,opt={}) {
  return new Promise((resolve, reject) => {


    const instance = axios.create({
      baseURL: config.baseURL,
      responseType: opt.rt,
      // headers: {'content-type': 'application/json'},
      headers: {},
      transformResponse: [function (data) {
      }]
    })
    // request 拦截器 带上token等，设置请求头
    instance.interceptors.request.use(
      config => {


        // let token = Cookies.get('markToken') || '';
        // //console.log(token)
        // if(token!=undefined || token!=''){
        //   config.data.access_token=token
        // }



        // 3. 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        if (config.method === 'post') {
          if (config.data.__proto__ === FormData.prototype
            || config.url.endsWith('path')
            || config.url.endsWith('mark')
            || config.url.endsWith('patchs')
          ) {
          } else {
            config.data = qs.stringify(config.data)
          }
        }


        return config
      },

      error => {

        console.log(error)
        // 请求错误时
        //console.log('request:', error)
        // 1. 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          //console.log('timeout请求超时')
          // return service.request(originalRequest);//再重复请求一次
        }
        // 2. 需要重定向到错误页面
        const errorInfo = error.response
        //console.log(errorInfo)
        if (errorInfo) {
          //error =errorInfo.data  //页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
          const errorStatus = errorInfo.status; // 404 403 500 ...
          // 下面可跳转至错误页面

        }
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )

    // response 拦截器 统一错误处理，页面重定向等
    instance.interceptors.response.use(
      response => {

        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = JSON.parse(response.request.responseText)
        } else {
          data = response.data
        }
        // //console.log(data);
        // 根据返回的code值来做不同的处理
        switch (data.code) {
          case 400:
            //参数传递错误的返回
            break;
          case 0:
            //重新登录

            // Cookies.remove('markToken');

          default:
        }

        return data
      },
      err => {
        console.log(err);

        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = '未授权，请登录'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
          }
        }

        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}
