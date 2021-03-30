<template>
	<div>
		<p class="title">{{goods.title}}</p>
		<div class="price">
			<span class="new-price">{{goods.newPrice}}</span>
			<span class="old-price" v-if="goods.oldPrice">{{goods.oldPrice}}</span>
            <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="columns">
			<span class="columns-item-left">{{goods.columns[0]}}</span>
			<span class="columns-item-center">{{goods.columns[1]}}</span>
			<span class="columns-item-right">{{goods.services[0].name}}</span>
		</div>
		<div class="services">
			<p v-for="index in goods.services.length - 1" :key="index" class="services-item">
				<img :src="goods.services[index].icon" alt="">
				<span>{{goods.services[index].name}}</span>
			</p>
		</div>
	</div>
</template>

<style scoped>
	.title{
		margin: 10px;
		font-size: 17px;
	}
	.price{
		position: relative;
		margin: 10px;
	}
	.new-price{
		font-size: 22px;
		color: #ff8198;
	}
	.old-price{
		position: relative;
		margin: 0 5px;
		font-size: 14px;
		color: #666;
	}
	.old-price::before{
		content: "";
		position: absolute;
		bottom: 9px;
		left: 2px;
		width: 45px;
		height: 1px;
		background-color: #666;
	}
	.discount{
		display: inline-block;
		position: absolute;
		width: 80px;
		height: 20px;
		font-size: 16px;
		text-align: center;
		line-height: 20px;
		background-color: #ff8198;
		border-radius: 6px;
		color: #fff;
	}
	.columns{
		text-align: center;
		font-size: 14px;
		color: #666;
		padding: 10px 0;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
	}
    .columns-item-left{
    	display: inline-block;
    	float: left;
    	margin-left: 10px;
    }
    .columns-item-right{
    	display: inline-block;
    	float: right;
    	margin-right: 10px;
    }
    .services{
	    display: flex;
	    justify-content: space-between;
	    line-height: 70px;
    	border-bottom: 3px solid #eee;
    	font-size: 14px;
    	padding: 0 8px;
    }
    .services img{
	    width: 14px;
	    height: 14px;
	    position: relative;
	    top: 2px;
    }
    .services-item{
    	position: relative;
/*    	text-align: left;*/
    	/*flex: 30%;*/
/*    	padding-left: 15px;*/
/*    	margin-top: 15px;
    	margin-left: 8px;*/
    }
</style>

<script>
	export default{
		name: 'BaseInfo',
		props: {
			goods: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	}
</script>