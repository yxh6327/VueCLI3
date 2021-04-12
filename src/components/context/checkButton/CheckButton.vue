<template>
	<div class="check-button">
		<img src="~assets/img/cart/tick.svg" alt="" :class="{check: isChecked}">
	</div>
</template>

<style scoped>
	.check-button img{
		width: 18px;
		height: 18px;
		line-height: 18px;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #aaa;
		margin-top: 3px;
	}
	.check{
        background-color: #ff8198;
        border-color: #ff8198 !important;
	}
</style>

<script>
	export default{
		name: 'CheckButton',
		props: {
			isChecked: {
				type: Boolean,
				dafault: false
			}
		}
	}
</script>