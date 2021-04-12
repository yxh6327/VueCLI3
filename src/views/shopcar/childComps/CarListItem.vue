<template>
	<div class="carlist-item">
		<div class="check-button">
			<check-button @click.native="checkClick" :is-checked="itemInfo.checked"/>
		</div>
		<div class="img">
			<img :src="itemInfo.img" alt="">
		</div>
		<div class="text">
			<div class="title">{{itemInfo.title}}</div>
			<div class="desc">{{itemInfo.desc}}</div>
			<div class="number">
				<span class="price">￥{{itemInfo.price}}</span>
				<span class="count">x{{itemInfo.count}}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.carlist-item{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 160px;
		border-bottom: 2px solid #f5f5f5;
	}
	.check-button{
		margin: 0 5px;
	}
	.img img{
		height: 130px;
		border-radius: 10px;
	}
	.text{
		height: 130px;
	}
	.title{
		margin: 0 15px 20px;
		font-size: 18px;
		height: 30px;
		line-height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: bold;
	}
    .desc{
    	margin: 0 15px 10px;
    	height: 30px;
    	line-height: 30px;
    	overflow: hidden;
		text-overflow: ellipsis;
		white-space: bold;
    }
    .number{
    	font-size: 18px;
    	display: flex;
    	justify-content: space-between;
    	margin: 25px 15px;
    }
    .price{
    	color: #FC4800;
    }
</style>

<script>
import CheckButton from 'components/context/checkButton/CheckButton.vue'
	export default{
		name: 'CarListItem',
		props: {
			itemInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		components: {
			CheckButton
		},
		methods: {
			checkClick() {
				this.itemInfo.checked = !this.itemInfo.checked;
			}
		}
	}
</script>