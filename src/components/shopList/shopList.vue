<template>
	<div class="listContainer" >
		<div  class="listItem"  v-for = "(item,index) in shopList" :key = 'index'>
			<img :src="item.listPicUrl" mode="" />
			<p>{{item.name}}</p>
			<p style='color: red;font-weight: bold;'>$ {{item.retailPrice}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['shopList'],
		data() {
			return {
				
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="stylus">
.listContainer
    background #fff
    display flex
    flex-wrap wrap
    justify-content space-around
    /* 解决最后一行只有一个元素的时候不能靠左布局 */
    &:after
        content ''
        width 345px
        height 0
    .listItem
        width 345px
        display flex
        flex-direction column
        img 
            width 345px
            height 345px
        p
            white-space pre-wrap
            font-size 28px
            line-height 50px
            text-align left
</style>