<template>
    <!-- <div></div> -->
  <div class="container-water-fall" ref="scroll">
    <waterfall :col="col" :data="initData" @scroll = 'scroll' @loadmore = 'loadmore'>
      <template>
        <div class="cell-item" v-for="(item,index) in initData" :key="index">
          <div v-for="(Iitem,index) in item.topics" :key="index">
            <div class="item">
              <img :src="Iitem.newAppBanner?Iitem.newAppBanner:Iitem.picUrl" class="banner" />
              <div class="item-body">
                <p class="title">{{Iitem.title}}</p>
                <div class="desc">
                  <img :src="Iitem.avatar" class="avatar" />
                  <p>{{Iitem.nickname}}</p>
                  <img src="./images/eye.png" alt class="eye" />
                  <span>268k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
import http from '../../http/index'
import BScroll from 'better-scroll'
export default {
    // metaInfo:{
    //     meta:[
    //         {chartset:'utf-8'},
    //         {name:'viewport',content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'}
    //     ]
    // },
    data() {
        return {
            col:2,
            initData:[],
            more:[]
        }
    },
    methods: {
        scroll(scrollData){
          // console.log('scrollContentscrollTop', document.body.offsetHeight)
          // console.log('scrollContentclientHeight', this.$refs.scrollContent.clientHeight)

            // console.log(scrollData)
        },
        loadmore(index){
            console.log("------")
            this.initData = this.initData.concat(this.more)
            
        }
    },
    async mounted() {
        let  initData  = await http.topic.getInit()
        this.initData = initData.data
        console.log(initData)
        let {data} = await http.topic.getMore()
        console.log(data.result)
        this.more = data.result


        // this.$nextTick(()=>{
        //     this.scroll = new BScroll(this.$refs.scroll,{
        //         click: true
        //     })
        //     this.scroll.on('scrollEnd', () => {
        //         // 滚动到底部
        //         console.log("123")
               
        //     })
        // })
    },
};
</script>

<style lang="stylus" scoped>
.container-water-fall
    position relative
    .vue-waterfall
        padding  30px 20px 0
        box-sizing border-box
        .cell-item
            margin 0 10px
            .item
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
                    .title
                        line-height 1.5
                    .desc
                        display flex
                        margin 17px auto 24px
                        line-height 48px
                        .eye
                            width 32px
                            height 32px
                            margin-top 10px
                            float right
                        .avatar
                            width 48px
                            height 48px
                            border-radius 50%
                            vertical-align middle
                        p
                            font-size 24px
                            color #7f7f7f
                            margin-left 8px
                            vertical-align middle          

</style>