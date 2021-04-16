<template>
	<div class="bottom-bar">
		<div class="allcheck">
			<check-button 
			    class="allcheck-button" 
			    :is-checked="isAllCheck" 
			    @click.native="allCheck"/>
			<span class="text">全选</span>
		</div>
		<div class="total-price">合计: ￥{{totalPrice}}</div>
		<div class="pay" @click="payClick">结算({{payCount}})</div>
	</div>
</template>

<style scoped>
	.bottom-bar{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 49px;
		display: flex;
		justify-content: space-between;
		height: 40px;
		background-color: #fafafa;
	}
	.allcheck{
		display: flex;
		height: 40px;
		line-height: 40px;
		margin-left: 15px;
	}
	.allcheck .allcheck-button{
		margin-top: 3px;
	}
	.allcheck .text{
		margin-left: 4px;
		/*margin-top: 2px;*/
	}
	.total-price{
		flex: 1;
		height: 40px;
		line-height: 40px;
		margin-left: 30px;
	}
	.pay{
		height: 40px;
		width: 30%;
		line-height: 40px;
		text-align: center;
		background-color: #FC4800;
	}
</style>

<script>
import CheckButton from 'components/context/checkButton/CheckButton.vue'

import {mapGetters} from 'vuex'
	export default{
		name: 'ShopcarBottomBar',
		components: {
			CheckButton
		},
		computed: {
			...mapGetters(['carList']),
			//计算结算的数量
			payCount() {
				return this.carList.filter(function(item) {
					return item.checked === true;
				}).length;
			},
			//计算总价格
			totalPrice() {
				return this.carList.filter(function(item) {
					return item.checked === true;
				}).reduce(function(privious, item) {
					return privious + item.price * item.count;
				}, 0).toFixed(2);
			},
			//根据单个商品是否被选中判断全选按钮的状态
			isAllCheck() {
				if(this.carList.length === 0) return false;
				return !(this.carList.find(item => {
					return item.checked === false;
				}))
			}
		},
		methods: {
			//根据全选按钮的状态，去改变单个商品的状态，但单个商品的状态改变后，会通过计算属性
			//中的isAllChecked改变全选按钮的状态
			allCheck() {
				if(this.isAllCheck === true) {
					this.carList.forEach(item => item.checked = false);
				} else{
					this.carList.forEach(item => item.checked = true);
				}
			},
			payClick() {
                if(this.carList.length === 0) {
                	this.$emit('canNotPay','您的购物车是空的哟');
                } else if(!(this.carList.find((item) => {
                	return item.checked === true;
                }))) {
                	this.$emit('canNotPay','请选择要购买的商品');
                }
			}
		}
	}
</script>