<template>
  <div id="app">
    <keep-alive exclude="Detail">
    	<router-view/>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<style>
	@import "assets/css/base.css"
</style>
<script>
import MainTabBar from 'components/context/mianTabBar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
