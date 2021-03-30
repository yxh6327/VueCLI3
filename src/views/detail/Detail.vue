<template>
	<div id="detail">
		<DetailNavBar></DetailNavBar>
		<Scroll class="swiper">
			<DetailSwiper :topImage="topImage"></DetailSwiper>
			<BaseInfo :goods="goods"></BaseInfo>
			<ShopInfo :shop="shop"></ShopInfo>
			<ul>
				<li>liebiao1</li>
				<li>liebiao2</li>
				<li>liebiao3</li>
				<li>liebiao4</li>
				<li>liebiao5</li>
				<li>liebiao6</li>
				<li>liebiao7</li>
				<li>liebiao8</li>
				<li>liebiao9</li>
				<li>liebiao10</li>
				<li>liebiao11</li>
				<li>liebiao12</li>
				<li>liebiao13</li>
				<li>liebiao14</li>
				<li>liebiao15</li>
				<li>liebiao16</li>
				<li>liebiao17</li>
				<li>liebiao18</li>
				<li>liebiao19</li>
				<li>liebiao20</li>
				<li>liebiao21</li>
				<li>liebiao22</li>
				<li>liebiao23</li>
				<li>liebiao24</li>
				<li>liebiao25</li>
				<li>liebiao26</li>
				<li>liebiao27</li>
				<li>liebiao28</li>
				<li>liebiao29</li>
				<li>liebiao30</li>
			</ul>
		</Scroll>
	</div>	
</template>

<style scoped>
    #detail{
    	position: relative;
    	height: 100vh;
    	z-index: 9;
    	background-color: #fff;
    }
	.swiper{
		position: absolute;
		top: 44px;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
	}
</style>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import BaseInfo from './childComps/BaseInfo.vue'
import ShopInfo from './childComps/ShopInfo.vue'
import {getDetailData, Goods, Shop} from 'network/detail.js'
	export default{
		name: 'Detail',
		data() {
			return {
				iid: null,
				topImage: [],
				goods: {},
				shop: {}
			}
		},
		components: {
            DetailNavBar,
            Scroll,
            DetailSwiper,
            BaseInfo,
            ShopInfo
		},
		created() {
			this.iid = this.$route.params.iid;
			getDetailData(this.iid).then((res) => {
				const data = res.result;
				console.log(data);
				//轮播图数据
				this.topImage = data.itemInfo.topImages;
				//商品基本信息数据
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                //商家基本信息数据
                this.shop = new Shop(data.shopInfo);
			})
		}
	}
</script>