<template>
	<Swiper>
		<SwiperItem v-for="item in banner">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="swiperImageLoad">
			</a>
		</SwiperItem>
	</Swiper>	
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
	export default{
		name: 'HomeSwiper',
		data() {
			return {
				isImageLoad: false
			}
		},
		props: {
			banner: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		},
		methods: {
			swiperImageLoad() {
				if(!this.isImageLoad) {
				    this.$emit('swiperImageLoad');
				    this.isImageLoad = true;	//实现只发射一次图片加载完成的事件，而不是四次				
			    }
			}
		}
	}
</script>