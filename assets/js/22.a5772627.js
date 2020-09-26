(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{431:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-js"}},[t._v("#")]),t._v(" vue.js")]),t._v(" "),s("h2",{attrs:{id:"vue的优点是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的优点是什么"}},[t._v("#")]),t._v(" vue的优点是什么")]),t._v(" "),s("ol",[s("li",[t._v('低耦合,视图(view)可以独立于Model变化和修改,一个ViewModel可以绑定到不同的"View"上,当View变化的时候Model可以不变,当Model变化的时候View也可以不变.')]),t._v(" "),s("li",[t._v("可重用性,你可以把一些视图逻辑放在一个ViewModel里面,让View重用这段视图逻辑")]),t._v(" "),s("li",[t._v("独立开发,开发人员可以专注于业务逻辑和数据的开发(ViewModel),设计人员可以专注于页面设计")]),t._v(" "),s("li",[t._v("可测试,界面素来是比较难于测试的,而现在测试可以针对ViewModel来写")])]),t._v(" "),s("h2",{attrs:{id:"组件之间的传值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件之间的传值"}},[t._v("#")]),t._v(" 组件之间的传值?")]),t._v(" "),s("h3",{attrs:{id:"父组件与子组件传值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父组件与子组件传值"}},[t._v("#")]),t._v(" 父组件与子组件传值")]),t._v(" "),s("p",[t._v("父组件通过标签上面定义传值: eg='data' 父组件data(){return{data:'egdata'}}")]),t._v(" "),s("p",[t._v("子组件通过props方法接受数据props:['eg']在props中添加元素之后,就不需要在data中再添加变量了")]),t._v(" "),s("h3",{attrs:{id:"子组件向父组件传递数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子组件向父组件传递数据"}},[t._v("#")]),t._v(" 子组件向父组件传递数据")]),t._v(" "),s("p",[t._v("子组件通过$emit方法传递参数")]),t._v(" "),s("p",[t._v("子组件部分")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("用户名:"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("setUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("methods:{\nsetUser:function(){\n\tthis.$emit('transferUser',this.username)\n\t}\n}\n")])])]),s("p",[t._v("父组件中")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("LoginDiv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@transfrUser")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("LoginDiv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("用户名为:{{user}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("methods:{\n\tgetUser(msg){\n\t\tthis.user = msg\n\t}\n},\n\ncomponents:{\n\tLoginDiv\n}\n")])])]),s("h3",{attrs:{id:"子组件向子组件传递数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子组件向子组件传递数据"}},[t._v("#")]),t._v(" 子组件向子组件传递数据")]),t._v(" "),s("p",[t._v("vue没有直接子对子传参的方法,建议将需要传递数据的子组件,都合并为一个组件,如果一定要子对子传参,可以先从传到父组件,再传到子组件")]),t._v(" "),s("p",[t._v("为了便于开发，Vue 推出了一个"),s("a",{attrs:{href:"http://www.cnblogs.com/wisewrong/p/6344390.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态管理工具 Vuex"),s("OutboundLink")],1),t._v("，可以很方便实现组件之间的参数传递")]),t._v(" "),s("h2",{attrs:{id:"vuecli中怎样使用自定义的组件-有遇到过哪些问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuecli中怎样使用自定义的组件-有遇到过哪些问题"}},[t._v("#")]),t._v(" vuecli中怎样使用自定义的组件?有遇到过哪些问题")]),t._v(" "),s("ol",[s("li",[t._v("在components目录新建你的组件(如:music.vue),script一定要export default{}")]),t._v(" "),s("li",[t._v("在需要用的页面(组件)中导入:import music from '../components/music .vue'")]),t._v(" "),s("li",[t._v("注入到vue的子组件的components属性上面,components:{music }")]),t._v(" "),s("li",[t._v("在template视图中使用")])]),t._v(" "),s("h2",{attrs:{id:"v-show和v-if指令的共同点和不同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show和v-if指令的共同点和不同点"}},[t._v("#")]),t._v(" v-show和v-if指令的共同点和不同点")]),t._v(" "),s("p",[t._v("v-show指令是通过修改display：none的属性让其显示或者隐藏")]),t._v(" "),s("p",[t._v("v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果")]),t._v(" "),s("h2",{attrs:{id:"如何让css只在当前组件中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何让css只在当前组件中使用"}},[t._v("#")]),t._v(" 如何让css只在当前组件中使用")]),t._v(" "),s("p",[t._v("将当前的")]),s("style")])}),[],!1,null,null,null);a.default=n.exports}}]);