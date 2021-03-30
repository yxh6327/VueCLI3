<template>
	<div id="home">
		<NavBar class="home-nav">
			<div slot="center">购物车</div>
		</NavBar>
		<TabControl :titles="['流行','新款','精选']"
             class="tab-control"
             @tabClick="tabClick"
             ref="tabControl1"
             :class="{fixed:isTabControlfixed}"
             v-show="isTabControlfixed"></TabControl>
		<Scroll class="content" 
		        ref="scroll" 
		        :probeType="3"
		        @scrollPosition="scrollPosition"
		        :pullUpLoad="true"
		        @loadMore="loadMore">
			<HomeSwiper :banner="banner" @swiperImageLoad="getOffesetTop"></HomeSwiper>
			<RecommendView :recommend="recommend"></RecommendView>
			<FeatureView></FeatureView>
			<TabControl :titles="['流行','新款','精选']"
			             class="tab-control"
			             @tabClick="tabClick"
			             ref="tabControl2"></TabControl>
			<GoodsList :goods="showGoods"></GoodsList>
		</Scroll>
		<BackTop @click.native="backClick" v-show="isBackTopShow"></BackTop>
	</div>
</template>

<style scoped>
    #home{
    	position: relative;
    	height: 100vh;
    	/*padding-top: 44px;*/
    }
	.home-nav{
/*		position: fixed;
		top: 0;
		left: 0;*/
		color: white;
		background-color: #ff8198;
	}
/*	.tab-control{
		position: sticky;
		top: 44px;
	}*/ /*在没有使用better-scroll时，这个样式可以让tabControl实现吸顶的效果*/
	.content{
        height: calc(100% - 93px); /*可以通过计算得到当前能看到的home的宽度*/
/*      position: fixed; 
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;*/ /*也可以通过固定定位进行设置*/
		overflow: hidden;
	}
	.fixed{
		position: fixed;
		top: 44px;
		left: 0;
		z-index: 3;
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
import BackTop from 'components/context/backtop/BackTop.vue'

import {getHomeMultidata, getHomeData} from 'network/home.js'

import {debounce} from 'common/utils.js'
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
                currentType: 'pop',
                isBackTopShow: false,
                tabControlOffsetTop: 0,
                isTabControlfixed: false,
                saveY: 0
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		//在离开home时保持原来的位置
        activated() {
            this.$refs.scroll.scrollTo(0, this.saveY, 1);
            this.$refs.scroll.refresh();
        },
        deactivated() {
            this.saveY = this.$refs.scroll.getScrollY();
        },
		created() {
			//请求多个数据
			this.getHomeMultidata();
			//请求商品数据
            this.getHomeData('pop');
            this.getHomeData('new');
            this.getHomeData('sell');
		},
		mounted() {
			//图片加载完了就scroll.refresh() 但是这个有频繁刷新的问题，因此要写一个防抖函数
            // this.$bus.$on('itemImageLoad', () => {
            // 	this.$refs.scroll.refresh();
            // })
            // 加入防抖处理后
            const refresh = debounce(this.$refs.scroll.refresh, 500);
            this.$bus.$on('itemImageLoad', () => {
            	refresh();
            });

		},
		components: {
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl,
			GoodsList,
			Scroll,
			BackTop
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
            	};
            	this.$refs.tabControl1.currentIndex = index;
            	this.$refs.tabControl2.currentIndex = index;
            },
            backClick() {
                this.$refs.scroll.scrollTo(0,0,500);
            },
            scrollPosition(position) {
            	this.isBackTopShow = -position.y > 1000;
            	this.isTabControlfixed = -position.y > (this.tabControlOffsetTop) - 44;
            },
            loadMore() {
            	this.getHomeData(this.currentType);
            	//在图片加载完后，让better-scroll重新计算可滚动的区域，解决滚动不了的bug
            	this.$refs.scroll.refresh(); //这一步不需要了，因为之前已经在每张图片加载完成后都refresh()
            },
            getOffesetTop() {
            	this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
	                //完成了上拉加载更多
	                this.$refs.scroll.finishPullUp();
	            })
			}
		}
	}
</script>