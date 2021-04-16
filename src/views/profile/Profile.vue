<template>
	<div class="profile">
		<nav-bar class="nav-bar">
			<div slot="center">龙龙龙龙龙小猫</div>
		</nav-bar>
		<profile-sign-in/>
		<profile-wallet/>
		<profile-list/>
	</div>
</template>

<style scoped>
    .profile{
    	height: 100vh;
    	width: 100%;
    }
	.nav-bar{
		background-color: #ff8198;
		color: #fff;
	}
</style>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ProfileSignIn from './childComps/ProfileSignIn.vue'
import ProfileWallet from './childComps/ProfileWallet.vue'
import ProfileList from './childComps/ProfileList.vue'
	export default{
		name: 'Profile',
		components: {
			NavBar,
			ProfileSignIn,
			ProfileWallet,
			ProfileList
		}
	}
</script>