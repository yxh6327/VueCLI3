<template>
	<nav-bar class="category-nav">
	    <div slot="center">商品分类</div>
	</nav-bar>
</template>

<style scoped>
	.category-nav{
		color: #fff;
		background-color: #ff8198;
	}
</style>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
	export default{
		name: 'CategoryNavBar',
		components: {
			NavBar
		}
	}
</script>