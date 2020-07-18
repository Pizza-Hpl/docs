---
title: vue.js
---

-------------------------------------------------------------------------------------------------------------------------------

# Vue.js

## vue的基本使用

```vue
//html
<div id="app" class="box">
	{{message}}
    {{info}}
</div>

01,导包
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

02,使用
<script>
    //实例化对象
    var app = new Vue({
         // element的缩写：代表找到元素,用vue数据填充上去
        // 所有选择器都可以用，但是建议大家用id选择器，因为id是唯一的，这样更精确
        el:'#app',
         // el: '.box',
        // el: 'div',
        // el:'body', //会报错，因为vue不支持直接设置body和html,建议大家用div包一下

        // vue里的数据，可以展现到界面上
        // 每个数据要用逗号隔开
        data:{
            message:'hello',
            info:'你好'
        }
    })



</script>
```

## v-tex的使用

```vue
<div id="app">

        <h2>下面是v-text写法</h2>
        <span v-text="msg2">
            这位周林林老师很骚
        </span>

        <h2>下面是插值写法（大括号形式）</h2>
        <span>
            {{ msg }}
            老邹很骚
        </span>
    </div>
//vue部分
</script>


<!-- 
    {{ }} 这种写法：我们也叫胡子语法，或者叫插值语法

    我们一般把插值写法说成是v-text的简写形式
 -->

<!-- 2.用包 -->
<script>
    //实例化vue对象
    var app = new Vue({
        el: '#app',
        data:{
            msg:"我即将被显示哦！"
        }
    });
```

## v-html使用

```vue
使用v-html会替换先前内容,重新建立标签或文字
<div>
    <span v-html='msg'>原来的内容</span> 
	<span v-html='info'>原来的内容</span>
</div>

<script>
    var app = new Vue({
        el:'#app',
        data:{
             msg:'<a href="#">点我啊</a>',  //页面显示a标签
            info:'我是纯文字',			//文字
        }
    })
</script>
```

## v-on指令

```vue
<div id="it">
    <p>点击了{{cont}}ci</p>
    <button v-on:click='cont++'>点击</button> //简写 @click=''
    <button v-on:dbclick='cont++'>双击</button>
    <button v-on:mouseenter='cont++'>点击</button>
</div>
<button @click='db()'></button>
<script>
    var app = new Vue({
        el:'#it',
        data:{
            cont:0;
        },
        methods:{
            //在vue里这是简写形式的函数
            db(){
                //如果在这里要访问data里的数据,必须在前面加this
                if(this.cont <10){
                    this.cont++
                }
            }
        }
    })
</script>
```

## vue里的this指向

```vue
<div id="app" @click="do()">
        {{ msg }}
</div>

<script>
     // 默认就有全局作用域(全局作用域的this是window)
    
    var app = new Vue({

        el:"#app",
        data:{
            //data不在vue对象里，但是data中写的所有属性都直接放到vue对象里
            msg:'sb',
            info:'dsb',
        },

        methods: {

            // methods不在vue对象里，但是methods里的所有函数都直接放到vue对象里了
            doSb(){
                // 在vue里事件触发里的this，就是这个vue对象
                console.log(this);

            },

            // 完整写法：
            // doSb:function(){

            //     console.log('....');
            // }
            
            // 在methods里面千万不要写箭头函数
            // doSb:()=>{
            //     // 这个this指向了上一级的this（window）
            //     // console.log(this.msg); //undefined
            // }
        },
    });


    console.log(app);
    // data中的属性直接放到vue对象里了
    // console.log(app.msg);
    // app.doSb();

</script>
```

## v-bind指令

```vue
<!-- 可以用v-bind:class再添加一个类 -->
<div class="box" v-bind:class="cls"></div>

作用：操作元素的行内属性
用法:
	v-bind:属性名="值"
简写
	:属性名="值"
```

## v-model 双向绑定

```vue
<div id="app">
    //让文本框输入的内容与msg保持一致
    <input type='text' v-model='msg'>
    <p>你输入的是{{msg}}</p>
</div>

<script>
    var app = new Vue({
        el:'#app'
        data:{
        msg:''
    }
    })
</script>

就在表单元素行内加一个  v-model="数据名"
```

## v-for遍历

```vue
用法:
v-for="item in 数组" //只是取出每个元素
v-for="(item,index) in 数组" // 取出元素和下标
特点：
- 数组长度变了，界面也会立刻发生改变

<div id="app">
    <p v-for:"(item ,index) in movies">  遍历movies数组
        {{index}} ----{{item.name}}----{{item.desc}}
    </p>
</div>

<script>
    var app = new Vue({
        el:'#app',
        data:{
            movies:[
                { name: '千与千寻', desc:'岛国神片' },
                { name: '大闹天宫', desc:'国产好片' },
                { name: '猫和老鼠', desc:'一只猫和一只老鼠的爱恨情仇' },
                { name: '你的名字。', desc:'阿姨和少年的恋爱故事' },
            ]
        }
    })
</script>
```

## 记事本案列

```vue
  <div id="app">
    <h2>记事本</h2>
    <input type="text" placeholder="请输入要记录的内容" v-model="msg" @keyup.enter="add()" />
    <ul class='items'>
      <li class='item' v-for="(item,index) in list" @dblclick="del(index)">
        {{item}}
      </li>
    </ul>
  </div>

<script>
创建vue实例
    var app = new Vue({
        el:'#app',
        data:{
            list:[],
            msg:''
        },
        methods:{
            add(){
                //把内容加到数组
                this.list.push(this.msg);
                //文本框内容清空
                this.msg='',
        	},
             del(index){
                 //要数组删除某个下标
        		// console.log(index);
                // 参数1：从哪个下标开始删除
        		// 参数2：删除几个
                  this.list.splice(index,1)  
             }
             
        }
    })
</script>
```

## v-if,v-else-if

```vue
   <div id="app">

        <h2>老弟，你今年{{age}}岁了！</h2>
        <input type="text" placeholder="请输入年龄" v-model="age">
        <h2 v-if="age < 18">偷偷摸摸去网吧！</h2>
        <h2 v-else-if="age >= 18 && age < 25">光明正大去网吧</h2>
        <h2 v-else-if="age>=25 && age < 80">你到了晚婚的年龄！</h2>
        <h2 v-else>哥们！修仙吧！</h2>
    </div>
</body>
</html>

<script src="./vue.js"></script>

<script>
    var app = new Vue({
        el:"#app",
        data:{
            age:0
        }
    });
</script>
```

## v-show 显示

```vue
<div id="app">
        <!-- 原来是true就变成false,原来是false就变成true -->
        <button @click="canShow=!canShow">显示或隐藏</button>

        <h2>v-show</h2>
        <p v-show="canShow">我是v-show里面的</p>

        <h2>v-if</h2>
        <p v-if="canShow">我是v-if里面的</p>
 </div>

<script>
    var app = new Vue({
        el:'app',
        data:{
            canShow:false
        }
    })
</script>
```

## v-cloak

```vue
<!-- 
        如果页面中用了胡子语法，那么网速慢的时候，可能会让胡子语法显示到界面上，就不太美观

        我们可以给它加一个v-cloak，再写一个样式，样式里写 display:none，那么它默认就看不到，只有加载完毕才会显示
     -->

    <style>
        /* 如果你有这个行内属性v-cloak就隐藏它,页面加载完毕会去掉v-cloak这个行内属性，就不会应用这个样式 */
        /* 属性选择器 */
        [v-cloak]{

            display: none;
        }
        
    </style>

<div id="app">
        <h2 v-cloak>{{msg}}</h2>
</div>

<script>
    let app = new Vue({

        el:"#app",
        data:{
            msg:"你好"
        }
    });
</script>
```

## v-once  只用一次

```vue
<div id='app'>
    <button @click='msg="新的内容"'>修改msg</button>
    <h2>加了v-once</h2>
        <!-- 只有第一次有用，后面不管msg怎么变都雨女无瓜 -->
        <p v-once> {{msg}} </p>

        <h2>不加v-once</h2>
        <p> {{msg}} </p>
</div>

<script>
    var app = new Vue({

        el: "#app",
        data: {
            msg: "今天"
        }
    });
</script>
```

## v-pre

```vue
<div id="app">
    如果加了v-pre就不会把它当vue的语法解析,写的是什么就是什么
    <p v-pre>{{msg}}</p>
</div>

<script>
    var app = new Vue({
        el:'#app',
        data:{
            msg:'你好'   //页面显示的还是msg,并不是msg
        }
    })
</script>
```

## 生命周期钩子函数   vue实例还没有挂载上data的数据  beforeCreate

```html
beforeCreate(){
    vue实例创建完毕,但是还没有挂载上data的数据
}
```

## 生命周期钩子函数  vue实例已经挂载data中的数据 	created

```html
created(){
    vue实例创建完毕,并且已经挂载data中的数据
}

注:如果要操作数据,最早只能在created里操作
```

## 生命周期钩子函数  页面加载完毕,但是数据还没到页面上  beforeMount

```html
beforeMount(){
    页面结构解析加载完毕,但是数据还没到页面上
}
```

## 生命周期钩子函数  页面加载完毕,并且vue里的数据也绑定到页面上  mounted

```html
mounted(){
    页面结构解析加载完毕,并且vue里的数据也绑定到页面上
}
```

## 生命周期钩子函数  当数据发生改变之后调用  beforeUpdated

```html
<script>
beforeUpdated(){
    //在数据发生改变,但是页面还没渲染之前调用
}
</script>
```

## 生命周期钩子函数  当页面更新之后调用  updated

```html
<script>
updated(){
    //在数据发生改变,并且界面也渲染到页面后调用
}
</script>
```

## 生命周期钩子函数  计算属性 computed

```html
<div id="app">
        <input type="text" v-model="msg">
        <p>您输入的文字一共有{{ msgLen }}个字</p>
        <p>{{ msgLen }}个字是你输入的内容</p>

        <p>a出现的次数：{{ aCount  }}</p>
        

    </div>
<script>
 var app = new Vue({
      el:"#app",
      data:{
          msg:''
      },
      computed: {
          msgLen:function(){

              return this.msg.length;
          },
          aCount:function(){

              var count = 0;
              for(var i = 0; i < this.msg.length; i++){

                  if(this.msg[i] == 'a'){
                      //统计数量+1
                      count++;
                  }
              }

              return count;
          }
      },
  });
</script>
```

## 



## 日期格式化插件 moment.js

```html
<script>
    //  var d = new Date();
    //  console.log(d);

    //  1999-01-01 12:23
    // YYYY就是年：4个Y代表是要占4位
    // MM就是月：2个M就代表2位
    // DD就是日：2个DD就代表2位
    // HH就是时
    // mm就是分
    // 除了以上特殊字符，其他你写什么都原样显示
    // 如果moment里面不传就代表获取当前时间
    var now = moment().format('YYYY年MM月DD日HH:mm');
    console.log(now);
    
    // 如果你传入了时间，那么就获得是你传入的时间
    var now = moment('1999-01-01 19:35').format('YYYY年MM月DD日HH:mm');
    console.log(now);
    
</script>
```

## axios的基本使用  .get的方法

```html
<body>
    <div id="app">
        <input type="text" placeholder="请输入城市" v-model.trim="city" @keyup.enter="search">

        <button @click="sendPost">
            发post请求
        </button>
    </div>
</body>

</html>

<!-- 导入axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
    var app = new Vue({
        el:'app',
        data:{
            ctity:''
        },
        methods:{
            search(){
                axios.get(`http://wthrcdn2.etouch.cn/weather_mini?city=${this.ctity}`)
.then(backData=>{
	console.log(backData)
})
        }
            }
        }
    })
</script>
```

## axios的基本使用  .post的方法

```javascript
methods:{
            search(){
                axios.post(`http://wthrcdn2.etouch.cn/weather_mini?city=${this.ctity}`,{
                    参数:值
                })
.then(backData=>{
	console.log(backData)
})
        }
```



## v-bind补充

```html
    <div id="app">
        <button @click="cls='red'">点我添加类</button>
        <button @click="isRed=true;isBigger=true">添加red类</button>
        <button @click="isRed=!isRed">切换red类</button>

        <!-- 没有影响原来的类，原来的类还在，只是说加一个 -->
        <!-- <div class="box" :class="cls"></div> -->

        <!-- 传入对象的写法 -->
        <!-- 如果传入对象形式：冒号后面表达式的结果为true，那么就有前面那个类名 -->
        <div class="box" :class="{ red:isRed, bigger:isBigger }"></div>

        <!-- 我要给div加一个样式叫font-size，但是值是根据vue里的size值来决定 -->
        <div :style="{ fontSize: size + 'px' }">我是div</div>
    </div>
</body>

</html>

<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>

    var app = new Vue({

        el: "#app",
        data: {
            cls: "",
            isRed:false,
            isBigger:false,
            size:200,
        }
    });
</script>
```

## 单个元素过度动画 transition

```html
<div id="app">
        <button @click="isShow=!isShow">切换显示</button>
        
        <transition name="xxoo">
            <p v-show="isShow">这是一个</p>
        </transition>
  </div>  

<script>
    let app = new Vue({
        el: "#app",
        data: {
            isShow: true
        }
    });
</script>
```

## 单个元素的帧动画

```html
body,script跟上面内容一样
<!-- 
        被各种动画写成了开源的动画库，所以我们只要用别人的就行了
     -->

    <style>
        .bounce-enter-active {
            animation: bounce-in .5s;
        }

        .bounce-leave-active {
            animation: bounce-in .5s reverse;
        }

        @keyframes bounce-in {
            0% {
                transform: scale(0);
            }

            50% {
                transform: scale(1.5);
            }

            100% {
                transform: scale(1);
            }
        }

        p{
            text-align: center;
        }
```

## iscroll滚动条插件

## Vue中$refs_让我们找到元素的方法

```html
<body>
    <div id="app">
        <input type="text" v-model.trim="msg" @keyup.enter="add" ref='txt'>
        <div id="wrapper" ref="wrapper">  //必须要有个名
            <ul>
                <li>隔壁老王1</li>
                <li>隔壁老王2</li>
                <li>隔壁老王3</li>
                <li>隔壁老王4</li>
                <li>隔壁老王5</li>
                <li>隔壁老王6</li>
                <li>隔壁老王7</li>
                <li>隔壁老王8</li>
                <li v-for="item in list">{{ item }}</li>
            </ul>
        </div>
    </div>
</body>

<!-- 
    上一个代码中，我们居然去操作DOM了，但是在vue里建议我们不要主动操作DOM,所以我们刚刚的代码破坏了这个原则
    初次以外，为了找到的元素在多个钩子里都能用，我们还声明2个全局变量，有变量名污染

    所以，Vue已经想好了，我们以后可能会要找到某个元素，所以它提供了一个属性叫 $refs 来让我们方便的直接找到某个元素
 -->


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="./lib/iscroll.js"></script>

<script>

    // 把这些div去交给vue去渲染了
    var app = new Vue({
        el: "#app",
        data: {
            list: ['23', '32'],
            msg: "",
            myScroll: undefined
        },
        methods: {
            add() {
                // 把文本框的内容加到数组，生成新的li
                this.list.push(this.msg);
            }
        },

        mounted() {

            // console.log(this.$refs);

            this.myScroll = new IScroll(this.$refs.wrapper); //找到拥有wrapper属性名的标签

        },
        updated() {
            // 每当数据发生改变，并且还要DOM已经渲染了，就要重新刷新一次滚动范围
            this.myScroll.refresh(); //.refresh()刷新
        },
    });

</script>
```

## 组件的基本使用

```html
如果安装了插件vscode,输入vuec,选中component那个回车
<body>

    <div id="app">

        <hello></hello>
        <hello></hello>
        <hello></hello>
        <hello></hello>

    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/html" id="tpl"> //第二种方法

    <div class="myContainer">
        <h2>我是模板注册的组件</h2>
        <input type="button" value="点我啊1">
        <input type="button" value="点我啊2">
    </div>

</script>

<script>
    
    // 在创建一个Vue的组件
    // 直接把标签写在template里
    // Vue.component('hello', {

    //     template:"<div><input type='button' value='点我啊1'/><input type='button' value='点我啊2'/></div>"
    // })

     //第二种方法
    Vue.component('hello', {

        template: '#tpl'
    })

    // 先准备一套模板，再注册为组件

    // 创建Vue实例去管理app这个div
    let app = new Vue({
        el: "#app"
    })

</script>
```

## vue组件绑定数据和事件   注意:组件里的data:必须要加function,再return出去

```html
组件方法绑定:跟普通的vue对象写法是一样的,都是写一个methods里面对象,对象里面写方法
组件的数据绑定,不一样,它在data后面要写function函数,然后在函数里return返回一个对象,对象里可以定义各种数据
<body>
    ------------------01---------------------
    <div id="app">

        {{ text }}
        <hello></hello>
        <hello></hello>

    </div>
</body>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
-----------02----------------
<script type="text/html" id="tpl">

    <div class="myContainer">
        <h2> {{ msg }}</h2>
        <input type="button" value="点我啊1" @click="sayHi">
        <input type="button" value="点我啊2" @click="msg='你好'">
    </div>

</script>

<script>
    01
    Vue.component('hello', {

        template: '#tpl',

        data: function () {

            return {

                msg: "我是马杀鸡"
            }
        },
        // 写方法那么跟普通Vue写法是一毛一样的
        methods: {
            sayHi() {

                alert('hi');
            }
        },
    })

    // 先准备一套模板，再注册为组件
02
    // 创建Vue实例去管理app这个div
    let app = new Vue({
        el: "#app",
        data: {
            text: "我是text"
        },
        methods: {

            test() {
            }
        }
    })

</script>
```

## 路由 VueRouter的基本使用

```html
<body>

    <div id="app">
        <h1>Hello App!</h1>
        <p>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <!-- 类似于tab栏的栏目 -->
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <router-link to="/xx">Go to xx</router-link>
            <router-link to="/oo">Go to oo</router-link>
        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- tab栏中的内容 -->
        <router-view></router-view>
    </div>
</body>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>


    // 1. 定义 (路由) 组件。
    // 在创建组件，组件的简写形式
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }
    const xx = { template: '<span>xx</span>' }
    const oo = { template: '<div>oo</div>' }

    // 2. 定义路由
    // 在定义路由的规则
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/xx', component: xx },
        { path: '/oo', component: oo },
    ]

    // 3. 创建 路由 对象，然后传 `路由` 规则配置
    // 代表传入上面写routes的路由规则，这个时候规则加到路由里面
    const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
    })

    // 4. 创建和挂载根实例。
    const app = new Vue({
        el:"#app",
        // 把这个路由对象挂载到这个vue实例里了
        // 就意味着这个vue管理起来的界面，会匹配这个路由的规则了
        router
    }) 

// 现在，应用已经启动了！
</script>
```

## $router跳转,$route获取传递过来的数据

## 编程式导航

```html
 <!-- 
        如果配合路由使用的时候，界面还要提供router-link去做导航

        这种导航特点：只要你点了就会切换到对应的组件那，没有逻辑判断

        如果我想用一些逻辑来判断能不能跳，就得用编程式导航

        编程式导航：其实就是用代码进行组件的切换
	    
	    对比router-link好处:可以加逻辑决定跳转还是不跳转,而router-link是只要点了就直接跳转
     -->
<div id="app">
    <p>
        <button @click="flag =!flag">
            开关
        </button>
        <button @click="tosome">
            跳转
        </button>
        <router-view></router-view>
    </p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 路由也是个vue的插件，也要导入路由 -->
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>
    //准备组件
    const Foo = {
        template:"<h2>我是foo</h3>"
    }
    const bar = {
        template:"<h3>我是bar</h3>"
    }
    //2,定义路由
    const routes = [
        {path:"/foo" , component:Foo},
        {path:'/bar', component:bar}
    ];
    //3,创建路由
    const router = new VueRouter({
        routes
    });
    
    new vue ({
        el:"#app",
        data:{
            flag:false
        },
        methods:{
            tosome(){
                //如果为true就跳转到foo这个组件
                if(this.flag){
                    //用代码导航到foo
                    router.push('/foo')
                }
            }
        }
    })
</script>
```

## 动态路由匹配

```html
<body>
    <div id="app">
        <p>
            <!-- 你切换到foo的时候，再传递一个id过去（假设想传递999过去） -->
            <router-link to="/foo/999/888">foo</router-link>
            <router-link to="/bar/jack">bar</router-link>
        </p>

        <router-view></router-view>
    </div>
</body>

</html>


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 路由也是个vue的插件，也要导入路由 -->
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>
    // 准备组件
    const Foo = {
        template: "<h2>我是foo</h2>"
    }
    const Bar = {
        template: "<h2>我是{{ $route.params.name }}</h2>"
        				//在组件里拿到传递过来的值
    }

    const routes = [
        // 如果你在网址里后面输入/foo，那么就访问Foo这个组件
        { path: "/foo/:xxoo/:ooxx", component: Foo },    注意:路由规则加点会报错,不要加点/foo
        // 切换到这个组件的可以接收一个参数
        { path: "/bar/:name", component: Bar },
    ];

    // 3. 创建路由对象
    const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes

    });

    new Vue({

        el: "#app",
        router,
    })
</script>

做法:
	1,在路由规则那写/:参数 写几个就代表需要几个参数
		例:{path:"/bar/:name",component:Bar}
	2,在跳转的路径上写 /值 
		例:/bar/Jack   代表把Jack给name
	3,在组件拿到传递过来的值
		$route.params.参数名
		例:$route.params.name

```

## 过滤器 |

```html
有些值不能直接拿来用,就需要用过滤器,过滤一下产生新的结果
在需要过滤的值后面写一个"|","|"后面跟一个过滤器名字
然后vue里有一个fillters,这是一个对象,对象里写过滤器名字的函数,然后这个函数里返回的什么，结果就是什么

<div id="app">
    <input type="text" v-model.trim="name" placeholder="请输入名字">
    <p>
        你的名字:{{name | dbname}}
    </p>
</div>

<script>
    const app = new Vue({
        el:"#app"
        data:{
        name:""
    },
            //对数据进行过滤
        filters:{
           dbname(val){
        		if(val.indexOf("屎") != -1){
                	return val.repiace("屎","耙耙")  //.repiace,进行替换
                }else if( val.indexOf('习近平') != -1 ){
                    return '伟大领袖' + val;
                }
        		   return val
    	}           
      }
    })

</script>
```

## 全局过滤器

```html
<div>
    <input type="text" v-model="msg">
    <h2>
        {{msg | glName}}
    </h2>
</div>

<script>
    //从用法上面: 全局和局部过滤器没有任何区别,但是在多组件开发中,全局过滤器可以在所有组件里使用
    //而全局只是在写这个过滤器的地上可以使用
    //全局过滤器,必须注册在实例化Vue对象之前
    
    Vue.filter('glName',function(value){
        return "abc";
    })
    
    const app = new Vue({
        el:"#app",
        data:{
            msg:''
        }
    })

</script>
```

## 串联过滤器

```html
<div>
    //<input type="text" v-model="msg">
    <h2>
        {{msg | before | after}}   // 跳  唱跳  唱跳rap
    </h2>
</div>

<script>
    
    const app = new Vue({
        el:"#app",
        data:{
            msg:'跳' v
        },
        filters:{
            before(v){
                return "唱" + v ;  v是原来的值
            },
             after(v){
                return v + "rap";
            }
        },
        
    })

</script>
```

## 过滤器传参

```html
<div>
    //<input type="text" v-model="msg">
    <h2>
        {{msg | fs('hello')}}
    </h2>
</div>

<script>
    
    const app = new Vue({
        el:"#app",
        data:{
            msg:'跳'
        },
        filters:{
            //过滤器可以传参:传递的参数是从第二个形参开始,第一个形参就是前面要过滤的值
           01 fs(v){
                console.log(v)   注意传入一个参数是打印先前的值(跳)
                return v + s ;  v是原来的值
            },
           02 fs(v,s){
                console.log(v,s)   打印:跳,hello
                return v + s ;  v是原来的值
            }
        },
        
    })

</script>
```





## active-class=" "  设置链接激活使用的css类名

```html
<div active-class="active"></div>
<div active-class="active"></div>
<div active-class="active"></div>
设置链接激活使用的css类名,点击的时候会有active的css属性
```

## 输入<vue快速生成单文件组件

```html
输入<vue>快速生成
<template>
  组件外部一定要有个div包住
    <div>
        <p>
            
        </p>
    </div>
</template>

<script>
export default {
		//逻辑代码
}
</script>

<style>
	//样式
</style>
```

## vue-cli 介绍和安装

```html
vue-cli 脚手架,可以帮助我们去处理vue文件,并且开启微型服务把vue文件翻译的让浏览器能够认识,还能够帮助我们管理项目中的一些组件,还能够自动刷新浏览器,自动压缩代码,自动的把js翻译为低版本的js

到官网,
01;起步:  npm install -g @vue/cli
02;打开cmd: 复制命令行黏贴
03;创建项目: vue create mycli(项目名称)  注意:不能用中文和大写字母
04;有两个选项,默认第一个就好
05;cd 进入项目
06;npm run serve 运行

```

## vue-cli项目文件及作用

```
node_modules		下载的第三方包
public				项目的模板页
src					代码基本上全部写在src中
	assets			放静态资源,css,图片
	components		组件
	App.vue			主组件,最顶级组件
	main.js			接口文件
	.gitignore		git忽略的文件
babel.config.js		js编译配置
package-lock.json	项目模板配置信息
package.json		项目配置信息
README.md			项目说明

```



## vue-cli 项目的src 代码的管理

```html
把项目自带的组件components文件的helloWorld删了,主组件APP.vue里面的数据清除再自己创建<vue>
输入<vue>快速生成
<template>
  组件外部一定要有个div包住
    <div>
        <p>
          {{msg}} 
        </p>
    </div>
</template>

<script>
export default {
		//逻辑代码
    data:function(){
        reuter:{
            msg:"你好"
        }
    }
}
</script>

<style>
	//样式
    p{
        color:red;
    }
    @import url("./assets/01.css") 如果是通用css样式就放在assets文件夹,导入即可
</style>
    
```

vue-cli 项目的src  assets文件夹

```html
里面存放静态资源,比如图片 跟css样式
```

## vue-cli 项目的src  main.js

```javascript
//导包 类似于 node中的 const Vue = require('vue')
import Vue from 'vue'
//导入APP.vue这个模块
import App from './App.vue'
//控制台要不要打印信息
//不打印vue在控制台的那些信息,true代表打印
Vue.config.productionTip = false

//要创建vue实例
new Vue({ 
  render: h => h(App), //把App.vue渲染到页面上,(#app里面)
}).$mount('#app')  //el:'app'

```

## vue-cli 项目的组件注册  (全局  /  局部)

```vue
----------全局组件的注册---------------注册之后所有组件都可以用
1,main.js中
2,import组件from '地址'
3,vue.component('名字',组件)即可完成组件
4,任意的地方使用
	1,用名字作为标签
5,希望一次注册,全部使用全局

    在main.js中
import ct from './components/ctrl.vue'
//代表把ct这个组件,注册成全局组件
//名字叫ctrl 要用的话就在需要用的地方写ctrl标签<ct></ct>
Vue.compomemt('ctrl',ct)
注意:ctrl可以更改名字,但是ct要改上面import ct from中的ct也要改
///////////////在ctrl.vue中///////////////
<template>
  <div>
    <h2>唱</h2>
    <h4>woshiquanju</h4>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

----------局部组件的注册---------------
1,在需要用到这个组件的地方导入import组件from"地址"
2,导入之后,设置components这个属性,即可在当前这个导入组件中使用该组件
3,根据使用的位置,决定局部或者是全局注册
	1,只在某些地方用,用局部

//在components创建ggw.vue,在App.vue中使用的话
<template>
  <div>
    <ggw></ggw>
	<ct></ct>    //全局组件
  </div>
  
</template>

<script>
import ggw from "./components/ggw.vue";	导入文件
export default {
    //在哪注册就可以在哪里用
  components:{		//components是一个对象
    ggw  //这是简写形式, ggw:ggw
  }
}
</script>

<style>

</style>
```

## 组件中的name属性

```vue
1,直接在组件的内部写name:值 即可
2,不能用中文
3,写了之后,chrome的vue插件中可以看到这个名字,更加利于检索,利于编码
<template>
  <div>
    <ggw></ggw>
  </div>
  
</template>

<script>
import ggw from "./components/ggw.vue";	导入文件
export default {
    name:'rap'   //chrome的vue插件中可以看到这个名字,更加利于检索,利于编码
    //在哪注册就可以在哪里用
  components:{		//components是一个对象
    ggw  //这是简写形式, ggw:ggw
  }
}
</script>

<style>

</style>
```

## watch数据监听的使用

```javascript
只要数据发生变化,就会调用
数据侦听
-------------------01--------------------------
watch:{
'$route.params.name'(){			//注意watch不能用点语法,所以要用引号,
							  //可以用来监听组件的name值,当name发生改变就发送请求
再发送请求那些
}
}

-------------------0--------------------------
侦听器:指定监听某个数据改变
其实有两个参数:参数1:   改变后的值   参数2 :改变前的值
watch:{
	msg(newvalue,oldvalue){
		
	}
}
```

## watch深度监听

```javascript
//想监听obj对象,而且想obj只要改变属性值改变就能触发
//深度监听:对象里多深的属性值有改变,都会触发
watch:{
	handler(){
		
	}
    //为true代表深度监听
	deep:true
}
```





## 配合路由使用做导航

```javascript
01,要把vue-router包下载  npm i vue-router



在App.vue中使用
<template>
  <div>			components文件夹的路径
    <router-link to="/ctrl">唱</router-link>
    <router-link to="/ggw">跳</router-link>
    <router-view></router-view>
  </div>
</template>


---------------在main.js中挂载路由-----------
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'		//下载好vue-router包导包
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)  ---调用
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
//const ctrl = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }
import ctrl from './componment/ctrl.vue'---因为创建了其它路由所以直接导入
import ggw from './componment/ggw.vue'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/ctrl', component: ctrl },
  { path: '/ggw', component: ggw }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
//const router = new VueRouter({
 // routes // (缩写) 相当于 routes: routes
//})----因为main.js本生就挂载了路由

new Vue({
  render: h => h(App),
    router---------这里挂载
}).$mount('#app')

```

## Element-ui 插件库

```vue
下载npm i element-ui -S
在全局main.js导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
```

## axios发送请求

```javascript
axios	请求		npm i axios	
哪里用哪里导入 import axios from 'axios';

全局导入axios
//导入axios
import axios from 'axios'
//为了让所有组件都能用,所以把axios加在Vue的原型对象里,那样所有组件都能用了
Vue.prototype.$axios = axios;



// 设置默认请求的网址
axios.defaults.baseURL = 'https://autumnfish.cn/';
```

## axios发送请求头携带token拦截器

```javascript
1,如果每次发送请求都要携带请求头可以设置拦截器,查官网
2,
 // 设置拦截器,每次发送请求的时候带上请求头
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    config.headers.Authorization = window.localStorage.getItem('token');//代表后面发送请求都携带token
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

注意:http是你发送请求封装好的名字,根据你封装的名字改
config就是你发送请求的一些状态(信息,比如请求的路径,请求的方式,请求的参数,请求头这些)
也就是说给服务器发送请求的信息都在config里面
```





## 用过滤器让时间毫秒替换成分

```vue
<div class="time">{{item.duration | formatTime }}</div> 过滤器


filters: {
    formatTime(value) {
      //先把毫秒转为秒
      let sec = Math.round(value / 1000);

      //把秒算成分
      let min = parseInt(sec / 60);

      //再得到剩余的秒
      sec = sec % 60;

      sec = sec < 10 ? "0" + sec : sec;

      return min + ":" + sec;
    }
  }
```

## MV用擂台思想

```javascript
<script>
export default {

    data() {
        return {
            //歌手名
            singerName:'',
            //mv路径
            MvUrl:''
        }
    },

    created() {
        this.$axios.get(`/mv/detail?mvid=${this.$route.params.mvid}`)
        .then(backData=>{
            // console.log(backData)
            let res = backData.data.data;
            //拼接姓名
            for (let i = 0; i < res.artists.length; i++) {
                this.singerName = res.artists[i].name + "|"
                
            }
            this.singerName = this.singerName.substr(0,this.singerName.length-1);

            //准备擂台:找出最大的分辨率
            let max = 0;
            for ( const key in res.brs) {
                if(key > max){
                    max = key
                }
                
            }
            this.MvUrl = res.brs[max];
        })
    },

}
</script>
```



## 路由重定向

```javascript
在路由规则里面写就可以了,

//创建路由匹配规则
const routes=[
  {path:'/slider',component:slider},

  //路由重定向 一个/就是默认的首页
  {path:'/',redirect:'/slider'}  从首页跳转到另外一个,  a到b

]
```









## vue全家桶

```
vue		vue本身
vue-router		路由
vuex
axios		发送请求
vue-cli		脚手架管理项目

```

## axios判断登录是否带cookie

```javascript
在 main.js中加入这句话
axios.defaults.withCredentials = true;  //让axios 携带cookie


在创建的首页组件中

//组件一旦创建会调用
//尽可能早点判断有没有登录,登录了才让你访问
beforeCreate(){
      //axios发送请求时,默认不会带cookie
    this.$axios
    	.get('地址')
        .then(backData=>{
        	//如果没登陆就要返回登录页
        if(backData.data.code == 'nalogin'){
            this.$router.push('/login')
        }
    })
}



第二种方法  在main.js中

//to: 你要去哪
//from:从哪来
//next:一个函数,调用这个函数就代表通行


router.beforeEach((to,from,next)=>{
    //把检查你有没有登录的代码写在这
    //有登录就让你通行,没有登录就打回登录页

    //判断你要去的路径包不包含user,如果包含代表要去个人中心
    if(to.path.indexOf('user') != -1){
        axios
    	.get('地址')
        .then(backData=>{
        	//如果没登陆就要返回登录页
        if(backData.data.code == 'nalogin'){
            router.push('/login')
        }else{
            //通行:原来打算访问哪,调用next()后,就是去哪
            next();
        }
        
    })
        }else{
            //代表去的是其它页面
              next();
              }
})

```

## router.beforeEach()全局前置守卫

```javascript
作用:可以在跳转到另一个路由之前,帮你做一下处理(比如说判断能不能访问接下来要访问的页面)


用法:1,在创建路由对象后创建
	2,语法	router.beforeEach((to,from,next)=>{ .... }
    3,特点:进入路由的任何页面都会被调用,它叫全局导航,在进入组件之前就调了
	4,记得要么跳转到另外一个页面去,要么调用next()放行,否则就没有任何反应了

const router = new VueRouter({
    routes
})

全局不加this.


//to: 你要去哪
//from:从哪来
//next:一个函数,调用这个函数就代表通行


router.beforeEach((to,from,next)=>{
    //把检查你有没有登录的代码写在这
    //有登录就让你通行,没有登录就打回登录页

    //判断你要去的路径包不包含user,如果包含代表要去个人中心
    if(to.path.indexOf('user') != -1){
        axios
    	.get('地址')
        .then(backData=>{
        	//如果没登陆就要返回登录页
        if(backData.data.code == 'nalogin'){
            router.push('/login')
        }else{
            //通行:原来打算访问哪,调用next()后,就是去哪
            next();
        }
        
    })
        }else{
            //代表去的是其它页面
              next();
              }
})
```

## router.beforeEach()局部导航守卫

```javascript
 写在main.js 中的路由规则
 在哪个路由规则的组件里写beforeEnter{},那么就代表只有进入到这个页面才会被拦截

 //路由规则
const routes = [
    {path:"/index",component: index},
    {
        path:"/user",
        component: user,
        beforeEnter:(to,from,next)=>{   //配置局部导航守卫
            axios
    	.get('地址')
        .then(backData=>{
        	//如果没登陆就要返回登录页
        if(backData.data.code == 'nalogin'){
            router.push('/login')
        }else{
            //通行:原来打算访问哪,调用next()后,就是去哪
            next();
        }
        
    })
        }else{
            //代表去的是其它页面
              next();
              }
        }
    }
]
```

## $parent找到父组件

```javascript
改掉主组件里的文字   比如主组件有 "登录" 要改成退出

<div> {{login}} </div>

export default {
  data() {
    return {
   		login:退出
    };
  },
}



或者:

beforeCreate(){
    this.$parent.login = "退出"
}

```

## 嵌套路由 就是子路由

```javascript
1,在需要嵌套路由组件里的合适地方写<router-view></router-view>>
2,在路由规则里,找到这个组件的规则,加一个children,这也是一个数组,数组中每个元素也是个对象
3,对象里有path,component和redirect等属性,跟普通路由规则的写法一样,只不过路径不用加/
```

## vue-cli中使用less和sass

```html
1,sass下载包
Sass	css预处理		npm install -D sass-loader node-sass
2,使用<style lang="scss"></style>
3,直接导入scss文件
	@import"地址"
4,语法基本和less没有什么区别


1,less下载包
less	css预处理		npm install -D less-loader less
2,使用<style lang="less"></style>
3,直接导入scss文件
	@import"地址"


<style lang="less">
    div{
        属性
        p{
            属性
        }
    }
</style>
```

## 样式中的scoped关键字

```html
比如:如果在全局App.vue中给了全局样式,但是子组件,自己的组件中想要另外的样式,但是类名或名字起冲突了,所以就得在<style lang="less" scoped></style>,加上scoped,就说明子组件可以用自己的样式,也可以用全局中的样式
```

## ES6模块化导入,导出语法

```javascript
1,Node.js的模块化标准是commonjs 
	1,导入require
	2,暴露: module.exports
2,ES6的模块化语法
	2.1,es6默认语法
		导入:import xxx from '模块路径'
		导出:export default 名字

	2.2按名字导入导出
    	导入:import {名字} from '模块路径'
		导出:export const 名字 = 值   //这种只适合数据,如果要导入函数或者方法,就要把const换成function
```

## axios设置多基地址

```javascript
111,
axios.defaults.baseURl = 'http://www.baidu.com'  //放入默认地址,下次发请求就会带上地址
axios.defaults.baseURl = 'http://www.taobao.com' 覆盖上面
1,默认情况下,一个axios实例只能设置一个基地址
2,如果你写多个,也只是后面的覆盖前面的

222,
    如果要设置多个基地址
1,多个axios实例,就可以设置多个基地址了
2,相当于xxAxios就是一个新的axios对象,只不过这个对象的基地址是xx.com
const xxAios = axios.create({
    baseURL:'http://www.xx.com' 
})

export const ooAios = axios.create({  //如果外面需要使用要暴露出去,前面加个export
    baseURL:'http://www.oo.com' 
})
```

## axios的接口抽取封装成函数

```javascript
//因为很多就扣需要重复使用,所以封装一个函数,需要的时候就调用
axios.search = ({ keywords})=>{ //海阔天空相当于keywords
    return axios.get('search',{ //因为.then不能写死所以需要return出去
        params:{
            keywords:keywords
        }
    })
}

调用并且传参
axios.search(keywords:'海阔天空').then(backdeta=>{
    这里写回调的数据
})   //海阔天空相当于keywords
```

## token

```javascript
1,名字是令牌
2,服务器生成的,发给浏览器
3,而是在响应的数据中直接返回
	1,cookie
		1,服务器自动返回
		2,浏览器自动保存
		3,第二次提交,自动发送
	2,token
		1,服务器在数据中返回
		2,浏览器不会自动保存
		3,后续的数据提交,不会自动携带
		
		localStorage.setItem('token',backData.data.data.token)
```

## 利用导航守卫判断是否登录

```javascript
//要访问某个页面时触发
//to: 要去的页面
//from: 从哪里来的
router.beforeEach((to,from,next)=>{

  //代表你要去访问的是index页面
  if(to.path.indexOf('index') != -1){

    //判断是否有登录
  if (window.localStorage.getItem('token') != null) {

    //如果登录就放行
    next()
  }else{

//注意,如果想在.js文件中要用饿了么ui提示框,因为是加入了vue原型中,所以不能this.  需要从原型中拿到prototype
    Vue.prototype.$message({
      message:"请先登录",
      type:'warning'
    })



    //否则打回登录页面
    router.push('/login')
  }
}else{

  //访问的不是index,那么就放行
     //允许你继续访问
  next();
  }
 
})
```

## 路由元信息,定义路由的时候可以配置meta字段

```javascript
相当于就是给管理的组件打一个标记,可以用来标记一些东西

const routes= [
  {path:"/login", component:login},
  {path:"/index", component:index,
  meta:{requiresAutn:true}			//标记这个路由,如果有这个标记就判断登录
  }

]

注意:requiresAutn可以更改名字

/要访问某个页面时触发
    //to: 要去的页面
    //from: 从哪里来的
    router.beforeEach((to, from, next) => {

      //代表你要去访问的是index页面
      // if(to.path.indexOf('index') != -1){
      if (to.meta.requiresAutn == true) { //切换requiresAutn路由元信息进行判断-------------------------------

        //判断是否有登录
        if (window.localStorage.getItem('token') != null) {

          //如果登录就放行
          next()
        } else {

          //注意,如果想在.js文件中要用饿了么ui提示框,因为是加入了vue原型中,所以不能this.  需要从原型中拿到prototype
          Vue.prototype.$message({
            message: "请先登录",
            type: 'warning'
          })



          //否则打回登录页面
          router.push('/login')
        }
      } else {

        //访问的不是index,那么就放行
        //允许你继续访问
        next();
      }

    })
```

## postman的使用

```javascript
按键:
get请求:   Params
请求头:	Header
post请求:		Body
```



## BootCDN加速页面

```javascript

```

## 父 -->子数据传递 props

```vue
1,如果子组件某个值不能写死,而是要父组件传过来那么子组件里写props属性,它是一个数组,里面写需要传递的参数名
2,在父组件里调用子组件时,写行内属性,行内属性名就是props的参数名,值就是你要传递的数组


      ---------这是子组件
<template>
      <!-- 面包屑 -->
      <el-breadcrumb-item>{{first}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{second}}</el-breadcrumb-item>
</template>

<script>
export default {
    // 现在需要first和second不是自己写死的,而且应该是外界传进来的
    // 父组件数据给子组件
    props:['first','second']
}
</script>


      ---------这是父组件

 <!-- 独立组件面包屑 -->
    <bread first="权限管理" second="角色列表"></bread>
```

## Echarts百度数据模板的使用

```javascript
01:下载:	npm install echarts --save
注意:下载好.一定要导入echarts
//导入echarts
import echarts from 'echarts'

02:在html中一定要有div,还有宽高
<div ref="echar" style="width: 600px;height:400px;"></div>

03:复制echarts中的模板代码
   //是能找到元素的最早的一个钩子
  mounted() {
    //实例化echarts并传入div
    const myChart = echarts.init(this.$refs.echar);
					//$refs找到dom中的echar元素,也就是div中的echar
    //准备设置
    const option = {
      title: {
        text: "堆叠区域图"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    //让报表根据option的数据来
    myChart.setOption(option);//自己加
  }
```

# webpack打包模# 块化

```
官网文档:https://www.webpackjs.com/guides/getting-started/
01:安装:
mkdir webpack-demo && cd webpack-demo		创建一个文件
npm init -y		下载package.json
npm install webpack webpack-cli --save-dev		下载webpack
02:按照格式
  webpack-demo
  |- package.json
+ |- index.html		新建index文件
+ |- /src		新建src文件夹,写逻辑代码
+   |- index.js		在src文件夹中在新建index.js

03:打包执行
npx webpack
打包会生成dist文件夹,在原先的index.html存入进去


注意:如果下载其它插件,命令行可以加入--save,比如 npm i jquery --save,这样下载package.json文件中才会有模块名信息

```

## 配置文件

```javascript
01,在demo中添加一个webpack.config.js文件
02,webpack.config.js文件输入

//导包
const path = require('path');

module.exports = {
//入口文件
  entry: './src/index.js',
  //出口,打包后的文件输出到哪,和文件名叫什么
  output: {
  //打包后的文件名
    filename: 'bundle.js',
    //打包后的路径
    path: path.resolve(__dirname, 'dist')
  }
};
```

## webpack -  loaders

https://www.webpackjs.com/guides/asset-management/#%E5%AE%89%E8%A3%85

```javascript

1,其它文件默认不支持解析
2,提供了一个机制loaders,可以翻译
3,让webpack拥有解析不同文件的能力
4,不同文件对应的loaders不一样
5,webpack默认只能够解析js,如果要解析css等文件要用loaders


命令下载loaders: npm install --save-dev style-loader css-loader

下载好在webpack.config.js添加代码

+   module: {
			//规则
+     rules: [
			//一个对象代表一条规则
+       {
			//匹配所有css文件
+         test: /\.css$/,
			//如果是css文件就用style-loader或者css-loader解析
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }


```

## vuex

```
1集中管理所有组件的数据
2,可以把它理解为是一个仓库
3,把组件数据抽取到他的内部
4,所有的组件都可以拿,所有的组件都可以改


下载:npm install vuex --save

```

## 开始

```javascript
1,下载好vuex,导入vuex,在main.js中use一下,
Vue.use(Vuex)
	//取值:如果要用到state里面的数据,在组件里this.$store.state.count
	//赋值:this.$store.commit('increment')
const store = new Vuex.Store({
    //state保存的就是数据
  state: {
    count: 0,
      //可以增加数据
      foods:['饭','鱼']
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

