(function(e){function t(t){for(var r,a,o=t[0],s=t[1],l=t[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2174d500":"2aeef4aa","chunk-2688b730":"33a19b2f","chunk-8b2fcd50":"b40463b9","chunk-e5f4ca8e":"b47f2df5","chunk-0478aac9":"b9f85aeb","chunk-15ca13d3":"f119cf24","chunk-2fa65d16":"c12c5392","chunk-50691165":"f74829e3","chunk-50bd394b":"c322340b","chunk-a96850d8":"f159b371"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2174d500":1,"chunk-2688b730":1,"chunk-8b2fcd50":1,"chunk-e5f4ca8e":1,"chunk-0478aac9":1,"chunk-15ca13d3":1,"chunk-2fa65d16":1,"chunk-50691165":1,"chunk-50bd394b":1,"chunk-a96850d8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2174d500":"aa35bca3","chunk-2688b730":"32833a50","chunk-8b2fcd50":"a9ef01c5","chunk-e5f4ca8e":"8489ca03","chunk-0478aac9":"efacabde","chunk-15ca13d3":"63693413","chunk-2fa65d16":"4e298429","chunk-50691165":"c4a66f42","chunk-50bd394b":"e1810931","chunk-a96850d8":"8bb2c33c"}[e]+".css",c=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0648":function(e,t,n){},"2e9a":function(e,t,n){"use strict";n("0648")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-row",[e.isSmall?n("v-col",{staticClass:"pa-0 ma-0",attrs:{col:"12"}},[n("MajorCard")],1):e._e(),n("v-col",{staticClass:"pa-0 ma-0",attrs:{lg:"9",md:"12"}},[n("v-tabs",{staticClass:"sticky",attrs:{"background-color":"grey darken-3",color:"teal lighten-1",dark:"","slider-color":"grey darken-3",height:"70",id:"tabs",centered:"","center-active":"","show-arrows":""},on:{change:function(t){return e.scroll_window()}},model:{value:e.tabs_index,callback:function(t){e.tabs_index=t},expression:"tabs_index"}},e._l(e.tabs,(function(t,r){return n("v-tab",{key:r,class:r==e.tabs_index?"subtitle-1 font-weight-bold":"subtitle-1 font-weight-light",attrs:{ripple:""}},[e._v(e._s(t.text))])})),1),n("v-card",{attrs:{height:e.header_height,color:"grey darken-3",tile:"",dark:"",elevation:"0"}},[n("v-row",{staticClass:"px-5",attrs:{justify:"center"}},[n("v-col",{attrs:{align:"center"}},[n("div",{staticClass:"mt-8 display-1 font-weight-thin"},[e._v(" My name is "),n("b",[e._v("Chuanlong Zhou")]),n("span",{staticClass:"ml-1"},[e._v(" | ")]),n("span",{staticClass:"ml-1 title font-weight-thin"},[e._v("I'm an Environmental Data Scientist.")])])])],1)],1),n("Education",{attrs:{id:"education"}}),n("Research",{attrs:{id:"research"}}),n("Projects",{attrs:{id:"projects"}}),n("Skills",{attrs:{id:"skills"}}),n("Publication",{attrs:{id:"publication"}}),n("Teaching",{attrs:{id:"teaching"}})],1),e.isSmall?e._e():n("v-col",{staticClass:"pa-0 ma-0",attrs:{lg:"3",md:"12"}},[n("MajorCard")],1)],1),n("Footer")],1)},c=[],i=(n("4160"),n("d3b7"),n("159b"),{name:"App",created:function(){window.addEventListener("resize",this.cal_window)},destroyed:function(){window.removeEventListener("resize",this.cal_window)},mounted:function(){this.cal_window(),window.addEventListener("scroll",this.onScroll)},components:{MajorCard:function(){return Promise.all([n.e("chunk-2174d500"),n.e("chunk-2688b730")]).then(n.bind(null,"d298"))},Footer:function(){return n.e("chunk-8b2fcd50").then(n.bind(null,"076e"))},Education:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-0478aac9")]).then(n.bind(null,"ba2a"))},Research:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-50bd394b")]).then(n.bind(null,"5b62"))},Projects:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-2174d500"),n.e("chunk-15ca13d3")]).then(n.bind(null,"17dc"))},Skills:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-2174d500"),n.e("chunk-50691165")]).then(n.bind(null,"0872"))},Publication:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-2174d500"),n.e("chunk-2fa65d16")]).then(n.bind(null,"cbdc"))},Teaching:function(){return Promise.all([n.e("chunk-e5f4ca8e"),n.e("chunk-a96850d8")]).then(n.bind(null,"b102"))}},data:function(){return{header_height:122.8,scrollTimer:-1,tabs_index:0,isSmall:!1,tabs:[{text:"education",id:"education"},{text:"Research Experiences",id:"research"},{text:"Projects",id:"projects"},{text:"Coding Skills",id:"skills"},{text:"Publication",id:"publication"},{text:"Teaching",id:"teaching"}]}},methods:{cal_window:function(){this.isSmall=window.innerWidth<1264,this.header_height=window.innerWidth<1778?145:122.8},scroll_window:function(){var e=document.getElementById(this.tabs[this.tabs_index].id),t=e.offsetTop-120;window.scroll(0,t)},onScroll:function(){var e=this;-1!=this.scrollTimer&&clearTimeout(this.scrollTimer),this.scrollTimer=window.setTimeout((function(){var t=window.pageYOffset,n=-1,r=99999;e.tabs.forEach((function(e,a){Math.abs(t-document.getElementById(e.id).offsetTop)<r&&(r=Math.abs(t-document.getElementById(e.id).offsetTop),n=a)})),e.tabs_index=n,e.scrollTimer=-1}),50)}}}),o=i,s=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),h=n("b0af"),f=n("62ad"),p=n("0fd9"),b=n("71a3"),m=n("fe57"),v=Object(s["a"])(o,a,c,!1,null,null,null),g=v.exports;u()(v,{VApp:d["a"],VCard:h["a"],VCol:f["a"],VRow:p["a"],VTab:b["a"],VTabs:m["a"]});var w=n("f309"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"256.000000pt",height:"256.000000pt",viewBox:"0 0 256.000000 256.000000",preserveAspectRatio:"xMidYMid meet"}},[n("g",{attrs:{transform:"translate(0.000000,256.000000) scale(0.100000,-0.100000)",fill:"#546E7A",stroke:"none"}},[n("path",{attrs:{d:"M1130 2314 c-249 -46 -441 -145 -601 -311 -191 -197 -289 -442 -289\n-722 0 -306 112 -562 337 -771 137 -127 317 -219 502 -257 103 -21 313 -21\n413 1 587 126 946 703 801 1286 -76 305 -319 585 -613 704 -130 53 -205 67\n-370 71 -85 2 -166 1 -180 -1z m445 -531 c22 -34 122 -278 205 -500 16 -46 43\n-119 60 -162 l29 -80 -62 30 c-133 63 -179 41 -392 -180 -76 -79 -167 -151\n-191 -151 -6 0 -28 39 -49 88 -42 93 -92 179 -118 200 -15 13 -11 20 34 72\n110 124 180 236 299 478 132 267 138 273 185 205z m-309 -280 c-19 -47 -109\n-183 -123 -183 -26 0 -83 40 -83 59 0 25 47 66 121 106 72 39 94 44 85 18z\nm-218 -225 c24 -17 42 -37 42 -47 0 -21 -115 -133 -161 -157 l-31 -15 -104 68\nc-57 37 -104 71 -104 75 0 7 122 59 219 93 71 25 77 24 139 -17z"}})])])},_=[],y={},x=Object(s["a"])(y,k,_,!1,null,null,null),E=x.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"}},[n("g",{attrs:{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"white",stroke:"none",id:"icon"}},[n("path",{attrs:{d:"M693 5110 c-322 -35 -574 -252 -665 -575 l-23 -80 0 -1895 0 -1895\n22 -80 c80 -285 280 -482 563 -557 l85 -23 1885 0 1885 0 85 22 c281 75 483\n275 563 558 l22 80 0 1895 0 1895 -23 80 c-81 284 -273 477 -557 557 l-80 23\n-1845 1 c-1015 1 -1878 -2 -1917 -6z m2682 -1181 c97 -18 181 -69 229 -137 42\n-62 36 -83 -34 -117 l-60 -28 -58 55 c-72 69 -108 88 -167 88 -83 0 -157 -47\n-195 -124 -19 -41 -21 -60 -21 -280 0 -158 4 -243 12 -259 64 -124 236 -162\n336 -74 47 41 69 94 78 185 l7 72 -101 0 -101 0 0 65 0 65 180 0 180 0 0 -143\nc0 -199 -26 -277 -116 -356 -109 -96 -332 -130 -459 -70 -59 28 -116 83 -145\n138 -42 84 -54 164 -53 366 1 282 25 376 120 467 80 78 229 113 368 87z\nm-1284 -639 c147 -12 229 -38 323 -101 126 -84 186 -172 208 -304 14 -86 -1\n-218 -36 -306 -56 -138 -198 -281 -330 -332 -33 -12 -61 -27 -63 -33 -4 -12\n231 -368 312 -474 154 -201 275 -307 382 -336 l63 -17 0 -43 c0 -42 -1 -43\n-42 -55 -58 -15 -211 -6 -268 16 -118 47 -224 141 -337 300 -82 116 -319 487\n-344 538 l-23 47 -119 0 -120 0 7 -302 c9 -360 14 -403 54 -439 30 -27 118\n-49 195 -49 l37 0 0 -45 0 -45 -400 0 -400 0 0 39 c0 43 -6 40 122 75 63 18\n91 46 108 105 13 46 13 1421 0 1510 -14 99 -43 121 -190 148 l-45 8 0 45 0 45\n225 5 c407 10 563 10 681 0z"}}),n("path",{attrs:{d:"M1741 3143 l-54 -4 8 -387 c4 -213 9 -391 12 -396 9 -14 310 2 373\n20 167 47 254 148 281 327 19 130 -11 232 -97 321 -101 106 -243 138 -523 119z"}})])])},P=[],T=(n("2e9a"),{}),C=Object(s["a"])(T,j,P,!1,null,"a8804efe",null),M=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"225.000000pt",height:"225.000000pt",viewBox:"0 0 225.000000 225.000000",preserveAspectRatio:"xMidYMid meet"}},[n("g",{attrs:{transform:"translate(0.000000,225.000000) scale(0.100000,-0.100000)",fill:"white",stroke:"none",id:"icon"}},[n("path",{attrs:{d:"M288 2239 c-148 -22 -255 -132 -278 -285 -13 -92 -13 -1566 0 -1658\n23 -158 129 -263 287 -286 91 -13 1566 -13 1657 0 158 23 263 129 286 287 13\n90 13 1566 0 1656 -23 158 -128 264 -286 287 -84 12 -1583 11 -1666 -1z m1442\n-477 c0 -4 -16 -23 -35 -42 -31 -30 -35 -40 -35 -86 0 -29 5 -56 10 -59 6 -4\n10 -100 10 -255 0 -236 -1 -250 -19 -260 -28 -14 -52 -12 -73 7 -16 15 -18 36\n-18 252 0 199 3 240 16 259 8 12 14 32 12 44 -3 18 -14 11 -95 -56 l-91 -76\n14 -53 c32 -122 6 -205 -95 -300 -33 -32 -66 -68 -72 -79 -18 -33 6 -71 97\n-153 106 -97 138 -157 139 -259 0 -60 -4 -78 -28 -119 -35 -59 -108 -118 -184\n-149 -51 -20 -75 -23 -198 -22 -119 0 -149 3 -199 22 -128 47 -187 109 -194\n201 -3 44 1 67 17 98 45 89 177 168 332 198 l87 17 -20 35 c-16 26 -19 44 -15\n77 l6 43 -66 17 c-75 18 -132 49 -182 98 -37 36 -81 120 -81 156 0 22 -1 22\n-155 22 -85 0 -155 3 -154 8 0 4 107 100 237 214 l237 207 398 0 c218 1 397\n-3 397 -7z"}}),n("path",{attrs:{d:"M1022 1570 c-18 -4 -42 -16 -54 -26 -74 -67 -59 -237 29 -328 48 -49\n88 -66 155 -66 92 0 128 44 128 157 0 165 -127 295 -258 263z"}}),n("path",{attrs:{d:"M1090 806 c-79 -17 -145 -52 -184 -98 -70 -81 -54 -161 39 -208 44\n-22 62 -25 155 -24 83 1 114 5 150 21 48 21 103 76 115 113 20 62 -31 143\n-112 178 -68 28 -101 32 -163 18z"}})])])},O=[],z=(n("6d1f"),{}),A=Object(s["a"])(z,S,O,!1,null,"57b29cc6",null),B=A.exports;r["a"].use(w["a"]);var L=new w["a"]({icons:{values:{matlab_icon:{component:E},research_gate_icon:{component:M},google_scholar_icon:{component:B}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:L,render:function(e){return e(g)}}).$mount("#app")},"6d1f":function(e,t,n){"use strict";n("766d")},"766d":function(e,t,n){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b87e67c4.js.map