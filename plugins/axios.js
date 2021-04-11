// 拦截器
import { SnackbarProgrammatic as Snackbar } from 'buefy'
export default ({ app, $axios, redirect, route, store }) => {
  // 基本配置
  $axios.defaults.timeout = 10000

  // 请求时拦截
  $axios.onRequest(
    (config) => {
      // config.header.token = '加token'
      if (store.state.token !== null) {
        config.headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: 'Bearer ' + store.state.token,
        }
      } else {
        config.headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        }
      }
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
      return res
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 错误处理
  $axios.onError((error) => {
    console.error(error)
    // 处理
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

    if (error.response.status === 403) {
      Snackbar.open({
        message: '登录过期, 请重新登录',
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
