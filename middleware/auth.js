import utils from '../utils/utils'
import config from '~/config/config'
export default function ({ route, req, res, redirect }) {
  let isClient = process.client;
  let isServer = process.server;
  let redirectURL = '/login';
  var token, path
  // console.log(req);
  // console.log(isClient,isServer);
  //在服务端
  if (isServer) {
    let cookies = utils.getcookiesInServer(req)
    path = req.originalUrl;
    token = cookies.token || ''
  }
  //在客户端判读是否需要登陆
  if (isClient) {
    token = utils.getcookiesInClient()
    path = route.path;
  }
  if (path) {
    redirectURL = '/login?ref=' + encodeURIComponent(path)
  }
  //需要进行权限判断的页面开头
  if (!token) {
    redirect(redirectURL)
  }
}
