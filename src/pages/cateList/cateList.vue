<template>
	<div class="categoryContainer">
		<!-- 头部区域 -->
		<div class="header">
			<div class="searchInput" @click="$router.push('/Search')">
				<i class="iconfont icon-sousuo"></i>
				<!-- <input type="text" value="" placeholder="搜索商品"  class="input"/> -->
        		<span class="text">搜索商品, 共26223款好物</span>
			</div>
		</div>
		<!-- 内容区域 -->
		<div class="content">
			<div class="left" >
				<div class='navList'>
					<div 
						@click='changeNavIndex(item.id)'
						v-for="(item,index) in categoryList" :key="index"
						:class="{active:navIndex === item.id}"
					>{{item.name}}</div>
				</div>
			</div>
			<div class="right" ref="rigthNode">
				<div class="proList" v-if="categoryObj">
					<img 
					class="cateImg" src="https://yanxuan.nosdn.127.net/a41ddf5b8d7921d5d09987022dd71cac.jpg?quality=75&type=webp&imageView&thumbnail=0x196" mode=""/>
					<div  class='proItem' v-for='(item, index) in categoryObj.categoryList?categoryObj.categoryList:categoryObj.subCateList' :key='index'>
						<img :src="item.BannerUrl?item.BannerUrl:item.wapBannerUrl" mode=""/>
						<p>{{item.name}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import http from '../../http/index'
import BScroll from 'better-scroll'
export default {
	metaInfo:{
        meta:[
            {chartset:'utf-8'},
            {name:'viewport',content:'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'}
        ]
    },
	data() {
		return {
			navIndex:0,
			categoryList:[],
			rigthData:[]
		};
	},
	computed:{
		categoryObj(){
			return this.rigthData.find(item => item.id === this.navIndex)
		}
	},
	methods:{
		changeNavIndex(navIndex){
			this.navIndex = navIndex
		}
	},
	async mounted(){
		let {categoryL1List} = await http.index.cateNavDatas()
		// 更新数据
		this.categoryList = categoryL1List
		// console.log(this.categoryList)
		this.navIndex = this.categoryList[0].id
		this.rigthData = await http.index.cateLists()
		this.$nextTick(()=>{
			new BScroll(this.$refs.rigthNode,{
				scrollY:true,
				click: true
			})
		})
	},
}
</script>

<style lang="stylus">
	.categoryContainer
		.header
			width 100%
			height 56px
			padding 10px 0
			.searchInput
				width 94%
				height 56px
				line-height 56px
				background #EDEDED
				margin-left 20px
				text-align center
				font-size 28px
				border-radius 10px
				position relative
				.iconfont 
					position absolute
					left 210px
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
		.content
			display flex
			box-sizing border-box
			height calc(100vh - 76px)
			border-top 1px solid #EEEEEE
			.left
				width 20%
				height 100%
				font-size 28px
				text-align center
				box-sizing border-box
				border-right 1px solid #eee
				.navList
					div 
						position relative
						height 80px
						line-height 80px
						color #333
						&.active
							&:after
								content ''
								height 70%
								width 2px 
								background #ab2b2b
								position absolute
								top 15%
								left 6px
			.right
				width 80%
				height 100%
				overflow hidden
				.proList
					width 100%
					display flex
					flex-wrap wrap
					.cateImg
						width 520px
						height 190px
						margin 20px auto
					.proItem 
						width 30%
						display flex 
						align-items center
						flex-direction column
						margin-left 20px
						img 
							width 144px
							height 144px
						p
							font-size 24px
							text-align center
							height 72px
							line-height 36px

</style>
