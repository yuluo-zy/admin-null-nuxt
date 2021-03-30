<template>
  <div class="column right has-text-centered box">
    <br />
    <br />
    <h1 class="title is-4">Sign in today</h1>
    <br />
    <br />
    <p class="description is-size-6">hh</p>
    <br /><br />
    <form>
      <div class="field self_mid" style="max-width: 70%;">
        <div class="control">
          <input
            v-model="userName"
            class="input is-medium"
            type="text"
            placeholder="手机号"
          />
        </div>
      </div>
      <br />
      <br />

      <div class="field self_mid" style="max-width: 70%;">
        <div class="control">
          <input
            v-model="password"
            class="input is-medium"
            type="password"
            placeholder="密码"
          />
        </div>
      </div>
      <br /><br />
      <b-button
        class="button is-block is-primary is-fullwidth is-medium self_mid animated rubberBand"
        style="max-width: 70%;"
        @click="login()"
      >
        Submit
      </b-button>
      <br />
    </form>
  </div>
</template>

<script>
// import { SnackbarProgrammatic as Snackbar } from 'buefy'
import config from '~/config/config'
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    // 登录的方法
    login() {
      this.$axios({
        url: '/api/token/',
        method: 'post',
        data: {
          username: this.userName,
          password: this.password,
        },
      }).then((res) => {
        this.$cookies.set(config.TOKEN_KEY, res.access)
        this.$store.commit('setToken', res.access)
        if (
          !this.$route.query.path ||
          /login|reg/.test(this.$route.query.path)
        ) {
          this.$router.replace('/home')
        } else {
          this.$router.replace(this.$route.query.path)
        }
      })
      // eslint-disable-next-line handle-callback-err
      // .catch((error) => {
      //   Snackbar.open({
      //     message: '账户或密码不正确,请重新登录',
      //     actionText: 'Relogin',
      //     duration: 3000,
      //     type: 'is-danger',
      //     position: 'is-top-right',
      //     queue: false,
      //   })
      // })
    },
  },
}
</script>

<style scoped>
.self_mid {
  margin: 0 auto;
}
</style>
