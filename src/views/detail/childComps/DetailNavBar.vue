<template>
	<div>
		<NavBar>
			<div slot="left" class="back" @click="back">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div slot="center" class="title">
				<div v-for="(item,index) in title" 
				     class="title-item" 
				     @click="itemClick(index)"
				     :class="{activeColor: currentIndex == index}">{{item}}</div>
			</div>
		</NavBar>
	</div>
</template>

<style scoped>
	.title{
		display: flex;
		font-size: 14px;
	}
	.title-item{
		flex: 1;
	}
	.back{
		margin-top: 6px;
	}
	.activeColor{
		color: #ff8198;
	}
</style>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
	export default{
		name: 'DetailNavBar',
		data() {
			return {
				title: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0,
			}
		},
		components: {
			NavBar
		},
		methods: {
			back() {
				this.$router.back();
			},
			itemClick(index) {
                this.currentIndex = index;
			}
		}
	}
</script>