(function(t){function e(e){for(var n,o,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"218b":function(t,e,r){"use strict";r("3856")},"30ce":function(t,e,r){t.exports=r.p+"img/qr-code.1334e06a.png"},3856:function(t,e,r){},"41b9":function(t,e,r){"use strict";r("ad7c")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app",[r("v-app-bar",{staticClass:"pa-0",attrs:{app:"",color:"primary",dense:"",dark:""}},[t.$store.state.backBtn?r("v-btn",{attrs:{icon:""},on:{click:t.cancelScan}},[r("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),r("v-toolbar-title",[r("div",{staticClass:"title txtbold"},[t._v("Hat Yai ATK Screening")])])],1),r("v-main",{staticClass:"d-flex justify-center align-start"},[r("router-view"),r("v-footer",{attrs:{app:"",color:"primary",fixed:""}},[r("v-col",{staticClass:"d-flex align-center justify-center"},[r("div",{staticClass:"foottxt txtbold text-truncate"},[t._v(" Internet Thailand Public Company Limited ")])])],1)],1)],1)],1)},s=[],o=(r("b0c0"),{mounted:function(){console.log(this.$vuetify.breakpoint.name)},methods:{cancelScan:function(){this.$store.commit("cancelScan",!0)}}}),c=o,i=(r("41b9"),r("2877")),l=r("6544"),u=r.n(l),d=r("7496"),p=r("40dc"),f=r("8336"),v=r("62ad"),m=r("553a"),h=r("132d"),b=r("f6c4"),g=r("2a7f"),w=Object(i["a"])(c,a,s,!1,null,"0df12770",null),_=w.exports;u()(w,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VCol:v["a"],VFooter:m["a"],VIcon:h["a"],VMain:b["a"],VToolbarTitle:g["a"]});var x=r("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var C=r("8c4f"),y=r("2f62");n["default"].use(y["a"]);var k=new y["a"].Store({state:{loader:!1,error:!1,backBtn:!1,cancel_scan:!1},mutations:{loading:function(t,e){t.loader=e},check_error:function(t,e){t.error=e},trick_btn:function(t,e){t.backBtn=e},cancelScan:function(t,e){t.cancel_scan=e}},actions:{},modules:{}}),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["noscan"===t.whenshow?n("v-card",{attrs:{tile:"",elevation:"0",color:"#F5F5F5",height:"705"}},[n("v-container",{attrs:{"grid-list-xs":"",color:"#F5F5F5"}},[n("v-row",{},[n("v-col",{attrs:{cols:"12"}},[n("v-row",{staticClass:"pb-5 pt-10",attrs:{justify:"center",align:"center"}},[n("v-img",{attrs:{"max-width":"190",src:r("6428")}})],1),n("v-row",{attrs:{justify:"center",align:"center"}},[n("div",{staticClass:"titletxt txtbold"},[t._v(" การตั้งค่ากล่องเซ็นเซอร์คัดกรอง ")])]),n("v-row",{attrs:{justify:"center",align:"center"}},[n("div",{staticClass:"titletxt txtbold"},[t._v("โควิด-19")])])],1)],1),n("v-container",{staticClass:"pt-16",attrs:{"grid-list-xs":"",fluid:"",color:"#F5F5F5"}},["first"===t.step?n("v-card",{staticClass:"pt-1 pb-5 px-4",attrs:{color:"white",elevation:"10"}},[0===t.tab?n("v-container",{staticClass:"pa-0"},[n("v-row",{staticClass:"pt-7"},[n("v-col",{staticClass:"pb-0 mb-0 pr-0",attrs:{cols:"10"}},[n("v-text-field",{attrs:{dense:"",outlined:"",label:"หมายเลขอุปกรณ์ (Serial Number)"},model:{value:t.sn,callback:function(e){t.sn=e},expression:"sn"}})],1),n("v-col",{staticClass:"pt-4",attrs:{cols:"2"}},[n("v-btn",{attrs:{icon:"",dark:"",small:"",color:"primary"},on:{click:t.openScan}},[n("v-icon",{attrs:{dark:"",size:"32"}},[t._v(" mdi-qrcode-scan ")])],1)],1)],1),n("v-row",{staticClass:"mt-1",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"11"}},[n("v-row",{staticClass:"txtsmall px-0",attrs:{justify:"center"}},[t._v(" กรอกหมายเลขอุปกรณ์ (Serial Number) ที่อยู่บนอุปกรณ์ ")]),n("v-row",{staticClass:"txtsmall",attrs:{justify:"center"}}),n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"txtsmall"},[t._v("และกดปุ่ม")]),n("div",{staticClass:"registtxt txtbold"},[t._v('"ลงทะเบียน"')])]),n("v-row",{staticClass:"txtsmall",attrs:{justify:"center"}},[t._v(" เพื่อดำเนินการลงทะเบียนอุปกรณ์ ")])],1)],1),n("v-row",{staticClass:"mt-10"},[n("v-col",[n("v-btn",{staticClass:"secondary--text btntxt txtbold",attrs:{disabled:!t.btn,elevation:"0",block:"",color:"primary"},on:{click:t.check_sn_available}},[t._v("ลงทะเบียน")])],1)],1)],1):t._e(),1===t.tab?n("v-container",[n("v-row",{staticClass:"pt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"pb-0 mb-0 d-flex justify-center align-center",attrs:{cols:"111"}},[n("v-img",{attrs:{src:r("30ce"),"max-width":"200"}})],1)],1),n("v-row",{staticClass:"pt-10",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"11"}},[n("v-row",{staticClass:"txtsmall px-0",attrs:{justify:"center"}},[n("div",{staticClass:"txtsmall"},[t._v("กดปุ่ม")]),n("div",{staticClass:"registtxt txtbold"},[t._v('"สแกน QR code"')])]),n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"txtsmall"},[t._v(" แล้วทำการสแกน QR code บนอุปกรณ์ของท่าน ")])])],1)],1),n("v-row",{staticClass:"pt-3",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"11"}},[n("v-row",{attrs:{justify:"center"}},[n("v-btn",{staticClass:"secondary--text btntxt",attrs:{elevation:"0",block:"",color:"primary"},on:{click:function(e){t.whenshow="scanning"}}},[t._v("สแกน QR code")])],1)],1)],1)],1):t._e()],1):t._e(),"second"===t.step?n("v-card",{staticClass:"pt-1 pb-10 px-3",attrs:{color:"white",elevation:"10"}},[n("v-row",{staticClass:"pt-10",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"11"}},[n("v-row",{staticClass:"txtsmall px-0",attrs:{justify:"center"}},[n("div",{staticClass:"txtsmall"},[t._v(" เลือกร้านค้าที่ต้องการลงเทียนกับอุปกรณ์หมายเลข ")])]),n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"registtxt txtbold"},[t._v(t._s(t.sn))])])],1)],1),n("v-autocomplete",{staticClass:"pt-10",attrs:{items:t.merchant_data,outlined:"",dense:"",chips:"","small-chips":"",label:"เลือกร้านค้า","item-text":"merchant_name","item-value":"_id","append-icon":""},model:{value:t.selected_merchant,callback:function(e){t.selected_merchant=e},expression:"selected_merchant"}}),n("v-btn",{staticClass:"secondary--text btntxt",attrs:{elevation:"0",block:"",color:"primary"},on:{click:function(e){return t.regist(t.selected_merchant)}}},[t._v("ลงทะเบียนร้านค้า")])],1):t._e()],1)],1)],1):t._e(),n("v-dialog",{attrs:{transition:"dialog-bottom-transition"},model:{value:t.notiCard,callback:function(e){t.notiCard=e},expression:"notiCard"}},[t.err_handle?n("v-card",{staticClass:"text-center",attrs:{color:"white",height:"200"}},[n("v-row",{staticClass:"mx-0 px-0"},[n("v-col",{staticClass:"py-0 ma-0"},[n("sweetalert-icon",{attrs:{icon:"error"}})],1)],1),n("v-row",{staticClass:"mx-0 px-0 mt-0"},[n("v-col",{staticClass:"pb-0"},[0===t.err_msg?n("div",{staticClass:"txtreg"},[t._v(" เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อเจ้าหน้าที่ ")]):t._e(),1===t.err_msg?n("div",{staticClass:"txtreg"},[t._v(" ไม่พบอุปกรณ์ของท่าน โปรดตรวจสอบหมายเลขอุปกรณ์ (Serial Number) อีกครั้ง ")]):t._e()])],1)],1):n("v-card",{staticClass:"text-center",attrs:{color:"white",height:"200"}},[n("v-row",{staticClass:"mx-0 px-0"},[n("v-col",{staticClass:"py-0 ma-0"},[n("sweetalert-icon",{attrs:{icon:"success"}})],1)],1),n("v-row",{staticClass:"mx-0 px-0 mt-0"},[n("v-col",{staticClass:"pb-0"},[n("div",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v(" ลงทะเบียนสำเร็จ ")])])],1)],1)],1),n("loader"),n("v-card",["scanning"===t.whenshow?n("qrscan",{on:{result:t.get_merchant,close:t.closeScan,qrstr:t.set_sn,responseStatus:t.check_error}}):t._e()],1)],1)},R=[],O=r("1da1"),S=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-overlay",{attrs:{value:t.loader}},[!0===t.loader?r("vue-loaders",{attrs:{name:"ball-spin-fade-loader",color:"#295939",scale:"1"}}):t._e()],1)],1)}),$=[],F={computed:{loader:function(){return this.$store.state.loader}}},V=F,E=r("a797"),A=Object(i["a"])(V,S,$,!1,null,"7e2fb7d4",null),I=A.exports;u()(A,{VOverlay:E["a"]});var P=r("2b45"),N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mt-n5",attrs:{tile:"",elevation:"0",color:"#333333",height:"725"}},[r("v-container",{staticClass:"pt-16"},[r("v-row",{staticClass:"mt-16",attrs:{justify:"center"}},[r("v-col",[r("v-row",{attrs:{justify:"center"}},[r("qrcode-stream",{staticClass:"my-5 pa-2",attrs:{id:"scanner"},on:{decode:t.onDecode,init:t.onInit}})],1)],1)],1)],1)],1)],1)},T=[],q={methods:{onInit:function(t){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t;case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),"NotAllowedError"===r.t0.name?e.error="ERROR: you need to grant camera access permisson":"NotFoundError"===r.t0.name?e.error="ERROR: no camera on this device":"NotSupportedError"===r.t0.name?e.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===r.t0.name?e.error="ERROR: is the camera already in use?":"OverconstrainedError"===r.t0.name?e.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===r.t0.name&&(e.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},onDecode:function(t){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.$store.commit("loading",!0),n=t.substr(3),a="https://check-sn.herokuapp.com/api/v1/check_sn_db",r.next=5,e.axios.get(a+"/"+n).then((function(t){e.$store.commit("loading",!1),t.data.type&&(e.$emit("responseStatus",!0),e.$emit("qrstr",n),e.$emit("result",t.data),e.$emit("close"))})).catch((function(t){e.$store.commit("loading",!1),console.log(t),e.$emit("responseStatus",!1)}));case 5:case"end":return r.stop()}}),r)})))()}}},B=q,D=(r("218b"),r("b0af")),M=r("a523"),z=r("0fd9"),Q=Object(i["a"])(B,N,T,!1,null,"540f62d8",null),H=Q.exports;u()(Q,{VCard:D["a"],VCol:v["a"],VContainer:M["a"],VRow:z["a"]});var J={components:{loader:I,SweetalertIcon:P["a"],qrscan:H},data:function(){return{tab:0,selected_merchant:"",whenshow:"noscan",notiCard:!1,err_handle:!1,err_msg:0,sn:"",oneID:null,merchant_data:null,step:"first",btn_status:!1}},mounted:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=window.location.href,n=new URL(r),a=n.searchParams.get("onechat_token"),localStorage.setItem("token",a),e.next=6,t.get_onedata();case 6:t.$store.commit("loading",!1);case 7:case"end":return e.stop()}}),e)})))()},computed:{btn:function(){return this.btn_status},cancel_status:function(){return this.$store.state.cancel_scan}},watch:{sn:function(t){t.length>=10?this.btn_status=!0:this.btn_status=!1},cancel_status:function(t){t&&(this.whenshow="noscan",this.$store.commit("trick_btn",!1),this.$store.commit("cancelScan",!1))}},methods:{openScan:function(){this.whenshow="scanning",this.$store.commit("trick_btn",!0)},check_error:function(t){t||(this.err_handle=!0,this.err_msg=1,this.show_notiCard())},set_sn:function(t){this.sn=t},closeScan:function(){this.whenshow="noscan",this.step="second"},get_onedata:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={source:localStorage.getItem("token")},n={Authorization:"Bearer A4c106a02df725292bdd6559178ca5e88d155e516115240368068c3ffd2149e48d2cb338c47a54d708bbc7536415a4fd1"},t.axios.post("https://chat-api.one.th/manage/api/v1/login_onechat_token",r,{headers:n}).then((function(e){t.oneID=e.data.account.profile.one_id}));case 3:case"end":return e.stop()}}),e)})))()},regist:function(t){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.$store.commit("loading",!0),n="https://uat-atkscreening.one.th/gov/api/v1/dashboard/user",a={user_id:e.oneID,serial_number:e.sn},r.next=5,e.axios.put(n,a,{params:{id:t}}).then((function(t){"success"===t.data.status&&(e.$store.commit("loading",!1),e.show_notiCard(),e.step="first",e.sn="",e.selected_merchant="")})).catch((function(t){e.$store.commit("loading",!1),console.log(t),e.err_handle=!0}));case 5:case"end":return r.stop()}}),r)})))()},get_merchant:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="https://uat-atkscreening.one.th/gov/api/v1/dashboard/user",e.next=3,t.axios.get(r,{params:{user_id:t.oneID}}).then(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.merchant_data=r.data.data,t.step="second";case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$store.commit("loading",!1),console.log(e),t.err_handle=!0}));case 3:case"end":return e.stop()}}),e)})))()},check_sn_available:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("loading",!0),r="https://check-sn.herokuapp.com/api/v1/check_sn_db",e.next=4,t.axios.get(r+"/"+t.sn).then(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.data.type){e.next=4;break}return e.next=3,t.get_merchant();case 3:t.$store.commit("loading",!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.err_handle=!0,t.err_msg=1,t.show_notiCard(),console.log(r),t.$store.commit("loading",!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})))()},show_notiCard:function(){var t=this;this.notiCard=!0,setTimeout((function(){t.notiCard=!1,t.err_handle=!1,t.err_msg=0}),2500)}}},L=J,K=(r("e5f3"),r("c6a6")),U=r("169a"),Y=r("adda"),G=r("8654"),W=Object(i["a"])(L,j,R,!1,null,"1241b70c",null),X=W.exports;u()(W,{VAutocomplete:K["a"],VBtn:f["a"],VCard:D["a"],VCol:v["a"],VContainer:M["a"],VDialog:U["a"],VIcon:h["a"],VImg:Y["a"],VRow:z["a"],VTextField:G["a"]}),n["default"].use(C["a"]);var Z=[{path:"/",name:"main",component:X}],tt=new C["a"]({mode:"history",routes:Z});tt.beforeEach((function(t,e,r){t.name&&(k.commit("loading",!0),r()),r()}));var et=tt,rt=r("f309");n["default"].use(rt["a"]);var nt=new rt["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#5A926D",secondary:"#FFFFFF",greyC:"#CCCCCC",greyB:"#5A926D",greyF1:"#F1F1F1"}}}}),at=r("bb6f"),st=r.n(at),ot=r("bc3a"),ct=r.n(ot),it=r("2106"),lt=r.n(it),ut=r("6cf9");r("cc73");n["default"].config.productionTip=!1,n["default"].use(st.a),n["default"].use(lt.a,ct.a),n["default"].use(ut["a"]),n["default"].use(P["a"]),new n["default"]({router:et,store:k,vuetify:nt,render:function(t){return t(_)}}).$mount("#app")},6428:function(t,e,r){t.exports=r.p+"img/inetlogo.0b3c61f1.png"},"944b":function(t,e,r){},ad7c:function(t,e,r){},e5f3:function(t,e,r){"use strict";r("944b")}});
//# sourceMappingURL=app.8b008d59.js.map