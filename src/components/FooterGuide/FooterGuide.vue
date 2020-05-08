<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" @click="goto('/Index')" :class="{on:$route.path===`/Index`}">
      <div class="tab">
        <i class="index" :class="{on:$route.path===`/Index`}"></i>
        <div>首页</div>
      </div>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/CateList`)" :class="{on:$route.path===`/CateList`}">
      <div class="tab">
        <i class="cate" :class="{on:$route.path===`/CateList`}"></i>
         <div>分类</div>
      </div>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Topic`)" :class="{on:$route.path===`/Topic`}">
      <div class="tab">
        <i class="topic" :class="{on:$route.path===`/Topic`}"></i>
        <div>值得买</div>
      </div>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Cart`)" :class="{on:$route.path===`/Cart`}">
      <div class="tab">
        <i class="cart" :class="{on:$route.path===`/Cart`}"></i>
        <div>购物车</div>
      </div>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Personal`)" :class="{on:$route.path===`/Personal`}">
      <div class="tab">
        <i class="my" :class="{on:$route.path===`/Personal`}"></i>
        <div>个人</div>
      </div>
    </a>
  </footer>
</template>

<script>
export default {
  name: "FooterGuide",
  methods:{
    goto(path){
        this.$router.replace(path)
    }
  }
};
</script>

<style scoped lang="stylus"rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
.footer_guide
    one-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom -2px
    background-color #fff
    width 100%
    height 98px
    display flex
    border-top 1px solid #ccc
    .guide_item
        display flex
        width 20%
        text-align center
        flex-direction column
        align-items center
        margin 5px
        color #666
        &.on
          color #DD1A21
        .tab
            div
              font-size 24px
              text-align center
            i
              display block
              width 40px
              height 40px
              margin 5px auto
              background-size 40px 40px
            .index
                background-image url('./images/tab-home.png')
                &.on
                  background-image url('./images/tab-home-current.png')
            .cate
                background-image url('./images/tab-cate.png')
                &.on
                  background-image url('./images/tab-cate-current.png')
            .topic
                background-image url('./images/bg.webp')
                background-size cover
                background-position  0px -350px
                &.on
                  // background-image url('./images/bg.webp')
                  // background-size cover
                  background-position  0px -300px
            .cart
                background-image url('./images/tab-cart.png') 
                &.on
                  background-image url('./images/tab-cart-current.png') 
            .my
                background-image url('./images/tab-my.png') 
                &.on
                  background-image url('./images/tab-my-current.png') 

</style>
