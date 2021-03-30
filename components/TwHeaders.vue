<template>
  <!-- Section 1 -->
  <section class="w-full px-9 text-gray-700 bg-white body-font">
    <div
      class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
    >
      <a
        href="#_"
        class="animate__animated animate__shakeY flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
      >
        <span
          class="text-xl font-black leading-none text-gray-900 select-none logo"
        >
          龙猫实验室<span class="text-indigo-600">.</span></span
        >
      </a>

      <div class="relative flex flex-col md:flex-row">
        <nav
          class="animate__animated animate__shakeY flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0"
        >
          <a
            href="#_"
            class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900"
            :class="{ animate__animated: hover5, animate__tada: hover5 }"
            @mouseenter="hover5 = true"
            @mouseleave="hover5 = false"
            >材料测试</a
          >
          <a
            href="#_"
            class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900"
            :class="{ animate__animated: hover4, animate__tada: hover4 }"
            @mouseenter="hover4 = true"
            @mouseleave="hover4 = false"
            >科研绘图</a
          >
          <a
            href="#_"
            class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900"
            :class="{ animate__animated: hover3, animate__tada: hover3 }"
            @mouseenter="hover3 = true"
            @mouseleave="hover3 = false"
            >数据分析</a
          >
          <a
            href="#_"
            class="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900"
            :class="{ animate__animated: hover2, animate__tada: hover2 }"
            @mouseenter="hover2 = true"
            @mouseleave="hover2 = false"
            >论文润色</a
          >
          <a
            href="#_"
            class="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900"
            :class="{ animate__animated: hover1, animate__tada: hover1 }"
            @mouseenter="hover1 = true"
            @mouseleave="hover1 = false"
            >需求发布</a
          >
        </nav>
        <div
          class="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end"
        >
          <a
            href="#_"
            class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            :class="{ animate__animated: hover6, animate__tada: hover6 }"
            @mouseenter="hover6 = true"
            @mouseleave="hover6 = false"
          >
            登录
          </a>
          <a
            href="#_"
            class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            :class="{ animate__animated: hover, animate__tada: hover }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
          >
            注册
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TwHeaders',
  data() {
    return {
      hover: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
    }
  },
}
</script>

<style scoped></style>
