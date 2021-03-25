<template>
  <div class="column right has-text-centered box">
    <br>
    <br>
    <h1 class="title is-4">Sign in today</h1>
    <br>
    <br>
    <p class="description is-size-6">欢迎使用自动化订单管理系统</p>
    <br><br>
    <form>
      <div class="field self_mid" style='max-width: 70%'>
        <div class="control">
          <input
            v-model="userName"
            class="input is-medium"
            type="text"
            placeholder="Email"
          />
        </div>
      </div>
      <br>
      <br>

      <div class="field self_mid" style='max-width: 70%'>
        <div class="control">
          <input
            v-model="password"
            class="input is-medium"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <br><br>
      <button
        class="button is-block is-primary is-fullwidth is-medium self_mid animated rubberBand"
        @click="login"
        style='max-width: 70%'
      >
        Submit
      </button>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      redirectURL:'/'
    }
  },
  mounted() {
    // 初始化路由
    let rediretUrl = this.$route.query.ref
    if (rediretUrl) {
      this.redirectURL = rediretUrl
    }
  },
  methods:{
    // 登录的方法
    handleLogin() {
      post(login, { phone: 15555429216, password: 123456 })
        .then(res => {
          if (res.status === 200) {
            Cookie.set('token',res.token)
            this.$router.push('/afterLogin')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.self_mid {
  margin:0 auto;
}
</style>
