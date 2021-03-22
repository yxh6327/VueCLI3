<template>
	<Swiper>
		<SwiperItem v-for="item in banner">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
		</SwiperItem>
	</Swiper>	
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
	export default{
		name: 'HomeSwiper',
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
		}
	}
</script>