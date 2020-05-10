<template>
    <div class="topicContainer">
        <!-- 头部 -->
        <div class="topicHeader">
            <div class="left">
                <i class="iconfont icon-home"></i>
            </div>
            <div class="center">
                <span class="title">值得买</span>
            </div>
            <div class="right">
                <i class="iconfont icon-cc-search"></i>
                <i class="iconfont icon-cart"></i>
            </div>
        </div>

        <!-- 轮播图 -->
        <div class="swiperContainer">
            <div class="swiper-title">
                <img class="logo" src="./images/topic_logo.png" alt="">
                <div class="text">严选好物 用心生活</div>
                <img class="bg" src="./images/topic_title_bg.png" alt="">
            </div>
            <div class="swipertap">
                <!-- <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in navList" :key="index">
                            <div class="img">
                                <img :src="item.picUrl" alt="">
                            </div>
                            <div class="detail">
                                <span>{{item.mainTitle}}</span>
                                <span>{{item.viceTitle}}</span>
                            </div>
                        </div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                    </div>
                   
                    <div class="swiper-pagination"></div>
                </div> -->
                <div class="swiper-slide" v-for="(item,index) in navList" :key="index">
                    <div class="img">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="detail">
                        <span>{{item.mainTitle}}</span>
                        <span>{{item.viceTitle}}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 瀑布流 -->
        <div class="water">
            <div class="container-water-fall">
                <waterfall :col='col' :data="initData"  @loadmore="loadmore"  :lineGap="0">
                    <div class="cell-item" v-for="(item,index) in initData" :key="index">
                        <div v-for="(Iitem,index) in item.topics" :key="index" class="item">
                            <img :src="Iitem.newAppBanner?Iitem.newAppBanner:Iitem.picUrl" class="banner">
                            <div class="item-body">
                                <p>{{Iitem.title}}</p>
                                <div class="desc">
                                    <img :src="Iitem.avatar"   class="avatar">
                                    <p>{{Iitem.nickname}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </waterfall>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import http from '../../http/index'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import waterfall from 'vue-waterfall2'
export default {
    metaInfo:{
        meta:[
            {chartset:'utf-8'},
            {name:'viewport',content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'}
        ]
    },
    data() {
        return {
            navList:[],
            initData:[],
            col:2,
        }
    },
    components: {
        Waterfall,
        WaterfallSlot
    },
    methods: {
        scroll(scrollData){
            console.log(scrollData)
        },
        switchCol(col){
            this.col = col
            console.log(this.col)
        },
	      loadmore(index){
	            this.data = this.data.concat(this.data)
	      }
    },
    async mounted() {
        var mySwiper = new Swiper ('.swiper-container', {
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                // type : 'custom'
            },
        }) 
        let {data} = await http.topic.getNav() 
        this.navList = data.navList 
        let  initData  = await http.topic.getInit()
        this.initData = initData.data
        console.log(initData)
    },
}
</script>

<style lang="stylus" scoped>
.topicContainer
    background #eee
    width 100%
    overflow auto
    .topicHeader
        height 100px
        background #fff
        padding 0 26px
        position relative
        .left
            float left
            line-height 100px
            .iconfont
                font-size 48px
        .center
            position absolute
            font-size 36px
            left 50%
            top 50%
            transform  translate(-50%,-50%)
        .right
            float right
            line-height 100px
            .iconfont
                font-size 48px
            .icon-cc-search
                margin-right 30px
    .swiperContainer
        position relative
        .swiper-title
            position relative
            z-index 1
            .logo
                position absolute
                width 130px
                height auto
                top 60px
                left 30px
            .bg
                width 100%
            .text
                position absolute
                left 160px
                top 90px
                font-size 30px
                color #fff
        .swipertap
            background #fff
            margin 0 20px
            position absolute
            top 150px
            z-index 2
            width 710px
            border-radius 10px
            padding-top 36px
            display flex
            overflow hidden
            // flex-wrap wrap
            .swiper-slide
                flex 1
                .img
                    img 
                        width 120px
                        height 120px
                        margin 0 24px
                .detail
                    display flex
                    flex-direction column
                    span
                        font-size 24px
                        text-align center
    .water
        padding-bottom 88px
        .container-water-fall
            .vue-waterfall
                display flex
                justify-content space-between
                padding  30px 20px
                box-sizing border-box
                .cell-item
                    width 48%
                    .item
                        display flex
                        flex-direction column
                        border-radius 12px
                        overflow hidden
                        .banner
                            width  100%
                        .item-body
                            background #ffffff
                            font-size 28px
                            color #333
                            padding 16px
                            box-sizing border-box
                            .desc
                                display flex
                                margin 17px auto 24px
                                .avatar
                                    width 48px
                                    height 48px
                                    border-radius 50%
                                    vertical-align middle
                                p
                                    font-size 24px
                                    color #7f7f7f
                                    line-height 48px
                                    margin-left 8px
                                    vertical-align middle
                            






</style>