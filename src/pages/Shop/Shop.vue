<template>

 <section>
   <ShopHeader/>
   <div class="tab">
     <div class="tab-item">
       <!-- 这里再切换路由的时候会有push 因此点击头部返回按钮时候 一直在这几个路由之间轮换
       所以加上replace使得该页面点击返回后可以直接到商品列表 -->
       <router-link to="/shop/goods" replace>点餐</router-link>
     </div>
     <div class="tab-item">
       <router-link to="/shop/ratings" replace>评价</router-link>
     </div>
     <div class="tab-item">
       <router-link to="/shop/info" replace>商家</router-link>
     </div>
   </div>
   <keep-alive>
    <router-view></router-view>
   </keep-alive>
 </section>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader'
export default {
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  components: {
    ShopHeader
  }
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
 @import "../../common/stylus/mixins.stylus"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 50px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
