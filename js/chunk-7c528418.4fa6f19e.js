(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c528418"],{"055e":function(t,e,r){},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("17c2"),c=r("9112");for(var i in a){var s=n[i],u=s&&s.prototype;if(u&&u.forEach!==o)try{c(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=a("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},3029:function(t,e,r){},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,o=r("1dde"),c=o("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65aa":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{staticClass:"tab-control-item",on:{click:function(e){return t.itemClick(n)}}},[r("span",{staticClass:"item-text",class:{select:n===t.currentIndex}},[t._v(" "+t._s(e)+" ")])])})),0)},a=[],o={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},c=o,i=(r("eec2"),r("2877")),s=Object(i["a"])(c,n,a,!1,null,"38130b9c",null);e["a"]=s.exports},7114:function(t,e,r){},"80ab":function(t,e,r){},a5f8:function(t,e,r){"use strict";r("80ab")},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b0fb:function(t,e,r){"use strict";r("7114")},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),o=r("df75"),c=r("d039"),i=c((function(){o(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return o(a(t))}})},b65f:function(t,e,r){"use strict";r("055e")},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category"},[r("category-nav-bar"),r("div",{staticClass:"category-content"},[r("scroll",{staticClass:"left-scroll"},[r("category-list",{attrs:{"list-data":t.categories},on:{itemClick:t.selectItem}})],1),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabControl1show,expression:"isTabControl1show"}],staticClass:"tab-control1",attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"right-scroll",attrs:{probeType:3},on:{scrollPosition:t.scrollPosition}},[r("div",[r("sub-category",{attrs:{"sub-content":t.showSubcategory}}),r("tab-control",{ref:"tabControl2",attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showCategoryDetail}})],1)])],1)],1)},a=[],o=r("5530"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav-bar",{staticClass:"category-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])])},i=[],s=r("a7ac"),u={name:"CategoryNavBar",components:{NavBar:s["a"]}},l=u,f=(r("a5f8"),r("2877")),b=Object(f["a"])(l,c,i,!1,null,"4f054e48",null),g=b.exports,d=r("5d17"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-list"},t._l(t.listData,(function(e,n){return r("div",{staticClass:"list-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)},h=[],p={name:"CategoryList",data:function(){return{currentIndex:0}},props:{listData:{type:Array,default:[]}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("itemClick",t)}}},v=p,C=(r("b0fb"),Object(f["a"])(v,y,h,!1,null,"81b5161a",null)),m=C.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sub-category"},t._l(t.subContent.list,(function(e){return r("div",{staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}})]),r("span",[t._v(t._s(e.title))])])})),0)},w=[],_={name:"SubCategory",data:function(){return{}},props:{subContent:Object,default:{}}},D=_,j=(r("b65f"),Object(f["a"])(D,O,w,!1,null,"165ea2a7",null)),k=j.exports,x=r("65aa"),P=r("cc65"),I=r("1bab");function E(){return Object(I["a"])({url:"/category"})}function T(t){return Object(I["a"])({url:"/subcategory",params:{maitKey:t}})}function S(t,e){return Object(I["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var $={name:"Category",components:{CategoryNavBar:g,Scroll:d["a"],CategoryList:m,SubCategory:k,TabControl:x["a"],GoodsList:P["a"]},data:function(){return{categories:[],categoryData:{},currentIndex:-1,currentType:"pop",isTabControl1show:!1,tabControlPosition:0}},created:function(){this._getCategory()},mounted:function(){},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{_getCategory:function(){var t=this;E().then((function(e){t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t._getSubcategories(0)}))},_getSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;T(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(o["a"])({},e.categoryData),e._getCategoryDetail("pop"),e._getCategoryDetail("sell"),e._getCategoryDetail("new")}))},_getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;S(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(o["a"])({},e.categoryData)}))},selectItem:function(t){this._getSubcategories(t)},tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}},scrollPosition:function(t){this.tabControlPosition=this.$refs.tabControl2.$el.offsetTop,this.isTabControl1show=-t.y>this.tabControlPosition}}},N=$,A=(r("d140"),Object(f["a"])(N,n,a,!1,null,"2866eaf4",null));e["default"]=A.exports},d140:function(t,e,r){"use strict";r("3029")},d9f2:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),o=r("56ef"),c=r("fc6a"),i=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),a=i.f,u=o(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),o=r("fc6a"),c=r("06cf").f,i=r("83ab"),s=a((function(){c(1)})),u=!i||s;n({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return c(o(t),e)}})},eec2:function(t,e,r){"use strict";r("d9f2")}}]);
//# sourceMappingURL=chunk-7c528418.4fa6f19e.js.map