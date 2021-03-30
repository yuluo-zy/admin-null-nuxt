/* 插件全局守卫 */

export default ({ app, redirect, params, query, store }) => {
  // // app == vue实例
  // // redirect 跳转函数
  // app.router.beforeEach((to, from, next) => {
  //   // 全局前置守卫 -- 插件
  //   // next(true)/false  next('/login')是错误的 和vue不一样
  //   const token = app.$cookies.get(config.TOKEN_KEY)
  //   console.warn(token)
  //   console.log('插件配置，', to)
  //   if (token !== null && (to.name === 'login' || to.name === 'reg')) {
  //     redirect('/home')
  //   }
  //   next()
  // })
}
