(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07e6bca4"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,c={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==c.call(t)?o(t):i(r(t))}},"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,c="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,s,u,f){var l=n+t.length,p=s.length,v=o;return void 0!==u&&(u=r(u),v=a),c.call(f,v,(function(r,c){var a;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":a=u[c.slice(1,-1)];break;default:var o=+c;if(0===o)return r;if(o>p){var f=i(o/10);return 0===f?r:f<=p?void 0===s[f-1]?c.charAt(1):s[f-1]+c.charAt(1):r}a=s[o-1]}return void 0===a?"":a}))}},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),c=n("17c2"),a=n("9112");for(var o in i){var s=r[o],u=s&&s.prototype;if(u&&u.forEach!==c)try{a(u,"forEach",c)}catch(f){u.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),c=i("forEach");t.exports=c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1eb1":function(t,e,n){"use strict";n("26e0")},2627:function(t,e,n){t.exports=n.p+"img/vip.c9cdc9ff.svg"},"26e0":function(t,e,n){},"3a54":function(t,e,n){},"3b42":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("nav-bar",{staticClass:"nav-bar"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("龙龙龙龙龙小猫")])]),n("profile-sign-in"),n("profile-wallet"),n("profile-list")],1)},i=[],c=n("a7ac"),a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-in"},[r("div",{staticClass:"image"},[r("img",{attrs:{src:n("4c68"),alt:""}})]),r("div",{staticClass:"text"},[r("span",[t._v("登录/注册")]),r("span",{staticClass:"phone"},[t._v("暂无绑定手机号")])]),r("div",{staticClass:"more"})])}],s={name:"ProfileSignIn"},u=s,f=(n("75e5"),n("2877")),l=Object(f["a"])(u,a,o,!1,null,"4cd07fae",null),p=l.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wallet"},[t._m(0),t._m(1),n("div",{staticClass:"item",on:{click:t.favoritesClick}},[n("p",[n("span",[t._v(t._s(t.favoritesListLength))]),t._v("个")]),n("p",[t._v("收藏夹")])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item item1"},[n("p",[n("span",[t._v("0.00")]),t._v("元")]),n("p",[t._v("我的余额")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item item2"},[n("p",[n("span",[t._v("0")]),t._v("分")]),n("p",[t._v("我的积分")])])}],g=n("5530"),b=n("2f62"),h={name:"ProfileWallet",computed:Object(g["a"])({},Object(b["b"])(["favoritesListLength"])),methods:{favoritesClick:function(){this.$router.push("/favorites")}}},m=h,y=(n("695e"),Object(f["a"])(m,v,d,!1,null,"18e500db",null)),_=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t._m(0),t._m(1),t._m(2),n("div",{staticClass:"item",on:{click:t.itemClick}},[t._m(3),n("span",[t._v("我的购物车")])]),t._m(4)])},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("span",[r("img",{attrs:{src:n("9dc3"),alt:""}})]),r("span",[t._v("我的消息")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("span",[r("img",{attrs:{src:n("3d7a"),alt:""}})]),r("span",[t._v("积分商城")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("span",[r("img",{attrs:{src:n("2627"),alt:""}})]),r("span",[t._v("会员卡")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("img",{attrs:{src:n("af67"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("span",[r("img",{attrs:{src:n("d88a"),alt:""}})]),r("span",[t._v("下载购物App")])])}],O=(n("5319"),n("ac1f"),{name:"ProfileList",methods:{itemClick:function(){this.$router.replace("/shopcar")}}}),w=O,P=(n("94f1"),Object(f["a"])(w,x,E,!1,null,"4f976339",null)),S=P.exports,j={name:"Profile",components:{NavBar:c["a"],ProfileSignIn:p,ProfileWallet:_,ProfileList:S}},C=j,$=(n("c448"),Object(f["a"])(C,r,i,!1,null,"ed834fc8",null));e["default"]=$.exports},"3d7a":function(t,e,n){t.exports=n.p+"img/pointer.71eb1cd2.svg"},"4c68":function(t,e,n){t.exports=n.p+"img/headimg.e0870eb8.jpg"},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,c=n("1dde"),a=c("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),c=n("50c4"),a=n("a691"),o=n("1d80"),s=n("8aa5"),u=n("0cb2"),f=n("14c3"),l=Math.max,p=Math.min,v=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,b=d?"$":"$0";return[function(n,r){var i=o(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!d&&g||"string"===typeof r&&-1===r.indexOf(b)){var o=n(e,t,this,r);if(o.done)return o.value}var h=i(t),m=String(this),y="function"===typeof r;y||(r=String(r));var _=h.global;if(_){var x=h.unicode;h.lastIndex=0}var E=[];while(1){var O=f(h,m);if(null===O)break;if(E.push(O),!_)break;var w=String(O[0]);""===w&&(h.lastIndex=s(m,c(h.lastIndex),x))}for(var P="",S=0,j=0;j<E.length;j++){O=E[j];for(var C=String(O[0]),$=l(p(a(O.index),m.length),0),R=[],I=1;I<O.length;I++)R.push(v(O[I]));var k=O.groups;if(y){var T=[C].concat(R,$,m);void 0!==k&&T.push(k);var A=String(r.apply(void 0,T))}else A=u(C,m,$,R,k,r);$>=S&&(P+=m.slice(S,$)+A,S=$+C.length)}return P+m.slice(S)}]}))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"695e":function(t,e,n){"use strict";n("c8a9")},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),c=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:c.f(t)})}},"75e5":function(t,e,n){"use strict";n("3a54")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),c=RegExp.prototype.exec,a=String.prototype.replace,o=c,s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],l=s||f||u;l&&(o=function(t){var e,n,i,o,l=this,p=u&&l.sticky,v=r.call(l),d=l.source,g=0,b=t;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),b=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(d="(?: "+d+")",b=" "+b,g++),n=new RegExp("^(?:"+d+")",v)),f&&(n=new RegExp("^"+d+"$(?!\\s)",v)),s&&(e=l.lastIndex),i=c.call(p?n:l,b),p?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=l.lastIndex,l.lastIndex+=i[0].length):l.lastIndex=0:s&&i&&(l.lastIndex=l.global?i.index+i[0].length:e),f&&i&&i.length>1&&a.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"94f1":function(t,e,n){"use strict";n("f550")},"9dc3":function(t,e,n){t.exports=n.p+"img/message.9948ca06.svg"},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("d066"),a=n("c430"),o=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),p=n("e8b5"),v=n("861d"),d=n("825a"),g=n("7b0b"),b=n("fc6a"),h=n("c04e"),m=n("5c6c"),y=n("7c73"),_=n("df75"),x=n("241c"),E=n("057f"),O=n("7418"),w=n("06cf"),P=n("9bf2"),S=n("d1e7"),j=n("9112"),C=n("6eeb"),$=n("5692"),R=n("f772"),I=n("d012"),k=n("90e3"),T=n("b622"),A=n("e538"),N=n("746f"),D=n("d44e"),U=n("69f3"),L=n("b727").forEach,B=R("hidden"),F="Symbol",J="prototype",K=T("toPrimitive"),M=U.set,W=U.getterFor(F),G=Object[J],X=i.Symbol,Y=c("JSON","stringify"),Q=w.f,q=P.f,z=E.f,H=S.f,V=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),nt=$("wks"),rt=i.QObject,it=!rt||!rt[J]||!rt[J].findChild,ct=o&&f((function(){return 7!=y(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(G,e);r&&delete G[e],q(t,e,n),r&&t!==G&&q(G,e,r)}:q,at=function(t,e){var n=V[t]=y(X[J]);return M(n,{type:F,tag:t,description:e}),o||(n.description=e),n},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},st=function(t,e,n){t===G&&st(Z,e,n),d(t);var r=h(e,!0);return d(n),l(V,r)?(n.enumerable?(l(t,B)&&t[B][r]&&(t[B][r]=!1),n=y(n,{enumerable:m(0,!1)})):(l(t,B)||q(t,B,m(1,{})),t[B][r]=!0),ct(t,r,n)):q(t,r,n)},ut=function(t,e){d(t);var n=b(e),r=_(n).concat(dt(n));return L(r,(function(e){o&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=h(t,!0),n=H.call(this,e);return!(this===G&&l(V,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(V,e)||l(this,B)&&this[B][e])||n)},pt=function(t,e){var n=b(t),r=h(e,!0);if(n!==G||!l(V,r)||l(Z,r)){var i=Q(n,r);return!i||!l(V,r)||l(n,B)&&n[B][r]||(i.enumerable=!0),i}},vt=function(t){var e=z(b(t)),n=[];return L(e,(function(t){l(V,t)||l(I,t)||n.push(t)})),n},dt=function(t){var e=t===G,n=z(e?Z:b(t)),r=[];return L(n,(function(t){!l(V,t)||e&&!l(G,t)||r.push(V[t])})),r};if(s||(X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=k(t),n=function(t){this===G&&n.call(Z,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),ct(this,e,m(1,t))};return o&&it&&ct(G,e,{configurable:!0,set:n}),at(e,t)},C(X[J],"toString",(function(){return W(this).tag})),C(X,"withoutSetter",(function(t){return at(k(t),t)})),S.f=lt,P.f=st,w.f=pt,x.f=E.f=vt,O.f=dt,A.f=function(t){return at(T(t),t)},o&&(q(X[J],"description",{configurable:!0,get:function(){return W(this).description}}),a||C(G,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:X}),L(_(nt),(function(t){N(t)})),r({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=X(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!o},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:dt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),Y){var gt=!s||f((function(){var t=X();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(r=e,(v(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),i[1]=e,Y.apply(null,i)}})}X[J][K]||j(X[J],K,X[J].valueOf),D(X,F),I[B]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a7ac:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"center"},[t._t("center")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},i=[],c={name:"NavBar"},a=c,o=(n("1eb1"),n("2877")),s=Object(o["a"])(a,r,i,!1,null,null,null);e["a"]=s.exports},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},af67:function(t,e,n){t.exports=n.p+"img/cart.0103a021.svg"},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),c=n("df75"),a=n("d039"),o=a((function(){c(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(t){return c(i(t))}})},c448:function(t,e,n){"use strict";n("f225")},c8a9:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),c=n("b622"),a=n("9263"),o=n("9112"),s=c("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),l=c("replace"),p=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),v=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var d=c(t),g=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),b=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!g||!b||"replace"===t&&(!u||!f||p)||"split"===t&&!v){var h=/./[d],m=n(d,""[t],(function(t,e,n,r,i){return e.exec===a?g&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=m[0],_=m[1];r(String.prototype,t,y),r(RegExp.prototype,d,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}l&&o(RegExp.prototype[d],"sham",!0)}},d88a:function(t,e,n){t.exports=n.p+"img/shopping.7354bae5.svg"},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),c=n("56ef"),a=n("fc6a"),o=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),i=o.f,u=c(r),f={},l=0;while(u.length>l)n=i(r,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),c=n("fc6a"),a=n("06cf").f,o=n("83ab"),s=i((function(){a(1)})),u=!o||s;r({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return a(c(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},f225:function(t,e,n){},f550:function(t,e,n){}}]);
//# sourceMappingURL=chunk-07e6bca4.6d88cf68.js.map