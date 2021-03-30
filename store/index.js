import config from '~/config/config'

export const state = () => ({
  /* User */
  userName: null,
  userEmail: null,
  userAvatar: null,
  userPhone: null,

  userInfo: null,

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

  setToken(state, token) {
    state.token = token
  },
  setLogoutToken(state, { app: { $cookies } }) {
    state.token = null
    $cookies.remove(config.TOKEN_KEY)
  },
  setUserInfo(state, res) {
    state.userInfo = res
    if (res.name) {
      state.userName = res.name ? res.name : res.username
    }
    if (res.email) {
      state.userEmail = res.email
    }
    if (res.phone) {
      state.userPhone = res.phone
    }
  },
}
export const actions = {
  nuxtServerInit(store, { app: { $cookies } }) {
    const token = $cookies.get(config.TOKEN_KEY)
      ? $cookies.get(config.TOKEN_KEY)
      : null
    store.commit('setToken', token)
  },

  getUser(store, { app: { $axios } }) {
    $axios({
      url: '/api/users/me',
      method: 'get',
    }).then((res) => {
      store.commit('setUserInfo', res)
    })
  },
}

export const getters = {
  getToken(state, { app: { $cookies } }) {
    return state.token ? state.token : $cookies.get(config.TOKEN_KEY)
  },
}
