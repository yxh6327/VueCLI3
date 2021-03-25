<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item, index) in titles" @click="itemClick(index)" :class="{select: index === currentIndex}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		height: 40px;
		width: 100%;
		line-height: 40px;
		background-color: #fff;
	}
	.tab-control-item{
		flex: 1;
		margin: 0 42px;
	}
	.select{
		color: #ff8198;
        border-bottom: 3px solid #ff8198;
	}
</style>

<script>
	export default{
		name:'TabControl',
		props: {
			titles: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabClick', index);
			}
		}
	}
</script>