(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376ca8d2"],{"2d5b":function(t,e,o){"use strict";o("da41")},"6f84":function(t,e,o){var n=o("e46b");n(n.P,"Array",{fill:o("b88d")}),o("0e8b")("fill")},"70e0":function(t,e,o){"use strict";o("b3eb")},a7fb:function(t,e,o){"use strict";o.r(e);var n,r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page page-login"},[o("div",{staticClass:"login-page-inner"},[o("p",{staticClass:"title"},[t._v("Cloud Painting H5")]),o("el-form",{ref:"loginForm",attrs:{model:t.formData,rules:t.formRules,"label-width":"0px"}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{name:"userName",placeholder:"请输入用户名"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doLogin(e)}},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}},[o("i",{staticClass:"iconfont icon-zhanghao",attrs:{slot:"prefix"},slot:"prefix"})])],1),"register"===t.type?o("el-form-item",{attrs:{prop:"email"}},[o("el-input",{attrs:{autocomplete:"off",placeholder:"请输入邮箱"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doLogin(e)}},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}},[o("span",{staticClass:"iconfont icon-mail-copy",attrs:{slot:"prefix"},slot:"prefix"})])],1):t._e(),o("el-form-item",{attrs:{prop:"password"}},["password"===t.inputType?o("el-input",{attrs:{name:"password",placeholder:"请输入密码",type:t.inputType},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doLogin(e)}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}},[o("i",{staticClass:"iconfont icon-mima",attrs:{slot:"prefix"},slot:"prefix"}),o("span",{staticClass:"cursor-pointer",attrs:{slot:"suffix"},on:{mousedown:t.mousedownPassword},slot:"suffix"},[o("i",{staticClass:"iconfont icon-yincangmima"})])]):o("el-input",{attrs:{name:"password",placeholder:"请输入密码",type:t.inputType},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doLogin(e)}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}},[o("i",{staticClass:"iconfont icon-mima",attrs:{slot:"prefix"},slot:"prefix"}),o("span",{staticClass:"cursor-pointer",attrs:{slot:"suffix"},on:{mousedown:t.mousedownText},slot:"suffix"},[o("i",{staticClass:"iconfont icon-xianshimima"})])])],1),o("el-form-item",[o("div",{staticClass:"btn-hover",on:{click:t.doSubmit}},[t._v(t._s("login"===t.type?"登录":"注册"))])])],1),o("div",{staticClass:"switch-do-type marginB20"},[o("p",{on:{click:t.switchType}},[o("i",{staticClass:"iconfont icon-iconfontzhizuobiaozhun47"}),o("span",[t._v(t._s("login"===t.type?"立即注册":"马上登录"))])])]),t._m(0)],1),o("div",{staticClass:"login-background"},[o("loginBackground")],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"login-page-bottom"},[t._v("Copyright © 2020 "),o("span",{staticClass:"primary"},[t._v("Cloud Painting H5版权所有")])])}],i=(o("5ab2"),o("6d57"),o("e10e"),o("22dc")),s=(o("cc57"),o("8dd0")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("canvas",{ref:"canvas",attrs:{id:"bg-canvas"}})},l=[],u=(o("6f84"),null),f={mounted:function(){var t=this.$refs.canvas.offsetWidth,e=this.$refs.canvas.offsetHeight,o=35,n=document.getElementById("bg-canvas");n.width=t,n.height=e;var r=n.getContext("2d");r.strokeStyle="rgba(0,0,0,0.02)",r.strokeWidth=1,r.fillStyle="rgba(0,0,0,0.05)";var a=[];function i(t,e,o,n,r){this.beginX=t,this.beginY=e,this.closeX=o,this.closeY=n,this.o=r}function s(t,e,o,n,r){this.x=t,this.y=e,this.r=o,this.moveX=n,this.moveY=r}function c(t,e){var o=arguments[1]||0;return Math.floor(Math.random()*(t-o+1)+o)}function l(t,e,o,n,r,a){var i=new s(e,o,n,r,a);return t.beginPath(),t.arc(i.x,i.y,i.r,0,2*Math.PI),t.closePath(),t.fill(),i}function f(t,e,o,n,r,a){var s=new i(e,o,n,r,a);t.beginPath(),t.strokeStyle="rgba(0,0,0,"+a+")",t.moveTo(s.beginX,s.beginY),t.lineTo(s.closeX,s.closeY),t.closePath(),t.stroke()}function p(){a=[];for(var n=0;n<o;n++)a.push(l(r,c(t),c(e),c(15,2),c(10,-10)/40,c(10,-10)/40));m()}function m(){r.clearRect(0,0,n.width,n.height);for(var t=0;t<o;t++)l(r,a[t].x,a[t].y,a[t].r);for(var e=0;e<o;e++)for(var i=0;i<o;i++)if(e+i<o){var s=Math.abs(a[e+i].x-a[e].x),c=Math.abs(a[e+i].y-a[e].y),u=Math.sqrt(s*s+c*c),p=1/u*7-.009,m=p>.03?.03:p;m>0&&f(r,a[e].x,a[e].y,a[e+i].x,a[e+i].y,m)}}p(),u=setInterval((function(){for(var n=0;n<o;n++){var r=a[n];r.x+=r.moveX,r.y+=r.moveY,r.x>t?r.x=0:r.x<0&&(r.x=t),r.y>e?r.y=0:r.y<0&&(r.y=e)}m()}),60)},beforeDestroy:function(){u&&clearInterval(u)}},p=f,m=(o("2d5b"),o("2c07")),d=Object(m["a"])(p,c,l,!1,null,"26951004",null),h=d.exports,y=o("ca8b");function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(Object(o),!0).forEach((function(e){Object(i["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var v={components:(n={},Object(i["a"])(n,y["Form"].name,y["Form"]),Object(i["a"])(n,y["FormItem"].name,y["FormItem"]),Object(i["a"])(n,y["Input"].name,y["Input"]),Object(i["a"])(n,"loginBackground",h),n),data:function(){return{loading:!1,loadingVerify:!1,inputType:"password",type:"login",formData:{email:"",username:"",password:""},formRules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},created:function(){this.fromUrl=this.$route.query.from?window.decodeURIComponent(this.$route.query.from):""},methods:{doSubmit:function(){var t=this;this.$refs.loginForm.validate((function(e){var o="login"===t.type?"doLogin":"doRegister";if(!e)return t.$store.dispatch("showMassage",{type:"error",message:"请正确填写表单！"}),!1;t[o]()}))},doLogin:function(){var t=this,e=b({},this.formData);s["a"].doLogin(e).then((function(){t.fromUrl?t.$router.push(t.fromUrl):s["a"].goBeforeLoginUrl()}))},doRegister:function(){var t=this,e=b({},this.formData);s["a"].doRegister(e).then((function(){t.fromUrl?t.$router.push(t.fromUrl):s["a"].goBeforeLoginUrl()}))},switchType:function(){"login"===this.type?this.type="register":this.type="login"},mousedownPassword:function(){this.inputType="text"},mousedownText:function(){this.inputType="password"},mouseup:function(){this.inputType="password"}}},w=v,x=(o("70e0"),Object(m["a"])(w,r,a,!1,null,"65355dd6",null));e["default"]=x.exports},b3eb:function(t,e,o){},cc57:function(t,e,o){var n=o("064e").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in r||o("149f")&&n(r,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},da41:function(t,e,o){}}]);
//# sourceMappingURL=chunk-376ca8d2.76842fb2.js.map