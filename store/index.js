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

  /**
   * 登录并进行用户信息初始化
   * @param commit
   * @param userName
   * @param password
   * @returns {Promise<unknown>}
   */
  handleLogin ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      }).then(res => {
        res = res.data
        commit('setTokens', res.token)
        console.error("uydeuwsytfeydws")
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  handleLogOut ({ commit }) {
    commit('setTokens', '')
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


