<template>
    <div id="tabbar">
  	    <slot></slot>
  	</div>
</template>
<style>
     #tabbar{
    	display: flex;
    	height: 49px;
    	position: fixed;
    	left: 0;
    	right: 0;
    	bottom: 0;
    	box-shadow: 2px 0 2px rgba(100,100,100,0.1);
    	background-color: #f6f6f6;
    }

</style>

<script>
	export default{
		name: 'TabBar'
	}
</script>