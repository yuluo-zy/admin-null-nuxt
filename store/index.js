import { login } from '~/api/user'
import cookies from "js-cookie";
import config from '~/config/config'
import utils from '~/utils/utils'

export const state = () => ({
  /* User */
  userName: null,
  userEmail: null,
  userAvatar: null,

  /* NavBar */
  isNavBarVisible: true,

  /* FooterBar */
  isFooterBarVisible: true,

  /* Aside */
  isAsideVisible: true,
  isAsideMobileExpanded: false,

  /* Dark mode */
  isDarkModeActive: false,
  token: null,
})

export const mutations = {
  /* A fit-them-all commit */
  basic(state, payload) {
    state[payload.key] = payload.value
  },

  /* User */
  user(state, payload) {
    if (payload.name) {
      state.userName = payload.name
    }
    if (payload.email) {
      state.userEmail = payload.email
    }
    if (payload.avatar) {
      state.userAvatar = payload.avatar
    }
  },

  /* Aside Mobile */
  asideMobileStateToggle(state, payload = null) {
    const htmlClassName = 'has-aside-mobile-expanded'

    let isShow

    if (payload !== null) {
      isShow = payload
    } else {
      isShow = !state.isAsideMobileExpanded
    }

    if (isShow) {
      document.documentElement.classList.add(htmlClassName)
    } else {
      document.documentElement.classList.remove(htmlClassName)
    }

    state.isAsideMobileExpanded = isShow
  },

  /* Dark Mode */
  darkModeToggle(state, payload = null) {
    const htmlClassName = 'is-dark-mode-active'

    state.isDarkModeActive = !state.isDarkModeActive

    if (state.isDarkModeActive) {
      document.documentElement.classList.add(htmlClassName)
    } else {
      document.documentElement.classList.remove(htmlClassName)
    }
  },
  setTokens (state, token) {
    state.token = token
    cookies.set(config.TOKEN_NAME, {
      avatar: value.avatar,
      // create_time: value.create_time,
      mobile: value.mobile,
      user_id: value.user_id,
      username: value.username
    });
  },
}
export const actions= {
  nuxtServerInit(store, { app: { $cookies } }) {
    // 初始化东西到store里 token信息
    // console.log('nuxtServerInit', store, context)
    console.log('nuxtServerInit')
    let user = $cookies.get('user') ? $cookies.get('user') : {err:2, msg: '未登录', token: ''}
    store.commit('users/M_UPDATE_USER', user)
  }
}

export const getters = {
  getUserToken: (state) => () => {
    if (state.token === null || state.token === '') {
      console.log('jkhkj')
      state.token = utils.getcookiesInClient()
    }
    return state.token
  },
}


