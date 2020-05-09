<template>
  <div class="categorys"  v-if="cateObj">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in cateObj.category.bannerUrlList" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 标题 -->
    <div class="titleWrap">
      <span class="title">{{cateObj.category.name}}</span>
		  <span class="desc">{{cateObj.category.frontDesc}}</span>
    </div>
    
    <ShopList :shopList="cateObj.itemList"></ShopList>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import http from '../../http/index'
import ShopList from '../../components/shopList/shopList'
export default {
    props : ["navIndex"],
    data() {
      return {
        cateList:[]
      }
    },
    async mounted() {
        this.cateList = await http.index.getIndexCateListData()
    },
    components:{
       [Swipe.name]:Swipe,
       [SwipeItem.name]:SwipeItem,
       "ShopList":ShopList
    },
    computed: {
      cateObj(){
				return this.cateList.find((item)=>item.category.parentId === this.navIndex)
			}
    },
}
</script>

<style lang="stylus" scoped>
.categorys
  background #eee
  .my-swipe
    .van-swipe-item
      img
        width 100%
        height 370px
  .titleWrap
    height 120px
    background #fff
    margin-top 10px
    .title
        display  block 
        text-align  center 
        font-size  32px
        color  #333 
        line-height  70px
    .desc
      display block
      text-align center
      font-size 24px
      color #999
      line-height 40px
</style>