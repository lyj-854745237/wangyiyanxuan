<template>
    <div class="cartContainer">
       <div class="title">
           <span class="left">购物车</span>
           <span class="right">领券</span>
        </div>
        <ul class="header">
            <li>
                <i class="iconfont icon-circle-solid"></i>
                <span>30天无忧退货</span>
            </li>
            <li>
                <i class="iconfont icon-circle-solid"></i>
                <span>48小时快速退货</span>
            </li>
            <li>
                <i class="iconfont icon-circle-solid"></i>
                <span>满99元免邮费</span>
            </li>
        </ul>
        <div class="contentContainer">
            <img class="cartImg" src="./images/noCart.webp"/>
            <div >登录</div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo:{
        meta:[
            {chartset:'utf-8'},
            {name:'divport',content:'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'}
        ]
    },
}
</script>

<style lang="stylus" scoped>
.cartContainer
    position relative
    background #f4f4f4
    height 1234px
    .title
        font-size 32px
        line-height 80px
        padding 0 30px
        background #fff
        .left
            font-size 36px
        .right
            font-size 30px
            color  #DD1A21
            float right
    .header
        display flex
        background #eee
        height 80px
        line-height 80px
        li
            width 33.333%
            text-align center
            font-size 26px
            color #666
            .iconfont
                margin-right 5px
                font-size 12px
    .contentContainer
        width 100%
        .cartImg
            display block
            width 248px
            height 248px
            margin 300px auto 50px
        div
            width 480px
            height 92px
            background #DD1A21
            color #fff
            font-size 32px
            line-height 92px
            text-align center
            margin 0 auto
</style>