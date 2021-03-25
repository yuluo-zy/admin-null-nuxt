import Cookie from 'js-cookie'
import config from '~/config/config'
export default {
  //获取服务端cookie
  getcookiesInServer(req) {
    let service_cookie = {}
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function(val) {
      let parts = val.split('=')
      service_cookie[parts[0].trim()] = (parts[1] || '').trim()
    })
    return service_cookie
  },
  //获取客户端cookie
  getcookiesInClient() {

    return Cookie.get(config.TOKEN_KEY) ? Cookie.get(config.TOKEN_KEY) : ''
  }
}
