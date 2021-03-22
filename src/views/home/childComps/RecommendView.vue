<template>
	<div id="recommend-view">
		<RecommendViewItem v-for="item in recommend" class="item">
			<div slot="image">
				<a :href="item.link">
					<img :src="item.image" alt="">
				</a>
			</div>
			<div slot="text" class="text">{{item.title}}</div>
		</RecommendViewItem>	
	</div>
</template>

<style scoped>
	#recommend-view{
		display: flex;
		text-align: center;
		padding: 10px 0 30px;
		border-bottom: 8px solid #eee;
	}
	.item{
		flex: 1;
	}
	.item img{
		width: 80px;
		height: 80px;
	}
	.text{
		text-align: center;
		font-size: 14px;
		margin-top: 5px;
	}
</style>

<script>
import RecommendViewItem from 'components/common/recommend/RecommendViewItem.vue'
	export default{
		name:'RecommendView',
		props: {
			recommend:{
				type: Array,
				default() {
					return [];
				}
			}
		},
		components: {
			RecommendViewItem
		}
	}
</script>