export default {
  /**
   * api 请求路径
   */
  // baseUrl: {
  //   dev: '',
  //   pro: '192.168.8.198:8000/'
  // },
  // baseUrl: 'https://order.espressif.com/api',
  baseUrl: 'http://127.0.0.1:8000/api',
  /**
   * token名称
   */
  TOKEN_KEY: 'token',

  /**
   * token在Cookie中存储的天数，默认半天
   */
  cookieExpires: 0.5,

  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'panel',

  /**
   * token 前缀命名
   */
  TOKEN_NAME: 'Bearer ',
}
