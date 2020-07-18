---
title: node.js
---

-------------------------------------------------------------------------------------------------------------------------------

# node.js

## let & cont 关键字

```javascript
 // -------------------------------------
// 1.变量： var 关键字声明-----------------------
// 1.1 特点
//     a.预解析时 会 变量提升
//     b.变量重复声明 会覆盖
//     c.没有块级作用域

//a.全局作用域： 整个页面 -- window对象
//b.局部作用域： 函数内部的范围 -- 函数大括号 包裹的范围
//c.块级作用域： if for  while switch .....
// if(1 > 0){
//   var a = 1;
// }

// console.log(a);


2,变量: let 关键字
	2.1特点
    	01:无法变量提升
        02:无法重复声明
        03:有块级作用域    if  for while .....{}大括号都会形成 一个作用域,外部无法访问
let name = '一'
name = '二'
// let usrName = '一'; // 报错：Identifier 'usrName' has already been declared   无法重复声明

if(1 > 0 ){
    let age = 18;
    console.log(age)
}
//console.log(age)  // usrAge is not defined

3,常量const
	3.1 特点
    	01:必须声明时就要赋值
        02:无法重新赋值 -- 常量一旦赋值就不能再修改里面的值,一般用于 保存 --框架 或 程序的 配置数据，一旦程序启动 ，就不能允许 修改！
        03:无法变量提升
        04:无法重复声明
        05:有块级作用域
const age = 10;
//age = 12;// Assignment to constant variable  报错 : 无法重新赋值
console.log(age)

```

## 解构对象

```javascript
//解构
	一种方便快速获取对象和数组中的值方式

需求:想把 hero 对象中的属性 依次取出 放入 同名变量

let hero = {
 name:'huang';
 skill:'好';
 voice:'哭';
 hair:'头发';
}

方法一: 逐个创建同名变量,并从对象中 取出 属性值
let name = hero.name;
let skill = hero.skill;

方法二:对象解构 使用对象解构自动将同名属性 赋值给同名变量名
语法 : let {变量名1,变量名2,变量名3,...} = 对象
解释 : 相当于创建 n 个变量,并且 从对象中取出与变量同名的属性的值 设置给变量（相当于 方式一）
let { name , skill , voice} = hero
console.log( name,skill,voice)

console.log(name,skill,one)//注意: 如果 解构变量中存在 对象没有的变量,是没法从对象中获取对应数据的默认值为undefined 没有one

```

## 解构数组

```javascript
1,解构
	一种方便快速获取对象 和数组中的值得方式
    
 let list = ['1', '2', '3']
 
 方法一:逐个创建变量,并从数组中逐一取出元素
	let list1 = list[0];
	let list1 = list[1];
	....
 方法二:解构数组
 语法: let [变量名1,变量名2,变量名3,...] = 数组对象
 // 解释 ： 相当于 创建 n 个变量，并且 从 数组中 按顺序 取出 元素 设置给变量（相当于 方式一）
let [city01,city02,city03,city04] = cityList;
console.log(city01,city02,city03,city04);
	
```

## 箭头函数

```javascript
// -------------------------------------
// 箭头函数（Arrow Function） ： 相当于匿名函数，并且简化了函数定义。

// 1. function 变为 =>
// 2. 参数只有1个 省略小括号
// 3. 参数0个或多个，无法省略小括号
// 4. 函数体一行 省略{}
// 5. 函数体一行 有返回值 省略{}的 同时必须省略return
// 6. 函数体多行 无法省略{}

// 箭头函数 初体验：
// const func = function(name) {
//   return name;
// }

// 以上 匿名函数 可以 简化成 一下 箭头函数：
// const func = name => name+'-我是箭头函数返回的';

// let usrName = func('小白白');
// console.log(usrName); // 小白白


// a.无参数 无返回值的函数 函数体一行的-----------------------------------------
const func1 = function() {
  console.log('P城小王子')
}
// 箭头函数：函数体一行 省略 {}
const func1 = () => console.log('P城小王子');
func1();


// b.有1个参数 有返回值 函数体一行的-----------------------------------
const func2 = function(name) {
  return '团战可以输，' + name + '必须死'
}
// b1.function 转 箭头
// const func2 = (name) => { return '团战可以输，' + name + '必须死';}
// b2.省略小括号
// const func2 = name => { return '团战可以输，' + name + '必须死';}
// b3.省略 大括号 、 return
const func2 = name => '团战可以输，' + name + '必须死';

// c.多个参数 函数体 多行----------------------------------------------
// const func3 = function(name, skill) {   //多行大括号一定要
//   console.log(name)
//   console.log(skill)
//   console.log('牛逼')
// }

const func3 = (name, skill) => {
  console.log(name);
  console.log(skill);
  console.log('牛逼');
}
func3('小白','哭脸~~~');


const func4 = name => {
  console.log(name);
  console.log('牛逼');
}



```

## 对象属性赋值简写

```javascript
属性赋值简写:
		将变量 设置自给对象属性时,可以自动将同名的变量值赋给对象的同名属性
		对象中的方法可以省略 function
//思考：将 以下变量值 封装到 一个 拥有同名属性的 对象中
let name = '妲己'
let male = '女'
let skill = '傻笑'

 //手动 将 同名 的变量的 值 设置给 对象中的 同名属性
// var obj = {
//   name: name,
//   male: male,
//   skill: skill
// };

var obj = {
	name,  //name:name, 简写
    male,	//male:male,
    skill,
    sayHI(){
        console.log('我是')
    }
}
console.log(obj);
obj.sayHI();
```

## 展开运算符 ...

```javascript
// -------------------------------------
// 展开运算符 ...
//           完成 对象 与 数组 的 自动展开

// 1.对象 展开
//        将对象 中的 成员 自动 添加到 另个对象中

// 思考：将 以下两个对象属性都 添加 到 新的对象中
let chinaPerson = {
  skin: 'yellow',
  hair: 'black',
  sayHi: '吃了没'
}

let zhubo = {
  skill: '唱，跳，rap',
  habbit: '打篮球'
}

// let newObj = {
//   skin: chinaPerson.skin,
//   hari: chinaPerson.hair,
//   sayHi: chinaPerson.sayHi,
//   skill: zhubo.skill,
//   habbit: zhubo.habbit
// }

let newObj ={
  ...chinaPerson,
  ...zhubo
};
console.log(newObj);
```

## 展开运算符 数组 ...

```javascript
// -------------------------------------
// 展开运算符 ... 
//           完成 对象 与 数组 的 自动展开

// 1.数组 展开
//        将数组 中的 元素 自动 添加到 另个数组中

// 思考：将 以下两个数组 添加 到 新的数组中
let cityList = ['P城', 'Y城', '军事基地', '学校'];
let foodList = ['猪肉', '牛肉', '羊肉', '兔肉'];

// let newArr = [];
// newArr = newArr.concat(cityList,foodList);

let newArr = [
  '老婆做的菜不好吃',
  ...cityList,
  '赶紧买菜谱学习啊！！',
  ... foodList
];

console.log(newArr);
```

## 模板字符串 ``

```javascript
模板字符串 ``
			是反引号,键盘1左边
			本质:就是一个字符串
            
 特点:可以换行
 	 可以挖坑 ${表达式}

var name = '大';
var age = 10;
var L = true

/ var str = '我好喜欢你啊' + loverName + '\n虽然你已经' + loverAge + '岁了' ;
// console.log(str);

var str = `我好喜欢你啊${loverName}
虽然你已经${loverAge}岁了
性别${loverGender?'男':'女'}
`; 
console.log(str);
```

## 内置模块fs.unlink删除

```javascript
// -------------------------------------
// 内置模块 之 fs 文件系统 模块 初体验


// 注意：fs 中的 unlink 方法，只能用于删除 文件，不能用于删除 目录（文件夹）

// 在线文档： http://nodejs.cn/api

// 1.导包 ------- 类似于 <script src='xxx'></script>
//   语法：const 常量 = require('模块名') --- 读作：导入模块（包）
//         const 常量 中保存了 导入的模块 
//    常量命名建议：一般建议用和模块一致的名字
const fs = require('fs');



// 2.调用 包（模块）的方法 -- 务必习惯查阅文档 了解参数和调用作用
// 思考：如何通过 nodejs 删除一个文件 -- unlink方法

fs.unlink('./tmp/hello.txt', (err) => {
  // 如果 err 不为 null，就会在 if 中 当成是 true，进而执行 if 代码块
  if (err){
    console.log('呀，删除文件失败了~~~~' + err.message);
  }else{
    console.log('已成功删除 /tmp/hello');
  }
});


// var myFs = {
//   unlink(filePath,func){
//     //1.删除 filePath 指定的 文件

//     //2.调用 传入的 回调函数 func
//     // if(filePath 指定的文件 被顺利删除){
//       func(null);
//     // }eles{
//       func(new Error('对不起，文件删除失败~~~！权限不够！！！'));
//     // }
    
//   }
// };



百度node官方文档
```

## fs.readFile读取文件

```javascript
// -------------------------------------
// 内置模块 之 fs 文件系统 模块 读取文件内容
// 去 百度 查关键字 'nodejs 读取文件'

01,导包
const fs = require('fs'); // <script src = 'fs.js'></script>

02,调用readFile方法
02.1 路径 相对路径将相对于 process.cwd() 指定的当前工作目录进行解析。
fs.readFile('路径','utf8',(err111,data11)=>{
    if(err111){//如果 第一个 形参 数据 不为 null，if 会将它 看成是 true，代表 有异常出现
        console.log('读取成功')
    }else{
    	console.('读取失败')
    }
})

```

## fs.writeFile 保存文件

```javascript
// -------------------------------------
// 内置模块 之 fs 文件系统 模块 保存内容到文件

// 1.导包
const fs = require('fs');

let data = `裙姐来到桃花岛
看到坤哥在洗澡
噗通一声跳下去
一只螃蟹出现了~~~`;

// 2.调用 writeFile 方法
fs.writeFile('./tmp/ssss/lover.txt',data,'utf8',(err)=>{
  if(err){
    console.log('保存文件失败：' + err.message);
  }else{
    console.log('保存文件成功啦~~~~');
  }
});

// 2.1 文件不存在 会自动创建
// 2.2 文件夹不存在 无法自动创建,报错：no such file or directory


```

## 同步异步

```javascript
//1,同步与异步概念
同步从上往下执行 -- 循环
	console.log('代码执行开始')
for(var i = 1, i <=50 , i++){
    console.log(i)
}
console.log('代码执行完毕')


异步  计时器
let time = 0;

let hand = setInterval(()=>{
    for(time <= 50){
        console.log(time)
    }else{
        clesrInterval(hand)
    }
},100)

```

## node中的路径问题

```javascript
const fs = require('fs')
//1.使用 相对路径，是相对 终端执行路径 来说，所以 也不准确！
// fs.readFile('./web/index.html', 'utf8', (err, data) => {
// F:\01Edu\01深圳\02.3前端\02.JS基础\JZ课件\36期a班\NodeJS\Day02\01.knowledges/web/index.html

//2.使用 绝对路径，一旦 移动，路径就错误
fs.readFile('F:\\01Edu\\01深圳\\02.3前端\\02.JS基础\\JZ课件\\36期a班\\NodeJS\\Day02\\03上课代码\\01.knowledges\\web\\index.html', 'utf8', (err, data) => {
  if (err == null) {
    console.log(data)
  } else {
    // console.log('出错啦');
    console.log(err)
  }
})

02 获取绝对路径
let fs = require('fs');
//总结：
// 1.不要使用相对路径，而要使用绝对路径
// 2.绝对路径的 安全的 获取方式：__dirname + '目标文件路径';


//1.__dirname : 获取 正在执行的 js 文件所在目录 的绝对路径
console.log(__dirname)
// F:\01Edu\01深圳\02.3前端\02.JS基础\JZ课件\36期a班\NodeJS\Day02\03上课代码\01.knowledges

//2.__filename：获取 正在执行的 js 文件 的绝对路径
console.log(__filename)
//F:\01Edu\01深圳\02.3前端\02.JS基础\JZ课件\36期a班\NodeJS\Day02\03上课代码\01.knowledges\03.获取绝对路径.js

//1.获取 目标文件的 绝对路径 = 当前 执行的js所在目录 + 目标文件夹相对路径
let fullPath = __dirname + '\\web\\index.html';

fs.readFile(fullPath, 'utf8', (err, data) => {
  if (err == null) {
    console.log('读取的数据为：' + data);
  }else{
    console.log('读取出错：' + err.message);
  }
});


03 path模板生成路径
// 导包
const path = require('path')

// join生成绝对路径
// let path1 = __dirname + './web/index.html'
let path1 = path.join(__dirname,'./web/index.html');
// F:\01Edu\01深圳\02.3前端\02.JS基础\JZ课件\36期a班\NodeJS\Day02\03上课代码\01.knowledges\web\index.html
console.log(path1);

let path2 = path.join(__dirname,'web','./index.html');
// F:\01Edu\01深圳\02.3前端\02.JS基础\JZ课件\36期a班\NodeJS\Day02\03上课代码\01.knowledges\web\index.html
console.log(path2);
```

## http模块创建服务器

```javascript
导包
const http = require('http')
//1,创建服务器
	设置 请求回调函数: 一旦服务器被请求访问,就会自动调用这个回调函数
					并且传入两个参数
                    		request - 请求报文对象,包含了浏览器发来的数据
						   response - 响应报文对象,包含了和准备了要发送到浏览器的数据
const server = http.createServer((request,response)=>{
    response.setHeader('Content-Type','text/html;charset=UTF-8');
    response.end('你是浏览器')
})

//2,开启服务器
//		指定要监听的端口号,一旦有浏览器要访问,就需要在 IP后加入这个端口号
//                       比如：127.0.0.1:9999
server.listen(9876,(err)=>{
    if(err == null){
        console.log('启动成功')
    }else{
        console.log('启动失败' + err.message)
    }
})
```

## 读取文件并返回

```javascript
导入http模块
const http = requite('http')
导入fs模块
const fs = requite('fs')
导入path模块
const path = requite('path')

//创建服务器
const server = http.createServer((request,response)=>{
    绝对路径
    const fullPath = path.join(_dirname,'./web/index.html')
    读取并返回文件
    fs.readFile(fullPath,'utf8',(err,data)=>{
        if(err == null){
            //成功
            response.end(data)
        }else{
            //失败
            console.log('失败')
        }
    })
})

//开启服务器
server.listen(8848,()=>{
    console.log('success')
})
```

## 读取静态文件的服务器

```javascript
//导包
const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.sreateServer((request,response)=>{
	// console.log(request);
  	//1.先拼接 要读取 文件的 全路径
    let filePath = path.join(_dirname,'web','index,html');
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err == null){
           response.end(data);
        }else{
             response.end('服务器读取文件出错:' + err.message)
        }
    })
    // response.end('你连接我了，好讨厌呀~~~~~')
})

server.listen(8888,(err)=>{
    if(err == null){
        console.log('启动成功')
    }else{
    	console.log('启动失败' + err,message)
    }
})

在浏览器中输入自己电脑的端口加上8888,如 127.0.0.1:8888
```

## 返回浏览器请求页面

```javascript
//导包
const http = require('http');
const fs = require('fs');
const path = require('path');

//1.使用 createServer 创建一个 服务器对象
//   一旦 server 收到 请求，就会 调用回调函数
const server = http.createServer((request, response) => {
  //0. request.url ：保存了 浏览器 请求的 页面路径和名字
  console.log(request.url);

  // console.log(request);
  //1.先拼接 要读取 文件的 全路径
  let filePath = path.join(__dirname, 'web', request.url); // 文件绝对路径/web/1.html

  //2.读取 静态文件内容，并 发送 会给 浏览器
  fs.readFile(filePath, 'utf8', (err, data) => {
    //2.1 如果 读取成功
    if (err == null) {
      // 将 文件内容 发送到浏览器
      response.end(data);
    } else {// 2.2 如果读取失败
      // 将错误 消息 发送给 浏览器
      response.end('服务端读取文件出错：' + err.message);
    }
  })

  // response.end('你连接我了，好讨厌呀~~~~~')
});

server.listen(8888, (err) => {
  if (err == null) {
    console.log('启动成功~~~');
  } else {
    console.log('启动失败：' + err.message);
  }
})
```

## express第三方模块 设置路由

```javascript
先下载模块  npm官网下载express包
const express = require ('express')  // 导包

1,创建服务器程序
const app = express()
2,设置 静态文件目录
app.use(express.static(_dirname + '/web'));
	//作用:当浏览器直接请求静态文件时,express服务器程序会到web文件夹中找到并自动读取返回给浏览器

2,设置路由
app.get('/index',function(req,res)){
        res.send('Hello World')
}; //http://127.0.0.1:3747/index

app.get('/list',function(req,res)){
        let str= '';
        for(let i=0,i<=10,i++){
    	str +='woaini' + i +'</br>'
	}
		res.send(str)
};//http://127.0.0.1:3747/list

app.get('/login', function (req, res) {
  res.send('Hello World')
});//http://127.0.0.1:3747/login

app.listen(3747)//开启端口
```

## httpweb

```javascript
导包
const http = require('http');
const path = require('path');
const fs = require('fs');//负责 文件读写
const mime = require('mime');//负责根据文件后缀名获取对应的mime值

/* 网站提供的 页面 ：
   index.html
   detail.html
   dog.jpg
   index.css
*/

2,创建 server 对象				
let server = http.createServer((request,response)=>{ //request 请求报文 response 响应报文
    //2.1获取 浏览器请求的 url (其中包括被请求的页面名字)
    //		/index.html
     let filePath = request.url;
    //2.获取当前执行的js文件 的绝对路径
    //F:\01Edu\01深圳\02.3前端\05.NodeJS\Day03express\03Code
    let absPath = _dirname;
    //2.3 拼接被请求的html文件的绝对路径
    //F:\01Edu\01深圳\02.3前端\05.NodeJS\Day03express\03Code\web\index.html
    filePath = path.join(absPath,'web',filePath);
    // 3.读取 被请求的 html 页面
  // fs.readFile(filePath,'utf8', (err, data) => {
    
    fs.readFile(filePath,(err,data)=>{
        if(err == null){
            // 1.html  -> text/html
      // 1.jpg   -> image/jpeg
      //.....................
      // console.log(data);
      
      // Content-Type: image/png
            let mineName = mime.getType(filePath);
            response.setHeader('Content-Type',mineName);
            response.end(data)//data 中 有可能是 文件数据 也 有可能是 图片数据
        }else{
            response.end('读取页面出错:'+err.message
        }
    });
});
3,启动监听
        server.listen(3747,(err)=>{
            if(err == null){
                console.log('服务器启动成功')
            }else{
                console.log('服务器启动失败
            }
        }
```

## http获取Get参数

```javascript
const http = require('http');
/* ****************** 获取 Get 方式提交的 参数 ****************** 
   注意：http的 请求报文对象 request 无法直接 解析获取 get参数
        需要使用 url的parse方法 解析获取，所以需要 导入 url 模块
*/

//【1.】导入 url模块
const url = require('url'); 

const server = http.createServer((request,response)=>{
  console.log(request.url);

  // 使用 url.parse 方法 获取 url中的 get 参数
  // 如果 第二个参数 为 false ，那么 间接获取的是 get参数字符串 -> 'a=1&b=2'
  // let urlObj = url.parse(request.url,false);
  // console.log(urlObj.qurey); // 'a=1&b=2'

  // 【2.】使用 url.parse 解析 请求的路径，获取 请求路径对象
  // 如果 第二个参数 为 true ，那么 间接获取的是 get参数对象 -> { a : 1, b : 2 }
  let urlObj = url.parse(request.url,true);
  // 【3.】获取 请求路径对象 中的 query对象（包含了 url中的 get 参数）
  let queryObj = urlObj.query;
  
  // 【4.】获取 url中的 get 参数，并 打印 值
  console.log(queryObj.a);
  console.log(queryObj.b);


  response.end('您本次请求报文的 method=' + request.method);
})


server.listen(3747,(err)=>{
  if(err==null){
    console.log('启动成功~~~');
  }else{
    console.log('启动失败~~~');
  }
});
```

## http302重定向码

```javascript
const http = require('http');
/* ****************** 获取 Get 方式提交的 参数 ****************** 
   注意：http的 请求报文对象 request 无法直接 解析获取 get参数
        需要使用 url的parse方法 解析获取，所以需要 导入 url 模块
*/

//【1.】导入 url模块
const url = require('url'); 

// 创建 服务
const server = http.createServer((request,response)=>{
  // response.statusCode = 304;
  // response.statusMessage = 'Redirect';

  // 如果 浏览器请求的 是页面 9，就发送 302 给 浏览器，告诉他 跳转到 2.html
  if(request.url.indexOf('9.html') > -1){
    response.writeHead(302,{'location':'2.html'});
  }

  // 如果 老式浏览器 不识别 302 状态码，就 显示 重定向 超链接，让用户自己点击
  response.write('<a href="./2.html">重定向</a><br/>');

  response.end();// end 方法 会帮我们 通知 http模块，响应报文 已经 生成完毕，请 尽快 发送给浏览器
})


server.listen(3747,(err)=>{
  if(err==null){
    console.log('启动成功~~~');
  }else{
    console.log('启动失败~~~');
  }
});
```

## 服务器返回

```javascript
const http = require('http')

const server = http.createServer((request,response)=>{
    //1,将对象通过JSON.stringify转成字符串
    let str = JSON.stringift({
        today:'20190704',
        sta:'想死'
    });
    //2,通过write将json字符串输出到浏览器
    response.write(str);
    response.end(); //end方法会帮我们通知http模块,响应报文已经生成完毕,请尽快发送到浏览器
})

server.listen(3747,(err)=>{
    if(err == null){
        console.log('启动成功');
    }else{
        console.log('启动失败');
    }
})
```

## 服务器获取post参数 ---body-parser

```javascript
var express = require('express')
//1.导入 body-parser 模块： 专门用来 解析 请求报文体 的数据
var bodyParser = require('body-parser')
 
var app = express()
 
//2.设置 body-parser 的 数据解析格式
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//3.注册了 路由 ：/login
app.post('/login',(request,response)=>{
  
  // 4. 通过 request.body 获取  浏览器 post 过来的 【文本数据！！！】
  console.log(request.body);
  console.log(request.body.usrName);
  console.log(request.body.usrAge);
  
  response.end('post 数据已经 接收成功~~！');
})


// 5. 启动服务监听
app.listen(3747,(err)=>{
  if(err==null){
    console.log('启动成功~~~');
  }else{
    console.log('启动失败~~~');
  }
});

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
```

## 使用express 注册get post 两种路由的方式

```javascript
1,导入模块
const express = require('express');
2,创建 服务器程序
const APP = express();
3,注册路由
	//设置可以被浏览器"访问调用"的函数
APP.get('/show',(request,response)=>{
    response.send('我喜欢你');
});

APP.post('/so.html',(request,response)=>{
    response.send('<h1>我喜欢你2</h2>');
});

4,创建服务器,监听端口
APP.listen(3747,(err)=>{
    if(err == null){
        console.log('启动成功')
    }else{
    console.log('启动失败')
    }
})

注意:'/show', '/so.html' 文件可没有这个路径,浏览器只是读取,利用.send把报文添加到页面
```

## 使用express注册路由,get post 获取参数及数据

```javascript
const express = require('express');
const bodyParser = require('body-parser');

//1.创建 服务器程序
const serverApp = express();

//1.1 注册 bodyParser 中间件 -- 
//    用来 自动解析 请求报文 中的 urlencode格式的 数据，并将数据 组装成 对象 存入 request.body 属性中
serverApp.use(bodyParser.urlencoded({ extended: false }))

//2.注册路由
//  设置 可以 被 浏览器 “访问调用” 的函数

// 2.1 注册 针对 get 请求 的 url
//     只有 浏览器端 发送 get 请求 才能调用
serverApp.get('/showlove.html', (request, response) => {
  response.send('哦，你调用表白函数，是要向哪个幸运的姑娘表白呢？');
});

// 2.2 注册 针对 post 请求 的 url
//     只有 浏览器端 发送 post 请求 才能调用
serverApp.post('/getmarrige.html', (request, response) => {
  let luckMan = {
    name: '泰拳王子，播求',
    age: 33,
    gender: true
  };

  // let str = JSON.stringify(luckMan);
  // response.send('<h1>今天是我们生命中最美妙的日子~~~~</h1>');

  response.send(luckMan); // 注意：凡是 对象，都会在 send 方法中 被 JSON.stringify 方法 转成 JSON字符串 后 发送给 浏览器
})

//2.3 接收 浏览器端 get 方式 发送来的 参数 loverName    /showL?loverName=Linda&age=18
//    可以直接 使用 请求报文对象 request 中的 query 属性获取 url 后面的参数！
serverApp.get('/showL',(request,response)=>{
  console.log(request.query);
  console.log(request.query.lovername);
  console.log(request.query.age);

  response.send('你的好心我心领了：你是个好人~~！');
});


//2.4 接收 浏览器端 post方式　（urlencode 格式）提交过来的数据，并通过 request.body 属性访问
//    body-parser 中间件 会自动 的 将 请求报文体中的 housePrice=20000000 转成对象，并存入 request.body 属性中
serverApp.post('/buyHouse',(request,response)=>{
  console.log(request.body);
  console.log(request.body.housePrice);

  response.send('房子已经买好了~~欢迎入住~~！');
});


//3.启动服务，监听 端口
serverApp.listen(3747, (err) => {
  if (err == null) {
    console.log('启动服务器成功~~~');
  } else {
    console.log('启动服务器错误：' + err.message);
  }
})
```

## MySQL数据库,打开phpstudy软件

```javascript
01,打开软件,创建MySQL,创建一个项目名字
02,打开以后右键,新建 一个 数据库,填写信息
03,在新建的数据库右键,新建  表格,填写信息
04,点击新建的表格,点击数据浏览器,右键表格,新建字段填写信息,字符串Varchar就可以了,长度可以少一点,如果需要布尔值类型填写Bit,默认值填写0,1,代表删除,0代表未删除

SOL编辑器语言
//1,新增语句
```

SQL编辑器语言常见操作

增（insert）

1. id可以为空 自动设置的
2. 结尾 最好跟上`;`

```sql
-- 如果字段的值类型是字符串 要跟上引号
insert into 表名(字段1，字段2，字段3..) values(字段1的值，字段2的值，字段3的值)
-- 插入数据 可以人为设置id
-- insert into hero(id,skill,name,habbit) values(4,'草丛蹲着','盖伦','大宝剑')
-- id会自动生成不需要人为设置
-- insert into hero(skill,name,habbit) values('长枪依旧在','赵信','挑上天');
```

删 （delete）

1. 删除一定要**跟条件**，否则是全部删除
2. 条件的写法 除了= 还可以写范围

```sql
delete from 表名 条件 
-- 删除数据 必须跟条件 不跟后果很严重，真的
-- delete from hero where id = 5;
-- 范围删除
-- delete from hero where id>=6 and id <=9;
-- 不跟条件试试 数据都没有了
-- delete from hero;
```

改（update）

1. 修改一般都会跟上条件，否则 全部修改
2. 修改时，字段的格式不是固定的

```sql
update 表名 set 字段名=值,字段名2=值.. 条件
-- 修改 一般会跟条件
-- update hero set skill="回血" where id = 16;
-- 可以修改多个
-- update hero set skill="想去哪儿就去哪儿",habbit="旅游" where  id >=17 and id<=24;
update hero set  skill="变身",name="Niko",habbit="世界和平";

```

查（select）

```sql
select 字段 from 表名 条件
-- 从hero表  查询  id,skill,name,habbit 
-- 空格才是注释
-- select id,skill,name,habbit from hero 
-- 从hero表  查询 所有字段
select * from hero 
-- 查询出 hero表中 id = 4的值 字段是所有
select * from hero where id=4
```

## 小结

## MySQL数据库模块,增,删,改

```javascript
下载npm i MySQL
const mysql = require('mysql');

//0.准备 数据库连接信息对象
const connectionInfo = {
  host: 'localhost', // 要连接的 数据库 所在的 ip
  user: 'root', // 账户名
  password: 'root', // 密码
  database: 'hm36hero' // 要连接的 数据库 名称
};

//1.创建连接通道对象
const connection = mysql.createConnection(connectionInfo);

//2.连接 mysql服务
connection.connect();

// //3.执行 查询语句
// connection.query('select id,hName,hSkill,hIcon,hIsDelete from hero where id <= 24 ', function (error, results, fields) {
//   if (error == null) {
//     // console.log('The solution is: ', results); // [0].solution
//     for(let i = 0;i<results.length;i++){
//       let heroObj = results[i];
//       // console.log(heroObj);
//       console.log(heroObj.id + ',' + heroObj.hName+ ',' + heroObj.hSkill);
//     }
//   }
// });

// 4.新增语句
// connection.query("insert into  hero(hName,hSkill,hIcon) values('播求2','鞭腿2','111.jpg');",(error, results)=>{
//   if(error==null){
//     console.log(results);
//     /* 
//     results = {
//       fieldCount: 0,
//       affectedRows: 1, // 新增语句 成功的 行数 ，受影响的行数
//       insertId: 38,    // 新增成功 的 行的 id (mysql自动生成)
//       serverStatus: 2,
//       warningCount: 0,
//       message: '',
//       protocol41: true,
//       changedRows: 0 
//     }
//     */
//   }
// });

// 5. 删除语句
// connection.query("delete from hero where id = 33;", (error, results) => {
//   if (error == null) {
//     console.log(results);
//     /* 
//     results = {
//       {
//         fieldCount: 0,
//         affectedRows: 1, // 受影响行数：代表 删除了的 行数
//         insertId: 0,
//         serverStatus: 2,
//         warningCount: 0,
//         message: '',
//         protocol41: true,
//         changedRows: 0 }
//     }
//     */
//   }
// });

//6.修改语句
connection.query("update hero set hName='36期大黑胖子' where id = 27;", (error, results) => {
  if (error == null) {
    console.log(results);
    /* 
    results = {
      {
        fieldCount: 0,
        affectedRows: 1, // 受影响行数：代表 修改成功的 行数
        insertId: 0,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0 }
    }
    */
  }
});

connection.end();
```

## hash.js密码转hash值

```
下载 npm i hash.js

```

## 终端常用命令

- 路径切换 - cd 路径 --- 注意 有必要的情况 需要 切换盘符 比如 F:
- 显示文件 - ls
- 显示当前路径 - pwd
- 清屏 - clear
- 删除文件(慎用) -  rm -rf 文件名/文件夹/*
- 新建文件 - touch 文件名
- 使用vscode打开 -- code 文件名/文件夹
- 创建文件夹 -- mkdir 文件夹名