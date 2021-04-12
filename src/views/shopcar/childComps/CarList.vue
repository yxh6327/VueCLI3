<template>
	<div class="carlist">
		<car-list-item 
		    v-for="(item, index) in carList" 
		    :key="index" 
		    :item-info="item"/>
	</div>
</template>

<style scoped></style>

<script>
import CarListItem from './CarListItem.vue'

import {mapGetters} from 'vuex'

	export default{
		name: 'CarList',
		computed: {
			...mapGetters(['carList'])
		},
		components: {
			CarListItem
		}
	}
</script>