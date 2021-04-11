<template>
  <section class="text-gray-600 body-font py-16" v-if="testInfo != null">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            热门 测试
          </h1>
          <div class="h-1 w-20 bg-yellow-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          龙猫实验室支持多种测试项目, 助力你完成实验完整流程.
          龙猫实验室支持多种测试项目, 助力你完成实验完整流程.
          龙猫实验室支持多种测试项目, 助力你完成实验完整流程.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="xl:w-1/4 md:w-1/2 p-4"
          v-for="item in testInfo"
          :key="item.id"
        >
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              :src="item.image"
              alt="content"
            />

            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              {{ item.title }}
            </h2>
            <br />
            <h3
              class="tracking-widest text-yellow-500 text-xs font-medium title-font"
            >
              测试次数: {{ item.testNumber }}
            </h3>
            <h3
              class="tracking-widest text-yellow-500 text-xs font-medium title-font"
            >
              平均天数: {{ item.averageDays }}
            </h3>
            <p class="leading-relaxed text-base">
              {{ item.satisfaction }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LongMaoEquipment',

  props: {
    testInfo: Array,
  },
  data() {
    return {
      info: null,
    }
  },
}
</script>

<style scoped></style>
