<template>
	<div class="goods-list-item" @click="itemClick">
		<!-- 图片上是没有链接的 -->
		<img :src="goodsitem.show.img" alt="" @load="itemImageLoad">
		<div class="goods-text">
			<p class="title">{{goodsitem.title}}</p>
			<span class="price">￥{{goodsitem.price}}</span>
			<span class="collect">{{goodsitem.cfav}}</span>
		</div>
	</div>
</template>

<style scoped>
    .goods-list-item{
    	width: 47%;
    	margin: 5px 0;
    }
    .goods-list-item img{
    	width: 100%;
    	border-radius: 10px;
    }
    .goods-text{
    	position: relative;
    	font-size: 12px;
    	margin: 5px 5px 0;
    	z-index: -1;
    }
    .title{
    	width: 100%;
    	height: 20px;
    	overflow: hidden;   	
		text-overflow: ellipsis;
		white-space: nowrap;
    }
    .price{
    	font-weight: bold;
    }
    .collect{
    	display: block;
    	float: right;
    }
    .collect::before{
    	content: "";
        display: block;
        float: left;
        width: 12px;
        height: 12px;
        margin: 2px 3px;
        background: url("~assets/img/common/collect.svg") 0 0/12px 12px;
    }
</style>

<script>
	export default{
		name: 'GoodsListItem',
		props: {
			goodsitem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
        methods:{
            itemImageLoad() {
                this.$bus.$emit('itemImageLoad');
            },
            itemClick() {
                this.$router.push('/detail/' + this.goodsitem.iid);
            }
        }
	}
</script>