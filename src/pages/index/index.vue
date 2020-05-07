<template>
  <div id="indexContainer">
		<!-- 头部 -->
		<div class="header">
			<img class="logo" src="./images/logo.png"/>
			<div class="searchInput">
				<i class="iconfont icon-sousuo"></i>
				<!-- <input type="text" value="" placeholder="搜索商品"  class="input"/> -->
        <span class="text">搜索商品, 共26223款好物</span>
			</div>
			<div class="btn" >登录</div>
		</div>

    <!-- 导航区域 -->
    <div class="navContainer" ref="navNode">
      <div class="headerNav">
        <div class="navItem activeClass"> 推荐</div>
        <div class="navItem" v-for="(item,index) in navList" :key="index">{{item.text}}</div>
      </div>
    </div>

    <div class="content" ref="contentNode">
      <Recommend></Recommend>
    </div>
	</div>
</template>

<script>
import http from '../../http/index'
import BScroll from 'better-scroll'  
import Recommend from '../../components/recommend/recommend'
export default {
    name:'index',
    data() {
      return {
        navIndex:0,
        navList:[],
        indexData:{}
      }
    },
    components:{
       "Recommend":Recommend
    },
    async mounted() {
      let indexData  = await http.index.getIndexData()
      console.log(indexData)
      this.indexData = indexData
      this.navList = indexData.kingKongModule.kingKongList
      // console.log(this.$refs)
      this.$nextTick(()=>{
          new BScroll(this.$refs.navNode,{
            scrollX:true,
            click: true
          })
          new BScroll(this.$refs.contentNode,{
            // scrollX:true,
            click: true
          })
      })
    },
}
</script>

<style lang="stylus" scoped>
#indexContainer
    overflow auto
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
        width 446px
        background #ededed
        border-radius 10px
        .iconfont 
          position absolute
          left 40px
          top 15px
          font-size 30px
          width 30px
          height 30px
          background-image url(./images/sousuo.webp)
          background-size cover
        .text
          font-size 24px
          line-height 60px
          width 370px
          margin-left 80px
          height 100%
          color #666
      .btn
        font-size 24px
        height 60px
        text-align center
        line-height 60px
        margin 0 10px
        color #b4282d
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        padding 0 10px
        border 2px solid red
        border-radius 10px
        box-sizing  border-box
    .navContainer
      height 60px
      .headerNav
        display inline-flex
        height 100%
        padding 0 30px
        .navItem
          position relative
          white-space nowrap
          font-size 30px
          padding 0 16px
          line-height 60px
          &.activeClass:after
            content ''
            height 2px
            width 100%
            position absolute
            bottom 1px
            left 0
            background #BB2C08	
    .content
      height 1094px
      overflow hidden
      







.text 
  width 10000px
</style>