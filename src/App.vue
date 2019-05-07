<template>
  <div id="app">
    <router-view></router-view>
    <!-- $route当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter === true"/>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import { mapActions } from 'vuex'
export default {
  mounted () {
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },
  components: {
    FooterGuide
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>
