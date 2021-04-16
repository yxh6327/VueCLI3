<template>
	<div class="sub-category">
		<div v-for="item in subContent.list" class="item">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<span>{{item.title}}</span>
		</div>
	</div>
</template>

<style scoped>
    .sub-category{
    	display: flex;
    	flex-wrap: wrap;
    	font-size: 14px;
    	margin-bottom: 15px;
    }
    .item{
    	flex: 30%;
    	display: flex;
    	flex-direction: column;
    	align-items: center;
    	margin-top: 15px;
    }
    .sub-category img{
    	width: 60px;
    	height: 60px;
    }
</style>

<script>
	export default{
		name: 'SubCategory',
		data() {
			return {}
		},
		props: {
			subContent: Object,
			default: {}
		}
	}
</script>