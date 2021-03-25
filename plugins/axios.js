import { SnackbarProgrammatic as Snackbar } from 'buefy'
import {config as myconfig} from '~/config/config'
export default function({store, route, redirect, $axios}){
  $axios.onRequest(config=>{
    console.log("Making request to"+config.url)
    //从本地获取token
    let token = localStorage.getItem("token")
    //如果token不为空，将token放入请求中
    if(token){
      config.headers.authorization = token
    }
    return config
  })

  $axios.onRequest(config => {
    console.log("请求拦截器")
    if (process.client) {
      // 用户端
      if (store.getters['getUserToken']()) {
        console.log('开始添加请求头')
        config.headers.Authorization = myconfig.TOKEN_NAME + getcookiesInClient() // 让每个请求携带自定义token 请根据实际情况自行修改
      }
    }

    if (process.server) {
      // 服务端
      if (store.getters['user/getUserToken']()) {
        console.log('开始添加请求头')
        config.headers.Authorization = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
      }
    }
    return config
  }, error => {
    console.log(error) // for debug
    Promise.reject(error)
  })

  $axios.onResponse(response => {
    // console.log('响应拦截器：', response)
    if (response.data instanceof Blob) {
      return response
    }
    const res = response.data
    if (res.code !== 0) {
      // 1004000:登录过期;
      if (res.code === 1004000) {
        console.error('已失效')
        Snackbar.open({
          message: '你已被登出，可以取消继续留在该页面，或者重新登录',
          actionText: 'Relogin',
          duration: 50000,
          type: 'is-danger',
          position: 'is-top-right',
          queue: false,
          onAction: () => {
            store.dispatch('user/handleLogOut').then(() => { // 登出
              clearToken()
              console.error('已清除')
              location.reload()// 为了重新实例化vue-router对象 避免bug
            })
          }
        })
      } else {
        Snackbar.open({
          duration: 5000,
          message: res.message,
          type: 'is-danger',
          position: 'is-top-right',
          actionText: 'Retry',
          queue: false
        })
      }
    } else {
      return response.data
    }
  })

  $axios.onError(error => {
    // console.log('响应异常')
    const code = parseInt(error.response&&error.response.status)
    if(code===400){
      redirect('/400')
    }
  })
}
