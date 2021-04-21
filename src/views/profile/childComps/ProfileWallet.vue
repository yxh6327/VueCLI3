<template>
	<div class="wallet">
		<div class="item item1">
			<p><span>0.00</span>元</p>
			<p>我的余额</p>
		</div>
		<div class="item item2">
			<p><span>0</span>分</p>
			<p>我的积分</p>
		</div>
		<div class="item" @click="favoritesClick">
			<p><span>{{favoritesListLength}}</span>个</p>
			<p>收藏夹</p>
		</div>
	</div>
</template>

<style scoped>
	.wallet{
		display: flex;
		align-items: center;
		height: 100px;
		border-bottom: 10px solid #f5f5f5;
	}
	.item{
		flex: 1;
		text-align: center;
	}
	p{
		font-size: 14px;
		color: #666;
	}
	span{
		font-size: 20px;
		font-weight: bold;
		color: #FF5F3E;
	}
    .item1,.item2{
    	border-right: 1px solid #f5f5f5;
    }
</style>

<script>
import {mapGetters} from 'vuex'
	export default{
		name: 'ProfileWallet',
		computed: {
			...mapGetters(['favoritesListLength'])
		},
		methods: {
			favoritesClick() {
				this.$router.push('/favorites');
			}
		}
	}
</script>