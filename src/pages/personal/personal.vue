<template>
  <div class="peronal">
    <!-- 头部 -->
    <div class="topicHeader">
        <div class="left" @click="$router.push('/Index')">
            <i class="iconfont icon-home"></i>
        </div>
        <div class="center">
            <span class="title"></span>
        </div>
        <div class="right">
            <i class="iconfont icon-cc-search" @click="$router.push('/Search')"></i>
            <i class="iconfont icon-cart" @click="$router.push('/Cart')"></i>
        </div>
    </div>
    <div class="content">
        <div class="imgWrap">
            <img src="./images/logo2.png" alt="">
        </div>
        <div class="btnWrap">
            <div class="btn">
                <i class="iconfont icon-phone"></i>
                <span>手机号快捷登录</span>
            </div>
            <div class="btn">
                <i class="iconfont icon-message"></i>
                <span>邮箱账号登录</span>
            </div>
        </div>

        <div class="xtb">
            <div class="iconWrap">
                 <i class="iconfont icon-wechat"></i>
                 <span>微信</span>
            </div>
            <!-- <i>|</i> -->
            <div class="iconWrap">
                <i class="iconfont icon-qq"></i>
                <span>qq</span>
            </div>
            <!-- <i>|</i> -->
            <div class="iconWrap">
                <i class="iconfont icon-weibo"></i>
                <span>微博</span>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    metaInfo:{
        meta:[
            {chartset:'utf-8'},
            {name:'viewport',content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'}
        ]
    },
}
</script>

<style lang="stylus" scoped>
.peronal
    width 100%
    height 100%
    background #eee
    .topicHeader
        height 100px
        background #fff
        padding 0 26px
        position fixed
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
            background url('./images/logo.png')
            background-size 182px 54px
            width 182px
            height 54px
        .right
            float right
            line-height 100px
            .iconfont
                font-size 48px
            .icon-cc-search
                margin-right 30px
    .content
        padding-top 100px
        height 1234px
        .imgWrap
            padding 160px 0 232px
            text-align center
            img 
                width 268px
                height 90px
        .btnWrap
            padding 0 40px
            .btn  
                height 90px
                border 1px solid #DD1A21
                background  #DD1A21
                text-align center
                color #ffffff
                font-size 28px
                line-height 90px
                &:nth-of-type(2)
                    margin-top 32px
                    background #eee
                    color #DD1A21
                .iconfont 
                    margin-right 5px
        .xtb
            display flex
            position absolute
            bottom 100px
            width 100%
            height 50px
            text-align center
            font-size 28px
            color #7F7F7F
            margin-left 100px
            .iconWrap
                padding 0 40px
                text-align center
                &:nth-of-type(2)
                    border-left 1px solid #7F7F7F
                    border-right 1px solid #7F7F7F
                i
                    font-size 40px
                    margin-right 10px

</style>