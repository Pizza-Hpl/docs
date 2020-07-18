---
title: javascript阶段webapi知识
sidebar: 'auto'
---

-------------------------------------------------------------------------------------------------------------------------------

# javascript阶段webapi知识

## 根据ID获取元素

```javascript
//根据HTML标签中的ID名获取元素
<div id="k">我</div>

var k = document.getElementById('k')
		console.log(k);
        console.log(typeof banzhang);//对象  打印object
        
        //2.如果没有这个ID元素，则返回null

```

## 根据标签获取元素

```javascript
<ul id="banzhang">
        <li>我是班长1</li>
        <li id="li2">我是班长2</li>
        <li>我是班长3</li>
        <li>我是班长4</li>
        <li>我是班长5</li>
    </ul>
    
    var liList = document.getElementsByTagName('li');
        console.log(liList);
        /* 如果想要获取某个具体的元素对象，可以通过数组下标获取 */
        console.log(liList[0]);
        /* 伪数组不能调用数组api */
        // liList.resverse();
        
        //2.如果没有标签名，则获取空数组
        var aList = document.getElementsByTagName('a');
        console.log(aList);


        //3.如果不想获取页面所有的标签名元素，只想获取某个父元素下的标签名元素
        //可以用父元素来调用getElementsByTagName()
        var banzhang = document.getElementById('banzhang');

        //获取banzhang里面的li元素
        var liList1 = banzhang.getElementsByTagName('li');
        console.log(liList1);


        /* 父元素不能来调用getElementById */
        // banzhang.getElementById('li2');/* id具有唯一性 */

        /* 
        1.如果是document来调用getElementsByTagName，获取页面所有的标签名元素
        2.如果是父元素来调用getElementsByTagName，获取父元素里面的标签名元素
        3.id只能是document来调用，因为具有唯一性
        4.如果Element后面有s，表示获取的就是数组，可以被父元素来调用
         */
    
```

## 根据name属性获取input元素

```javascript
<!--表单元素有一个独有的name默认属性  -->
    <input type="text" name="user" value="请输入用户">
    
     var userList = document.getElementsByName('sex');
```

## 根据选择器获取元素

```javascript
//querySelector:只会获取满足选择器条件的第一个元素
 //querySelectorAll：会获取满足选择条件的所有元素
        var box = document.querySelector('.one');
        console.log(box);

         var oneList = document.querySelectorAll('.one');
         console.log(oneList);
```

## 移入点击

```javascript
//移入
        b.onmouseover = function(){
            alert('班长要和白石老师交流啦');
        };
  /鼠标双击的时候 double
        k.ondblclick = function(){
            alert('我要开个背');
        };      

//2.2 双标签文字： innerText 
        box.innerText = '我是班长女神';//修改box中的内容
```

## 数组去重

```javascript
var arr = [20,25,88,66,90,25,88,66];//[20,25,66,88,90]


        //1.冒泡法
        //1.1 先对数组排序arr
        //1.2 声明新数组存储去重后的数组newArr
        //1.3 遍历arr，检查每一个元素与相邻的元素是否相等。相等，说明重复。 不等，没有重复就添加

        //1.1 先对数组排序arr
        for(var i = 0;i<arr.length-1;i++){
            for(var j = 0;j<arr.length-1-i;j++){
                if(arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        console.log(arr);20 25 25 66 66 88 88 90
        
        //1.2 声明新数组存储去重后的数组newArr
        var newArr = [];
        //1.3 遍历arr，检查每一个元素与相邻的元素是否相等。相等，说明重复。 不等，没有重复就添加
        for(var i = 0;i<arr.length;i++){
            if(arr[i] != arr[i+1]){
                newArr[newArr.length] = arr[i];
            }
        };

        console.log(newArr); 20 25 66 88 90


        2.开关思想
        /* 
        1.声明newArr存储去重后的数组
        2.遍历arr，检查arr[i]在不在
        3.根据结果： 在：不添加  不在：添加
         */

        //1.声明newArr存储去重后的数组
         var newArr = [];
        //2.遍历arr，检查arr[i]在不在
         for(var i = 0;i<arr.length;i++){
            /*开关思想：某种操作结果只有两种情况
            a, var buZai = true;
            b. 验证假设
            c。根据开关结果实现需求 
             */
             var buZai = true;
             for(var j = 0;j < newArr.length;j++){
                 if(arr[i] == newArr[j]){
                     buZai = false;
                 }
             };
             if(buZai){
                 //没有重复
                 newArr[newArr.length] = arr[i];
             }
         };

         console.log(newArr); 20 25 66 88 90
```

## 获取网页部分

```javascript
//2.网页主要由四个部分组成：    元素节点    属性节点     文本节点   注释节点
//3.网页内容  ——> 一切皆节点Node

4.节点主要是三部分组成：节点三要素  (可以让浏览器准确的渲染页面内容)
        节点类型：nodeType
        节点名称：nodeName
        节点值： nodeValue


        1.元素节点
            节点类型： nodeType      1
            	//console.log(box.nodeType);//1
            节点名称：nodeName      标签名大写
            	// console.log(box.nodeName);//DIV
            节点值： nodeValue       null
             	//console.log(box.nodeValue);//null
        
        2.属性节点
            节点类型： nodeType      2
            节点名称：nodeName      属性名
            节点值： nodeValue      属性值

/* 本小节知识点： 文本节点与注释节点三要素

        1.文本节点
            节点类型： nodeType       3  
            		console.log(ul1.childNodes[0].nodeType);
            节点名称：nodeName       #text   
            节点值： nodeValue      文字内容    
        2.注释节点
            节点类型： nodeType         8
		         console.log(ul1.childNodes[1].nodeType);
            节点名称：nodeName        #comment
            节点值： nodeValue         注释内容

        3.文档节点
            节点类型： nodeType         9
            		console.log(document.nodeType);
            节点名称：nodeName        #document
            节点值： nodeValue         null
        
         */
            
            
            		03
 /*本小节的知识点：获取父元素的子节点与子元素
        1。  获取子节点：  父元素.childNodes
        2.   获取子元素：  父元素.children
         */

         var ul1 = document.getElementById('ul1');

         //1.获取子节点（元素  文本  注释）
         //谷歌： 元素  文本（包含空文本）  注释
         //IE8： 元素  非空文本  注释
         console.log(ul1.childNodes);

					04
         //2.获取子元素（元素节点）
         //谷歌火狐： 元素
         //IE8：元素和注释
         console.log(ul1.children);
         

<ul id="ul1">
        <li>ewtshnbfdgnfdgnm gdff</li>
        我是班长的坤哥
        <!-- 我是班长的小迷妹 -->
        <li id="li1">我是班长1</li>
        <li id="li2">我是班长2</li>
        <li>我是班长3</li>
        <li>我是班长4</li>
        <li>我是班长5</li>
    </ul>

			05--获取兄弟节点与兄弟元素
/*本小节的知识点：获取兄弟节点与兄弟元素
        1. 获取上一个元素与节点
            上一个元素： 元素.previousElementSibling
            上一个节点：    元素.previousSibling
        2.获取下一个元素与节点 
            下一个元素：  元素.nextElementSibling
            下一个节点    元素.nextSibling
         */
         var ul1 = document.getElementById('ul1');
         var li2 = document.getElementById('li2');//班长2
         //1.获取上一个元素与上一个节点
         //1.1 获取上一个节点
         console.log(li2.previousSibling);
         //1.2 获取上一个元素
         console.log(li2.previousElementSibling);
         //2.1 获取下一个节点
         console.log(li2.nextSibling);
         //2.2 获取下一个元素
         console.log(li2.nextElementSibling);


				06--获取第一个子节点与子元素
/*本小节的知识点：获取第一个子节点与子元素
        1. 获取第一个子节点
        2.取第一个子元素
           
         */
         var ul1 = document.getElementById('ul1');
         //1.获取第一个子节点
         console.log(ul1.firstChild);
         //2.获取第一个子元素
         console.log(ul1.firstElementChild);
         
				07--获取最后一个子节点与子元素
/*本小节的知识点：获取最后一个子节点与子元素
        1. 获取最后一个子节点  父元素.lastChild
        2.获取最后一个子元素    父元素.lastElementChild
         */

         var ul1 = document.getElementById('ul1');

         //1.获取最后一个子节点
         console.log(ul1.lastChild);
         //2.获取最后一个子元素
         console.log(ul1.lastElementChild);

					08--获取父节点

/*本小节的知识点：获取父节点
           获取父节点： 子元素.parentNode
         */

         var li2 = document.getElementById('li2');
        //获取元素的父节点：一定是元素  
        //因为只有元素才有儿子
         console.log(li2.parentNode);

         console.log(li2.parentNode.parentNode);//body
         console.log(li2.parentNode.parentNode.parentNode);//html
console.log(li2.parentNode.parentNode.parentNode.parentNode);//document
console.log(li2.parentNode.parentNode.parentNode.parentNode.parentNode);//null
        console.log(li2.parentNode.nextElementSibling);//我爸爸的弟弟（叔叔）
```

## innerText与innerHTML

```javascript
 //3.1 innerText : 无法解析字符串中的标签，会把所有的东西都当作元素的文本
        // box.innerText = "<a>我是链接</a><p>我是pp</p>";

        //3.2 innerHTML:可以解析字符串中的标签
        //作用：动态给页面添加元素 类似于  document.write();
```

创建元素的三种方法

```javascript
//3.1 创建标签  (1)创建的是空标签  （2）只是在内存创建，需要手动添加到dom页面中
        var p = document.createElement('p');//参数是标签名
        //3.2 设置属性
        p.innerText = '我是新来的';
        console.log(p);
        //3.3 添加到页面 : 父元素.appendChild(子元素)
        document.body.appendChild(p);
```

## appendChild 添加子元素

```
/*   父元素.appendChild(子元素)

    1.新创建的元素   :  则添加到最后面
    2.已经存在的元素 : 则是移动到最后面
    3.元素有子元素   : 则父元素和子元素一起移动到最后面
     */

    var ul1 = document.getElementById('ul1');

    //1.新创建的元素
    var newLi = document.createElement('li');
    newLi.innerText ='我是新来的';
    ul1.appendChild(newLi);


    //2.已经存在的原理
    var li3 = document.getElementById('li3');
    ul1.appendChild(li3);

    //3.元素有子元素
    var ul2 = document.getElementById('ul2');
    ul1.appendChild(ul2);

```

## insertBefore 插入子元素

```javascript
<ul id="ul1">
    <li>隔壁老王1</li>
    <li id="li2">隔壁老王2</li>
    <li>隔壁老王3</li>
    <li>隔壁老王4</li>
    <li>隔壁老王5</li>
</ul>

<ul id="ul2">
    <li>隔壁老张1</li>
    <li>隔壁老张2</li>
    <li id="li3">隔壁老张3</li>
    <li>隔壁老张4</li>
    <li>隔壁老张5</li>
</ul>


/*   appendChild : 只能添加到最后面
         insertBefore : 添加到指定位置

    语法： 父元素.insertBefore(新元素,要插入哪个元素的前面)

    1.新创建的元素   :   则添加到指定位置
    2.已经存在的元素 :   则移动到指定位置
    3.元素有子元素   :   则父元素和子元素一起移动到指定位置
     */

    var ul1 = document.getElementById('ul1');
    var li2 = document.getElementById('li2');//班长2

    //1.新创建的元素
    var newLi = document.createElement('li');
    newLi.innerText = '我是新来的';
    ul1.insertBefore(newLi,li2);//newLi添加到li2的前面

    //2.已经存在的元素
    var li3 = document.getElementById('li3');//老张3
    ul1.insertBefore(li3,li2);//li3插入到li2的前面
    

    //3.元素有子元素
    var ul2 = document.getElementById('ul2');
    ul1.insertBefore(ul2,li2);//ul2插入li2的前面
```

removeChild 移除子元素

```javascript
/*   
    语法： 父元素.removeChild(子元素)

    1.元素只能删除自己的子元素
    2.父元素不能删除别人的子元素
    3.元素不能自己删除自己

     */

    var ul1 = document.getElementById('ul1');
    var li2 = document.getElementById('li2');//班长2
    var li3 = document.getElementById('li3');//老张3


    //1.元素不能自杀:程序报错
    // li2.removeChild(li2);

    //2.元素不能移除别人的子元素
    // ul1.removeChild(li3);

    //3.元素只能删除自己的子元素（亲爸爸可以移除亲儿子）
    ul1.removeChild(li2);

```

## window对象的三个事件,oload ,onbefpreunload,onunload

```javascript
/*window对象三个事件：网页从打开到关闭的三个流程
                onload：页面所有内容（包含外部资源路径）
                onbeforeunload:页面即将关闭
                onunload：页面正在关闭
            
 */
//页面所有内容加载完毕
window.onliad=function(){
    //作用:可以获取网页任何元素
}

//页面即将关闭
window.onbeforeunload=function(){
    //作用:储存重要数据
    //挽留用户(IE8支持)
}

//页面正在关闭
window.onunload=function(){
    //不能保存数据,这个方法已走完页面就关闭,内存被回收
}
```

## location对象跳转

```javascript
 /*location:地址栏 
            网址url组成部分：全球统一资源定位符

            protocol：协议  http  https file
            host主机 ：  主机名hostname（ip地址） + 端口号（port）
            路径path:/
            参数：search  ?
            # : 锚点定位（资源定位符）
         */

         /* 
         assign：跳转网页
         replace:替换网页
         reload:刷新网页(F5)
          */
document.getElementByld('a').onclick=function(){
    //跳转网页:可以回退
    location.assign('http://www.itcast.cn');
    //替代网页:不能回退
    location.replace('http://www.itcast.cn');
    //刷新网页
    location.reload();
}
```

## history对象  页面回退,前进

```javascript
/* 
        history:历史纪录

            back():回退，上一页
            forward():前进，下一页
         */
document.getElementById('f').onclock=function(){
    //没有跳转过就没有历史记录,无法跳转
    history.forward();
}
```

## navigator对象 获取浏览信息

```javascript
/*navigator:  获取浏览器信息（名字 版本 电脑系统）
            用户数据统计: 大数据杀熟
         */

         console.log(navigator);
         console.log(navigator.userAgent);

        //返回参数字符串的下标，如果不在则返回固定值-1
         if(navigator.userAgent.indexOf('Chrome') != -1){//在
            alert('谷歌浏览器')
         }else if(navigator.userAgent.indexOf('Firefox') != -1){
            alert('火狐浏览器')
         }else{
             alert('IE等其他浏览器')
         }
         
        //判断用户浏览器品牌

        console.log(screen);
```

## localStorage本地储存

```javascript
/* 
        1.localStorage : 本地存储(存到硬盘，HP值无限)
        
        2.语法四个：增 删 改 查
            增加数据：setItem('属性名',属性值)
            获取数据：getItem('属性名')
            移除数据：removeItem('属性名')
            清空数据：clear()

        3.注意点
            a.存入的数据类型只能是字符串。如果不是编译器会自动调用toString()转成字符串
            b.永久存储。就算你关闭浏览器也存在你的电脑中
            
 */
document.getElementById('btn1').onclick = function(){
    //增加数据
            localStorage.setItem('name',13515588888);
	//获取数据
    		 var age =  localStorage.getItem('age');
           	  console.log(age);
    //删除数据
    		 localStorage.removeItem('girlFriends'); 
    //清空数据
    		  localStorage.clear();
         }


```

## sessionStorage 一次性储存

```javascript
/*1,locationStorage：永久存储（存储到硬盘中）
     sessionStorage：一次性存储（存储到内存中，一旦浏览器关闭就不在了）*/
/*sessionStorage:浏览器本地储存
				a.所有的语法作用与localStorage一致
				b.唯一的区别就是HP值不一样
*/
```

## 练习题,去掉数组 -

```javascript
//需求：（1）去掉-  （2）-后面的单词首字母大写(从第二个开始)
        var str = 'get-element-by-id';//getElementById

        //1.以指定分隔符分割字符串
        var arr = str.split('-');
        console.log(arr);
        //2.将数组中每一个元素拼成一个新的字符串
        var res = '';
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            var s = arr[i];//get element by id
            if (i == 0) {//首字母不需要大写
                res += s;
            } else {//先转大写后添加
                res += s.replace(s[0], s[0].toLocaleUpperCase());
            };
        };
        console.log(res);
```

## 定时器---setInterval永久定时器

```javascript
//定时器:让代码间隔时间执行
var p1=document.getElementById('p1');

var timeID = null; //声明变量储存定时时器ID
document.getElementById('kai').onclick=function(){
    /* 
            定时器（计时器）:一段代码，间隔时间执行
        */
            /**1.
             * @description: 开启定时器
             * @param {type} 第一个参数：一段代码
             * @param {type} 第e二个参数：时间间隔   单位：毫秒 ms
             * @return:timeID  一个页面可以开启很多个定时器，浏览器为了区分这些定时器，
             每开一个定时器就会给你一个编号，称之为定时器ID
             */
    timeID = setInterval(function(){
        consolg.log('haha')
        
        p1.innerText++;
    },1000)//美一秒钟执行一次
};

document.getElementByID('guan').onclick=function(){
    //关闭定时器 参数:定时器ID
    clearInterval(timeID)
}
```

## 定时器---setTimeout 一次性定时器

```javascript
        /* 定时器：让一段代码，间隔时间执行。

        1.setInterval():永久定时器：一旦开启，永久重复执行，只能手动清除
            清除定时器：clearInterval()
        2.setTimeout():一次定时器            一旦开启，间隔时间只会执行一次。然后自动清除
        
         */

        var timeID =  setTimeout(function(){
             console.log('3秒到了，开始呈现精彩内容');
             
         },3000);

         //setTimeout定时器也可以清除，但是用的不多
        //  clearTimeout(timeID);
```

## offseWidth与offSetHeight 与offsetParent与offsetLeft与offsetTop

```javascript
01
/* offset家族：获取元素真实的宽高与位置

    offsetWidth / offsetHeight
    offsetParent
    offsetLeft / offsetTop
     */

    /*1.点语法操作元素宽高的特点 
        a.只能获取行内，无法获取行外
        b.获取的是string，带单位
        c.获取的只是width和height属性值（你写的是什么，获取的就是什么）
        d.既可以获取，也可以修改
     */

 /* offsetParent:获取的是元素最近的定位父级(定位参考的父元素)
            parentNode：获取的是DOM树中的父节点（固定）
    
     */
    var box = document.getElementById('box');
     console.log(box.offsetParent);

     //1.如果元素的定位是固定定位（fixed），则定位父级是null
     //2.如果元素的定位是非固定位（绝对 相对），并且元素所有的父元素都没有定位，此时定位父级body
     //3.body定位父级是null

     console.log(document.body.offsetParent);

03
/*offsetLeft/Top: 获取元素真实的位置
         offsetLeft: 左外边框  距离  定位父级 左内边框的距离
         offsetTop:  上外边框  距离  定位父级 上内边框的距离
        
         */

         console.log(box.offsetLeft,box.offsetTop);
```

## 事件冒泡

```javascript
//1,事件冒泡: 如果一个元素的事件被触发,所以的父级元素同名事件会依次触发
//		元素 --> 父级元素 --> body --> html -->document --> window
//2,事件冒泡一直都存在,只是以前没有给父级元素注册同名事件而已
document.getElementById('btn').onclick = function(){
        alert('我是小按钮');
    };

    document.getElementById('box').onclick = function(){
        alert('我是骚粉的大盒子');
    };

    document.body.onclick = function(){
        alert('我是body');
    };

    document.documentElement.onclick = function(){
        alert('我是html');
    };

    document.onclick = function(){
        alert('我是document');
    };

    window.onclick = function(){
        alert('我是window');
    };
```

## 事件冒泡的好处

```javascript
/*
1,事件冒泡的好处: 如果一个父元素中所有的子元素都需要注册同名事件,则只需要给父元素注册即可
2.关于事件对象的一些好处
		this:谁调用我,我就是谁
		currentTarget: 就是this,但是少用,因为有兼容性,而this没有
		e.target: 事件触发源,触发这个事件真正的源头
		

*/
 //需求：给页面每一个li元素注册点击事件，点击之后弹窗显示文本

        //1.以前的做法

        // //(1)获取li元素
        // var liList = document.getElementsByTagName('li');
        // //(2)遍历数组，给每一个li元素注册点击事件
        // for(var i = 0;i<liList.length;i++){
        //     liList[i].onclick = function(){
        //         //this:谁调用我，我就代表谁
        //         //this:当前点击的li元素
        //         alert(this.innerText);
        //     };
        // };

<ul id="ul1">
        <li>我是班长1</li>
        <li>我是班长2</li>
        <li>我是班长3</li>
        <li>我是班长4</li>
        <li>我是班长5</li>
        <li>我是班长6</li>
    </ul>

        //2.使用事件冒泡：只需要给父元素注册即可
            var ul1 = document.getElementById('ul1');

            ul1.onclick = function(e){
                //this:谁调用我，我就代表谁
                //this:ul
                // alert(this.innerText);

                console.log(e.currentTarget === this);
                

                //如何知道到底是点击哪一个li元素触发的父元素ul的事件呢？
                //事件触发源：触发这个事件真正的源头
                console.log(e.target);
                alert(e.target.innerText);
                
            };
```

## 阻止事件冒泡

```javascript
/*
1, 事件冒泡: 如果一个元素的事件被触发,所有的父级元素同名会依次触发
		元素 -> 父元素 -> body -> html -> document ->window
2,事件冒泡一直存在,只是以前没有给父元素注册同名事件而已

3,阻止事件冒泡: 只触发当前元素的事件,不触发父级元素的同名事件
		谷歌火狐: e.stopPropagation()
		IE8:	 e.cancelBubble = true

4,注意点: 要想阻止事件冒泡,一定要先获取事件对象
*/

 document.getElementById('btn').onclick = function(e){
        alert('我是小按钮');
        
    };

    document.getElementById('box').onclick = function(e){
        alert('我是骚粉的大盒子');
        // e.stopPropagation();

        //IE8: 需要设置事件对象的一个属性为true
        e = e  || window.event;
        e.cancelBubble = true;           //当这里阻止事件冒泡
    };

    document.body.onclick = function(){
        alert('我是body');
    };

    document.documentElement.onclick = function(){
        alert('我是html');
    };
```

## 事件捕获

```javascript
/*1. 事件冒泡：  如果一个元素的事件被触发，所有的父级元素同名事件会依次触发

            元素 -> 父元素 -> body -> html -> document ->window
      1. 事件冒泡一直都存在，只是以前没有给父元素注册同名事件而已

      3.事件捕获：  如果一个元素的事件被触发。先从最顶级父元素window一级一级往下触发，直到目标元素。
            window -> document -> html -> body -> 父元素 -> 元素
      4.要想注册捕获事件，只有唯一的一种方式  addEventListener注册并且第三个参数一定为true
        * 除此之外所有的方式注册事件都是冒泡：点语法  addEvenetListener第三个参数false

      5.IE没有捕获

      6.阻止冒泡一样可以阻止捕获
    
     */
    document.getElementById('btn').addEventListener('click',function(){
        alert('我是小按钮');
    },true);//捕获

    document.getElementById('box').addEventListener('click',function(){
        alert('我是骚粉的大盒子');
    },true);

    document.body.addEventListener('click',function(){
        alert('我是body');
    },true);

    document.documentElement.addEventListener('click',function(e){
        alert('我是html');
        e.stopPropagation();
    },true);

    document.addEventListener('click',function(){
        alert('我是document');
    },true);

   window.addEventListener('click',function(){
        alert('我是window');
    },true);

```