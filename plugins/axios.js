// 拦截器
import { SnackbarProgrammatic as Snackbar } from 'buefy'
export default ({ app, $axios, redirect, route, store }) => {
  // 基本配置
  $axios.defaults.timeout = 10000

  // 请求时拦截
  $axios.onRequest(
    (config) => {
      console.log('发送请求时的拦截')
      // config.header.token = '加token'
      config.headers.token = 'Bearer ' + store.state.token
      return config
    },
    (error) => {
      // do something with request error
      return Promise.reject(error)
    }
  )

  // 响应拦截
  $axios.onResponse(
    (res) => {
      console.log('响应时的拦截')
      console.warn(res.data)
      // TODO 逻辑 错误弹窗, 失效重定向
      // if (res.data.err === 2 && route.fullPath !== '/login') {
      //   redirect('/login?path=' + route.fullPath)
      // }
      return res.data
    },
    (error) => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )

  // 错误处理
  $axios.onError((error) => {
    // 处理
    console.warn('请求异常')
    if (error.response.status === 401) {
      Snackbar.open({
        message: '无权限访问 或 登录过期, 请重新登录',
        actionText: 'Relogin',
        duration: 3000,
        type: 'is-danger',
        position: 'is-top-right',
        queue: false,
      })
      store.commit('setLogoutToken', { app })
      return error
    }
  })
}
