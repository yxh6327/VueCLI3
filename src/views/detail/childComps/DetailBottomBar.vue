<template>
	<div class="bottom-bar">
		<div class="bottom-bar-left">
			<div class="left-item">
				<span class="option serve"></span>
				<span>客服</span>
			</div>
			<div class="left-item">
				<span class="option shop"></span>
				<span>店铺</span>
			</div>
			<div class="left-item" @click="addFavorites">
				<span class="option" :class="{collect:!hasCollected , hascollected:hasCollected}"></span>
				<span>收藏</span>
			</div>
		</div>
		<div class="bottom-bar-right">
			<div class="right-item shopcar" @click="addShopCar">加入购物车</div>
		    <div class="right-item buy">购买</div>
		</div>
	</div>
</template>

<style scoped>
	.bottom-bar{
		height: 49px;
		width: 100%;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
	}
	.bottom-bar-left{
		flex: 1;
		display: flex;
	}
	.bottom-bar-right{
		flex: 1;
		display: flex;
		line-height: 49px;
		text-align: center;
	}
	.left-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.option{
		width: 22px;
		height: 22px;
		margin-top: 3px;
	}
	.serve{
		background: url("~assets/img/detail/detail_bottom.png") no-repeat 0px -52px;
		background-size: 22px;
	}
	.shop{
		background: url("~assets/img/detail/detail_bottom.png") no-repeat 0px -98px;
		background-size: 22px;
	}
	.collect{
		background: url("~assets/img/detail/detail_bottom.png") no-repeat 0px 0px;
		background-size: 22px;
	}
	.hascollected{
		background: url("~assets/img/detail/detail_bottom.png") no-repeat 0px -26px;
		background-size: 22px;
	}
	.right-item{
		flex: 1;
	}
	.shopcar{
		background-color: #FFE433;
	}
	.buy{
		color: #fff;
		background-color: #ff8198;
	}
</style>

<script>
	export default{
		name: 'DetailBottomBar',
		data() {
			return{
				hasCollected: false
			}
		},
		methods: {
			addShopCar() {
				this.$emit('addShopCar');
			},
			addFavorites() {
				this.hasCollected = true;
				this.$emit('addFavorites');
			}
		}
	}
</script>