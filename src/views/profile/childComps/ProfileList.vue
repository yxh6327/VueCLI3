<template>
	<div class="list">
		<div class="item">
			<span>
				<img src="~assets/img/profile/message.svg" alt="">
			</span>
			<span>我的消息</span>
		</div>
		<div class="item">
			<span>
				<img src="~assets/img/profile/pointer.svg" alt="">
			</span>
			<span>积分商城</span>
		</div>
		<div class="item">
			<span>
				<img src="~assets/img/profile/vip.svg" alt="">
			</span>
			<span>会员卡</span>
		</div>
		<div class="item" @click="itemClick">
			<span>
				<img src="~assets/img/profile/cart.svg" alt="">
			</span>
			<span>我的购物车</span>
		</div>
		<div class="item">
			<span>
				<img src="~assets/img/profile/shopping.svg" alt="">
			</span>
			<span>下载购物App</span>
		</div>
	</div>
</template>

<style scoped>
    .item{
    	position: relative;
    	height: 50px;
    	line-height: 50px;
    	margin: 0 15px;
    	border-bottom: 2px solid #eee;
    }
	img{
		width: 20px;
		height: 20px;
	}
	.item span:first-child{
		position: absolute;
		top: 3px;
		left: 10px;
	}
	.item span:last-child{
        margin-left: 40px;
	}
</style>

<script>
	export default{
		name: 'ProfileList',
		methods: {
			itemClick() {
				this.$router.replace('/shopcar');
			}
		}
	}
</script>