<template>
	<div class="favorites">
		<favorites-nav-bar/>
        <scroll class="content" ref="scroll">
        	<favorites-list/>
        </scroll>
	</div>
</template>

<style scoped>
	.content{
		position: fixed;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>

<script>
import FavoritesNavBar from './childComps/FavoritesNavBar.vue'
import FavoritesList from './childComps/FavoritesList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
	export default{
		name: 'Favorites',
		components: {
			FavoritesNavBar,
			FavoritesList,
			Scroll
		},
		activated() {
			//每次进入这个页面要让BScroll进行一次刷新，重新计算高度
			this.$refs.scroll.refresh();
		}
	}
</script>