(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69f2c13e"],{"1b3d":function(t,e,i){t.exports=i.p+"img/clarkson.543a20fd.png"},"1baa":function(t,e,i){"use strict";var s=i("5530"),a=(i("899c"),i("604c")),n=i("a9ad"),o=i("58df");e["a"]=Object(o["a"])(a["a"],n["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(s["a"])(Object(s["a"])({},a["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},3408:function(t,e,i){},"61d2":function(t,e,i){},7093:function(t,e,i){t.exports=i.p+"img/fuzhou.1298fe97.png"},"899c":function(t,e,i){},"9fce":function(t,e,i){"use strict";i("e9bc")},ba2a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-5",attrs:{elevation:"0",tile:"",color:t.bg_color}},[i("v-container",{staticClass:"py-0"},[i("v-row",{attrs:{justify:"center"}},[i("v-card",{staticClass:"px-0",attrs:{elevation:"0",tile:"",width:"1200",color:t.bg_color}},[i("v-fab-transition",[i("v-btn",{attrs:{color:"white",dark:"",absolute:"",top:"",left:"",fab:"","x-large":!t.isSmall}},[i("v-icon",{attrs:{color:t.theme_color}},[t._v(t._s(t.main_icon))])],1)],1),i("v-card-text",[i("v-list",{staticClass:"mb-10",attrs:{color:t.bg_color}},[i("v-subheader",{staticClass:"px-0 mx-0 mt-5"},[i("v-row",{staticClass:"px-0 mx-0",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"4"}},[i("span",{class:t.isSmall?t.theme_text_color+" subtitle-1":t.theme_text_color+" title"},[t._v(" Education ")])]),i("v-spacer"),i("v-col",{attrs:{cols:"5"}},[i("span",{staticClass:"subtitle-1"},[t._v(" Degree ")])]),i("v-col",{attrs:{cols:"3"}},[i("span",{staticClass:"subtitle-1"},[t._v(" Date ")])])],1)],1),i("v-list-item-group",{attrs:{"active-class":"border",color:t.theme_color}},t._l(t.edu,(function(e,s){return i("v-list-item",{key:s,staticClass:"pa-0"},[i("v-row",{staticClass:"px-0 mx-0",attrs:{justify:"center"}},[i("v-col",{staticClass:"px-0",attrs:{lg:"1",sm:"2",align:"center"}},[i("v-avatar",{attrs:{size:"75"}},[i("img",{attrs:{src:e.img,alt:"John"}})])],1),t.isExSmall?t._e():i("v-col",{attrs:{cols:"3","align-self":"center"}},[i("span",{staticClass:"subtitle-1 font-weight-light"},[t._v(t._s(e.name))])]),i("v-col",{attrs:{lg:"5",sm:"4","align-self":"center"}},[i("span",{staticClass:"subtitle-1"},[t._v(t._s(e.degree))])]),i("v-col",{attrs:{cols:"3","align-self":"center"}},[i("span",{staticClass:"subtitle-1 font-weight-light"},[t._v(" "+t._s(e.date))])])],1)],1)})),1)],1)],1)],1)],1),i("v-divider")],1)],1)},a=[],n={name:"education",created:function(){window.addEventListener("resize",this.cal_window)},destroyed:function(){window.removeEventListener("resize",this.cal_window)},mounted:function(){this.cal_window()},methods:{cal_window:function(){this.isSmall=window.innerWidth<1264,this.isExSmall=window.innerWidth<600}},data:function(){return{main_icon:"mdi-school",bg_color:"white",theme_color:"teal darken-2",theme_text_color:"teal--text text--darken-2",isSmall:!1,isExSmall:!1,edu:[{name:"Georgia Institute of Technology",degree:"M.S. of Computer Science",date:"2019 - 2021",img:i("d3b9")},{name:"Clarkson University",degree:"Ph.D. of Civil and Environmental Engineering",date:"2014 - 2018",img:i("1b3d")},{name:"Tongji University",degree:"M.S. of Agricultural Engineering",date:"2011 - 2014",img:i("ce9a")},{name:"Fuzhou University",degree:"B.S. of Water Supply and Sewage Engineering",date:"2007 - 2011",img:i("7093")}]}}},o=n,l=(i("9fce"),i("2877")),r=i("6544"),c=i.n(r),d=(i("a9e3"),i("5530")),u=(i("3408"),i("a9ad")),h=i("24b2"),v=i("a236"),m=i("80d2"),f=i("58df"),b=Object(f["a"])(u["a"],h["a"],v["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(d["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(d["a"])({height:Object(m["d"])(this.size),minWidth:Object(m["d"])(this.size),width:Object(m["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),p=i("8336"),g=i("b0af"),w=i("99d9"),C=i("62ad"),_=i("a523"),x=i("ce7e"),j=i("0789"),O=i("132d"),y=i("8860"),k=i("da13"),S=i("1baa"),I=i("0fd9"),V=i("2fa4"),B=i("e0c7"),L=Object(l["a"])(o,s,a,!1,null,"399be63c",null);e["default"]=L.exports;c()(L,{VAvatar:b,VBtn:p["a"],VCard:g["a"],VCardText:w["b"],VCol:C["a"],VContainer:_["a"],VDivider:x["a"],VFabTransition:j["a"],VIcon:O["a"],VList:y["a"],VListItem:k["a"],VListItemGroup:S["a"],VRow:I["a"],VSpacer:V["a"],VSubheader:B["a"]})},ce9a:function(t,e,i){t.exports=i.p+"img/tongji.58028a9d.png"},d3b9:function(t,e,i){t.exports=i.p+"img/gatech.ada45412.png"},da13:function(t,e,i){"use strict";var s=i("5530"),a=(i("61d2"),i("a9ad")),n=i("1c87"),o=i("4e82"),l=i("7560"),r=i("f2e7"),c=i("5607"),d=i("80d2"),u=i("d9bd"),h=i("58df"),v=Object(h["a"])(a["a"],n["a"],l["a"],Object(o["a"])("listItemGroup"),Object(r["b"])("inputValue"));e["a"]=v.extend().extend({name:"v-list-item",directives:{Ripple:c["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item":!0},n["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(n["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(u["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(s["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),a=i.tag,n=i.data;n.attrs=Object(s["a"])(Object(s["a"])({},n.attrs),this.genAttrs()),n[this.to?"nativeOn":"on"]=Object(s["a"])(Object(s["a"])({},n[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===d["l"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(a="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);var o=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(a,this.setTextColor(this.color,n),o)}})},e9bc:function(t,e,i){}}]);
//# sourceMappingURL=chunk-69f2c13e.6e2d2c9d.js.map