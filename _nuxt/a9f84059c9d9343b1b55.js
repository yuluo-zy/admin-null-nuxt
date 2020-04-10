(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{316:function(t,e,n){"use strict";var r={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")],1),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},320:function(t,e,n){"use strict";var r={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-title-bar"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",t._l(t.titleStack,(function(title,e){return n("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("div",{staticClass:"buttons is-right"},[n("a",{staticClass:"button is-light",attrs:{href:"https://admin-null.justboil.me/",target:"_blank"}},[n("b-icon",{attrs:{icon:"credit-card","custom-size":"default"}}),t._v(" "),n("span",[t._v("Premium Demo")])],1)])])])])])}),[],!1,null,null,null);e.a=component.exports},321:function(t,e,n){"use strict";var r={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},l=n(3),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},327:function(t,e,n){var r=n(335);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},332:function(t,e,n){var r=n(333),l=n(334),o=n(327),c=Math.ceil,f=Math.max;t.exports=function(t,e,n){e=(n?l(t,e,n):void 0===e)?1:f(o(e),0);var d=null==t?0:t.length;if(!d||e<1)return[];for(var m=0,v=0,h=Array(c(d/e));m<d;)h[v++]=r(t,m,m+=e);return h}},333:function(t,e){t.exports=function(t,e,n){var r=-1,l=t.length;e<0&&(e=-e>l?0:l+e),(n=n>l?l:n)<0&&(n+=l),l=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(l);++r<l;)o[r]=t[r+e];return o}},334:function(t,e,n){var r=n(331),l=n(322),o=n(330),c=n(319);t.exports=function(t,e,object){if(!c(object))return!1;var n=typeof e;return!!("number"==n?l(object)&&o(e,object.length):"string"==n&&e in object)&&r(object[e],t)}},335:function(t,e,n){var r=n(336);t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},336:function(t,e,n){var r=n(319),l=n(325),o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(l(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=f.test(t);return n||d.test(t)?m(t.slice(2),n?2:8):c.test(t)?NaN:+t}},337:function(t,e,n){var r=n(350),l=n(338),o=n(324),c=n(317);t.exports=function(t,e){return(c(t)?r:l)(t,o(e,3))}},338:function(t,e,n){var r=n(339);t.exports=function(t,e){var n=[];return r(t,(function(t,r,l){e(t,r,l)&&n.push(t)})),n}},339:function(t,e,n){var r=n(344),l=n(340)(r);t.exports=l},340:function(t,e,n){var r=n(322);t.exports=function(t,e){return function(n,l){if(null==n)return n;if(!r(n))return t(n,l);for(var o=n.length,c=e?o:-1,f=Object(n);(e?c--:++c<o)&&!1!==l(f[c],c,f););return n}}},341:function(t,e,n){"use strict";var r={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Pick another file":"Pick a file"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"file"},[n("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("a",{staticClass:"button is-primary"},[n("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),t._v(" "),n("span",[t._v(t._s(t.buttonLabel))])],1)]),t._v(" "),t.file?n("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},342:function(t,e,n){"use strict";n(326);var r=n(332),l=n.n(r),filter=n(337),o=n.n(filter),c={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(element){return t("div",{attrs:{class:"tile is-parent"}},[element])})))}},render:function(t){var e=this,n=o()(this.$slots.default,(function(slot){return!!slot.tag}));return n.length<=this.maxPerRow?this.renderAncestor(t,n):t("div",{attrs:{class:"is-tiles-wrapper"}},l()(n,this.maxPerRow).map((function(n){return e.renderAncestor(t,n)})))}},f=n(3),component=Object(f.a)(c,void 0,void 0,!1,null,null,null);e.a=component.exports},357:function(t,e,n){"use strict";var r={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},l=n(3),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.isDismissed?this._e():e("div",{staticClass:"notification"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[this._t("default")],2)]),this._v(" "),e("div",{staticClass:"level-right"},[e("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:this.dismiss}},[this._v("\n        Dismiss\n      ")])])])])}),[],!1,null,null,null);e.a=component.exports},456:function(t,e,n){var r=n(457)(n(458));t.exports=r},457:function(t,e,n){var r=n(324),l=n(322),o=n(345);t.exports=function(t){return function(e,n,c){var f=Object(e);if(!l(e)){var d=r(n,3);e=o(e),n=function(t){return d(f[t],t,f)}}var m=t(e,n,c);return m>-1?f[d?e[m]:m]:void 0}}},458:function(t,e,n){var r=n(459),l=n(324),o=n(327),c=Math.max;t.exports=function(t,e,n){var f=null==t?0:t.length;if(!f)return-1;var d=null==n?0:o(n);return d<0&&(d=c(f+d,0)),r(t,l(e,3),d)}},459:function(t,e){t.exports=function(t,e,n,r){for(var l=t.length,o=n+(r?1:-1);r?o--:++o<l;)if(e(t[o],o,t))return o;return-1}},467:function(t,e,n){"use strict";n.r(e);n(33),n(34),n(8),n(23);var r=n(48),l=n.n(r),o=n(0),c=n.n(o),f=n(456),d=n.n(f),m=n(320),v=n(321),h=n(342),_=n(316),y=n(341),C=n(82),x=n(357),k={name:"ClientForm",components:{UserAvatar:C.a,FilePicker:y.a,CardComponent:_.a,Tiles:h.a,HeroBar:v.a,TitleBar:m.a,Notification:x.a},data:function(){return{id:null,isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isProfileExists:!1}},computed:{titleStack:function(){return["Admin","Clients",this.isProfileExists?this.form.name:"New client"]},heroTitle:function(){return this.isProfileExists?this.form.name:"Create Client"},heroRouterLinkTo:function(){return this.isProfileExists?{name:"client.new"}:"/"},heroRouterLinkLabel:function(){return this.isProfileExists?"New client":"Dashboard"},formCardTitle:function(){return this.isProfileExists?"Edit Client":"New Client"}},created:function(){this.getData()},methods:{getClearFormObject:function(){return{id:null,name:null,company:null,city:null,created_date:new Date,created_mm_dd_yyyy:null,progress:0}},getData:function(){var t=this;this.$route.params.id&&l.a.get("/data-sources/clients.json").then((function(e){var n=d()(e.data.data,(function(e){return e.id===parseInt(t.$route.params.id)}));n?(t.isProfileExists=!0,t.form=n,t.form.created_date=new Date(n.created_mm_dd_yyyy),t.createdReadable=c()(new Date(n.created_mm_dd_yyyy)).format("MMM D, Y").toString()):t.$router.push({name:"client.new"})})).catch((function(e){t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger",queue:!1})}))},input:function(t){this.createdReadable=c()(t).format("MMM D, Y").toString()},submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Demo only",queue:!1})}),500)}}},w=n(3),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-bar",{attrs:{"title-stack":t.titleStack}}),t._v(" "),n("hero-bar",[t._v("\n    "+t._s(t.heroTitle)+"\n    "),n("router-link",{staticClass:"button",attrs:{slot:"right",to:t.heroRouterLinkTo},slot:"right"},[t._v("\n      "+t._s(t.heroRouterLinkLabel)+"\n    ")])],1),t._v(" "),n("section",{staticClass:"section is-main-section"},[n("notification",{staticClass:"is-info"},[n("div",[n("span",[n("b",[t._v("Demo only.")]),t._v(" No data will be saved/updated")])])]),t._v(" "),n("tiles",[n("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"account-edit"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("b-field",{attrs:{label:"ID",horizontal:""}},[n("b-input",{attrs:{"custom-class":"is-static",readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"Avatar",horizontal:""}},[n("file-picker")],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"Name",message:"Client name",horizontal:""}},[n("b-input",{attrs:{placeholder:"e.g. John Doe",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("b-field",{attrs:{label:"Company",message:"Client's company name",horizontal:""}},[n("b-input",{attrs:{placeholder:"e.g. Berton & Steinway",required:""},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),n("b-field",{attrs:{label:"City",message:"Client's city",horizontal:""}},[n("b-input",{attrs:{placeholder:"e.g. Geoffreyton",required:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),t._v(" "),n("b-field",{attrs:{label:"Created",horizontal:""}},[n("b-datepicker",{attrs:{placeholder:"Click to select...",icon:"calendar-today"},on:{input:t.input},model:{value:t.form.created_date,callback:function(e){t.$set(t.form,"created_date",e)},expression:"form.created_date"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"Progress",horizontal:""}},[n("b-slider",{model:{value:t.form.progress,callback:function(e){t.$set(t.form,"progress",e)},expression:"form.progress"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{horizontal:""}},[n("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("\n              Submit\n            ")])],1)],1)]),t._v(" "),t.isProfileExists?n("card-component",{staticClass:"tile is-child",attrs:{title:"Client Profile",icon:"account"}},[n("user-avatar",{staticClass:"image has-max-width is-aligned-center",attrs:{avatar:t.form.file}}),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"Name"}},[n("b-input",{attrs:{value:t.form.name,"custom-class":"is-static",readonly:""}})],1),t._v(" "),n("b-field",{attrs:{label:"Company"}},[n("b-input",{attrs:{value:t.form.company,"custom-class":"is-static",readonly:""}})],1),t._v(" "),n("b-field",{attrs:{label:"City"}},[n("b-input",{attrs:{value:t.form.city,"custom-class":"is-static",readonly:""}})],1),t._v(" "),n("b-field",{attrs:{label:"Created"}},[n("b-input",{attrs:{value:t.createdReadable,"custom-class":"is-static",readonly:""}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"Progress"}},[n("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.form.progress}},[t._v("\n            "+t._s(t.form.progress)+"\n          ")])])],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);