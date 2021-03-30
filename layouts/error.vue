<template>
  <div id="app">
    <h1>页面不存在 {{ error.message }}</h1>
    <h1>{{ error.statusCode }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>

<style scoped></style>
