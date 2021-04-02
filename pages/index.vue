<template>
  <div>
    <TwHeaders />
    <br /><br /><br /><br />
    <hero />
    <br /><br /><br />
    <div
      class="wow animate__backInLeft animate__slow"
      data-wow-delay="10ms"
      data-wow-duration="2s"
      data-wow-offset="50"
    >
      <long-mao-features />
    </div>
    <div
      class="wow animate__backInLeft animate__slow"
      data-wow-delay="10ms"
      data-wow-duration="2s"
      data-wow-offset="50"
    >
      <LongMaoVideo />
    </div>
    <div
      class="wow animate__backInLeft animate__slow"
      data-wow-delay="10ms"
      data-wow-duration="2s"
      data-wow-offset="50"
    >
      <LongMaoInfo />
    </div>
    <div
      class="wow animate__backInLeft animate__slow"
      data-wow-delay="10ms"
      data-wow-duration="2s"
      data-wow-offset="50"
    >
      <LongMaoEquipment />
    </div>
    <div
      class="wow animate__backInLeft animate__slow"
      data-wow-delay="10ms"
      data-wow-duration="2s"
      data-wow-offset="50"
    >
      <LongMaoPaper />
    </div>
    <div
      class="wow animate__backInLeft animate__slow"
      data-wow-delay="10ms"
      data-wow-duration="2s"
      data-wow-offset="50"
    >
      <LongMaoFQE />
    </div>
    <TwFootBar />
  </div>
</template>

<script>
import TwHeaders from '~/components/TwHeaders'
import hero from '~/components/Home/hero'
import LongMaoVideo from '~/components/Home/LongMaoVideo'
import TwFootBar from '~/components/TwFootBar'
import LongMaoFeatures from '~/components/Home/LongMaoFeatures'
import LongMaoInfo from '~/components/Home/LongMaoInfo'
import LongMaoEquipment from '~/components/Home/LongMaoEquipment'
import LongMaoPaper from '~/components/Home/LongMaoPaper'
import LongMaoFQE from '~/components/Home/LongMaoFQE'
export default {
  components: {
    TwHeaders,
    hero,
    LongMaoVideo,
    TwFootBar,
    LongMaoFeatures,
    LongMaoInfo,
    LongMaoEquipment,
    LongMaoPaper,
    LongMaoFQE,
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
