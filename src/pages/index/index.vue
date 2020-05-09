<template>
  <div id="indexContainer">
		<!-- 头部 -->
		<div class="header">
			<img class="logo" src="./images/logo.png"/>
			<div class="searchInput"   @click="$router.replace('/Search')">
				<i class="iconfont icon-sousuo"></i>
				<!-- <input type="text" value="" placeholder="搜索商品"  class="input"/> -->
        <span class="text">搜索商品, 共26223款好物</span>
			</div>
			<div class="btn" >登录</div>
		</div>

    <!-- 导航区域 -->
    <div class="navContainer" ref="navNode">
      <div class="headerNav" >
        <div 
          class="navItem" 
          @click="changeNavId(0,0)"
          :class="{activeClass: navId === 0}"
        > 推荐</div>
        <div class="navItem" 
             v-for="(item,index) in navList" 
             :key="index"
             @click="changeNavId((index+1),item.L1Id)"
             :class="{activeClass: navId === (index+1)}"
        >{{item.text}}</div>
      </div>
    </div>

    <div class="content" ref="contentNode">
      <Recommend v-if="navId === 0"></Recommend>
      <CateGorys v-else :navIndex = 'navIndex' :indexData = 'indexData'></CateGorys>
    </div>
	</div>
</template>

<script>
import http from '../../http/index'
import BScroll from 'better-scroll'  
import Recommend from '../../components/recommend/recommend'
import CateGorys from '../../components/cateGorys/cateGorys'
export default {
    name:'index',
    data() {
      return {
        navId:0,
        navIndex:0,
        navList:[],
        indexData:{}
      }
    },
    components:{
       "Recommend":Recommend,
       "CateGorys":CateGorys
    },
    methods: {
      changeNavId(navId, navIndex){
        (navId !== this.navId) && (this.navId = navId, this.navIndex = navIndex)

        // let targetLi = this.$refs.nav && this.$refs.nav.children[navId];
        // this.wrap && this.wrap.scrollToElement(targetLi,300)


        this.wrap && this.wrap.scrollToElement(`.headerNav > .navItem:nth-of-type(${navId})`,300)
			},
    },
    async mounted() {
      let indexData  = await http.index.getIndexData()
      // console.log(indexData)
      this.indexData = indexData
      this.navList = indexData.kingKongModule.kingKongList
      // console.log(this.$refs)
      this.$nextTick(()=>{
       this.wrap = new BScroll(this.$refs.navNode,{
            scrollX:true,
            click: true
          })
      })
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
      overflow hidden
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
      overflow auto







.text 
  width 10000px
</style>