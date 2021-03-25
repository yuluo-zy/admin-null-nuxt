import axios from 'axios'
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import  myconfig from '~/config/config'
import utils from '~/utils/utils'


// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const service = axios.create({
  baseURL: myconfig.baseUrl,
  timeout: 15000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(config => {
  if (utils.getcookiesInClient()) {
    console.log('开始添加请求头')
    config.headers.Authorization = myconfig.TOKEN_NAME + utils.getcookiesInClient() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非0是抛错 可结合自己业务进行修改
     */
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
  },
  error => {
    console.error('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
