<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from 'components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components:{
    "FooterGuide":FooterGuide
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    // height 100%
    overflow auto
</style>
