<template>
	<NavBar class="shopcar-nav">
		<div slot="center">购物车({{carListLength}})</div>
	</NavBar>
</template>

<style scoped>
	.shopcar-nav{
		color: #fff;
		background-color: #ff8198;
	}
</style>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import {mapGetters} from 'vuex'
	export default{
		name: 'ShopcarNavBar',
		computed: {
			...mapGetters(['carListLength'])
		},
		components: {
			NavBar
		}
	}
</script>