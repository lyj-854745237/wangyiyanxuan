<template>
  <div id="indexContainer">
		<!-- 头部 -->
		<div class="header">
			<img class="logo" src="./images/logo.png" mode="" />
			<div class="searchInput">
				<i class="iconfont icon-sousuo"></i>
				<!-- <input type="text" value="" placeholder="搜索商品"  class="input"/> -->
        <span class="text">搜索商品</span>
			</div>
			<button >登录登录</button>
		</div>
	</div>
</template>

<script>
export default {
    name:'index',
    data() {
      return {
        navIndex:0
      }
    },
}
</script>

<style lang="stylus" scoped>
#indexContainer
    .header 
      display flex
      height 60px
      width 100%
      padding 10px 0
      .logo 
        width 140px
        height 40px
        margin 10px 30px
      .searchInput
        position relative
        height 60px
        width 420px
        background #ededed
        .iconfont 
          position absolute
          left 10px
          top 15px
          font-size 30px
          width 30px
          height 30px
          background-image url(./images/sousuo.webp)
          background-size cover
        .text
          display block
          text-align center
          line-height 60px
          width 370px
          margin-left 50px
          height 100%
          color #333
      button
        font-size 24px
        width 144px
        height 60px
        margin 0 10px
        color #b4282d
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        padding 0 5px
</style>