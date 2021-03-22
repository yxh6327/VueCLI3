<template>
	<div class="tabbar-item" @click="tabbaritemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>
<style>
	.tabbar-item{
    	flex: 1;
    	text-align: center;
    	font-size: 14px;
    }
    .tabbar-item img{
    	width: 25px;
    	margin-top: 2px;
    }
</style>
<script>
	export default{
	    name: "TabBarItem",
	    props: {
	    	path: String,
	    	activeColor: {
	    		type: String,
	    		default: '#F85454'
	    	}
	    },
	    data() {
	    	return {
	    		// isActive: false
	    	}
	    },
	    computed: {
	    	isActive() {
	    		return this.$route.path == this.path
	    	},
	    	activeStyle() {
	    		return this.isActive ? {color:this.activeColor} : {}
	    	}
	    },
	    methods: {
	    	tabbaritemClick() {
	    		this.$router.push(this.path)
	    	}
	    }
    }
</script>
