<template>
	<div class="list-item">
		<div class="item-left">
			<img :src="favoritesItem.img" alt="" @click="itemClick">
		</div>
		<div class="item-right">
			<span class="delete" @click="deleteGood">删除</span>
			<p class="p1">{{favoritesItem.title}}</p>
			<p class="p2">{{favoritesItem.collected | collectFilter}}收藏</p>
			<p class="p3">￥{{favoritesItem.price}}</p>
			<span class="find-same">找相似</span>
		</div>
	</div>
</template>

<style scoped>
    .list-item{
    	display: flex;
    	position: relative;
    	margin: 15px 15px 0 15px;
    }
	img{
		width: 100px;
		border-radius: 10px;
	}
	p{
		margin-left: 15px;
		margin-top: 5px;
	}
	.item-right{
		margin-top: 20px;
	}
	.p1{
       height: 40px;
       overflow: hidden;
       text-overflow: ellipsis;
	}
	.p2{
		font-size: 14px;
		color: #aaa;
	}
	.p3{
		color: red;
	}
	.find-same{
		position: absolute;
		right: 10px;
		bottom: 10px;
		font-size: 12px;
		color: #aaa;
		border: 1px solid #aaa;
		padding: 2px;
		border-radius: 10px;
	}
	.delete{
    	position: absolute;
    	top: -5px;
    	right: 10px;
    	font-size: 10px;
    	color: #ccc;
    	border: 1px solid #ccc;
    	padding: 2px 8px;
    	border-radius: 15px;
    }
</style>

<script>
	export default{
		name: 'FavoritesListItem',
		props: {
			favoritesItem: {
				type: Object,
				default: {}
			}
		},
		filters: {
            collectFilter(value) {
            	return value.substr(2);
            }
		},
		methods: {
			itemClick() {
                this.$router.push('/detail/' + this.favoritesItem.iid);
            },
            deleteGood() {
                this.$store.dispatch('findFavoritesGood',this.favoritesItem);
            }
		}
	}
</script>