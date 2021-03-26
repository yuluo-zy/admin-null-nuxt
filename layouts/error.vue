<template>
<div>
  <h1 >页面不存在 {{ error.message }}</h1>
  <h1>v-if="error.statusCode"</h1>
</div>
</template>

<script>
export default {
  name: 'error',
  props: ['error']
}
</script>

<style scoped>

</style>
