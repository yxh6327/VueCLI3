<template>
	<div class="category">
        <category-nav-bar/>
        <div class="category-content">
        	<scroll class="left-scroll">
        		<category-list :list-data="categories" @itemClick="selectItem"/>
        	</scroll>
            <tab-control :titles="['综合','新品','销量']" 
                         @tabClick="tabClick" 
                         class="tab-control1"
                         v-show="isTabControl1show"/>
        	<scroll class="right-scroll" 
                    ref="scroll" 
                    :probeType="3"
                    @scrollPosition="scrollPosition">
                <div>
                    <sub-category :sub-content="showSubcategory"></sub-category>
                    <tab-control :titles="['综合','新品','销量']" 
                                 @tabClick="tabClick" ref="tabControl2"/>
                    <goods-list :goods="showCategoryDetail"></goods-list>
                </div>
        	</scroll>
        </div>
	</div>
</template>

<style scoped>
    .category{
    	width: 100%;
    	height: 100vh;
        font-size: 14px;
    }
    .category-content{
    	display: flex;
    	position: absolute;
    	top: 44px;
    	bottom: 49px;
    	left: 0;
    	right: 0;
    }
    .left-scroll{
        height: 100%;
        width: 100px;
        overflow: hidden;
        background-color: #f5f5f5;
    }
    .right-scroll{
    	height: 100%;
        flex: 1;
        overflow: hidden;
    }
    .tab-control1{
        position: fixed;
        top: 45px;
        left: 100px;
        width: 275px;
        background-color: #fff;
        z-index: 9;
    }
</style>

<script>
import CategoryNavBar from './childComps/CategoryNavBar.vue'
import Scroll from '../..//components/common/scroll/Scroll.vue'
import CategoryList from './childComps/CategoryList.vue'
import SubCategory from './childComps/SubCategory.vue'
import TabControl from 'components/context/tabControl/TabControl.vue'
import GoodsList from 'components/context/homeGoods/GoodsList.vue'

import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'

	export default{
		name: 'Category',			
		components: {
			CategoryNavBar,
			Scroll,
			CategoryList,
            SubCategory,
            TabControl,
            GoodsList
		},
        data() {
            return {
                categories: [],
                categoryData: {},
                currentIndex: -1,
                currentType: 'pop',
                isTabControl1show: false,
                tabControlPosition: 0
          }
        },
        created() {
              // 1.请求分类数据
          this._getCategory()
        },
        mounted() {
            
        },
        computed: {
              showSubcategory() {
                if (this.currentIndex === -1) return {}
            return this.categoryData[this.currentIndex].subcategories
          },
          showCategoryDetail() {
                if (this.currentIndex === -1) return []
                return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
          }
        },
        methods: {
            _getCategory() {
                getCategory().then(res => {
                    // 1.获取分类数据
                    this.categories = res.data.category.list
                    // 2.初始化每个类别的子数据
                    for (let i = 0; i < this.categories.length; i++) {
                        this.categoryData[i] = {
                        subcategories: {},
                        categoryDetail: {
                            'pop': [],
                            'new': [],
                             'sell': []
                        }
                        }
                    }
                    // 3.请求第一个分类的数据
                    this._getSubcategories(0)
                })
            },
            _getSubcategories(index) {
                this.currentIndex = index;
                var mailKey = this.categories[index].maitKey;
                getSubcategory(mailKey).then(res => {
                    this.categoryData[index].subcategories = res.data
                    this.categoryData = {...this.categoryData}
                    this._getCategoryDetail('pop')
                    this._getCategoryDetail('sell')
                    this._getCategoryDetail('new')
                })
            },
            _getCategoryDetail(type) {
                // 1.获取请求的miniWallkey
                const miniWallkey = this.categories[this.currentIndex].miniWallkey;
                // 2.发送请求,传入miniWallkey和type
                getCategoryDetail(miniWallkey, type).then(res => {
                    // 3.将获取的数据保存下来
                    this.categoryData[this.currentIndex].categoryDetail[type] = res;
                    this.categoryData = {...this.categoryData}
                })
            },
          /**
           * 事件响应相关的方法
           */
            selectItem(index) {
                this._getSubcategories(index)
            },
            tabClick(index) {
                switch (index) {
                    case 0:
                      this.currentType = 'pop'
                      break
                    case 1:
                      this.currentType = 'new'
                      break
                    case 2:
                      this.currentType = 'sell'
                      break
                }
            },
            //监听scroll的滚动
            scrollPosition(position) {
                this.tabControlPosition = this.$refs.tabControl2.$el.offsetTop;
                this.isTabControl1show = -position.y > this.tabControlPosition;
            }
        }
	}
</script>