<template>
	<div id="home">
		<NavBar class="home-nav">
			<div slot="center">购物车</div>
		</NavBar>
		<Scroll class="content">
			<HomeSwiper :banner="banner"></HomeSwiper>
			<RecommendView :recommend="recommend"></RecommendView>
			<FeatureView></FeatureView>
			<TabControl :titles="['流行','新款','精选']"
			             class="tab-control"
			             @tabClick="tabClick"></TabControl>
			<GoodsList :goods="showGoods"></GoodsList>
		</Scroll>

	</div>
</template>

<style scoped>
    #home{
    	height: 100vh;
    	padding-top: 44px;
    }
	.home-nav{
		position: fixed;
		top: 0;
		left: 0;
		color: white;
		background-color: #ff8198;
	}
	.tab-control{
		position: sticky;
		top: 44px;
	}
	.content{
        height: calc(100% - 49px);
		overflow: hidden;
	}
</style>
<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/context/tabControl/TabControl.vue'
import GoodsList from 'components/context/homeGoods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import {getHomeMultidata, getHomeData} from 'network/home.js'
	export default{
		name: 'Home',
		data() {
			return{
				banner: [],
                recommend: [],
                goods: {
                	'pop': {page: 0, list: []},
                	'new': {page: 0, list: []},
                	'sell': {page: 0, list: []}
                },
                currentType: 'pop'
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		created() {
			//请求多个数据
			this.getHomeMultidata();
			//请求商品数据
            this.getHomeData('pop');
            this.getHomeData('new');
            this.getHomeData('sell');
		},
		components: {
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl,
			GoodsList,
			Scroll
		},
		methods: {
			//以下是方法代码
            tabClick(index) {
            	switch(index) {
            		case 0: this.currentType = 'pop';
            		        break;
            		case 1: this.currentType = 'new';
            		        break;
            		case 2: this.currentType = 'sell';
            		        break;
            	}
            },
	

			//以下是网络请求的相关函数代码
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banner = res.data.banner.list;
					this.recommend = res.data.recommend.list;
				});
			},
			getHomeData(type) {
				const page = this.goods[type].page + 1;
				getHomeData(type, page).then(res => {
	                this.goods[type].list.push(...res.data.list);
	                this.goods[type].page += 1;
	            })
			}
		}
	}
</script>