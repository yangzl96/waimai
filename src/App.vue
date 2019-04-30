<template>
  <div id="app">
    <router-view></router-view>
    <!-- $route当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter !== false"/>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>
