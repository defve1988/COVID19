(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52cf399a"],{"1baa":function(e,t,n){"use strict";var a=n("5530"),o=(n("899c"),n("604c")),i=n("a9ad"),r=n("58df");t["a"]=Object(r["a"])(o["a"],i["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(a["a"])(Object(a["a"])({},o["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"5b5e":function(e,t,n){},"61d2":function(e,t,n){},"899c":function(e,t,n){},"8c5f":function(e,t,n){"use strict";n("5b5e")},cbdc:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-5",attrs:{elevation:"0",tile:"",color:e.bg_color}},[n("v-container",{staticClass:"py-0"},[n("v-row",{attrs:{justify:"center"}},[n("v-card",{staticClass:"px-0",attrs:{elevation:"0",tile:"",width:"1200",color:e.bg_color}},[n("v-fab-transition",[n("v-btn",{attrs:{color:e.theme_color,dark:"",absolute:"",top:"",left:"",fab:"","x-large":!e.isSmall}},[n("v-icon",{attrs:{color:"white"}},[e._v(e._s(e.main_icon))])],1)],1),n("v-card-text",[n("v-list",{staticClass:"mb-10",attrs:{color:e.bg_color}},[n("v-subheader",{staticClass:"px-0 mx-0 mt-5"},[n("v-row",{staticClass:"px-0 mx-0",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("span",{class:e.isSmall?e.theme_text_color+" subtitle-1":e.theme_text_color+" title"},[e._v(" Publications ")]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mx-5",attrs:{icon:""},on:{click:e.change_view}},"v-btn",o,!1),a),[e.order_by_year?n("v-icon",{attrs:{color:e.theme_color}},[e._v(" mdi-sort-variant ")]):n("v-icon",{attrs:{color:e.theme_color}},[e._v("mdi-sort-variant-remove")])],1)]}}])},[e.order_by_year?n("span",[e._v("Sort by author.")]):n("span",[e._v("Sort by year.")])])],1),n("v-spacer")],1)],1),n("v-list-item-group",{attrs:{"active-class":"border",color:e.theme_color}},e._l(e.show_publication,(function(t,a){return n("v-list-item",{key:a,staticClass:"pa-0",on:{click:function(n){return e.search(t.title)}}},[n("v-row",{staticClass:"px-0 mx-3",attrs:{justify:"center"}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(o){var i=o.on,r=o.attrs;return[n("span",e._g(e._b({staticClass:"subtitle-1 font-weight-light",domProps:{innerHTML:e._s(a+1+". "+t.html)}},"span",r,!1),i))]}}],null,!0)},[n("span",[e._v("Search Google Scholar.")])])],1)],1)})),1)],1)],1)],1)],1),n("v-divider")],1)],1)},o=[],i={name:"education",created:function(){window.addEventListener("resize",this.cal_window)},destroyed:function(){window.removeEventListener("resize",this.cal_window)},mounted:function(){this.cal_window(),this.show_publication=this.publications_time},methods:{search:function(e){window.open("https://scholar.google.com/scholar?hl=en&q="+e)},cal_window:function(){this.isSmall=window.innerWidth<1264},change_view:function(){this.order_by_year=!this.order_by_year,this.order_by_year?this.show_publication=this.publications_time:this.show_publication=this.publications_author}},data:function(){return{main_icon:"mdi-file-document-edit",bg_color:"white",theme_color:"green  darken-2",theme_text_color:"green--text text--darken-2",isSmall:!1,order_by_year:!0,show_publication:[],publications_time:[{title:"Natural gas supply from Russia derived from daily pipeline flow data and potential solutions for filling a shortage of Russian supply in the European Union (EU).",html:"<b><u>Zhou, C.</u></b>, Zhu, B., Davis, S. J., Liu, Z., Halff, A., Arous, S. B., de Almeida Rodrigues, H., & Ciais, P. (2023). Natural gas supply from Russia derived from daily pipeline flow data and potential solutions for filling a shortage of Russian supply in the European Union (EU). Earth System Science Data, 15(2), 949-961."},{title:"Carbon Monitor Europe near-real-time daily CO2 emissions for 27 EU countries and the United Kingdom",html:"Ke, P., Deng, Z., Zhu, B., Zheng, B., Wang, Y., Boucher, O., Arous, S. B., <b><u>Zhou, C.</u></b>, Andrew, R. M., Dou, X., Sun, T., Song, X., Li, Z., Yan, F., Cui, D., Hu, Y., Huo, D., Chang, J. P., Engelen, R., . . . Liu, Z. (2023). Carbon Monitor Europe near-real-time daily CO(2) emissions for 27 EU countries and the United Kingdom. Sci Data, 10(1), 374"},{title:"PM10 source identification using the trajectory based potential source apportionment (TraPSA) toolkit at Kochi, India.",html:"Shanavas, A. K.; <b><u>Zhou, C.</u></b>; Menon, R.; Hopke, P. K., PM10 source identification using the trajectory based potential source apportionment (TraPSA) toolkit at Kochi, India. Atmospheric Pollution Research 2020."},{title:"Concentrations and Long-Term Temporal Trends of Hexabromocyclododecanes (HBCDD) in Lake Trout and Walleye from the Great Lakes.",html:"Parvizian, B. A.; <b><u>Zhou, C.</u></b>; Fernando, S.; Crimmins, B. S.; Hopke, P. K.; Holsen, T. M. J. E. S.; Technology, Concentrations and Long-Term Temporal Trends of Hexabromocyclododecanes (HBCDD) in Lake Trout and Walleye from the Great Lakes. 2020, 54, (10), 6134-6141."},{title:"Comparative analysis of surface water quality prediction performance and identification of key water parameters using different machine learning models based on big data.",html:"Chen, K.; Chen, H.; <b><u>Zhou, C.</u></b>; Huang, Y.; Qi, X.; Shen, R.; Liu, F.; Zuo, M.; Zou, X.; Wang, J. J. W. R., Comparative analysis of surface water quality prediction performance and identification of key water parameters using different machine learning models based on big data. 2020, 171, 115454."},{title:"Legacy Polybrominated Diphenyl Ethers (PBDEs) Trends in Top Predator Fish of the Laurentian Great Lakes (GL) from 1979 to 2016: Will Concentrations Continue to Decrease?",html:"<b><u>Zhou, C.</u></b>; Pagano, J.; McGoldrick, D. J.; Chen, D.; Crimmins, B. S.; Hopke, P. K.; Milligan, M. S.; Murphy, E. W.; Holsen, T. M., Legacy Polybrominated Diphenyl Ethers (PBDEs) Trends in Top Predator Fish of the Laurentian Great Lakes (GL) from 1979 to 2016: Will Concentrations Continue to Decrease? Environ Sci Technol 2019, 53, (12), 6650-6659."},{title:"Ambient Ammonia Concentrations Across New York State.",html:"<b><u>Zhou, C.</u></b>; Zhou, H.; Holsen, T. M.; Hopke, P. K.; Edgerton, E. S.; Schwab, J. J., Ambient Ammonia Concentrations Across New York State. Journal of Geophysical Research: Atmospheres 2019."},{title:"Ambient mercury source identification at a New York State urban site: Rochester, NY.",html:"Zhou, H.; Hopke, P. K.; <b><u>Zhou, C.</u></b>; Holsen, T. M., Ambient mercury source identification at a New York State urban site: Rochester, NY. Science of the Total Environment 2019, 650, 1327-1337."},{title:"Spatial and Temporal Trends (2004–2016) of Selected Alternative Flame Retardants in Fish of the Laurentian Great Lakes.",html:"Wu, Y.; Tan, H.; <b><u>Zhou, C.</u></b>; Crimmins, B. S.; Holsen, T. M.; Pagano, J. J.; Chen, D. J. E. s.; technology, Spatial and Temporal Trends (2004–2016) of Selected Alternative Flame Retardants in Fish of the Laurentian Great Lakes. 2019, 53, (4), 1786-1796."},{title:"Ambient black carbon particulate matter in the coal region of Dhanbad, India.",html:"Singh, S.; Tiwari, S.; Hopke, P. K.; <b><u>Zhou, C.</u></b>; Turner, J. R.; Panicker, A. S.; Singh, P. K., Ambient black carbon particulate matter in the coal region of Dhanbad, India. Sci Total Environ 2018, 615, 955-963."},{title:"Bioaccumulation and Spatiotemporal Trends of Polyhalogenated Carbazoles in Great Lakes Fish from 2004 to 2016.",html:"Wu, Y.; Tan, H.; <b><u>Zhou, C.</u></b>; Crimmins, B. S.; Holsen, T. M.; Chen, D., Bioaccumulation and Spatiotemporal Trends of Polyhalogenated Carbazoles in Great Lakes Fish from 2004 to 2016. Environmental science & technology 2018."},{title:"Polychlorinated biphenyls and organochlorine pesticides concentration patterns and trends in top predator fish of Laurentian Great Lakes from 1999 to 2014.",html:"<b><u>Zhou, C.</u></b>; Pagano, J.; Crimmins, B. A.; Hopke, P. K.; Milligan, M. S.; Murphy, E. W.; Holsen, T. M., Polychlorinated biphenyls and organochlorine pesticides concentration patterns and trends in top predator fish of Laurentian Great Lakes from 1999 to 2014. Journal of Great Lakes Research 2018."},{title:"Mercury wet deposition and speciated mercury air concentrations at rural and urban sites across New York state: Temporal patterns, sources and scavenging coefficients.",html:"Zhou, H.; <b><u>Zhou, C.</u></b>; Hopke, P. K.; Holsen, T. M., Mercury wet deposition and speciated mercury air concentrations at rural and urban sites across New York state: Temporal patterns, sources and scavenging coefficients. Sci Total Environ 2018, 637-638, 943-953."},{title:"Atmospheric Mercury Temporal Trends in the Northeastern United States from 1992 to 2014: Are Measured Concentrations Responding to Decreasing Regional Emissions? ",html:"Zhou, H.; <b><u>Zhou, C.</u></b>; Lynam, M. M.; Dvonch, J. T.; Barres, J. A.; Hopke, P. K.; Cohen, M.; Holsen, T. M., Atmospheric Mercury Temporal Trends in the Northeastern United States from 1992 to 2014: Are Measured Concentrations Responding to Decreasing Regional Emissions? Environmental Science & Technology Letters 2017, 4, (3), 91-97."},{title:"Mercury temporal trends in top predator fish of the Laurentian Great Lakes from 2004 to 2015: are concentrations still decreasing? ",html:"<b><u>Zhou, C.</u></b>; Cohen, M. D.; Crimmins, B. A.; Zhou, H.; Johnson, T. A.; Hopke, P. K.; Holsen, T. M., Mercury temporal trends in top predator fish of the Laurentian Great Lakes from 2004 to 2015: are concentrations still decreasing? Environmental science & technology 2017, 51, (13), 7386-7394."},{title:"Structural evolution of nanoscale zero-valent iron (nZVI) in anoxic Co2+ solution: interactional performance and mechanism.",html:"Zhang, Y.; Chen, W.; Dai, C.; <b><u>Zhou, C.</u></b>; Zhou, X., Structural evolution of nanoscale zero-valent iron (nZVI) in anoxic Co2+ solution: interactional performance and mechanism. Scientific reports 2015, 5."}],publications_author:[{title:"Legacy Polybrominated Diphenyl Ethers (PBDEs) Trends in Top Predator Fish of the Laurentian Great Lakes (GL) from 1979 to 2016: Will Concentrations Continue to Decrease?",html:"<b><u>Zhou, C.</u></b>; Pagano, J.; McGoldrick, D. J.; Chen, D.; Crimmins, B. S.; Hopke, P. K.; Milligan, M. S.; Murphy, E. W.; Holsen, T. M., Legacy Polybrominated Diphenyl Ethers (PBDEs) Trends in Top Predator Fish of the Laurentian Great Lakes (GL) from 1979 to 2016: Will Concentrations Continue to Decrease? Environ Sci Technol 2019, 53, (12), 6650-6659."},{title:"Ambient Ammonia Concentrations Across New York State.",html:"<b><u>Zhou, C.</u></b>; Zhou, H.; Holsen, T. M.; Hopke, P. K.; Edgerton, E. S.; Schwab, J. J., Ambient Ammonia Concentrations Across New York State. Journal of Geophysical Research: Atmospheres 2019."},{title:"Polychlorinated biphenyls and organochlorine pesticides concentration patterns and trends in top predator fish of Laurentian Great Lakes from 1999 to 2014.",html:"<b><u>Zhou, C.</u></b>; Pagano, J.; Crimmins, B. A.; Hopke, P. K.; Milligan, M. S.; Murphy, E. W.; Holsen, T. M., Polychlorinated biphenyls and organochlorine pesticides concentration patterns and trends in top predator fish of Laurentian Great Lakes from 1999 to 2014. Journal of Great Lakes Research 2018."},{title:"Mercury temporal trends in top predator fish of the Laurentian Great Lakes from 2004 to 2015: are concentrations still decreasing? ",html:"<b><u>Zhou, C.</u></b>; Cohen, M. D.; Crimmins, B. A.; Zhou, H.; Johnson, T. A.; Hopke, P. K.; Holsen, T. M., Mercury temporal trends in top predator fish of the Laurentian Great Lakes from 2004 to 2015: are concentrations still decreasing? Environmental science & technology 2017, 51, (13), 7386-7394."},{title:"PM10 source identification using the trajectory based potential source apportionment (TraPSA) toolkit at Kochi, India.",html:"Shanavas, A. K.; <b><u>Zhou, C.</u></b>; Menon, R.; Hopke, P. K., PM10 source identification using the trajectory based potential source apportionment (TraPSA) toolkit at Kochi, India. Atmospheric Pollution Research 2020."},{title:"Concentrations and Long-Term Temporal Trends of Hexabromocyclododecanes (HBCDD) in Lake Trout and Walleye from the Great Lakes.",html:"Parvizian, B. A.; <b><u>Zhou, C.</u></b>; Fernando, S.; Crimmins, B. S.; Hopke, P. K.; Holsen, T. M. J. E. S.; Technology, Concentrations and Long-Term Temporal Trends of Hexabromocyclododecanes (HBCDD) in Lake Trout and Walleye from the Great Lakes. 2020, 54, (10), 6134-6141."},{title:"Mercury wet deposition and speciated mercury air concentrations at rural and urban sites across New York state: Temporal patterns, sources and scavenging coefficients.",html:"Zhou, H.; <b><u>Zhou, C.</u></b>; Hopke, P. K.; Holsen, T. M., Mercury wet deposition and speciated mercury air concentrations at rural and urban sites across New York state: Temporal patterns, sources and scavenging coefficients. Sci Total Environ 2018, 637-638, 943-953."},{title:"Atmospheric Mercury Temporal Trends in the Northeastern United States from 1992 to 2014: Are Measured Concentrations Responding to Decreasing Regional Emissions? ",html:"Zhou, H.; <b><u>Zhou, C.</u></b>; Lynam, M. M.; Dvonch, J. T.; Barres, J. A.; Hopke, P. K.; Cohen, M.; Holsen, T. M., Atmospheric Mercury Temporal Trends in the Northeastern United States from 1992 to 2014: Are Measured Concentrations Responding to Decreasing Regional Emissions? Environmental Science & Technology Letters 2017, 4, (3), 91-97."},{title:"Comparative analysis of surface water quality prediction performance and identification of key water parameters using different machine learning models based on big data.",html:"Chen, K.; Chen, H.; <b><u>Zhou, C.</u></b>; Huang, Y.; Qi, X.; Shen, R.; Liu, F.; Zuo, M.; Zou, X.; Wang, J. J. W. R., Comparative analysis of surface water quality prediction performance and identification of key water parameters using different machine learning models based on big data. 2020, 171, 115454."},{title:"Ambient mercury source identification at a New York State urban site: Rochester, NY.",html:"Zhou, H.; Hopke, P. K.; <b><u>Zhou, C.</u></b>; Holsen, T. M., Ambient mercury source identification at a New York State urban site: Rochester, NY. Science of the Total Environment 2019, 650, 1327-1337."},{title:"Spatial and Temporal Trends (2004–2016) of Selected Alternative Flame Retardants in Fish of the Laurentian Great Lakes.",html:"Wu, Y.; Tan, H.; <b><u>Zhou, C.</u></b>; Crimmins, B. S.; Holsen, T. M.; Pagano, J. J.; Chen, D. J. E. s.; technology, Spatial and Temporal Trends (2004–2016) of Selected Alternative Flame Retardants in Fish of the Laurentian Great Lakes. 2019, 53, (4), 1786-1796."},{title:"Bioaccumulation and Spatiotemporal Trends of Polyhalogenated Carbazoles in Great Lakes Fish from 2004 to 2016.",html:"Wu, Y.; Tan, H.; <b><u>Zhou, C.</u></b>; Crimmins, B. S.; Holsen, T. M.; Chen, D., Bioaccumulation and Spatiotemporal Trends of Polyhalogenated Carbazoles in Great Lakes Fish from 2004 to 2016. Environmental science & technology 2018."},{title:"Ambient black carbon particulate matter in the coal region of Dhanbad, India.",html:"Singh, S.; Tiwari, S.; Hopke, P. K.; <b><u>Zhou, C.</u></b>; Turner, J. R.; Panicker, A. S.; Singh, P. K., Ambient black carbon particulate matter in the coal region of Dhanbad, India. Sci Total Environ 2018, 615, 955-963."},{title:"Structural evolution of nanoscale zero-valent iron (nZVI) in anoxic Co2+ solution: interactional performance and mechanism.",html:"Zhang, Y.; Chen, W.; Dai, C.; <b><u>Zhou, C.</u></b>; Zhou, X., Structural evolution of nanoscale zero-valent iron (nZVI) in anoxic Co2+ solution: interactional performance and mechanism. Scientific reports 2015, 5."}]}}},r=i,s=(n("8c5f"),n("2877")),l=n("6544"),c=n.n(l),u=n("8336"),h=n("b0af"),d=n("99d9"),m=n("62ad"),p=n("a523"),b=n("ce7e"),f=n("0789"),g=n("132d"),v=n("8860"),C=n("da13"),y=n("1baa"),k=n("0fd9"),S=n("2fa4"),T=n("e0c7"),L=n("3a2f"),w=Object(s["a"])(r,a,o,!1,null,"773e92f4",null);t["default"]=w.exports;c()(w,{VBtn:u["a"],VCard:h["a"],VCardText:d["b"],VCol:m["a"],VContainer:p["a"],VDivider:b["a"],VFabTransition:f["a"],VIcon:g["a"],VList:v["a"],VListItem:C["a"],VListItemGroup:y["a"],VRow:k["a"],VSpacer:S["a"],VSubheader:T["a"],VTooltip:L["a"]})},da13:function(e,t,n){"use strict";var a=n("5530"),o=(n("61d2"),n("a9ad")),i=n("1c87"),r=n("4e82"),s=n("7560"),l=n("f2e7"),c=n("5607"),u=n("80d2"),h=n("d9bd"),d=n("58df"),m=Object(d["a"])(o["a"],i["a"],s["a"],Object(r["a"])("listItemGroup"),Object(l["b"])("inputValue"));t["a"]=m.extend().extend({name:"v-list-item",directives:{Ripple:c["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-list-item":!0},i["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(i["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(h["e"])("avatar",this)},methods:{click:function(e){e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()},genAttrs:function(){var e=Object(a["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(e.role="listitem",e["aria-selected"]=String(this.isActive)):this.isInMenu?(e.role=this.isClickable?"menuitem":void 0,e.id=e.id||"list-item-".concat(this._uid)):this.isInList&&(e.role="listitem")),e}},render:function(e){var t=this,n=this.generateRouteLink(),o=n.tag,i=n.data;i.attrs=Object(a["a"])(Object(a["a"])({},i.attrs),this.genAttrs()),i[this.to?"nativeOn":"on"]=Object(a["a"])(Object(a["a"])({},i[this.to?"nativeOn":"on"]),{},{keydown:function(e){e.keyCode===u["l"].enter&&t.click(e),t.$emit("keydown",e)}}),this.inactive&&(o="div"),this.inactive&&this.to&&(i.on=i.nativeOn,delete i.nativeOn);var r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e(o,this.setTextColor(this.color,i),r)}})}}]);
//# sourceMappingURL=chunk-52cf399a.953e1891.js.map