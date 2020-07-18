---
title: JQuery
---

-------------------------------------------------------------------------------------------------------------------------------

# JQuery知识

## 使用JQuery一定要先导入

```javascript
<!--导入jquery啊！！！ -->
    <script src="jquery-1.12.4.js"></script>
```



## JQ初体验--优缺点

```javascript
/*
01---原生语法
	优点:---性能高
	缺点:01:入口函数只能一个
		02:代码冗余
		03:api过长,不好记忆
		04:代码容错率低
		04:浏览器兼容性不好
		
02---jQuery语法
	优点:01:入口函数可以多个
		02:代码简洁(隐式迭代)
		03:api简洁好记
		04:代码容错率高
		05:浏览器兼容性好
		
	缺点:性能不如原生(忽略不计)
	

*/
引入jQuery.js

//1.入口函数 （ dom树加载完毕 ）
        $(function(){
            //通过选择器来获取你想要操作的dom元素
            //获取元素
            $('#btn1').click(function(){
            //使用jQuery的语法来操作页面元素: 获取属性  设置属性
                $('div').css('border','10px solid red');//隐式迭代： 偷偷的遍历
            });

            $('#btn2').click(function(){
                $('div').text('22222');
            });
        });
```

## jQ入口函数

```javascript
//1.jquery中的入口函数有两种写法： 完全等价

        //1.1 标准写法
        $(document).ready(function(){
            console.log('1111');
        });

        //1.2 简洁写法 : 常用--------------------------使用这种
        $(function(){
            console.log('222222');   
        });


        /*1.jquery的入口函数与原生dom的入口函数区别
            a. 原生的入口函数只能一个，jquery的入口函数可以多个
            b. 执行时机不同
                jquery的入口函数：dom树加载完成就执行
                原生的入口函数window.onload : dom树加载完成，而且页面所有的外部资源路径 
        
        */
```

## DOM对象与JQ对象的区别

```javascript
/*jquery对象与原生的dom对象有什么区别
            1.dom对象： 使用原生dom语法获取的元素对象
            2.jquery对象： 使用jquery的语法获取的元素对象(伪数组)

            3.(面试点) jq对象与dom对象区别
                *** jq对象只能用jq的对象，dom对象只能用原生dom语法  ***
            
            4.dom对象与jq对象互转
                jq对象转dom对象：  下标获取： $()[下标]   方法获取： $().get(下标)
                转dom对象jq对象：  $(dom对象)
        */

        //1. dom原生对象： 使用原生的语法获取的页面元素对象
        var box = document.getElementById('box'); // 对象 | null
        var divList = document.getElementsByTagName('div');//伪数组（对象）

        console.log(box);

        console.log(divList);

        //2. jquery对象： 使用jquery语法获取到的页面元素对象
        /* *****jquery对象的本质是一个伪数组****  */
        /* 细节：一般jq对象加上一个前缀$ */
        var $box =  $('#box');

        console.log($box);

        var $oneList =  $('.one');

        console.log($oneList);

        //伪数组拥有数组的三要素，但是没有数组的api
        // $box.reverse();


        //3.jquey对象和原生dom对象的区别

        /* 原生dom对象只能用原生的dom语法，jquery对象只能用jquery的语法  */

        //3.1 原生dom
        //这样写可以 innerText是原生语法
        box.innerText = '我是原生语法';
        //报错： 原生dom对象不能使用jquery的语法
        //box.text('66666');//报错   xxx is not a function

        //3.2 jquery对象
        //可以
        $box.text('666666');
        //不可以： jquery对象不能使用dom原生语法
        $box.innerText = '8888888';


        //4. jquery对象与原生dom之间可以互转

        //4.1 jquery对象转换原生dom : 两种方式

        //a.常用： 下标获取
        var dBox = $box[0];
        console.log(dBox);//只能用原生dom语法

        //b. 使用jquery对象自带的get()方法
        var dBox2 = $box.get(0);//参数是下标


        //4.2 原生dom转jquery对象 ： 唯一的方式  $(dom对象)
        console.log($(box));
```

## jQuery的选择器

```javascript
/*1.基本选择器：与css一致

        id选择器：   $('#id')
        类选择器：   $('.one')
        标签选择器：  $('div')
        并集选择器：  $('.one,.two')
        交集选择器：  $('li.current')
        */

/*2,层次选择器：与css一致
            子代选择器：  $('#father>p')    只获取第一代子元素
            后代选择器：  $('#father p')    获取后代子元素
         */


/*3,  过滤选择器：jq中独有的选择器
                语法：  $('选择器:过滤规则')
            
            常见规则：
                odd : 下标为奇数
                even : 下标为偶数
                eq(num) : 下标 = num
                lt(num) : 下标 < num
                gt(num) : 下标 > num

         */

         
         //1.获取 下标为奇数行
         console.log($('li'));

         $('li:odd').css('background','green');

         //2.获取 下标为偶数行
         $('li:even').css('background','yellow');

         //3.获取 第一行和第二行
         $('li:eq()').css('background','red');
         $('li:eq(1)').css('background','red');
        //  $('li:first').css('background','red');

        //eq也可以这样写 好处：可以取出变量中的值
        var idx = 6;
        console.log($('li').eq(idx));
        

        //4.获取 最后一行
        $('li:last').css('background','pink');
```

## 样式属性操作

```javascript
/*1.复习原生的属性操作
            获取：window.getComputedStyle()
            设置：元素.style.属性 = 值

        2. jq中属性操作
            获取： $.css('属性名')
            设置： $.css('属性名',属性值)

        3.注意点
            a. 如果是多个元素，获取操作只拿第一个元素的属性
            b. 如果是多个元素，设置操作会对所有元素生效 （隐式迭代）
            c. 如果希望设置多个属性，参数就传对象类型  {属性名：属性值}
        
        */
//2.设置
        $('#btn2').click(function () {
            //1.一个元素设置一个属性
            $('#box').css('width', '200px');
            $('#box').css('backgroundColor', 'yellowgreen');
            //2. 一个元素同时设置多个属性
            $('#box').css({
                width: '500px',
                height: '300px',
                border: '10px solid hotpink'
            });

            //3. 多个元素设置属性 : 所有的元素都会修改 隐式迭代
            $('.one').css({
                width: '500px',
                height: '300px',
                border: '10px solid hotpink'
            });
        });
```

## jq HTML属性操作

```javascript
 /*1.复习dom原生的html属性操作
            a.文本操作 
                innerText : 获取文本（包含子元素的文本）
                innerHTML : 获取内容（文本+标签）
            b.标准属性
                href ： a标签
                src ： img标签
            c.自定义属性  attribute语法
                获取： 元素.getAttribute('属性名')
                设置： 元素.setAttribute('属性名',属性值)
                移出： 元素.removeAttribute('属性名')
      
      */
        2.jq中的html属性操作
            a.文本操作
                text()  : 相当于innerText
      $('#box').text('<a href="#">我是连接</a><p>我是pppp</p>');         
                html()  : 相当于innerHTML
      $('#box').html('<a href="#">我是连接</a><p>我是pppp</p>');
            b.标准属性 + 自定义属性
                获取： $().attr('属性名')
	  console.log($('#box').attr('aaa'));
                设置： $().attr('属性名',属性值)
	  $('a').attr('href','http://www.itheima.com');
                移除： $().removeAttr('属性名')
       $('#box').removeAttr('aaa'); 
    
```

## jq节点操作筛选

```javascript
/*
1,复习原生dom节点操作 : 属性获取
		获取子元素   : 父元素.children
		获取父元素   : 子元素.parentNode
		获取上一个元素: 元素.previousElementSibling
		获取下一个元素: 元素.nextElementSibling
*/

/*
2,JQ中dom节点操作	: 方法获取
		获取子元素	: $().children()
			console.log($('#ul1').children());
		获取父元素：    $().parent()
			console.log($('li:eq(0)').parent());
         获取上一个元素： $().prev()
         	  console.log($('li:eq(1)').prev());
         获取下一个元素： $().next()
         	  console.log($('li:eq(1)').next());
         获取所有的兄弟元素  $().siblings()
         	  console.log($('li:eq(1)').siblings());
         获取所有的后代元素  $().find()
         	  console.log($('#ul1').find('li')); // 获取所有的后代li元素
        	  console.log($('#ul1').children('li'));//获取所有的子代子元素
*/
```

## 创建元素的2中方式

```javascript
/*
	1,原生DOM创建元素的三种
		document.write()	不推荐
		innerHTML			小于100可以使用,性能问题
		document.createElement() 推荐使用
 */
	jQ创建元素的2中方式
    	// $().html()		: 相当于innerHTML
        
        $('#div1').click(function(){
            $('div1').HTML('<a href="#">我是连接</a><p>我是pppp</p>')
        })

        // $('字符串')

		$('#div1').click(function(){
            	//创建一个JQ对象,也是在内存创建
    		var $1 = $('<a href="#">我是连接</a><p>我是pppp</p>')
            $('#div1').append($1)  //添加到页面
		})
```

## jq添加元素的5中方式

```javascript
/*
	1,原生dom添加元素的2中方式
		父元素.appendChild(子元素)		:  添加到最后
		父元素.insertBefore(A元素,B元素)	:  A元素插入到B元素的前面
		
	2,原生添加操作特点
		新创建:  添加
		已存在:  移动
		元素有子元素:  元素和子元素一起移动
*/

3,JQ中添加元素的5种方式 :  特点与原生一致

	append()  :  $().append(子元素)				添加到最后面
    appendTO() :  $(子元素).appendTo(父元素)		   添加到已存在
    prepend()  :  $().prepend(子元素)				 添加到最前面
    before()   :  元素A.before(元素B)				B插到A的前面
    after()	   :  元素A.after(元素B)				B插到A的后面
    
```

## JQ移除元素的三种语法

```javascript
/*
1,原生DOM移除元素:2中方式
	移除所有子元素
		元素.innerHTML = '';
	移除单个子元素 : 只能移除自己的子元素
		父元素.removeChild(子元素)
*/
2,jq移除的3中方式
	移除所有
		$().html('')			少用:性能不如empty
        	 $('#ul2').html('');

		$().empty()				推荐使用
        	 $('#ul1').empty();

     移除单个
     	$().reomve()	一律是自杀	底层:this.parentNode.reomveChild()
			 $('#li2').remove();
```

## onmouseover与onmouseenter的区别

```javascript
onmouseover:支持冒泡: 鼠标移入元素 和子元素 都会触发 浪费性能
onmouseenter:不支持冒泡: 鼠标移入子元素不会触发  性能高一些

$('标签').onmouseenter(function(){
    
})
```

## JQ类名操作

```javascript
/*1. 复习原生dom类名操作
            取值 ： 元素.className
            赋值 ： 元素.className = '类名'
                修改类名，元素样式也会修改
*/
          2. jq中类名操作
            addClass()        : 添加类
            	$('#div1').addClass('width200')
            removeClass()     : 移除类
            	$('#div1').removeClass('width200')
            hasClass()        : 判断类    返回布尔类型
            	$('#div1').hasClass('width200')
            toggleClass()     : 切换类    有就移除，没有就添加
			   $('#div1').toggleClass('width200')

```

## JQ 显示隐藏show()与hide()

```javascript
1,显示动画show
$('div').click(function(){
     //1. 第一个参数：动画时间  不传，默认没有动画
            // $('#div1').show();

            //2. 第一个参数：单位  ms  传了才有动画
           $('#div1').show(1000);

            //3. 第一个参数时间间隔可以是固定的字符串：  fast : 200 normal:400  slow:600
            $('#div1').show('');//空字符串表示normal 400

            //4. 第二个参数： 动画完成回调
            $('#div1').show('',function(){
                alert('我完事了');
             });

            //5. 动画支持隐式迭代
            $('div').show('');
})

2.隐藏动画 hide()
        $('#hide').click(function(){
            //(1)hide()用法与show()完全一致
            //(2)hide()效果与shoe()完全相反
            $('div').hide('');
        });

3,切换 toggle()
        $('#toggle').click(function(){
           /* 
           如果是显示（display为block） : 则是隐藏hide()
           如果是隐藏（display为none） : 则是显示show()
           */
          $('div').toggle('');
        });
```

## JQ 动画滑入slideDown与滑出slideUp,切换slideToggle

```javascript
//1.滑入动画  slideDown()

        $('#slideDown').click(function(){
            /* 
            a.用法与特点与show()一致
            b. 唯一的区别就是： 第一个参数不传也有动画 默认是normal
            */
            $('#div1').slideDown();
        });

        //2.滑出动画  slideUp()
        $('#slideUp').click(function(){
            //用法与slideDown完全一致，效果相反
            $('#div1').slideUp();
        });

        //3.切换 slideToggle()
        $('#slideToggle').click(function(){
            /* 如果高度是0，则是滑入。 否则就是滑出 */
            $('#div1').slideToggle();
        });
```

## JQ 淡入fadeIn()与淡出 fadeOut()

```javascript
 //(1)淡入 fadeIn()
        $('#fadeIn').click(function () {
            //用法与sliedeDown()完全一致，只是效果不同
            $('#div1').fadeIn(function(){
                alert('淡淡的我来了');
            });
        });

        //(2)淡出 fadeOut()
        $('#fadeOut').click(function () {
            $('#div1').fadeOut(function(){
                alert('正如我淡淡的走');
            });
        });

        //(3)切换 fadeToggle()
        $('#fadeToggle').click(function () {
            /* 如果透明度是0，则是淡入。 否则是淡出 */
            $('#div1').fadeToggle();
        });

        //(4)淡入到指定透明度 fadeTo()
        $('#fadeTo').click(function () {
            /**
             * @description: 
             * @param {type} 第一个参数：动画时间
             * @param {type} 第二个参数：目标透明度
             * @param {type} 第三个参数：完成回调函数
             * @return: 
             */
            $('#div1').fadeTo(2000,0.5,function(){
                alert('我完事了');
            });
        });
```

## JQ 自定义动画 animate

```javascript
$('div1').click(function(){
    /**
             * @description: 
             * @param {type} 第一个：属性对象
             * @param {type} 第二个：动画时间
             * @param {type} 第三个：动画速度  swing:缓动   linear:匀速
             * @param {type} 第四个：动画完成回调
             * @return: jq对象，用于链式语法
    */
    
    //常用用法:一般只传参数1 或者加上参数4 , 参数2和参数3不传默认值
    
    $('div1').animate(
        {
           	    left: 300,
                top: 200,
                width: 500,
                height: 500,
                zIndex: 1,
                opacity: 0.5 
        },
        function(){
                $('#div1').animate({
                    left:50,
                    top:50,
                    width:10,
                    height:10
                });
        }
    )
})
```

## JQ动画队列

```javascript
$('#start').click(function(){
            //模拟动画队列： 多个动画不会同时执行，而是按照顺序依次执行
            $('div').slideDown(3000).slideUp(3000);
        });

        /* 
        stop()： 结束动画  （相当于以前学的的，每一次动画之前需要清除以前的定时器，以本次为准）
        第一个参数： 是否清除队列  （后面的动画是否清除）
        第二个参数： 是否跳转结束状态  （本次动画的最终效果还要不要看一眼）
        */
        $('#stop').click(function(){
            //1.基本用法
            //常用 
            // $('div').stop(true,false);

            // $('div').stop(true,true);
            // $('div').stop(false,true);
            // $('div').stop(false,fase);

            //2.如果stop()不传参数：默认 false false
            $('div').stop();
        });
```

## 宽高尺寸

```javascript
 /* 
        1.原生三大家族
            a.offset家族：获取元素自身的真实宽高与位置
                offsetWidth/Hieght : 自身真实宽高 （width+padding+border）
                offsetParent : 最近的定位父级
                offsetLeft/Top : 元素自身  左/上 外边框  到 定位父级 左/上 内边框的距离
            b.scroll家族：获取元素内容的宽高与位置
                scrollWidth/Height : 内容宽高
                scrollLeft/Top :  左 / 上 滚动出去的距离
                应用场景 ： 固定导航
            c.client家族：获取元素可视区域的宽高
                clientWidth/Height : 可视区域宽高
                clientLeft/Top : 左/上 边框的宽度  border-left-wdith
                应用场景：响应式布局
        
        2.原生三大家族
            a.可以获取行内和行外
            b.获取的是number，不带单位
            c.只能获取不能修改
        */
       
        
        /*2.jq中的三大家族
            outerWidth() /outerHieght() : 获取width+padding+border  (相当于offsetWidth/Height) 
          
         3.jq中三大家族特点
               a.可以获取行内和行外
               b.获取的是number，不带单位
               c.可以修改

        */

```

## position与offset

```javascript
        //1. position() : 返回的是一个对象 ： 自身 左/上 外边框 到 定位父级  左/上 内边框距离  （获取的就是offsetLeft与offsetTop）
  console.log($('#son').position());

        //注意点： 修改无效
        $('#son').position({
            left:300,
            top:300
        });


        //2. offset() : 对象类型  ： 自身 左/上 外边框 到 页面  左/上 内边框距离
        //  offset()与原生的offsetLeft与offsetTop不是一回事
        console.log($('#son').offset());

        //可以修改
        //细节： 如果元素本身没有定位（修改left无效），。此时jq会默认给元素设置成 相对定位relative
        $('#son').offset({
            left:200,
            top:200
        });
```

## 获取页面可视区域宽高

```javascript
 /* 
        1.原生获取网页可视区域距离：  window.innerWidth / document.documentElement.clientWidth / document.body.clientWidth 

        2.jq固定语法： $(window).width()
        */
        
  //注册尺寸变化事件
        $(window).resize(function(){
            console.log($(window).width(),$(window).height());
        
        });

        //响应式布局思路

        //1. 给页面注册尺寸变化事件
        $(window).resize(function(){
            //2.获取页面可视区域的距离  
            // >= 1000 红色   600-1000：黄色   <600 : 绿色
            if($(window).width() >= 1000){
                $('body').css('backgroundColor','red');
            }else if($(window).width() >= 600){
                $('body').css('backgroundColor','yellow');
            }else{// <600
                $('body').css('backgroundColor','green');
            }
        
        });
```

## JQ scrollLeft()与scrollTop()

```javascript
/* 
        scrollLeft() / scrollTop()  : 作用与原生的scroll家族完全一致
        */

        //可以修改：
        $('div').scrollLeft(100);
        $('div').scrollTop(500);

        //1.给元素注册滚动条事件
        $('div').scroll(function(){
            console.log($('div').scrollLeft(),$('div').scrollTop());
            
        });
```

## JQ  事件解绑 (移除事件)

```javascript
/*
1,原生注册事件 如何移除
	01,事件源.事件类型 = 事件处理函数
		移除: 事件源.事件类型 = null
	02, 事件源.addEventListener()
		移除: removeEventListener()
	03, attachEvent() / detachEvent()
*/
2,JQ中的事件移除
	on注册事件
  $('#one').on('click mouseover',function(){
      console.log('哈哈')
  })



 $('#one').on({
            click: function () {
                console.log('我是单击');

            },
            mouseover: function () {
                console.log('我是移入');

            }
        });

        //2.2 移除
        $('#btn').on('click',function(){
            //on注册事件 使用 off移除\
            //不传参数：移除所有的
            // $('div').off();
            //传参数事件类型：移除对应的事件
            $('div').off('mouseover');
        });

```

## JQ 事件触发

```javascript
/*
1,事件源工作原理
	1,注册事件本质是一个函数声明 赋值的过程,事件处理函数不会执行
	2,当用户触发事件的之后,浏览器会自动捕捉事件信息,然后主动触发
*/

var box = document.getElementByID('one');
box.onclick = function(){
    console.log('111');
};

//用户每点击一次,浏览器会自动帮我们执行以下代码
	//box.onclick();
//从语法角度来说,用户可以主动触发事件
box.onclick();

//2,JQ的事件触发
$('#one').on('mouseenter',function(){
    console.log('鼠标移入');
});

//主动触发: $().trigger(事件类型)
//事件触发器
$('#one').trigger('mouseenter')
```

## JQ 事件对象

```javascript
//HTML

<input type="button" value="移除事件" id="btn" /> <br /><br />
<div class="one" id="one"></div>
<a href=http://www.baidu.com>我是链接</a>


/* 
        1.事件对象 ： 存储与事件相关数据的对象
            * 当用户触发事件的时候，浏览器会自动捕捉与事件相关的鼠标/键盘 信息，存入一个对象中，称之为事件对象
        2.jq中的事件对象： 用法上和原生一模一样 （底层对原生事件对象做了一个兼容性封装而已）
            原生事件对象： 有兼容性  e || window.event
            jq事件对象： 没有兼容性
        */

        //1.1 事件对象
        // $('#one').on('click',function(e){
        //     //(1)直接获取，无需考虑兼容性
        //     console.log(e);

        //     //(2)事件对象三大坐标系
        //     //屏幕左上角
        //     console.log(e.screenX,e.screenY);
        //     //页面可视区域左上角
        //     console.log(e.clientX,e.clientY);
        //     //页面左上角
        //     console.log(e.pageX,e.pageY);

        //     //(3)事件触发源
        //     console.log(e.target);   
        // });

        //1.2 阻止a标签默认跳转事件
        $('a').on('click',function(e){

            //1.阻止a标签的默认行为（跳转）
            e.preventDefault();

            //2. return false: 阻止默认行为  + 事件冒泡
            // return false;

            //return false:等价于两行代码
            // e.preventDefault();
            // e.stopPropagation();
        });

        //1.3 关于on注册事件的第二个参数（非常的不常用）
        //用于委托事件
        //第一个参数：事件类型
        //第二个参数：事件委托对象
        //第三个参数：可选  要传递给事件的数据（不常用） 默认将这个数据存入事件对象
        //第四个参数：事件处理函数
        $('body').on('click','div','我爱你',function(e){
            console.log('2222222');
            
            console.log(e.data);
        });

        //1.4 键盘按键
        $(window).on('keydown',function(e){
            //使用keyCode获取键盘按键
            console.log(e.keyCode);
            
        })
```

## JQ 显示迭代each

```javascript
 <style>
        ul {
            list-style: none;
        }

        li {
            float: left;
            width: 200px;
            height: 200px;
            background: pink;
            text-align: center;
            line-height: 200px;
            margin: 0 20px 20px 0;
        }
    </style>
</head>

<body>
    <ul id="ulList">
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
        <li>什么都看不见</li>
    </ul>


//需求： 给10个li元素设置透明度 0.1 - 1
        // 需求： 每一个元素设置的属性值  ***不一样***

        //1. 隐式迭代：jq的默认行为    会给所有的元素设置成一样的属性值
        $('li').css('opacity', 0.5);

        //2. 显式迭代： 程序员主动的遍历，可以给不同的元素设置不同的属性值

        //2.1 dom原生
        // for (var i = 0; i < $('li').length; i++) {
        //     //最后一次强调 ： jq对象不能使用dom对象语法，dom对象不能使用jq语法
        //     // $li : 是dom对象      jq转dom： $()[0]
        //    var $li = $('li')[i];
        //    console.log($li);
        //    // i (0,9) => (0.1,1)
        //   $($li).css('opacity',i/10 + 0.1); 
        // };

        //2.2 jq语法：  each()
        //参数是固定格式的回调函数  function(index: 元素下标 0-最大   ele:dom元素对象){}
        $('li').each(function(idx,ele){
            console.log(idx);//元素下标
            console.log(ele);//dom对象
            $(ele).css('opacity',idx/10 + 0.1);         
        });
```

## JQ  多库共存

```javascript
<script src="./jquery-1.12.4.js"></script>
<script src="./jquery-3.0.0.js"></script>

/* 1.复习之前讲过了jquery的几个版本
        1.x ： 兼容IE5678 不更新 
        2.x ： 兼容IE678 不更新 
        3.x ： 不兼容IE678 正在更新，新增了一些语法 
         */

         //2. 补充： 如何知道当前jQuery的版本
        // console.log($.prototype.jquery);
        // console.log($.fn.jquery); //常用
        // console.log(jQuery.fn.jquery);


        /*3. 需求 ： (1)项目兼容ie5678  (2)使用3.x的新语法 
        解决： 需要导入两个jq文件  1.x   3.x
        问题： 两个文件都有$ ,现在代码中的$代表谁？
        结论： 那个文件后导入，$就是哪个文件中的
         */
        
         console.log($.fn.jquery);//3.0

         //4. 解决方案：$.noConflict()   释放$的控制权

        var $3 =  $.noConflict();//$表示的3.0，现在释放了$对3.0的控制权，交给了$3

        console.log($3.fn.jquery);//3.0.0  以后想用3.x的版本  就是用$3
        console.log($.fn.jquery);//1.12  以后想用1.x的版本  就是用$

        //5. 有些人用$习惯了，不喜欢用$3. 希望一个$同时代表$3和$。 怎么做？
        //使用闭包 ： 沟通函数外部与函数内部的桥梁
        (function($){
            //局部作用域
            console.log('函数里' + $.fn.jquery);//3.x
        })($3);//把全局变量$3 传递给了函数中的$  函数传参本质：实参给形参赋值 $ = $3

        console.log('函数外' + $.fn.jquery);//1.x
```

## JQ 颜色插件   jquery.color.js

```javascript
//需求：给div一个动画 ： 修改 left top opacity backgroundColor

        /* 
        1.jq默认的animate是无法修改颜色 （jq虽然强大，但是不是万能的，不是什么都能做）
        2. 使用插件 jquery.color.js
            * 导入jquery.color.js文件，一切搞定
        */
        $('div').animate({
            left:300,
            top:200,
            opacity:0.8,
            width:300,
            height:300,
            backgroundColor:'blue'
        },2000);
```

## JQ 图片懒加载插件  jQuery.lazyload.js

```javascript
 <!-- 假设上面盒子非常高 -->
    <div id="box" style="height: 1000px"></div>
    <div>
        <img data-original="./images/lazyload/1.jpg" alt="">
    </div>
    <div>
        <img data-original="./images/lazyload/2.jpg" alt="">
    </div>
    <div>
        <img data-original="./images/lazyload/3.jpg" alt="">
    </div>
    <div>
        <img data-original="./images/lazyload/4.jpg" alt="">
    </div>

    <script src="./jquery-1.12.4.js"></script>
    <script src="./plugin/jquery.lazyload.js"></script>
    <script>
        //懒加载插件
        //1. img标签只要有src属性，就会加载图片。
        //2. 如果你的网页有非常多的img,则会浪费性能，导致网页有延迟 
        //3. 如何解决？   等图片进入了页面可视区域才加载图片
        //4. 如何做到？   
        //（1）图片不设置src属性 
        //（2）使用自定义行内属性存储要加载的src  
        //(3)当图片进入页面的可视区域,取出自定义属性值，赋值给src属性（图片资源的动态加载）
        $(function () {
            $("img").lazyload({ effect: "fadeIn" });
        });
    </script>
```

## JQ 省市联动插件  distpicker.js

```javascript
<div data-toggle="distpicker" id="nb">
        <!-- container -->
        <select></select><!-- 省 -->
        <select></select><!-- 市 -->
        <select></select><!-- 区 -->
    </div>

    <script src="./jquery-1.12.4.js"></script>
    <script src="./plugin/distpicker.data.js"></script>
    <script src="./plugin/distpicker.js"></script>

    <script>
        $('#nb').distpicker({
            province: '湖北省',
            city: '黄冈市',
            district: '武穴市'
        });
    </script>
```

JQ ui插件---jQuery ui ---easy ui ---bootstrap

```javascript
都是ui插件,jQuery ui 是jq团队开发的插件库 , easy ui 是第三方团队开发,好用点,最好用的是bootstrap
```