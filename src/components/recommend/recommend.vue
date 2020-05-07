<template>
<div id="recommendContainer">
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

    <!-- 三个小图 -->
    <div class='policyDescList'>
        <div class='policyDescItem' v-for='(item, index) in indexData.policyDescList' :key='index'>
            <img :src="item.icon" />
            <span>{{item.desc}}</span>
        </div>
    </div>

    <!-- 十个小图 -->
    <div class="kingkongList" v-if="indexData.kingKongModule">
      <div class="kingkongItem" v-for='(item, index) in indexData.kingKongModule.kingKongList' :key='index'>
        <img :src="item.picUrl" alt="" />
        <span>{{item.text}}</span>
      </div>
    </div>

    <!-- 大图 -->
    <div class="bigPromotionModule">
      <a href="javascript:;"></a>
    </div>

    <CateList></CateList>

</div>
</template>

<script>
import CateList from '../cateList/cateList'
import http from '../../http/index'
import Swiper from 'swiper';    
export default {
    name:'recommend',
    data() {
      return {
        indexData:{}
      }
    },
    components:{
       "CateList":CateList
    },
    async mounted() {
      let indexData  = await http.index.getIndexData()
      console.log(indexData)
      this.indexData = indexData
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
#recommendContainer
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
    .policyDescList
      display flex
      .policyDescItem
        flex 1
        text-align center
        line-height 72px
        img 
          width 32px
          height 32px
          vertical-align middle
          margin-right 6px
        span 	
          font-size 24px
          vertical-align middle
    .kingkongList
      display flex
      flex-wrap wrap
      margin 20px 0
      .kingkongItem
        width 20%
        display flex
        flex-direction column
        align-items center
        margin-bottom  10px
        img 
          width 110px
          height 110px
        span 
          color #333
          font-size 24px
          line-height 50px
    .bigPromotionModule
      a
        background-image url('./images/big.gif')
        background-size 100% 100%
        display block
        width 100%
        height 240px

</style>