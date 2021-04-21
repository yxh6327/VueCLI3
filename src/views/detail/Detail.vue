<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="detailNavbar"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scrollPosition="scrollPosition">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <BackTop @click.native="backClick" v-show="isBackTopShow"></BackTop>
    <detail-bottom-bar @addShopCar="addShopCar" @addFavorites="addFavorites"/>
    <toast :message="message" :is-show="isShow"/>
  </div>
</template>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    /*height: calc(100% - 44px -49px);*/
  }
</style>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import GoodsList from 'components/context/homeGoods/GoodsList.vue'
  import BackTop from 'components/context/backtop/BackTop.vue'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'
  import Toast from 'components/common/toast/Toast.vue'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
  import {itemListenerMixin} from 'common/mixin.js'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      Scroll,
      BackTop,
      DetailBottomBar,
      Toast
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        currentIndex: 0,
        isBackTopShow: false,
        message: '',
        isShow: false
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {  
        const data = res.result;
        console.log(data);
        // 1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        //6.获取评论信息
        if(data.rate.list !== undefined) {
          this.commentInfo = data.rate.list[0];
        }
      })

      //7.获取详情页的推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      })
    },
    minxins: [itemListenerMixin],
    mounted() {
      //加入防抖处理，详情页的推荐数据加载完后让scroll进行一次刷新
      // const refresh = debounce(this.$refs.scroll.refresh, 500);
      // this.itemImgListener = () => {
      //   refresh();
      // };
      // this.$bus.$on('itemImageLoad', this.itemImgListener);
      // 以上代码被混入替换掉了
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener);
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();

        //在image加载完成后拿到各个主题距离顶端的距离
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
      },
      scrollPosition(position) {
        //滚动到一定位置时对应一定的导航栏文字
        for(let i = 0; i < this.themeTopYs.length - 1; i++) {
          if(this.currentIndex !== i) {
            if(-position.y >= this.themeTopYs[i] && -position.y < this.themeTopYs[i + 1]) {
              this.currentIndex = i;
              this.$refs.detailNavbar.currentIndex = i;
            }
          }
        }
        //是否显示返回顶部
        this.isBackTopShow = -position.y > 1000;
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500);
      },
      addShopCar() {
        const product_ = this.getGoodsInfo();
        //当加入购物车这个环节完成后就返回一个信息
        this.$store.dispatch('shopCar', product_).then((res) => {
          //普通的方法使用toast
          this.message = res;
          this.isShow = true;

          setTimeout(() => {
            this.message = '';
            this.isShow = false;
          }, 1500);
          // 插件的方法使用toast
          // this.$toast.methods.show(res, 1500);
        });
      },
      addFavorites() {
        const product_ = this.getGoodsInfo();
        this.$store.dispatch('favorites',product_).then((res) => {
          this.message = res;
          this.isShow = true;

          setTimeout(() => {
            this.message = '';
            this.isShow = false;
          }, 1500);
        })
      },
      getGoodsInfo() {
        const product = {};
        product.iid = this.iid;
        product.title = this.goods.title;
        product.price = this.goods.realPrice;
        product.img = this.topImages[0];
        product.desc = this.goods.desc;
        product.count = 0;
        product.checked = false;
        product.collected = this.goods.columns[1];
        return product;
      }
    }
  }
</script>


