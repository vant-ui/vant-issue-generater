(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],p=0,d=[];p<i.length;p++)o=i[p],n[o]&&d.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,i=1;i<s.length;i++){var u=s[i];0!==n[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={app:0},a=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"433b":function(e,t,s){},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=a(e);return s(t)}function a(e){var t=r[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("router-view")],1)},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ALayoutHeader",{staticClass:"header"},[s("a",{attrs:{href:"https://github.com/youzan/vant",target:"_blank"}},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"https://img.yzcdn.cn/vant/logo.png",alt:""}}),s("span",[e._v("Vant")])])]),s("AMenu",{style:{lineHeight:"64px"},attrs:{"selected-keys":e.selectedKeys,theme:"dark",mode:"horizontal","default-selected-keys":["2"]},on:{click:e.switchMenu}},e._l(e.menus,function(t){return s("AMenuItem",{key:t.key},[e._v("\n      "+e._s(t.name)+"\n    ")])}),1)],1)},i=[],u=(s("7f7f"),s("ac6a"),s("456d"),{"en-US":{name:"English",label:{repo:"I am opening an issue for",issueType:"Issue Type",issueTitle:" Issue Title",vantVersion:"Vant Version",deviceOrBrowser:"Device / Browser",device:"Device",vueVersion:"Vue Version",weappVersion:"VantWeapp Version",demo:"Use codesandbox to reproduce issue. If it requires build setup, then create a project and provide a link to a repository.",imgDemo:"Free map bed: ",url:"Reproduction Link",imgUrl:"Screenshot Url（Separated by carriage return）",weappCode:"Core Code Snippet Link",weappCodePrompt:"Code snippet recommendation:",notUrl:"Please provide correct link",baseLibVersion:"Base Library Version",description:"Describe the bug",componentName:"Component Name",solveDesc:"What problem does this feature solve",solutionDesc:"Describe the solution you'd like",apiDesc:"What does the proposed API look like"},message:{issueTitle:"Please provide issue title.",deviceOrBrowser:"Please provide Device / Browser.",device:"Please provide Device.",url:"Please provide reproduction link.",description:"Please provide description",baseLibVersion:"Please provide Base Library Version",componentName:"Please provide the name of component.",solveDesc:"Please provide description.",solutionDesc:"Please provide description.",apiDesc:"Please provide description."},issueTypeOptions:["Bug","Feature"],issueRepoOptions:["Vant","VantWeapp"],previewBtn:"Preview",createBtn:"Create"},"zh-CN":{name:"中文",label:{repo:"选择要提交 issue 的库",issueType:"Issue 类型",issueTitle:"Issue 标题",vantVersion:"Vant 版本",weappVersion:"VantWeapp 版本",deviceOrBrowser:"设备 / 浏览器",device:"设备",vueVersion:"Vue版本",baseLibVersion:"基础库版本",demo:"请提供可以重现 issue 的链接或者项目，例如：",imgDemo:"截图可以使用免费图床：",url:"重现链接",imgUrl:"如果是 UI 问题，截图链接（多图回车分隔）",weappCode:"请提供核心代码片段链接",weappCodePrompt:"代码片段推荐：",description:"描述问题",componentName:"组件名称",solveDesc:"这个功能解决了什么问题",solutionDesc:"描述您想要的解决方案",apiDesc:"建议的API是什么样的",codeDemo:"展示一下新功能的大致用法，代码片段链接（GitHub Gist）"},message:{issueTitle:"请填写Issue标题",deviceOrBrowser:"请填写设备 / 浏览器",device:"请填写设备",baseLibVersion:"请填写基础库版本",url:"请填写重现链接",imgUrl:"请填写截图链接",weappCode:"请提供核心代码片段链接",notUrl:"请填写正确的链接",description:"请填写描述问题",componentName:"请填写组件名称",solveDesc:"请填写描述",solutionDesc:"请填写描述",apiDesc:"请填写描述"},issueTypeOptions:["Bug","Feature"],issueRepoOptions:["Vant","VantWeapp"],previewBtn:"预览",createBtn:"创建"}}),c={name:"Header",data:function(){var e=Object.keys(u).map(function(e){return{key:e,name:u[e].name}});return{menus:e}},computed:{selectedKeys:function(){return[this.$route.name]}},methods:{switchMenu:function(e){var t=e.key;this.$router.push({name:t,query:this.$route.query})}}},l=c,p=(s("f7510"),s("2877")),d=Object(p["a"])(l,o,i,!1,null,"0e5530e7",null),m=d.exports,f={components:{Header:m}},v=f,b=Object(p["a"])(v,n,a,!1,null,null,null),h=b.exports,g=s("8c4f"),j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ARow",{attrs:{type:"flex",justify:"center"}},[s("ACol",{staticClass:"container",attrs:{xs:18,sm:18,md:12}},["Vant"===e.issueRepo?s("Vant",{attrs:{contents:e.contents},on:{repoChange:e.repoChange,typeChange:e.typeChange,submit:e.preview}}):"VantWeapp"===e.issueRepo?s("VantWeapp",{attrs:{contents:e.contents},on:{repoChange:e.repoChange,typeChange:e.typeChange,submit:e.preview}}):e._e()],1),e.showPreivew?s("Preview",{attrs:{contents:e.contents,"form-value":e.formValue},on:{close:function(t){e.showPreivew=!1}}}):e._e()],1)},y=[],w=(s("6762"),s("2fdb"),s("a481"),s("cebc")),V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AModal",{staticClass:"preview",attrs:{title:"Issue 预览",visible:!0},on:{cancel:function(t){return e.$emit("close")}}},[s("div",{domProps:{innerHTML:e._s(e.issueHTML)}}),s("template",{slot:"footer"},[s("AButton",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("\n      "+e._s(e.contents.createBtn)+"\n    ")])],1)],2)},A=[],_=(s("28a5"),s("0e54")),k=s.n(_),O=s("375a"),T=s.n(O),C=s("2f62"),x={props:{contents:Object,formValue:Object},data:function(){return{issueContentKeys:["deviceOrBrowser","device","vantVersion","vueVersion","weappVersion","baseLibVersion","url","imgUrl","weappCode","description","solveDesc","solutionDesc","apiDesc","codeDemo"]}},computed:Object(w["a"])({},Object(C["b"])(["issueRepo","issueType"]),{title:function(){var e="Bug"===this.issueType?"[Bug Report]":"[Feature Request]";return"".concat(e," ").concat(this.formValue.issueTitle)},issueMD:function(){var e=this,t="";return this.issueContentKeys.forEach(function(s){e.formValue[s]&&(t+=e.formatToMarkdown(s,e.formValue[s]))}),t},body:function(){return encodeURIComponent(this.issueMD).replace(/%2B/gi,"+")},issueHTML:function(){return k()(this.issueMD)}}),watch:{issueHTML:{handler:function(){this.$nextTick(function(){var e=document.querySelectorAll(".preview a");e.forEach(function(e){e.getAttribute("target")||e.setAttribute("target","_blank")})})},immediate:!0}},methods:{handleCreate:function(){window.open("https://github.com/youzan/".concat(T()(this.issueRepo),"/issues/new?title=").concat(this.title,"&body=").concat(this.body))},formatToMarkdown:function(e,t){switch(e){case"url":return"\n### ".concat(this.contents.label[e],'\n<a href="').concat(this.formValue[e],'" target="_blank">').concat(this.formValue[e],"</a>\n");case"imgUrl":var s="\n### ".concat(this.contents.label[e],"\n"),r=t.split(/\s/);return r.forEach(function(e){e.trim()&&(s+="\n![截图](".concat(e.trim(),")\n"))}),s;default:return"\n### ".concat(this.contents.label[e],"\n").concat(this.formValue[e],"\n")}}}},D=x,B=Object(p["a"])(D,V,A,!1,null,"35862b4b",null),R=B.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AForm",{attrs:{layout:e.formLayout,form:e.form},on:{submit:e.handleSubmit}},[s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[s("AFormItem",{attrs:{label:e.contents.label.repo}},[s("ARadioGroup",{directives:[{name:"decorator",rawName:"v-decorator",value:["repo",{initialValue:e.issueRepo,rules:[{required:!0}]}],expression:"['repo', { initialValue: issueRepo, rules: [{ required: true }]}]"}],on:{change:e.handleRepoChange}},e._l(e.contents.issueRepoOptions,function(t){return s("ARadioButton",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1)],1),s("ACol",{attrs:{span:12}},[s("AFormItem",{attrs:{label:e.contents.label.issueType}},[s("ARadioGroup",{directives:[{name:"decorator",rawName:"v-decorator",value:["issueType",{initialValue:e.issueType,rules:[{required:!0}]}],expression:"['issueType', { initialValue: issueType, rules: [{ required: true }]}]"}],on:{change:e.handleIssueTypeChange}},e._l(e.contents.issueTypeOptions,function(t){return s("ARadioButton",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1)],1)],1),s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[s("AFormItem",{attrs:{label:e.contents.label.issueTitle}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["issueTitle",{rules:[{required:!0,message:e.contents.message.issueTitle}]}],expression:"['issueTitle', { rules: [{ required: true, message: contents.message.issueTitle }]}]"}]})],1)],1),s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.deviceOrBrowser}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["deviceOrBrowser",{rules:[{required:!0,message:e.contents.message.deviceOrBrowser}]}],expression:"['deviceOrBrowser', { rules: [{ required: true, message: contents.message.deviceOrBrowser }]}]"}]})],1):e._e()],1)],1),s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.vantVersion}},[s("ASelect",{directives:[{name:"decorator",rawName:"v-decorator",value:["vantVersion",{initialValue:e.initVantVersion,rules:[{required:!0}]}],expression:"['vantVersion', { initialValue: initVantVersion, rules: [{ required: true }]}]"}]},e._l(e.vantVersions,function(t){return s("ASelectOption",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1):e._e()],1),s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.vueVersion}},[s("ASelect",{directives:[{name:"decorator",rawName:"v-decorator",value:["vueVersion",{initialValue:e.initVueVersion,rules:[{required:!0}]}],expression:"['vueVersion', { initialValue: initVueVersion, rules: [{ required: true }]}]"}]},e._l(e.vueVersions,function(t){return s("ASelectOption",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1):e._e()],1)],1),s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.url}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:e.contents.message.url},{type:"url",message:e.contents.message.notUrl}]}],expression:"['url', { rules: [\n            { required: true, message: contents.message.url },\n            { type: 'url', message: contents.message.notUrl },\n          ]}]"}]})],1):e._e(),e.isBug?s("AFormItem",[s("p",[e._v(e._s(e.contents.label.demo))]),s("ul",[s("li",[s("a",{attrs:{href:"https://codesandbox.io/s/m5v3f",target:"_blank"}},[e._v("codesandbox")])])])]):e._e()],1)],1),e.isBug?s("AFormItem",{attrs:{label:e.contents.label.description}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:e.contents.message.description}]}],expression:"['description', { rules: [{ required: true, message: contents.message.description }]}]"}],attrs:{rows:3}})],1):e._e(),e.isFeature?s("AFormItem",{attrs:{label:e.contents.label.solveDesc}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["solveDesc",{rules:[{required:!0,message:e.contents.message.solveDesc}]}],expression:"['solveDesc', { rules: [{ required: true, message: contents.message.solveDesc }]}]"}],attrs:{rows:3}})],1):e._e(),e.isFeature?s("AFormItem",{attrs:{label:e.contents.label.solutionDesc}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["solutionDesc",{rules:[{required:!0,message:e.contents.message.solutionDesc}]}],expression:"['solutionDesc', { rules: [{ required: true, message: contents.message.solutionDesc }]}]"}],attrs:{rows:3}})],1):e._e(),e.isFeature?s("AFormItem",{attrs:{label:e.contents.label.apiDesc}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["apiDesc",{rules:[{required:!0,message:e.contents.message.apiDesc}]}],expression:"['apiDesc', { rules: [{ required: true, message: contents.message.apiDesc }]}]"}],attrs:{rows:3}})],1):e._e(),s("AFormItem",{staticStyle:{"text-align":"center"}},[s("AButton",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n      "+e._s(e.contents.previewBtn)+"\n    ")])],1)],1)},I=[],F=(s("96cf"),s("3b8d")),N=s("bc3a"),$=s.n(N),P={props:{contents:{type:Object,default:function(){return{}}}},data:function(){return{formValue:{},formLayout:"vertical",form:this.$form.createForm(this),versionApi:{repositoryVersion:"https://registry.npm.taobao.org/vant",vueVersion:"https://registry.npm.taobao.org/vue"},vantVersions:[],initVantVersion:"",vueVersions:[],initVueVersion:""}},computed:Object(w["a"])({},Object(C["b"])(["issueRepo","issueType"]),{isBug:function(){return"Bug"===this.issueType},isFeature:function(){return!this.isBug}}),watch:{contents:{handler:function(){this.form&&this.form.resetFields()},immediate:!0}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,s){e||t.$emit("submit",s)})},handleRepoChange:function(e){this.$emit("repoChange",e)},handleIssueTypeChange:function(e){this.$emit("typeChange",e)},fetchRepositoryVersion:function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.a.get(this.versionApi.repositoryVersion);case 2:t=e.sent,s=t.data,this.vantVersions=Object.keys(s.versions),this.initVantVersion=this.vantVersions[0];case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetchVueVersion:function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.a.get(this.versionApi.vueVersion);case 2:t=e.sent,s=t.data,this.vueVersions=Object.keys(s.versions),this.initVueVersion=this.vueVersions[0];case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchRepositoryVersion(),this.fetchVueVersion()}},z=P,S=Object(p["a"])(z,q,I,!1,null,"e2b1c6d2",null),L=S.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AForm",{attrs:{layout:e.formLayout,form:e.form},on:{submit:e.handleSubmit}},[s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[s("AFormItem",{attrs:{label:e.contents.label.repo}},[s("ARadioGroup",{directives:[{name:"decorator",rawName:"v-decorator",value:["repo",{initialValue:e.issueRepo,rules:[{required:!0}]}],expression:"['repo', { initialValue: issueRepo, rules: [{ required: true }]}]"}],on:{change:e.handleRepoChange}},e._l(e.contents.issueRepoOptions,function(t){return s("ARadioButton",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1)],1),s("ACol",{attrs:{span:12}},[s("AFormItem",{attrs:{label:e.contents.label.issueType}},[s("ARadioGroup",{directives:[{name:"decorator",rawName:"v-decorator",value:["issueType",{initialValue:e.issueType,rules:[{required:!0}]}],expression:"['issueType', { initialValue: issueType, rules: [{ required: true }]}]"}],on:{change:e.handleIssueTypeChange}},e._l(e.contents.issueTypeOptions,function(t){return s("ARadioButton",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1)],1)],1),s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[s("AFormItem",{attrs:{label:e.contents.label.issueTitle}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["issueTitle",{rules:[{required:!0,message:e.contents.message.issueTitle}]}],expression:"['issueTitle', { rules: [{ required: true, message: contents.message.issueTitle }]}]"}]})],1)],1),s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.device}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["device",{rules:[{required:!0,message:e.contents.message.device}]}],expression:"['device', { rules: [{ required: true, message: contents.message.device }]}]"}]})],1):e._e()],1)],1),s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.weappVersion}},[s("ASelect",{directives:[{name:"decorator",rawName:"v-decorator",value:["weappVersion",{initialValue:e.initWeappVersion,rules:[{required:!0}]}],expression:"['weappVersion', { initialValue: initWeappVersion, rules: [{ required: true }]}]"}]},e._l(e.weappVersions,function(t){return s("ASelectOption",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1):e._e()],1),s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.baseLibVersion}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["baseLibVersion",{rules:[{required:!0,message:e.contents.message.baseLibVersion}]}],expression:"['baseLibVersion', { rules: [{ required: true, message: contents.message.baseLibVersion }]}]"}]})],1):e._e()],1)],1),s("ARow",{attrs:{gutter:20}},[s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.imgUrl}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["imgUrl"],expression:"['imgUrl']"}],attrs:{rows:1}})],1):e._e(),e.isBug?s("AFormItem",[s("p",[e._v(e._s(e.contents.label.imgDemo))]),s("ul",[s("li",[s("a",{attrs:{href:"https://sm.ms/",target:"_blank"}},[e._v("sm.ms")])])])]):e._e()],1),s("ACol",{attrs:{span:12}},[e.isBug?s("AFormItem",{attrs:{label:e.contents.label.weappCode}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["weappCode",{rules:[{required:!0,message:e.contents.message.weappCode},{type:"url",message:e.contents.message.notUrl}]}],expression:"['weappCode', { rules: [\n            { required: true, message: contents.message.weappCode },\n            { type: 'url', message: contents.message.notUrl }]}]"}]})],1):e._e(),e.isBug?s("AFormItem",[s("p",[e._v(e._s(e.contents.label.weappCodePrompt))]),s("ul",[s("li",[s("a",{attrs:{href:"https://gitee.com/gists",target:"_blank"}},[e._v("Gitee Gist")])]),s("li",[s("a",{attrs:{href:"https://gist.github.com/",target:"_blank"}},[e._v("GitHub Gist")])])])]):e._e()],1)],1),e.isBug?s("AFormItem",{attrs:{label:e.contents.label.description}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:e.contents.message.description}]}],expression:"['description', { rules: [{ required: true, message: contents.message.description }]}]"}],attrs:{rows:3}})],1):e._e(),e.isFeature?s("AFormItem",{attrs:{label:e.contents.label.solveDesc}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["solveDesc",{rules:[{required:!0,message:e.contents.message.solveDesc}]}],expression:"['solveDesc', { rules: [{ required: true, message: contents.message.solveDesc }]}]"}],attrs:{rows:3}})],1):e._e(),e.isFeature?s("AFormItem",{attrs:{label:e.contents.label.apiDesc}},[s("ATextarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["apiDesc",{rules:[{required:!0,message:e.contents.message.apiDesc}]}],expression:"['apiDesc', { rules: [{ required: true, message: contents.message.apiDesc }]}]"}],attrs:{rows:3}})],1):e._e(),e.isFeature?s("AFormItem",{attrs:{label:e.contents.label.codeDemo}},[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:["codeDemo",{rules:[{type:"url",message:e.contents.message.notUrl}]}],expression:"['codeDemo',{ rules: [{ type: 'url', message: contents.message.notUrl }] }]"}]})],1):e._e(),s("AFormItem",{staticStyle:{"text-align":"center"}},[s("AButton",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n      "+e._s(e.contents.previewBtn)+"\n    ")])],1)],1)},M=[],W=(s("5df3"),s("4f7f"),s("75fc")),E={props:{contents:{type:Object,default:function(){return{}}}},data:function(){return{formLayout:"vertical",form:this.$form.createForm(this),versionApi:{repositoryVersion:"https://registry.npm.taobao.org/vant-weapp",vantWeappVersion:"https://registry.npm.taobao.org/@vant/weapp"},weappVersions:[],initWeappVersion:""}},computed:Object(w["a"])({},Object(C["b"])(["issueRepo","issueType"]),{isBug:function(){return"Bug"===this.issueType},isFeature:function(){return!this.isBug}}),watch:{contents:{handler:function(){this.form&&this.form.resetFields()},immediate:!0}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,s){e||t.$emit("submit",s)})},handleRepoChange:function(e){this.$emit("repoChange",e)},handleIssueTypeChange:function(e){this.$emit("typeChange",e)},fetchRepositoryVersion:function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t,s,r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.a.get(this.versionApi.repositoryVersion);case 2:return t=e.sent,s=t.data,e.next=6,$.a.get(this.versionApi.vantWeappVersion);case 6:r=e.sent,n=r.data,a=Object(W["a"])(new Set([].concat(Object(W["a"])(Object.keys(n.versions)),Object(W["a"])(Object.keys(s.versions))))),this.weappVersions=a,this.initWeappVersion=this.weappVersions[0];case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchRepositoryVersion()}},G=E,H=Object(p["a"])(G,U,M,!1,null,"628a5b62",null),K=H.exports,J={components:{Preview:R,Vant:L,VantWeapp:K},data:function(){return{showPreivew:!1,formValue:{}}},computed:Object(w["a"])({},Object(C["b"])(["issueRepo","issueType"]),{isBug:function(){return"Bug"===this.issueType},isFeature:function(){return!this.isBug},lang:function(){return this.$route.name},contents:function(){return u[this.lang]}}),watch:{$route:{handler:function(){this.initState()},immediate:!0}},methods:{typeChange:function(e){this.$router.replace({name:this.$route.name,query:Object(w["a"])({},this.$route.query,{type:e.target.value})})},repoChange:function(e){this.$router.replace({name:this.$route.name,query:Object(w["a"])({},this.$route.query,{repo:e.target.value})})},preview:function(e){this.formValue=e,this.showPreivew=!0},initState:function(){var e=this.$route.query,t=e.repo,s=e.type;t=t&&this.contents.issueRepoOptions.includes(t)?t:"",s=s&&this.contents.issueTypeOptions.includes(s)?s:"",this.$store.commit("save",{key:"issueRepo",value:t||this.contents.issueRepoOptions[0]}),this.$store.commit("save",{key:"issueType",value:s||this.contents.issueTypeOptions[0]})}}},Q=J,X=(s("5f91"),Object(p["a"])(Q,j,y,!1,null,"68084fc6",null)),Y=X.exports;r["a"].use(g["a"]);var Z=new g["a"]({routes:[{path:"/",name:"home",redirect:{name:"zh-CN"}}]});Object.keys(u).forEach(function(e){Z.addRoutes([{path:"/".concat(e),name:e,component:Y}])});var ee=Z;r["a"].use(C["a"]);var te=new C["a"].Store({state:{issueRepo:"",issueType:""},mutations:{save:function(e,t){var s=t.key,r=t.value;e[s]=r}}}),se=te,re=s("f23d5");s("202f");r["a"].config.productionTip=!1,r["a"].use(re["a"]),new r["a"]({router:ee,store:se,render:function(e){return e(h)}}).$mount("#app")},"5f91":function(e,t,s){"use strict";var r=s("433b"),n=s.n(r);n.a},f23d:function(e,t,s){},f7510:function(e,t,s){"use strict";var r=s("f23d"),n=s.n(r);n.a}});
//# sourceMappingURL=app.129a9147.js.map