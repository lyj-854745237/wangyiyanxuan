<template>
    <div class="cateListContainer">
        <div class="newItem ">
            <div class="title">
                <span>新人专享礼</span>
            </div>
            <div class="content">
                <div class="left"> 
                    <div class="name">新人专享礼包</div>
                    <div class="imgWrap">
                        <img class="big" src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                        <img class="small" src="https://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png?imageView&type=webp" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="module1">
                        <div class="text">
                            <div class="text-top">福利社</div>
                            <div class="text-bottom">今日特价</div>
                        </div>
                        <div class="imgWrap">
                             <img src="https://yanxuan-item.nosdn.127.net/b8fac646b9e2904ff772875ffdfb9839.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                        </div>
                        <div class="discount">
                            <div style="font-size:24px">$22</div>
                            <div style="font-size:22px ; text-decoration:line-through;">$22</div>
                        </div>
                    </div>
                    <div class="module2">
                        <div class="text">
                            <div class="text-top">新人拼团</div>
                            <div class="text-bottom">1元起包邮</div>
                        </div>
                        <div class="imgWrap">
                             <img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                        </div>
                        <div class="discount">
                            <div style="font-size:24px">$4</div>
                            <div style="font-size:22px ; text-decoration:line-through;">$10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="indexFloor categoryHotSell"> 
            <div class="title">类目热销榜</div>
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CateList'
}
</script>

<style lang="stylus" scoped>
    .cateListContainer
        background #eeeeee
        overflow hidden
        .newItem
            margin 20px 0
            background #fff
            .title
                line-height 90px
                height 90px
                text-align center
                font-size 32px
                position relative
                &:after
                    content ''
                    position absolute
                    top 45px
                    left 250px
                    width  24px
                    height: 3px;
                    background: #333
                &:before
                    content ''
                    position absolute
                    top 45px
                    right  250px
                    width  24px
                    height: 3px;
                    background: #333
            .content
                padding 0 20px 30px 30px
                display flex
                .left
                    width 343px
                    height 434px
                    background #F9E9CF
                    .name
                        padding 30px 0 0 30px
                        font-size 32px
                    .imgWrap
                        margin 36px auto
                        width 258px
                        height 258px
                        position relative
                        .big 
                            
                            width 100%
                            height 100%
                        .small
                            position absolute
                            left 160px
                            top 215px
                .right
                    .imgWrap
                        width 200px
                        height 200px
                        position absolute
                        right 0
                    .text
                        line-height 1.5
                        .text-top
                            font-size 32px
                            color #333
                        .text-bottom
                            font-size 24px
                            color #7f7f7f
                    .discount
                        position: absolute
                        top 20px
                        right 30px
                        width 80px
                        height 80px
                        opacity 0.8
                        background #F59524
                        border-radius 50%
                        color #fff
                        text-align center
                        padding-top 20px
                        box-sizing border-box
                    .module1
                        background #FBE2D3
                        border-radius 4px
                        width 343px
                        height 215px
                        margin 0 0 4px 4px 
                        display flex
                        padding 20px 0 0 30px
                        position relative
                        box-sizing border-box
                    .module2
                        background #FFECC2
                        border-radius 4px
                        width 343px
                        height 215px
                        margin 0 0 4px 4px 
                        display flex
                        padding 20px 0 0 30px
                        position relative
                        box-sizing border-box
                        .text-bottom
                            font-size 24px
                            color #fff
                            background #CBB693
                            border-radius 6px
                            padding 0 6px
            .indexFloor
                margin 20px 0
                background #fff
                .title
                    line-height 90px
                    height 90px
                    // text-align center
                    font-size 32px
                .content
                    padding 0 20px 30px 30px
                    display flex    




.textIII
    width 0px
</style>