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
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.swapper, {
                // probeType: 3,  //如果一直实时监听会影响性能，最好将这个属性传出去让用户自己设置
                probeType: this.probeType,
                // pullUpLoad: true,
                // 也设置为可以让用户自己设置的
                pullUpLoad: this.pullUpLoad,
                observeDOM: true, //不加这个会不能滚动
                click: true
			});
			//监听滚动的位置
			this.scroll.on('scroll',(position) => {
				// console.log(position);
				this.$emit('scrollPosition', position)
			});
			//监听scroll滚动到底部
			if(this.pullUpLoad) {
				this.scroll.on('pullingUp',() => {
					this.$emit('loadMore')
				})
			}
		},
		methods:{
			scrollTo(x,y,time) {
				this.scroll && this.scroll.scrollTo(x,y,time); //自己封装scrollTo函数调用scroll的scrollTo方法
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp();
				//自己封装finishPullUp函数调用scroll的finishPullUp方法
			},
			refresh() {
				this.scroll && this.scroll.refresh();
			},
			getScrollY() {
				return this.scroll ? this.scroll.y : 0;
			}
		}
	}
</script>