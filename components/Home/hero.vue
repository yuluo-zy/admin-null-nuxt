<template>
  <section class="pb-40 px-32 antialiased bg-white">
    <div class="px-12 mx-auto max-w-7xl">
      <!-- Start Main Content -->
      <div
        class="flex flex-col items-center w-full mt-24 lg:space-x-10 lg:flex-row"
      >
        <div class="relative z-10 w-full space-y-10 lg:w-1/2">
          <h1 class="text-5xl font-bold sm:text-7xl xl:text-8xl">
            Crafting a Better User Experience
          </h1>
          <p class="text-base text-gray-500 sm:text-lg">
            Welcome to the next generation of design. Our templates and
            components have been optimized for maximum conversion, which returns
            happier customers, more sales, and a stronger business.
          </p>
          <div class="flex flex-col items-center w-full space-x-5 lg:flex-row">
            <a
              href="#_"
              class="w-full px-10 py-6 text-xl font-medium text-center text-white bg-yellow-500 shadow-xl xl:px-12 xl:text-2xl lg:w-auto hover:bg-yellow-400 rounded-3xl"
              >Try for free</a
            >
          </div>
        </div>
        <div class="relative z-0 w-full mt-8 lg:w-1/2">
          <img
            src="https://cdn.devdojo.com/images/december2020/drag-drop-hero.png"
            class="transform xl:translate-x-20 lg:ml-0 lg:translate-y-20 lg:scale-125"
          />
        </div>
      </div>
      <!-- End Main Content -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style scoped></style>
