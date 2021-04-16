<template>
	<div class="sign-in">
		<div class="image">
			<img src="~assets/img/profile/headimg.jpg" alt="">
		</div>
		<div class="text">
			<span>登录/注册</span>
			<span class="phone">暂无绑定手机号</span>
		</div>
		<div class="more">
		</div>
	</div>
</template>

<style scoped>
    .sign-in{
        display: flex;
    	background-color: #ff8198;
    }
    .image{
    	width: 100px;
    	padding: 20px 30px;
    }
	.image img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.text{
		padding-top: 25px;
		color: #fff; 
	}
	.text span{
		display: block;
	}
	.phone{
		position: relative;
		font-size: 14px;
		margin-top: 3px;
		padding-left: 12px;
	}
	.phone::before{
		position: absolute;
		content: "";
		width: 20px;
		height: 20px;
		top: 0;
		left: -5px;
		background: url("~assets/img/profile/phone.svg") no-repeat 0 0;
		background-size: 20px;
	}
	.more{
		width: 10px;
		height: 10px;
		border-right: 2px solid #fff;
		border-top: 2px solid #fff;
		margin-left: 120px;
		margin-top: 40px;
		transform: rotate(45deg);

	}
</style>

<script>
	export default{
		name: 'ProfileSignIn'
	}
</script>