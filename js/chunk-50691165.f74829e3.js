(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50691165"],{"0872":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-5",attrs:{elevation:"0",tile:"",color:t.bg_color}},[a("v-container",{staticClass:"py-0"},[a("v-row",{attrs:{justify:"center"}},[a("v-card",{staticClass:"px-0",attrs:{elevation:"0",tile:"",width:"1200",color:t.bg_color}},[a("v-fab-transition",[a("v-btn",{attrs:{color:t.theme_color,dark:"",absolute:"",top:"",left:"",fab:"","x-large":!t.isSmall}},[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.main_icon))])],1)],1),a("v-card-text",[a("v-list",{staticClass:"mb-10",attrs:{color:t.bg_color}},[a("v-subheader",{staticClass:"px-0 mx-0 mt-5"},[a("v-row",{staticClass:"px-0 mx-0",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("span",{class:t.theme_text_color+" title"},[t._v(" Coding Skills ")])]),a("v-spacer")],1)],1),a("v-row",{staticClass:"px-0 mx-0",attrs:{justify:"center"}},t._l(t.skills,(function(e,o){return a("v-col",{key:o,staticClass:"py-0 my-0",attrs:{cols:"6","align-self":"center",align:"center"}},[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-icon",{attrs:{color:e.color,"x-large":""}},[t._v(" "+t._s(e.icon)+" ")]),a("br"),a("span",{staticClass:"subtitle-1 font-weight-light"},[t._v(" "+t._s(e.name))])],1),a("v-col",{attrs:{"align-self":"center",align:"center"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,r=o.attrs;return[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var i=o.hover;return[a("v-progress-linear",t._g(t._b({attrs:{value:e.num,color:e.color,stream:!!i,"buffer-value":i?0:100,height:"15",rounded:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.value;return[a("strong",{staticClass:"white--text"},[t._v(t._s(Math.ceil(o))+"%")])]}}],null,!0)},"v-progress-linear",r,!1),n))]}}],null,!0)})]}}],null,!0)},[a("span",{domProps:{innerHTML:t._s(e.tooltip)}})])],1)],1)],1)})),1)],1)],1)],1)],1),a("v-divider")],1)],1)},n=[],r={name:"education",created:function(){window.addEventListener("resize",this.cal_window)},destroyed:function(){window.removeEventListener("resize",this.cal_window)},mounted:function(){this.cal_window()},methods:{cal_window:function(){this.isSmall=window.innerWidth<1264}},data:function(){return{main_icon:"mdi-coffee",bg_color:"grey lighten-5",theme_color:"brown darken-3",theme_text_color:"brown--text text--darken-3",isSmall:!1,proj_index:0,skills:[{name:"Python",icon:"mdi-language-python",num:90,text_color:"deep-purple--text text--darken-1",color:"deep-purple darken-1",tooltip:"Familiar with Numpy, Pandas, Matplotlib, Scikit-learn, <br/>\n        OpenCV, Pytorch, PyQt5, Flask, PySQLite, PyMongo,<br/> \n        Beautifulsoup, Selenium..."},{name:"JavaScript",icon:"mdi-language-javascript",num:75,text_color:"amber--text text--darken-1",color:"amber darken-1",tooltip:"Familiar with JavaScript ES6, as well as HTML5 and basic CSS."},{name:"Vue.js",icon:"mdi-vuejs",num:75,text_color:"teal--text text--darken-2",color:"teal darken-2",tooltip:"Familiar with Vue.js and Vuetify.js as UI framework <br/>\n        for web applications development."},{name:"D3.js",icon:"mdi-alpha-d-circle",num:60,text_color:"orange--text text--darken-4",color:"orange darken-4",tooltip:"Familiar d3v5 for most types of scientific plottings, <br/>\n        still learning for more fancy d3 visualizations."},{name:"MATLAB",icon:"$matlab_icon",num:70,text_color:"blue-grey--text text--darken-1",color:"blue-grey darken-1",tooltip:"Familiar data analysis and visualization with MATLAB,  <br/>\n        and used it for software development."},{name:"R",icon:"mdi-language-r",num:50,text_color:"light-blue--text text--darken-3",color:"light-blue darken-3",tooltip:"Familiar with syntax and basic packages,<br/>\n        can extend its usage if necessary."}]}}},i=r,s=(a("9287"),a("2877")),l=a("6544"),c=a.n(l),d=a("8336"),u=a("b0af"),v=a("99d9"),m=a("62ad"),p=a("a523"),f=a("ce7e"),h=a("0789"),b=a("ce87"),g=a("132d"),_=a("8860"),w=a("8e36"),x=a("0fd9"),y=a("2fa4"),k=a("e0c7"),S=a("3a2f"),V=Object(s["a"])(i,o,n,!1,null,"10fe5cb8",null);e["default"]=V.exports;c()(V,{VBtn:d["a"],VCard:u["a"],VCardText:v["b"],VCol:m["a"],VContainer:p["a"],VDivider:f["a"],VFabTransition:h["a"],VHover:b["a"],VIcon:g["a"],VList:_["a"],VProgressLinear:w["a"],VRow:x["a"],VSpacer:y["a"],VSubheader:k["a"],VTooltip:S["a"]})},9287:function(t,e,a){"use strict";a("e68b")},ce87:function(t,e,a){"use strict";var o=a("16b7"),n=a("f2e7"),r=a("58df"),i=a("d9bd");e["a"]=Object(r["a"])(o["a"],n["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(i["c"])("v-hover should only contain a single element",this),t)):(Object(i["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},e68b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-50691165.f74829e3.js.map