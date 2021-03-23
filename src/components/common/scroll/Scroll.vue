<template>
	<div class="swapper" ref="swapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>	
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name: 'Scroll',
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.swapper, {
                probeType: 3,
                pullUpLoad: true,
                observeDOM: true
			})
		}
	}
</script>