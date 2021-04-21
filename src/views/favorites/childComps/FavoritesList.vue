<template>
	<div class="favorites-list">
		<favorites-list-item v-for="item in favoritesList" :favorites-item="item"/>
	</div>
</template>

<style scoped></style>

<script>
import FavoritesListItem from './FavoritesListItem.vue'
import {mapGetters} from 'vuex'
	export default{
		name: 'FavoritesList',
		computed: {
			...mapGetters(['favoritesList'])
		},
		components: {
			FavoritesListItem
		}
	}
</script>