<template>
	<div class="carlist-item">
		<div class="check-button">
			<check-button @click.native="checkClick" :is-checked="itemInfo.checked"/>
		</div>
		<div class="img" @click="itemClick">
			<img :src="itemInfo.img" alt="">
		</div>
		<div class="text">
			<span class="delete" @click="deleteGood">删除</span>
			<div class="title">{{itemInfo.title}}</div>
			<div class="desc">{{itemInfo.desc}}</div>
			<div class="number">
				<span class="price">￥{{itemInfo.price}}</span>
				<div>
					<span class="add" @click="addCount">+</span>
					<span class="count">{{itemInfo.count}}</span>
					<span class="sub" @click="subCount">-</span>
				</div>
			</div>
		</div>
		<toast :message="message" :is-show="isShow"/>
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
		position: relative;
		height: 130px;
	}
	.title{
		margin: 15px 15px 5px;
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
		font-size: 14px;
		color: #666;
    }
    .number{
    	font-size: 18px;
    	display: flex;
    	justify-content: space-between;
    	margin: 25px 15px;
    }
    .price{
    	color: #FC4800;
    	font-size: 16px;
    }
    .count{
    	border: 1px solid #ccc;
    	padding: 0 20px;
    	font-size: 16px;
    }
    .add{
    	border: 1px solid #ccc;
    	border-right: none;
    	border-top-left-radius: 3px;
    	border-bottom-left-radius: 3px; 
    	padding: 0 5px;
    	font-size: 16px;
    }
    .sub{
    	border: 1px solid #ccc;
    	border-left: none;
    	border-top-right-radius: 3px;
    	border-bottom-right-radius: 3px;
    	padding: 0 5px;
    	font-size: 16px;
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
import CheckButton from 'components/context/checkButton/CheckButton.vue'
import Toast from 'components/common/toast/Toast.vue'
	export default{
		name: 'CarListItem',
		data() {
			return {
				message: '',
				isShow: false
			}
		},
		props: {
			itemInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		components: {
			CheckButton,
			Toast
		},
		methods: {
			itemClick() {
				this.$router.push('/detail/' + this.itemInfo.iid);
			},
			checkClick() {
				this.itemInfo.checked = !this.itemInfo.checked;
			},
			addCount() {
				this.$store.commit('addCount', this.itemInfo);
			},
			subCount() {
				this.$store.dispatch('judgeCount', this.itemInfo).then((res) => {
					this.message = res;
					this.isShow = true;

					setTimeout(() => {
			            this.message = '';
			            this.isShow = false;
			        }, 1500);
				})
			},
			deleteGood() {
				this.$store.dispatch('findGood',this.itemInfo);
			}
		}
	}
</script>