<template>
  <div>
    <TwHeaders />
    <hero />
    <br /><br /><br />
    <div
      class="wow animate__backInLeft animate__slow"
      data-wow-delay="10ms"
      data-wow-duration="3s"
      data-wow-offset="50"
    >
      <LongMaoVideo />
    </div>
    <hero />
    <hero />
    <hero />
    <hero />
    <hero />
    <TwFootBar />
  </div>
</template>

<script>
import TwHeaders from '~/components/TwHeaders'
import hero from '~/components/Home/hero'
import LongMaoVideo from '~/components/Home/LongMaoVideo'
import TwFootBar from '~/components/TwFootBar'

export default {
  components: {
    TwHeaders,
    hero,
    LongMaoVideo,
    TwFootBar,
  },
  mounted() {
    // eslint-disable-next-line no-undef
    const wow = new WOW({
      live: false,
    })
    wow.init()
  },
}
</script>
