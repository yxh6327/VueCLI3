<template>
	<div class="list-item" @click=itemClick>
		<div class="item-left">
			<img :src="favoritesItem.img" alt="">
		</div>
		<div class="item-right">
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
		right: 15px;
		bottom: 0;
		font-size: 12px;
		color: #aaa;
		border: 1px solid #aaa;
		padding: 2px;
		border-radius: 10px;
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
            }
		}
	}
</script>