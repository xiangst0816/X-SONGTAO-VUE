<template>
  <div class="ui modal">
    <div class="image content">
      <img :src="socialImgUrl">
    </div>
  </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      socialImgUrl: state=>state.socialImgUrl
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
