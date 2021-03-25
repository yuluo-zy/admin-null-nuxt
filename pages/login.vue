<template>
  <section class="hero is-fullheight">
    <div
      class="columns hero-body is-multiline is-vcentered"
      style="width: 100%;"
    >
      <div
        class="column is-10 is-offset-1 register box"
      >
        <div class="columns">
          <div
            class="column left is-7"
            style="
              padding-bottom: 0;
              padding-left: 0;
              padding-right: 0;
              position: relative;
            "
          >
            <div style="padding-left: 3rem;">
              <img
                src="/img/logo-black.svg"
                alt="乐鑫 订单自动化管理系统"
                style="width: 25rem; height: 7rem;"
              />
              <h2 class="subtitle colored is-4" style="margin-left: 3rem;">
                Chip Order generation system
              </h2>
              <br /><br />
            </div>
            <div
              style="padding: 0; margin: 0; position: absolute; bottom: 0;"
            >
              <img
                src="/img/backcolor.png"
                style="position: relative; bottom: -11px;"
              />
            </div>
          </div>
          <div class="column right has-text-centered box">
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
                class="button is-block is-primary is-fullwidth is-medium self_mid"
                @click="login"
                style='max-width: 70%'
              >
                Submit
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  layout(context) {
    return "login_layout";
  },
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      // console.log(this.userName, this.password)
      // this['user/handleLogin']({
      //   userName: this.userName,
      //   password: this.password,
      // }).then((res) => {
      //   this.$router.push({
      //     name: this.$config.homeName,
      //   })
      // })
    },
  },
};
</script>

<style scoped>
.self_mid {
  margin:0 auto;
}
</style>
