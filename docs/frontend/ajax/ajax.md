---
title: ajax
---

-------------------------------------------------------------------------------------------------------------------------------

# ajax

## location.href跳转

```javascript
//1,浏览器地址栏输入服务器网址,就可以访问服务器
//2,a标签访问服务器
//window.location.href
<a href="https://www.baidu.com">点我把,我是a标签</a>  <br><br>
<button id="btnOne">点我把,我是按钮</button>

document.getElementById('btnTwo').onclick  = function(){
    window.location.href = "https://www.baidu.com";
}
```

## Jquery-get()发送ajax请求

```javascript
<button>点我</button>

$(function(){
    $('button').on('click',function(){
        
        //使用JQ-get方法发送ajax请求
        $.get({
        	url:'https://autumnfish.cn/api/joke',
            //回调成功时返回来的函数
            success:function(backdata){
                console.log(backdata)
            }
        
        })
    })
    
})
```

## Jquery-get()带参数发送ajax请求

```javascript
/*
请求地址：https://autumnfish.cn/api/hero/simple
                请求方法：get
                请求参数：name
                参数名	参数说明	备注
                name	英雄名	
                响应内容：英雄的外号
*/
$(function(){

            $('button').on('click',function(){
                $.get({
                    url:'https://autumnfish.cn/api/hero/simple',
                    // data:'name=提莫',
                    data:{
                        name:'盖伦' //参数
                    },
                    success:function(backData){
                        console.log(backData);
                    }
                });

            });

         });


```

## Jquery-post()方法的使用

```javascript
 /*
          用户验证
            验证用户名是否可用
            请求地址：https://autumnfish.cn/api/user/check
            请求方法：post
            请求参数：username
            响应内容：该用户名是否可用
 */
//jQ入口函数
$(function(){
    //发送请求
    $.post({
        //请求地址
    	url:'https://autumnfish.cn/api/user/check';
        //请求参数
        data:{
        username:'亮'
    		}
         //返回请求的结果
        success:function(backData){
        console.log(backData)
    }
	})
})
```

## json的基本使用json字符串转成js对象 JSON.parse()

```javascript
//json  javascript object notation  js对象格式
//他的数据格式和js对象类似, 不同的是json格式的字符串的键都是用双引号引起来的.
//json是一个带有格式的字符串,其实是一种保存数据的格式.
//json格式的字符串如何转换成js对象.
//JSON.parse(json格式的字符串);  //返回值就是一个js对象.
//1
        // var jsonStr = '["张三","李四","王五"]'; //json格式的字符串
        // var arr = JSON.parse(jsonStr); //JSON.parse转换对象,arr就是一个js对象
        // console.log(arr);
        // console.log(arr[1]);


        //2.
        // var jsonStr2 = '{"name":"毛来顺","age":18,"score":100}'; //json格式的字符串.
        // var obj = JSON.parse(jsonStr2);//JSON.parse转换对象,arr就是一个js对象
        // console.log(obj);
        // console.log(obj.name);

        //3. 
        var jsonStr3 = '[{"name":"毛来顺","age":18,"score":100},{"name":"杨小毛","age":38,"score":99},
        {"name":"姚秀山","age":16,"score":40}]'; //json格式的字符串
        var arr2 = JSON.parse(jsonStr3); 
        console.log(arr2);
        for(var i = 0; i<arr2.length;i++){
            console.log(arr2[i].name);
        }

       })


```

## json的基本使用 js对象转成json对象 JSON.stringify()

```javascript
//把js对象,转成json格式的字符串.
            //JSON.stringify(js对象);

            //1.
            // var arr = ['张三','李四','王麻子']; //js对象
            // var jsonStr1 = JSON.stringify(arr); //'["张三","李四","王麻子"]'
            // console.log(jsonStr1);

            //2.
            // var obj = {
            //     name: '毛太顺',
            //     age: 18,
            //     score: 100
            // };
            // var jsonStr2 = JSON.stringify(obj);
            // console.log(jsonStr2); //'{"name":"毛太顺","age":18,"score":100}'


            //3.
            var arr2 = [
                {
                    name: '毛太顺',
                    age: 18,
                    score: 100
                },
                {
                    name: '羊小毛',
                    age: 18,
                    score: 100
                },
                {
                    name: '咬秀山',
                    age: 18,
                    score: 100
                }
            ];
            var jsonStr3 = JSON.stringify(arr2);
            console.log(jsonStr3);
            //'[{"name":"毛太顺","age":18,"score":100},{"name":"羊小毛","age":18,"score":100},{"name":"咬秀山","age":18,"score":100}]'


        })
```

## 模板-art-template模板引擎的基本使用

```javascript
<script src='./jquery-1.12.4.min.js'></script>
    <script src="./template-web.js"></script> //导入模板引擎
    <script id="tmp" type="text/html">  //使用方法
        <div>
            <h2>我的名字是:{{name}}</h2>
            <p>我的年龄是:{{age}}</p>
            <p>我的女朋友是:{{girlFriend}}</p>
        </div>
    </script>
    <script>
        $(function () {
            //准备了一份数据
            var data = {
                name: '毛太顺',
                age: '18',
                girlFriend: '大桥未久'
            }

            var data2 = {
                name: '杨小毛',
                age: '28',
                girlFriend: '苍老师'
            }

            //调用方法.
            var res = template('tmp', data2);
            console.log(res);



            //模板引擎.
            //1.引入他的包,其实就是js文件
            //2.写一个模板(固定的html结构),不同数据那个地方用占位符先占位.
            //    用script标签  给id  给type='text/html'    
            //3.准备数据(自己写的,或者发送ajax请求响应回来的数据)
            //4.调用模板的方法 template(模板id,传递的数据);

        })
    </script>
```

## 模板-art-template模板引擎的高级使用

```javascript
/*
        模板引擎遍历的语法:
        {{each}} 
            {{$value}}  表示遍历出来的元素
            {{$index}}  表示遍历出来的下标
        {{/each}}
        注意:
            遍历的是什么内容,要写清楚
            {{$value}}表示遍历出来的整个内容, 你要显示的是内容的什么部分也要写清楚
     */
<script id="tmp" type="text/html">
    // {{each}}---------------------------------02
        <div>
            <p>我的名字是:{{name}}</p>
            <h4>我的年龄是:{{age}}</h4>
            {{if age >= 18}}
            <h5>我成年了,我可以上网吧了</h5>
            {{else}}
            <h5>我还未成年,偷偷去网吧</h5>
            {{/if}}
            <ul>
            {{each girlFriFends}}
               <li>我的女朋友是:{{$value.name}}</li>
            {{/each}}
            </ul>
        </div>
      // {{each}}------------------------------------02
    </script>
    <script>
        $(function () {

            var data = {
                name: '茅',
                age: 16,
                girlFriFends: [
                    {
                        name: '波',
                        age: 18
                    },
                    {
                        name: '苍',
                        age: 18
                    },
                    {
                        name: '大',
                        age: 18
                    }
                ]
            }

            var res = template('tmp',data);
            console.log(res);
           //document.write(res)----------------------------------02
					添加
        })
    </script>
02方法可以遍历循环渲染在页面上
```

## 原生JS发送ajax请求.get

```javascript
/*
        获取多条随机笑话
        随机获取笑话的接口
        请求地址：https://autumnfish.cn/api/joke/list
        请求方法：get
        请求参数：num
        参数名	参数说明	备注
        num	笑话条数	类型为数字,不要给错了
        响应内容：JSON
        */

//如果原生js发送的是get请求,那参数就拼接在地址的后面
//格式:?key=value
//	   ?key=value&key2=value2

//原生js发送ajax请求
//1,创建对象 "小黄人对象"
var xhr = XMLHttpRequest();
//2,设置请求方式和地址
xhr.open('get','https://autumnfish.cn/api/joke/list');
//3,注册发送成功后,会执行的回调函数
xhr.onload = function(){
	console.log(xhr.responseText); //拿到响应回来的内容
    //手动把返回来的json格式的字符串转成JS对象
    var obj = JSON.parse(xhr.responseText);
    console.log(obj)
}
//4,发送
xhr.send();
```

## 原生发送ajax请求-post

```javascript
/*
        用户验证
        验证用户名是否可用
        请求地址：https://autumnfish.cn/api/user/check
        请求方法：post
        请求参数：username
        参数名	参数说明	备注
        username	用户名	不能为空,通过 send 方法传递，格式为 key=value
        xhr.send('username=xxx')
        响应内容：该用户名是否可用
        */
//创建xhr对象
var xhr = new XMLHttpRequest();
//2,open()
xhr.open('post','https://autumnfish.cn/api/user/check')
//设置请求头
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//4,注册回调函数
xhr.onload = function(){
    console.log(xhr.response)
}
//5.发送
xhr.send('username=亮')
```

## onreadystatechange

```javascript
//发送ajax请求.
        //1.创建xhr对象
        var xhr = new XMLHttpRequest();

        console.log(xhr.readyState); //0

        //2.open()方法
        xhr.open('post','https://autumnfish.cn/api/user/check');

        console.log(xhr.readyState); //1

        //3.如果是post,需要设置请求头.
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //4.注册回调函数
        //onload这个新浏览器支持的,老浏览器是不支持的.
        // xhr.onload = function(){
        //     console.log(xhr.responseText);
        // }
        //那之前是如何注册这个回调函数的呢?
        //这个事件什么时候执行: readystate状态值发生改变的时候才会执行
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState); // 2 3 4 
            //操作响应回来的内容.
            if(xhr.readyState == 4){
                console.log(xhr.responseText);
            }
        }

        console.log(xhr.readyState); //1

        //5.send();
        xhr.send('username=哈哈哈888');


```

## 原生JS发送ajax请求---get函数

```javascript
//规定data是key=value&key2=value2
//规定success是一个函数
function get (url,data,success){
    //创建xhr对象
    var xhr = new XMLHttpRequest();
    //参数的拼接
    url += '?';
    url += data;
    //2,设置方法方式地址
    xhr.open ('get',url);
    //注册回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            //xhr.responseText
            success(xhr.responseText);
        }
    }
    //5,发送
    xhr.send()
}

//验证一下我们自己封装的get函数
get('https://autumnfish.cn/api/joke/list','num=4',function(backData){
    console.log(backData)//其实这里输出 的就是xhr.responseText
    var obj = JSON.parse(backData)
    console.log(obj)
})
```

## 原生JS发送ajax请求---post函数

```javascript
 function post(url,data,success){
           //1.创建xhr对象.
           var xhr = new XMLHttpRequest();
           //2.设置方法方式地址
           xhr.open('post',url);
           //3.如果是post,还要请求头
           xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
           //4.注册回调函数.
           xhr.onreadystatechange = function(){
               if(xhr.readyState == 4){
                   //xhr.responseText
                   success(xhr.response);
               }
           }
           //5.发送.
           xhr.send(data) 
        }

        //验证自己封装的post方法.
        post('https://autumnfish.cn/api/user/check','username=毛太顺',function(backData){
            console.log(backData);
        });

```

## 回顾原生发送ajax请求

```javascript
<script>
        //1.创建一个xhr对象
        var xhr = new XMLHttpRequest();
        //2.设置请求方式和请求地址open
        xhr.open('get','https://autumnfish.cn/api/food.xml');
        //3.如果是post请求的话,要设置请求头
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //4.注册回调函数 onload是新式浏览器才支持的.
        // xhr.onload = function(){
        //     //xhr.response
        // }
        // 5.状态值readystate发生改变会执行  1-2  2-3 3-4
        xhr.onreadystatechange = function(){
            //处理响应体的.
            if(xhr.readyState == 4 ){
                // console.log(xhr.response);
                console.log(xhr.responseXML);
            }
        }
        //5.发送
        xhr.send();
        
        //参数的传递
        //get请求: 参数拼接在url后面  
        //   http://wthrcdn.etouch.cn/weather_mini?city=深圳
        //   http://acg.bakayun.cn/randbg.php?Type=json&t=dfproject

        //post请求: 传递的参数写在send()方法中
        // https://autumnfish.cn/api/user/check    xhr.send('username=林哥很帅');
        // https://autumnfish.cn/api/cq/add        xhr.send('heroName=秀山&heroIcon=xx&skillName=秀的一脸');
    </script>
```