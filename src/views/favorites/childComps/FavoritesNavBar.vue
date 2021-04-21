<template>
	<div class="favorites-navbar">
		<nav-bar>
			<div slot="left" @click="backClick">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div slot="center">收藏夹({{this.$store.state.favoritesList.length}})</div>
		</nav-bar>
	</div>
</template>

<style scoped>
	.favorites-navbar{
		color: white;
		background-color: #ff8198;
	}
	img{
		margin-top: 12px;
	}
</style>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
	export default{
		name: 'FavoritesNavBar',
		components: {
			NavBar
		},
		methods: {
			backClick() {
				this.$router.back();
			}
		}
	}
</script>