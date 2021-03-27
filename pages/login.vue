<template>
  <section class="hero is-fullheight">
    <div
      class="columns hero-body is-multiline is-vcentered"
      style="width: 100%;"
    >
      <div class="column is-10 is-offset-1 register box">
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
            <div style="padding: 0; margin: 0; position: absolute; bottom: 0;">
              <img
                src="/img/backcolor.png"
                style="position: relative; bottom: -11px;"
              />
            </div>
          </div>
          <login />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import login from '@/components/Login/login'
export default {
  name: 'Login',
  components: {
    login,
  },
  layout(context) {
    return 'login_layout'
  },
}
</script>

<style scoped></style>
