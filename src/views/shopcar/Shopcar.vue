<template>
	<div class="shopcar">
        <shopcar-nav-bar/>
        <scroll class="content" ref="scroll">
        	<car-list/>
        </scroll>
        <shopcar-bottom-bar @canNotPay="canNotPay"/>
        <toast :message="message" :is-show="isShow"></toast>
	</div>
</template>

<style scoped>
    .shopcar{
    	width: 100%;
    	height: 100vh;
    }
	.content{
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 89px;
		overflow: hidden;
	}
</style>

<script>
import ShopcarNavBar from './childComps/ShopcarNavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue' 
import CarList from './childComps/CarList.vue'
import ShopcarBottomBar from './childComps/ShopcarBottomBar.vue'
import Toast from 'components/common/toast/Toast.vue'

	export default{
		name: 'Shopcar',
		data() {
			return {
				isShow: false,
				message: ''
			}
		},
		methods: {
			canNotPay(message) {
				this.isShow = true;
				this.message = message;

				setTimeout(() => {
					this.isShow = false;
					this.message = '';
				}, 1500);
			}
		},
		components: {
			ShopcarNavBar,
			Scroll,
			CarList,
			ShopcarBottomBar,
			Toast
		},
		activated() {
			//每次进入这个页面要让BScroll进行一次刷新，重新计算高度
			this.$refs.scroll.refresh();
		}
	}
</script>