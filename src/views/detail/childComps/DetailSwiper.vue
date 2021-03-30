<template>
	<Swiper class="detailSwiper">
		<SwiperItem v-for="item in topImage">
			<img :src="item" alt="">
		</SwiperItem>
	</Swiper>
</template>

<style scoped>
	.detailSwiper{
		height: 300px;
		overflow: hidden;
	}
</style>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
	export default{
		name: 'DetailSwiper',
		props: {
			topImage: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		}
	}
</script>