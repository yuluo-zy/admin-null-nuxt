<template>
  <section class="w-full py-24 mx-auto bg-white">
    <div class="max-w-5xl px-12 mx-auto xl:px-12">
      <h1 class="mb-12 text-xl font-bold text-left md:text-3xl md:text-center">
        <font style="vertical-align: inherit;"
          ><font style="vertical-align: inherit;">经常问的问题</font></font
        >
      </h1>
      <div
        class="flex items-start justify-start mb-12"
        v-for="item in problemInfo"
        :key="item.id"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="flex-none w-6 h-6 mr-4 text-gray-700"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <p class="mt-0 mb-3 font-semibold text-gray-900">
            <font style="vertical-align: inherit;"
              ><font style="vertical-align: inherit;">{{
                item.test
              }}</font></font
            >
          </p>
          <p class="text-gray-600">
            <font style="vertical-align: inherit;"
              ><font style="vertical-align: inherit;"
                >{{ item.context }}
              </font></font
            >
          </p>
        </div>
      </div>
      <div class="flex w-full text-center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/CSS_FAQ"
          target="_blank"
          class="flex items-center px-4 py-2 mx-auto text-gray-500 bg-gray-100 rounded-lg hover:text-gray-700 hover:bg-gray-200"
        >
          <span
            ><font style="vertical-align: inherit;"
              ><font style="vertical-align: inherit;">查看所有问题</font></font
            ></span
          >
          <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-3">
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LongMaoFQE',
  props: {
    problemInfo: Array,
  },
}
</script>

<style scoped></style>
