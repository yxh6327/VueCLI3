(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0e5179e"],{"3a0d":function(t,e,r){"use strict";r("9120")},"3a7a":function(t,e,r){},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,f,d,m,p=o(t),b="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,w=l(p),y=0;if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==w||b==Array&&i(w))for(e=s(p.length),r=new b(e);e>y;y++)m=g?v(p[y],y):p[y],c(r,y,m);else for(f=w.call(p),d=f.next,r=new b;!(u=d.call(f)).done;y++)m=g?a(f,v,[u.value,y],!0):u.value,c(r,y,m);return r.length=y,r}},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"65aa":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{staticClass:"tab-control-item",on:{click:function(e){return t.itemClick(n)}}},[r("span",{staticClass:"item-text",class:{select:n===t.currentIndex}},[t._v(" "+t._s(e)+" ")])])})),0)},o=[],a={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},i=a,s=(r("eec2"),r("2877")),c=Object(s["a"])(i,n,o,!1,null,"38130b9c",null);e["a"]=c.exports},"82c6":function(t,e,r){"use strict";r("cea3")},9120:function(t,e,r){},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(i){throw o(t),i}}},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物车")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabControlfixed,expression:"isTabControlfixed"}],ref:"tabControl1",staticClass:"tab-control",class:{fixed:t.isTabControlfixed},attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{probeType:3,pullUpLoad:!0},on:{scrollPosition:t.scrollPosition,loadMore:t.loadMore}},[r("home-swiper",{attrs:{banner:t.banner},on:{swiperImageLoad:t.getOffesetTop}}),r("recommend-view",{attrs:{recommend:t.recommend}}),r("feature-view"),r("tab-control",{ref:"tabControl2",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showGoods}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isBackTopShow,expression:"isBackTopShow"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},o=[];function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return a(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0");function c(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||s(t)||c(t)||l()}var f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Swiper",t._l(t.banner,(function(e){return r("SwiperItem",[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.swiperImageLoad}})])])})),1)},d=[],m=r("dc2c"),p={name:"HomeSwiper",data:function(){return{isImageLoad:!1}},props:{banner:{type:Array,default:function(){return[]}}},components:{Swiper:m["a"],SwiperItem:m["b"]},methods:{swiperImageLoad:function(){this.isImageLoad||(this.$emit("swiperImageLoad"),this.isImageLoad=!0)}}},b=p,h=r("2877"),v=Object(h["a"])(b,f,d,!1,null,null,null),g=v.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"recommend-view"}},t._l(t.recommend,(function(e){return r("RecommendViewItem",{staticClass:"item"},[r("div",{attrs:{slot:"image"},slot:"image"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}})])]),r("div",{staticClass:"text",attrs:{slot:"text"},slot:"text"},[t._v(t._s(e.title))])])})),1)},y=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("image"),t._t("text")],2)},x=[],k={name:"RecommendViewItem"},T=k,_=Object(h["a"])(T,C,x,!1,null,null,null),S=_.exports,$={name:"RecommendView",props:{recommend:{type:Array,default:function(){return[]}}},components:{RecommendViewItem:S}},I=$,A=(r("82c6"),Object(h["a"])(I,w,y,!1,null,"35a97438",null)),O=A.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"feature-view"}},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],H={name:"FeatureView"},E=H,M=(r("c1b5"),Object(h["a"])(E,j,L,!1,null,"d997b552",null)),V=M.exports,B=r("a7ac"),D=r("65aa"),R=r("cc65"),P=r("5d17"),Y=r("75ff"),G=r("1bab");function N(){return Object(G["a"])({url:"home/multidata"})}function U(t,e){return Object(G["a"])({url:"/home/data",params:{type:t,page:e}})}var z=r("eecb"),F={name:"Home",data:function(){return{banner:[],recommend:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isBackTopShow:!1,tabControlOffsetTop:0,isTabControlfixed:!1,saveY:0,itemImgListener:null}},computed:{showGoods:function(){return this.goods[this.currentType].list}},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,1),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImageLoad",this.itemImgListener)},created:function(){this.getHomeMultidata(),this.getHomeData("pop"),this.getHomeData("new"),this.getHomeData("sell")},minxins:[z["a"]],mounted:function(){},components:{HomeSwiper:g,RecommendView:O,FeatureView:V,NavBar:B["a"],TabControl:D["a"],GoodsList:R["a"],Scroll:P["a"],BackTop:Y["a"]},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},backClick:function(){this.$refs.scroll.scrollTo(0,0,500)},scrollPosition:function(t){this.isTabControlfixed=-t.y>this.tabControlOffsetTop-44,this.isBackTopShow=-t.y>1e3},loadMore:function(){this.getHomeData(this.currentType),this.$refs.scroll.refresh()},getOffesetTop:function(){this.tabControlOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;N().then((function(e){t.banner=e.data.banner.list,t.recommend=e.data.recommend.list}))},getHomeData:function(t){var e=this,r=this.goods[t].page+1;U(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,u(r.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))}}},J=F,q=(r("3a0d"),Object(h["a"])(J,n,o,!1,null,"de4f15c2",null));e["default"]=q.exports},c1b5:function(t,e,r){"use strict";r("3a7a")},cea3:function(t,e,r){},d28b:function(t,e,r){var n=r("746f");n("iterator")},d9f2:function(t,e,r){},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=a.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var m=d.prototype=u.prototype;m.constructor=d;var p=m.toString,b="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var r=b?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},eec2:function(t,e,r){"use strict";r("d9f2")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),f=r("1dde"),d=f("slice"),m=u("species"),p=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,u,f=c(this),d=s(f.length),h=i(t,d),v=i(void 0===e?d:e,d);if(a(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(f,h,v);for(n=new(void 0===r?Array:r)(b(v-h,0)),u=0;h<v;h++,u++)h in f&&l(n,u,f[h]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-c0e5179e.a5860c76.js.map