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
        <div class="navItem" > 推荐</div>
        <div class="navItem" v-for="(item,index) in navList" :key="index">{{item.text}}</div>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
              <img :src="item.picUrl" alt="">
            </div> -->
            <div class="swiper-slide" >
              <img src="https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
             <div class="swiper-slide" >
              <img src="https://yanxuan.nosdn.127.net/efe5bb71fd6787d9c5f5b051eb607666.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
             <div class="swiper-slide" >
              <img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
             <div class="swiper-slide" >
              <img src="https://yanxuan.nosdn.127.net/a16ac18c02bb26755dbcac1911631aa0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
             <div class="swiper-slide" >
              <img src="http://yanxuan-miaobi.nos-jd.163yun.com/1685001_1_1_wap_9944f32cae294bd124b5bd8ebf371fc4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
	</div>
</template>

<script>
import http from '../../http/index'
import BScroll from 'better-scroll'
import { Swipe, SwipeItem } from 'vant';
import Swiper from 'swiper';    
export default {
    name:'index',
    data() {
      return {
        navIndex:0,
        navList:[],
        swiperList:[]
      }
    },
    components:{
       [Swipe.name]:Swipe,
       [SwipeItem.name]:SwipeItem
    },
    async mounted() {
      let indexData  = await http.index.getIndexData()
      console.log(indexData)
      this.navList = indexData.kingKongModule.kingKongList
      this.swiperList = indexData.focusList
      // console.log(this.$refs)
      this.$nextTick(()=>{
          new BScroll(this.$refs.navNode,{
            scrollX:true
          })
      })
      let mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
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
      .headerNav
        display inline-flex
        height 100%
        .navItem
          white-space nowrap
          font-size 30px
          padding 0 16px
          line-height 60px
    .swiper-container
      height 296px
      width 100%
      .swiper-wrapper
        height 296px
        display inline-flex
        .swiper-slide
          width 750px
          height 100%
          img 
            width 100%
            height 100%
      .swiper-pagination
        height 20px
          









.text 
  width 10000px
</style>