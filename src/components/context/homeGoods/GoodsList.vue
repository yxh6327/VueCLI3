<template>
	<div class="goods-list"> 
	    <GoodsListItem v-for="item in goods" :goodsitem="item">
	    </GoodsListItem>
	</div>
</template>

<style scoped>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0px 3px;
		margin: 10px 0;
	}
</style>

<script>
import GoodsListItem from './GoodsListItem.vue'
	export default{
		name: 'GoodsList',
		props: {
			goods: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		components: {
            GoodsListItem
		}
	}
</script>