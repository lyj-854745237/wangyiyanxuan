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
            <div class="tabWrap">
                <div class="swipertap">
                    <div class="swiperItem" v-for="(item,index) in navList" :key="index">
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
        </div>

        <!-- 瀑布流 -->
        <div ref="scroll">
            <WaterFall ></WaterFall>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import http from '../../http/index'
import WaterFall from '../../components/WaterFall/Waterfall'
import BScroll from 'better-scroll'
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
        }
    },
    components:{
        "WaterFall":WaterFall
    },
    async mounted() {
        console.log(document.body.clientWidth)
        console.log(document.body.clientHeight)
        var mySwiper = new Swiper ('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        }) 
        let {data} = await http.topic.getNav() 
        this.navList = data.navList 

        // this.$nextTick(()=>{
        //     this.scroll = new BScroll(this.$refs.scroll,{
        //         // click: true
        //     })
        //     this.scroll.on('scrollEnd', () => {
        //         // 滚动到底部
        //         console.log("123")
        //     })
        // })
    },
}
</script>

<style lang="stylus" scoped>
.topicContainer
    background #eee
    width 100%
    // overflow auto
    padding-bottom 88px
    box-sizing border-box
    position relative
    .topicHeader
        height 100px
        background #fff
        padding 0 26px
        position fixed
        top 0
        left 0
        z-index 9
        width 100%
        box-sizing border-box
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
        height 685px
        margin-top 100px
        overflow hidden
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
        .tabWrap
            background #fff
            margin 0 20px
            box-sizing border-box
            border-radius 10px
            padding-top 36px
            overflow hidden
            height 540px
            width 710px
            position absolute
            top 150px
            z-index 2
            display flex
            .swipertap
                position absolute
                top 0
                z-index 2
                display inline-flex
                flex-direction column
                flex-wrap wrap
                height 100%
                .swiperItem
                    flex 1
                    padding 36px 6px 6px
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




</style>