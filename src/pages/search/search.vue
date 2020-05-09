<template>
  <div class="searchContainer">
      <div class="search">
           <van-search 
                v-model="value" 
                :placeholder="keyWord" 
                show-action
                left-icon = 'none'
                @input="onInput"
            />
            <i class="iconfont icon-cc-search"></i>
      </div>
      <div class="searchList" v-if="!value">
        <div class="title">热门搜索</div>
        <div class="list">
            <div 
                class="listItem " 
                v-for="(item,index) in hotKeywordVOList" 
                :key="index"
                :class="{active:item.highlight === 1}"
            >
                {{item.keyword}}
            </div>
        </div>
      </div>
      <div class="showList" v-else>
         <ul class="content">
             <li class="showItem" v-for="(item,index) in showList" :key="index">
                 <span>{{item}}</span>
                 <i class="iconfont icon-right"></i>
             </li>

         </ul>
      </div>
  </div>
</template>
<script>
import { Search ,Tag} from 'vant';
import http from '../../http/index'
export default {
    data() {
        return {
            value:'',
            keyWord:'',
            showList:[],
            isCanShow:true,
            hotKeywordVOList:[]
        }
    },
    components:{
        [Search.name]:Search,
        [Tag.name]:Tag,
    },
    methods: {
        onInput(){
            if(this.isCanShow){
                if(this.timeId) clearTimeout(this.timeId)
                this.timeId = setTimeout(async()=>{
                    if(this.value.trim() ==='') return
                    let {data} = await http.index.getKeyWordList({keywordPrefix:`${this.value}`})
                    this.showList  = data
                },500)
                this.isCanShow = false
                setTimeout(()=>{
                    this.isCanShow = true
                },1000)
            }
        }
    },
    async mounted() { 
        let {data} = await  http.index.getKeyWord()
        this.keyWord = data.defaultKeyword.keyword
        this.hotKeywordVOList = data.hotKeywordVOList
    },
}
</script>

<style lang="stylus" scoped>
.searchContainer
    background #eee
    height 100%
    width 100%
    .search
        .van-search
            height 88px
            padding 0 30px
            position relative
            .van-search__content
                height 56px
                .van-cell
                    height 56px
                    font-size 28px 
                    line-height 56px
                    margin-left 50px
        .iconfont
            display block
            font-size 28px
            position absolute
            top 30px
            left 80px
        .van-search__action
            height 56px
            line-height 56px
            text-align center
            width 60px
            font-size 24px
    .searchList
        height 420px
        background #fff
        padding 0 30px 30px 30px
        .title
            color #999
            line-height 90px
            font-size 28px
        .list
            display flex
            flex-wrap wrap
            .listItem
                margin 0 30px 30px 0
                border 1px solid #333
                color #333
                padding 0 15px
                line-height 1.5
                &.active
                    border-color #DD1A21
                    color #DD1A21
    .showList
        .content
            padding-left 30px
            background #fff
            .showItem
                height 100px
                border-bottom 1px solid #eee
                line-height 100px
                color #333
                font 28px
                position relative
                &:last-of-type
                    border none
                .iconfont
                    font-size 40px
                    position absolute
                    right 30px

         
</style>