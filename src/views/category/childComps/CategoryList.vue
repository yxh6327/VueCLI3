<template>
	<div class="category-list">
		<div v-for="(item, index) in listData"
		     class="list-item" 
		     :class="{active: index === currentIndex}" 
		     @click="itemClick(index)">
			{{item.title}}
		</div>
	</div>
</template>

<style scoped>
    .category-list{
    	font-size: 14px;
    }
    .list-item{
        height: 45px;
	    line-height: 45px;
	    text-align: center;
    }
    .active{
    	background-color: #fff;
    	color: #ff8198;
    }
</style>

<script>
	export default{
		name: 'CategoryList',
		data() {
			return {
				currentIndex: 0
			}
		},
		props: {
			listData: {
				type: Array,
				default: []
			}
		},
		methods: {
			itemClick(index) {
                this.currentIndex = index;
                this.$emit('itemClick', index);
			}
		}
	}
</script>