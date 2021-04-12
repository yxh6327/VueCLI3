<template>
	<div class="toast" v-show="isShow">
		{{message}}
	</div>
</template>

<style scoped>
	.toast{
		position: fixed;
		top: 70%;
		left: 50%;
		transform: translate(-50%);
		padding: 5px 10px;
		color: #fff;
		background-color: #554D4D;
		opacity: 0.8;
		border-radius: 5px;
/*		z-index: 99;*/
	}
</style>

<script>
	export default{
		name: 'Toast',
		//将toast封装成一个插件
		// data() {
		// 	return {
		// 		message: '',
		// 		isShow: false
		// 	}
		// },
		//封装toast插件时使用
		// methods: {
		// 	show(message, duration) {
		// 		this.isShow = true;
		// 		this.message = message;

		// 		setTimeout(() => {
		// 			this.isShow = false;
		// 			this.message = '';
		// 		}, duration);
		// 	}
		// }
		//以下是普通的使用toast组件时
		props: {
			message: {
				type: String,
				default: ''
			},
			isShow: {
				type: Boolean,
				default: false
			}
		}
	}
</script>