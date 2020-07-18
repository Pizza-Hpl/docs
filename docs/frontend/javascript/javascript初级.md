---
title: JavaScript基础
sidebar: 'auto'
---

-------------------------------------------------------------------------------------------------------------------------------

# JavaScript基础重点

## 显示数据类型转换

```javascript
//1.将 数据 转成 数值类型------------------------------------------
      //1.1 Number() 可以将 任意 数值字符串 转成 数值类型
      //             可以将 true/false 转成对应的 1/0
      //                    空字符串   转成 0
      //             所有转不了的，都 会 返回 NaN
console.log( Number('10') );
      console.log( Number('110.110') ); // 110.110
      console.log( Number('-120') );

      console.log( Number(true) );   // 1
      console.log( Number(false) );  // 0

      console.log( Number(' ') ); // 0
      console.log( Number('') );  // 0


      console.log( Number('11.2f') );  //NaN
      console.log( Number('i love dog') );  //NaN
      console.log( Number(NaN) ); // NaN

      //1.2 parseInt()
      //a.会将 遇到的 第一个 非数值之前的 都转成 数值
      console.log( parseInt('110px') ); // 100

      //b.前面的 空格 会被 自动忽略掉！！！
      console.log( parseInt('       5201314，好吗？') ); //5201314

      //c.中间的空格 会被当做 非数值，从而结束转换，只转换返回前面的 数值
      console.log( parseInt(' 520 1314 好吗？ ') ); // 520

      //d.注意：小数点 也会被当做 非数值！！所以只会将 前面的 转成数值！！
      console.log( parseInt('2.5') );

      //e. 遇到整个都是 非数值 的 字符串时，会 返回 NaN
      console.log( parseInt('小白') ); // NaN

      // 需求：要求 将 100px -> 110px
      var divWidth = parseInt('100px'); // 100
      console.log(divWidth);
      divWidth = divWidth + 10;
      console.log(divWidth + 'px');
```

## 循环语句while

```javascript
 //一.while循环 基础用法------------------------------------------------------------------
      //  while(bool){ 循环体代码 }
      //  while循环 会判断 () 中 是否为 true，如果是true，则执行 循环体代码一次，然后再判断 ()中是否为true
      //                                    如果是false，则结束整个循环，调到 循环体{} 后面接着执行~~！！！

      //  while循环 可以用来 判断 范围 ，然后决定是否循环
      //            可以用来 判断 是否相等 ，然后决定是否循环
      //            可以用来 判断 次数 ，然后决定是否循环

      // 思考，循环需要哪些东西？  
      //       循环条件：次数，bool判断
      //       循环变量：专门用来 保存 循环条件数据
      //       循环变量的改变：最多的是 做 ++ 操作
      //       循环体代码：每次循环要做的事情！！！！

      //1.循环变量 用来保存 数据
      var times = 1;
      
      //2.循环条件
      while(times <= 3){
        //3.循环体业务代码
        console.log('老婆，小朋友做错了~~~' + times);
        //4.循环条件改变
        times++;
      }

      //二.使用while循环 来 判断用户输入的 值 是否为 数值！！！-----------------------------------

      // 注意：
      //     parseInt('') -> NaN
      //     +''          -> 0


      //1.接收年龄，并转成数值 ---> 如果转换失败，会返回 NaN
      var usrAge = parseInt(prompt('请输入你女朋友的年龄：'));
      console.log(usrAge);

      //2.判断 变量中的值 是否为 非数值，如果是，则要求重新输入
      //                                  不是，则退出循环
      while(isNaN(usrAge)){ // while(bool)
        alert('您输入的年龄格式错误，是不是傻？！！！');
        usrAge =  parseInt(prompt('请重新输入你女朋友的年龄：'));
      }

      //3.打印年龄
      console.log('usrAge =' + usrAge);

```

## 循环语句do

```javascript
// while(true){

      // }

      //do while : 先斩后奏 -- 先把循环体代码 执行一遍，然后再 进行 while的循环条件判断
      //                                             如果 while 循环条件判断结果 为 true，进行下一次循环
      //                                                                         false, 退出循环

      // var times = 1;
      // do{
      //   console.log('times=' + times);
      //   times++;
      // }while(times <=10);

      //案例：输入 用户名 密码，判断正误
      do{
        var usrName = prompt('请输入用户名：');
        var usrPwd = prompt('请输入密码：');
      }while(usrName != 'james' || usrPwd != '123456');// 循环条件判断：如果 用户名 和 密码 错了一个，就返回 true，继续下一次循环

      alert('恭喜您，登录成功啦~~~！');
```

## for循环

```javascript
   //for 循环一般 用来 做 规定次数的循环
      //    它的语法 能够确保 循环条件得到修改，而不至于陷入死循环！！！

      //1.循环条件变量
      //2.循环条件判断
      //3.循环条件修改
      //4.循环体代码！！

      for(var times = 1 ; times <= 10; times++){
        console.log('times = ' + times);
      }
```

## for循环箩筐思想

```javascript
// 求1-100之间所有数的和
    // 箩筐思想：就是把数据都装入同一个变量！！！

    var sumNum = 0; // “箩筐变量”，用来装累加的数值
    for (var i = 1; i <= 100; i++) { //  1 + 2 + 3 + 4 + 5 + 6 ..... + 100
      sumNum = sumNum + i; // 每次循环都将i的值 累加到箩筐中
    }

    console.log('sumNum = ' + sumNum);

    //求1-100之间所有数的平均值
    console.log('sumNum / 100 = ' + sumNum / 100);


    var ouSumNum = 0;
    // 求1-100之间所有偶数的和
    for (var i = 1; i <= 100; i++) {
      // 如果能被 2 整除，则说明是 偶数
      if (i % 2 == 0) {
        ouSumNum += i;
      }
    }
    console.log('1-100之间偶数之和：ouSumNum = ' + ouSumNum);

    // 同时求1-100之间所有偶数和奇数的和
    var ouSumNum = 0;
    var jiSumNum = 0;
    for (var i = 1; i <= 100; i++) {
      //偶数
      if (i % 2 == 0) {
        ouSumNum += i;
      } else {// 奇数
        jiSumNum += i;
      }
    }
    console.log('1-100之间偶数之和：ouSumNum = ' + ouSumNum);
    console.log('1-100之间奇数之和：jiSumNum = ' + jiSumNum);
```

## 使用擂台思想

```javascript
 //1.接收用户要输入的 数字 的个数
      var numCount = parseInt(prompt('请输入您要使用的数字的个数：'));

      //2.求用户输入的 若干个 数字 中的最大数
      // 2.1 循环 接收 用户指定 个数的 数值
      //    循环 中，i 就是 正在接收的 第几个数的 序号

      // 2.2 准备一个 变量，用来保存 用户输入的数值中的 最大值
      var maxNum = -Infinity;

      for(var i = 1; i<= numCount;i++){
        var num = parseInt(prompt('请输入第【' + i +  '】个数：'));
        // 如果 用户本次循环输入的 数值 比 maxNum 变量中的 值要大，就将 输入的数值 存入 maxNum
        if(num > maxNum){
          maxNum = num;
        }
      }

      alert('maxNum = ' + maxNum);
```

## break和continue退出循环

```javascript
//循环 是当循环条件 不满足时，就退出循环！！！
      //     过程中 也可以通过 关键字 来实现 退出 整个循环 和 本次循环

      //1.班长 看日本电影学习的故事
      for(var i = 1; i<= 10;i++){
        if(i == 5){
          console.log('糟糕~~~怎么整部影片都没法看呢？！！！！那这一部就不看了！！');
          continue;// 退出 本次循环
        }

        if(i == 9){
          console.log('满头大汗，体力不支，无法在继续学习，就停止了整个学习过程~~！');
          break;
        }

        console.log('班长正在认真的津津有味的学习第【' + i + '】部日本电影~~~');
      }

      console.log('班长很辛苦，沉沉睡去~~~~！');
```

## push向数组添加元素

```javascript
// 追加元素 方式 二： push 方法 （强烈推荐）   -----------------------------------------
    //                   可以 直接 将一个数据 从 数组的尾部 追加到数组中！！
    var arrCitys = ['P城', 'R城', 'Z城'];
    //                0      1       2    length = 3   
    // arrCitys[arrCitys.length] = '女战友';

    arrCitys.push('女战友');
    arrCitys.push('男战友');
    arrCitys.push('泰国战友');
    console.log(arrCitys);
```

## .splice删除下标

```javascript
 var arrCitys = ['P城', 'R城', 'Z城', '监狱', 'Y城','医院'];
    //                0      1       2     3      4     5     length = 6

    // arrCitys.length = 2;
    // 数组.splice 方法 可以用来删除 指定下标的 元素
    //      splice(index,count)
    //           index 是要删除 元素的 下标 --- 从哪开始删除
    //           count   要删除 元素的 个数 --- 删几个
    //                    如果 不传入 第二个参数，那么 就会 从 指定下标 一直删除 到最后一个元素

    // //1.删除 下标 为 1 的 1 元素
    // arrCitys.splice(1, 1);
    // console.log(arrCitys);

    //2. 删除 下标 3 - 4 的元素
    // arrCitys.splice(3,2);
    // console.log(arrCitys);

    //3.如果只传入 第一个参数，那么就会从 index 一直删除到最后
    arrCitys.splice(3);

    console.log(arrCitys);
```

## 数组的遍历

```javascript
var arrCitys = ['P城', 'R城', 'Z城', '监狱', 'Y城', '医院'];
    //                0      1       2     3      4       5     length = 6

    //1.顺序遍历 ，从 下标0 开始遍历 一直到最后一个元素

    // 通过 for 循环 遍历 数组里的每个元素
    //    i=0， 在每次循环时 + 1，正好 对应了 数组中 每个元素的 下标
    //                          所以只需要在每次循环时 把 i 放到 [i]中，就可以访问每个元素了
    //       i=0 ,i++  -> 0 1 2 3 4 5

    // for循环 遍历 数组，其实： i 刚好 经历的 数组中 每个元素的 下标
    for (var i = 0; i < arrCitys.length; i++) {              
      console.log('arrCitys[' + i + '] = ' + arrCitys[i]);
    }

    // 注意：如果使用 <= 号，length 就需要 -1
    for(var i = 0; i <= arrCitys.length - 1;i++){
      console.log('arrCitys[' + i + '] = ' + arrCitys[i]);
    }


    //2.倒序遍历 ，从 最后一个下标 (length -1) 开始遍历 一直到 第一个元素(下标为0)
    console.log('倒序遍历~~~~');
    var arrCitys = ['P城', 'R城', 'Z城', '监狱', 'Y城', '医院'];
    //                0      1       2     3      4       5     length = 6
    
    // i=5 , i -- , i -> 5 4 3 2 1 0
    for(var i = arrCitys.length -1 ; i >= 0 ; i--){
      console.log('arrCitys[' + i + '] = ' +arrCitys[i]);
    }


    // 数组元素增删改查 + 遍历

```

## 冒泡排序-手动模拟

```javascript
var arrNum = [777, 11, 5, 2];
    //            0   1    2    3   length = 4

    console.log('arrnum=' + arrNum);

    // 排序：将没有顺序的数据 变成有顺序 的数据
    // 排序算法：各种排序的方式！！！！  --> 冒泡排序算法

    // 将 数组中的 数值 按照 有小到大 的顺序排列！！！
    // 排序中 最重要的 就是 比较 和 比较的规则
    if (arrNum[0] > arrNum[1]) {
      var temp = arrNum[0]; // t = 5 , arr[0] = 5, arr[1] = 2
      arrNum[0] = arrNum[1]; //  t = 5 , arr[0] = 2, arr[1] = 2
      arrNum[1] = temp;
    }
    console.log('第1轮第1次比较后：arrnum=' + arrNum);

    if (arrNum[1] > arrNum[2]) {
      var temp = arrNum[1]; // t = 5 , arr[0] = 5, arr[1] = 2
      arrNum[1] = arrNum[2]; //  t = 5 , arr[0] = 2, arr[1] = 2
      arrNum[2] = temp;
    }
    console.log('第1轮第2次比较后：arrnum=' + arrNum);

    if (arrNum[2] > arrNum[3]) {
      var temp = arrNum[2]; // t = 5 , arr[0] = 5, arr[1] = 2
      arrNum[2] = arrNum[3]; //  t = 5 , arr[0] = 2, arr[1] = 2
      arrNum[3] = temp;
    }
    console.log('第1轮第3次比较后：arrnum=' + arrNum);


    console.log('-------------------------------------------');

    if (arrNum[0] > arrNum[1]) {
      var temp = arrNum[0]; // t = 5 , arr[0] = 5, arr[1] = 2
      arrNum[0] = arrNum[1]; //  t = 5 , arr[0] = 2, arr[1] = 2
      arrNum[1] = temp;
    }
    console.log('第2轮第1次比较后：arrnum=' + arrNum);

    if (arrNum[1] > arrNum[2]) {
      var temp = arrNum[1]; // t = 5 , arr[0] = 5, arr[1] = 2
      arrNum[1] = arrNum[2]; //  t = 5 , arr[0] = 2, arr[1] = 2
      arrNum[2] = temp;
    }
    console.log('第2轮第2次比较后：arrnum=' + arrNum);

    
    console.log('-------------------------------------------');

    if (arrNum[0] > arrNum[1]) {
      var temp = arrNum[0]; // t = 5 , arr[0] = 5, arr[1] = 2
      arrNum[0] = arrNum[1]; //  t = 5 , arr[0] = 2, arr[1] = 2
      arrNum[1] = temp;
    }
    console.log('第2轮第1次比较后：arrnum=' + arrNum);

//打印结构
arrnum=777,11,5,2
14冒泡排序-手动模拟.html:22 第1轮第1次比较后：arrnum=11,777,5,2
14冒泡排序-手动模拟.html:29 第1轮第2次比较后：arrnum=11,5,777,2
14冒泡排序-手动模拟.html:36 第1轮第3次比较后：arrnum=11,5,2,777
14冒泡排序-手动模拟.html:39 -------------------------------------------
14冒泡排序-手动模拟.html:46 第2轮第1次比较后：arrnum=5,11,2,777
14冒泡排序-手动模拟.html:53 第2轮第2次比较后：arrnum=5,2,11,777
14冒泡排序-手动模拟.html:56 -------------------------------------------
14冒泡排序-手动模拟.html:63 第2轮第1次比较后：arrnum=2,5,11,777
```

## 冒泡排序-循环轮

```javascript
// 排序：将没有顺序的数据 变成有顺序 的数据
    // 排序算法：各种排序的方式！！！！  --> 冒泡排序算法

    var arrNum = [777, 11, 5, 2];
    //            0    1   2   3   length = 4

    console.log('arrnum=' + arrNum);

    // 使用 大循环 来 替代 手动 轮 
    for (var lun = 1; lun < arrNum.length; lun++) { // lun -> 1 ,2, 3
      // 将 数组中的 数值 按照 有小到大 的顺序排列！！！
      // 排序中 最重要的 就是 比较 和 比较的规则
      if (arrNum[0] > arrNum[1]) {
        var temp = arrNum[0]; // t = 5 , arr[0] = 5, arr[1] = 2
        arrNum[0] = arrNum[1]; //  t = 5 , arr[0] = 2, arr[1] = 2
        arrNum[1] = temp;
      }
      console.log('第'+ lun +'轮第1次比较后：arrnum=' + arrNum);

      if (arrNum[1] > arrNum[2]) {
        var temp = arrNum[1]; // t = 5 , arr[0] = 5, arr[1] = 2
        arrNum[1] = arrNum[2]; //  t = 5 , arr[0] = 2, arr[1] = 2
        arrNum[2] = temp;
      }
      console.log('第'+ lun +'轮第2次比较后：arrnum=' + arrNum);

      if (arrNum[2] > arrNum[3]) {
        var temp = arrNum[2]; // t = 5 , arr[0] = 5, arr[1] = 2
        arrNum[2] = arrNum[3]; //  t = 5 , arr[0] = 2, arr[1] = 2
        arrNum[3] = temp;
      }
      console.log('第'+ lun +'轮第3次比较后：arrnum=' + arrNum);


      console.log('-------------------------------------------');
    }
//打印结构
arrnum=777,11,5,2
15冒泡排序-循环轮.html:25 第1轮第1次比较后：arrnum=11,777,5,2
15冒泡排序-循环轮.html:32 第1轮第2次比较后：arrnum=11,5,777,2
15冒泡排序-循环轮.html:39 第1轮第3次比较后：arrnum=11,5,2,777
15冒泡排序-循环轮.html:42 -------------------------------------------
15冒泡排序-循环轮.html:25 第2轮第1次比较后：arrnum=5,11,2,777
15冒泡排序-循环轮.html:32 第2轮第2次比较后：arrnum=5,2,11,777
15冒泡排序-循环轮.html:39 第2轮第3次比较后：arrnum=5,2,11,777
15冒泡排序-循环轮.html:42 -------------------------------------------
15冒泡排序-循环轮.html:25 第3轮第1次比较后：arrnum=2,5,11,777
15冒泡排序-循环轮.html:32 第3轮第2次比较后：arrnum=2,5,11,777
15冒泡排序-循环轮.html:39 第3轮第3次比较后：arrnum=2,5,11,777
```

## 冒泡排序循环终极

```javascript
// 排序：将没有顺序的数据 变成有顺序 的数据
    // 排序算法：各种排序的方式！！！！  --> 冒泡排序算法

    var arrNum = [777, 11, 5, 2];
    //            0    1   2  3   length = 4

    console.log('arrnum=' + arrNum);

    for (var lun = 1; lun <= arrNum.length - 1; lun++) {
      // 将 数组中的 数值 按照 有小到大 的顺序排列！！！
      // 排序中 最重要的 就是 比较 和 比较的规则

      // 注意：之所以 内部循环 -1 的原因 是 不需要 遍历到 最后一个元素，因为 最后一个元素的比较已经在 前一次 比较完了
      // 注意的注意： 内部循环 为了减少 不必要的比较次数，直接 length - lun 
      for (var i = 0; i < arrNum.length - lun; i++) {
        if (arrNum[i] > arrNum[i+1]) {
          var temp = arrNum[i]; // t = 5 , arr[0] = 5, arr[1] = 2
          arrNum[i] = arrNum[i+1]; //  t = 5 , arr[0] = 2, arr[1] = 2
          arrNum[i+1] = temp;
        }
        console.log('第' + lun + '轮第'+ i +'次比较后：arrnum=' + arrNum);
      }


      console.log('-------------------------------------------');
    }
//打印结果
arrnum=777,11,5,2
16冒泡排序循环完成终极.html:27 第1轮第0次比较后：arrnum=11,777,5,2
16冒泡排序循环完成终极.html:27 第1轮第1次比较后：arrnum=11,5,777,2
16冒泡排序循环完成终极.html:27 第1轮第2次比较后：arrnum=11,5,2,777
16冒泡排序循环完成终极.html:31 -------------------------------------------
16冒泡排序循环完成终极.html:27 第2轮第0次比较后：arrnum=5,11,2,777
16冒泡排序循环完成终极.html:27 第2轮第1次比较后：arrnum=5,2,11,777
16冒泡排序循环完成终极.html:31 -------------------------------------------
16冒泡排序循环完成终极.html:27 第3轮第0次比较后：arrnum=2,5,11,777
```

## 函数调用

```javascript
//打印 两个数的和
      function doAdd(){
        var num1 = 10;
        var num2 = 20;
        var res = num1 + num2;
        console.log(res);
      }

      //调用方法
      doAdd();
```

## 函数的传参

```javascript
// 函数：通俗的说 ，就是 一个 可以 用来 存放 代码 的盒子！！！！
    // 好处： 可以【复用 代码】，比如说 有10个地方 要 执行一样的代码，就可以 把 代码 用盒子 装起来，在需要调用的10个地方，直接 调用盒子就可以了！！！

    // 函数语法：
    // 注意： 函数 == 方法, --》 函数 就是 方法，方法 就是 函数
    /* 
      //a.函数声明的语法
      function 函数名(形参1){
        函数体代码 （方法体代码）
        log(形参1);
      }

      //b.函数调用语法
      函数名();
    
    */

    //1.模拟 正规按摩店 的业务服务过程
    // 声明函数 daBaoJian 
    // 函数形参： 
    //        位置：放在 方法名 后的 小括号里！！！ 
    //        数量：可以有多个形参，中间 用 , 隔开
    //        语法：直接 放一个 形参 名，放到小括号中！！！ ---- 本质上，就是 声明了一个变量，只不过没有使用 var关键字！
    function daBaoJian(jiShiNo, yinLiao, clienName) { // 相当于： var jiShiNo;

      console.log(clienName + '就决定 去 四楼 正规按摩店 按摩~~~');
      console.log('进门后，先要选择正规按摩服务的技师：' + jiShiNo + '号');
      console.log('进入专用按摩房，天黑请闭眼~~~~');
      console.log('按摩过程很开心~~~~~');
      console.log('1个小时过去了，正规按摩服务结束~~~' + clienName + '付清了费用：1800元');
      console.log(jiShiNo + '号技师 递给' + clienName + ' 一杯' + yinLiao + '，降降火~~~~');
      console.log(clienName + '开心的离开了~~~~');
    }

    console.log('\n班长今天很辛苦~~~-------------------------------');
    //2. 函数的实参：在函数调用时 可以 通过 小括号 内 设置 数据 类传递给 函数的形参变量，这些数据就叫做 实参
    //      当有多个 形参时，实参 也可以写 多个，如果不写，那么 形参 默认值为 undefined
    //         位置：函数后的 小括号中
    //         数量：可以有多个实参，中间也用 , 隔开
    //         
    daBaoJian(17, '咖啡','班长'); // 函数的调用,分别传给jiShiNo, yinLiao, clienName

    console.log('\n班长去上班，中午下班后，觉得很疲惫，想再去正规按摩一次，没时间，就请kdb去~~~~------------------');
    daBaoJian(28, '牛奶','kdb');


    console.log('\n班长下午下班回家，他老婆发现他的钱少了，质问之下没有结果，所以被赶出家门，班长不开心，很沮丧，想再去正规按摩一次，无奈没有精力，就打电话请邹老师去~~~~');
    daBaoJian(99, '汇源肾宝','邹老师');
//打印结果

班长今天很辛苦~~~-------------------------------
05函数传参.html:35 班长就决定 去 四楼 正规按摩店 按摩~~~
05函数传参.html:36 进门后，先要选择正规按摩服务的技师：17号
05函数传参.html:37 进入专用按摩房，天黑请闭眼~~~~
05函数传参.html:38 按摩过程很开心~~~~~
05函数传参.html:39 1个小时过去了，正规按摩服务结束~~~班长付清了费用：1800元
05函数传参.html:40 17号技师 递给班长 一杯咖啡，降降火~~~~
05函数传参.html:41 班长开心的离开了~~~~
05函数传参.html:52 
班长去上班，中午下班后，觉得很疲惫，想再去正规按摩一次，没时间，就请kdb去~~~~------------------
05函数传参.html:35 kdb就决定 去 四楼 正规按摩店 按摩~~~
05函数传参.html:36 进门后，先要选择正规按摩服务的技师：28号
05函数传参.html:37 进入专用按摩房，天黑请闭眼~~~~
05函数传参.html:38 按摩过程很开心~~~~~
05函数传参.html:39 1个小时过去了，正规按摩服务结束~~~kdb付清了费用：1800元
05函数传参.html:40 28号技师 递给kdb 一杯牛奶，降降火~~~~
05函数传参.html:41 kdb开心的离开了~~~~
05函数传参.html:56 
班长下午下班回家，他老婆发现他的钱少了，质问之下没有结果，所以被赶出家门，班长不开心，很沮丧，想再去正规按摩一次，无奈没有精力，就打电话请邹老师去~~~~
05函数传参.html:35 邹老师就决定 去 四楼 正规按摩店 按摩~~~
05函数传参.html:36 进门后，先要选择正规按摩服务的技师：99号
05函数传参.html:37 进入专用按摩房，天黑请闭眼~~~~
05函数传参.html:38 按摩过程很开心~~~~~
05函数传参.html:39 1个小时过去了，正规按摩服务结束~~~邹老师付清了费用：1800元
05函数传参.html:40 99号技师 递给邹老师 一杯汇源肾宝，降降火~~~~
05函数传参.html:41 邹老师开心的离开了~~~~
```

## return关键字

```javascript
 //1. 求 两个数 的和
      //   分析：有些时候，调用方法的目的 不仅仅是为了执行复用的代码，也为了 能获取一个运行的结果
      //         意味着函数内部 需要 将一个运行的结果 返回给函数调用者，这时候就可以 使用 return 来返回
      function doAdd(numA,numB){
        var res = numA + numB;
        // 【return】 关键字：用来 将一个数据 返回给 函数的调用者
        //            函数的调用者 一般 会 使用一个变量 来接收 函数内 return 的值
        return res;//返回结果3到function函数外
      }

      //2. 调用 一个 有返回值的函数，前面 使用 一个 变量 来接收
      var resHe = doAdd(1,2);//doAdd(1,2)就已经得出结果3,所以声明变量接收
      // 函数执行结束后，声明resHe用来接收返回值的变量 resHe 中 就有了 函数内部 return 的值！！！
      console.log(' resHe = '+resHe);
      //打印结果
3
```

## 函数调用函数

```javascript
//1.函数 内部  调用 另一个 函数
      function a(){
        console.log('1');
      }

      function b(){
        console.log('2');
      }

      function c(){
        console.log('3');
      }

      // 函数 内部 可以调用 其他函数~~~~！！！
      function d(){
        a();
        b();
        c();
      }

      d();//调用d函数
//打印结果
1
2
3
//注意如果使用return,function外面一定要声明一个变量接收返回的值

2,//1. 函数相互调用 时 ，传参 a('小白白') -> b(a -> gfName);-----------------------
    function a(gfName){ // gfName = '小白白'
      console.log(gfName + ', 我爱你~~');
      b(gfName); // -> 相当于 b('小白白');
    }

    function b(strName){ // strName = '小白白'
      console.log(strName + ':走开~~~');
    }

    a('小白白');
```

## 全局变量和局部变量

```javascript
//1. 全局变量 ： 在页面中 直接写的 变量
    var num = 10;

    //2.局部变量： 在函数 内部 写的 变量
    function changeNum(){
      // 局部变量 ： 只能 在 含糊的 { } 中访问！！
      var age = 101;

      //3.在函数内部 可以访问 全局变量
      console.log('全局变量 num = ' + num);
    }

    changeNum(); // 当函数执行时，就会创建 局部变量，函数 执行结束后

    console.log(num); // 10
    // console.log(age); // 报错！！ age is not defined
//全局作用域:整个页面就是全局作用域,只要页面不关闭,作用域就一直存在
//局部作用域:在函数执行时,会产生局部作用域,函数结束时会销毁局部作用域
```

## 函数创建的三种方式

```javascript
 var a = 1;
      var arr = [1,2,3,4];

      //a.函数名 本质 就是 一个变量！！！-- 只不过 变量中 装的是 函数对象(代码盒子)
      //b.函数本身 本质 就是 一个Function对象！！！-- 只不过对象的类型 为 Function
      //c.三种创建方式 都是 函数！

      // typeof 检查 简单数据类型！！！ -> 数据类型名称的字符串
      //        检查 复杂数据类型 -> object
      //        检查 复杂数据类型 里的 Function 会都返回 'function'
      //        

      //1.函数对象方式 创建 --------基本不用-------------------------------
      var func3 = new Function('console.log("我是 对象式函数");');
      func3();
      console.log(func3);
      console.log('func3的类型：' + typeof(func3));




      //2. 匿名函数方式 创建--------也用，但不算多-------------------------------
      var func2 = function(){
        console.log('我是 匿名函数');
      }

      func2();
      console.log(func2);
      console.log('func2的类型：' + typeof(func2));


      //3. 声明式 函数创建-----------用的最多------------------------------
      function func(){
        console.log('我是 声明式函数');
      }
      func();
      console.log(func);
      console.log('func的类型：' + typeof(func));


```

## 函数名不加括号的区别

```javascript
 function func() {
      console.log('我是 声明式函数');
      return '母亲节来了，就是今天，记得给给位的妈妈打电话，如果有对象，给对象的妈妈发个红包~~！'
    }

    // 1. 如果函数名 不加小括号，就是 打印 函数代码
    console.log(func);

    console.log('-------------------------------------');

    // 2. 如果函数名 加了小括号，就是 执行函数，并 打印 函数的返回值
    //  补充复习：如果 被调用的函数 内部 没有用 return 来返回一个值，那么 默认 返回 undefined !!!!
    console.log(func()); // 相当于： console.log('母亲节来了，就是今天，记得给给位的妈妈打电话，如果有对象，给对象的妈妈发个红包~~！');

//打印结果
ƒ func() {
      console.log('我是 声明式函数');
      return '母亲节来了，就是今天，记得给给位的妈妈打电话，如果有对象，给对象的妈妈发个红包~~！'
    }
 -------------------------------------
我是 声明式函数
母亲节来了，就是今天，记得给给位的妈妈打电话，如果有对象，给对象的妈妈发个红包~~！
```

## 函数作为参数传递

```javascript
// 必须理解~~~~~~~~~！！！
      // 1.函数 作为参数传递----------------------------
      // 函数  也可以作为 参数传递，传递的是 函数对象的 地址！
      //                 函数a传递给函数b的形参后，那么 形参 "就是" 函数a! 可以直接加 括号 运行~~~
      function a(){
        console.log('我爱北京天安门~~！');
      }

      function b(fa){ // 相当于 fa = a;
        console.log('我爱广州小蛮腰~~~！');

        fa(); // 调用 函数a --> a()
      }

      //1.在调用 函数 b 时，将 函数 a 传给了 形参 funAAA = a，所以，在 函数b 内 也可以 调用函数 a 了！！！
      b(a);
//打印结果
我爱广州小蛮腰~~~！
我爱北京天安门~~！


2,
       // 1.接收用户的 两个 数据 和 运算符，根据 运算符 调用 不同的函数 来运算获取结果~~！
    function add(numA, numB) {
      return numA + numB;
    }

    function sub(numA, numB) {
      return numA - numB;
    }

    //执行运算的函数
    //      numA 数值1
    //      numB 数值2
    //      func 运算函数
    function doOpe(numA, numB, func) { // numA= 1 , numB = 2 , func = add
      return func(numA, numB); // add(1,2)
    }

    // ----------------------------------------------------------
    
    //调用1：将 函数 add 传给 doOpe，并获取返回值
    var res = doOpe(1,2, add);
    console.log(res);

    //调用2：将 函数 sub 传给 doOpe，并获取返回值
    var res = doOpe(1, 2, sub);
    console.log(res);
//打印结果
3
1
```

## 预解析和函数变量提升

```javascript
  //【JS预解析】：浏览器的 JS引擎 在 执行 js代码之前，会做一个操作：预解析
    //         会扫描页面上 的 JS代码，找出 声明式的 函数 和 声明式的变量，并把它们 提升到 所在作用域的 最前端！！！

    //1.1【函数提升】：在预解析时 会把 声明式的 函数 放到 所在作用域的 最前端-----------------------------------

    //1.声明式函数
    func3();

    function func3() {
      console.log('我爱你~~~~~');
    }


    //匿名函数
    // func2(); // 由于 非声明式的函数 不会做 函数提升，所以 在此报错！因为 调用时 还没有 函数的存在！！！
    // var func2 = function(){
    //   console.log('a yi xi te lu~~~~');
    // }

    //1.2【变量提升.全局作用域下的变量提升】：在预解析时 会把 变量的声明部分 提到 所在作用域的 最前端！！！！
    // console.log(bfName); //bfName is not defined

    console.log(gfName); // undefined
    var gfName = '御姐兰';
    console.log(gfName); // 御姐兰

    console.log('-------------------------------------------');
    //1.3【变量提升.函数内部的变量提升】：函数内的 变量 在预解析时，会被提升到 函数的最前端！！！！
    function varUp() {
      console.log(gfName); // undefined
      var gfName = '御姐兰';
      console.log(gfName); // 御姐兰
    }

    varUp();

//打印结果
我爱你~~~~~
undefined
御姐兰
-------------------------------------------
undefined
御姐兰
```

## 自执行函数

```javascript
      
      //1.自执行函数
      //  用 小括号 包起来的而函数，就可以作为 自执行函数
      //  如何用？ 在 小括号 后面 立即 跟上一个 小括号 去调用！！ -- 只有这一次调用的机会！！
      //  自执行函数 在小括号外部 无法访问，所以 一般都用 匿名函数！！--- 因为 有了名字 在外面 也访问不到！！！

      (function(gfName){
        console.log( gfName + ' : 我爱不爱你，和你的颜值无关，取决于你对我好不好~~~');
      })('小白');

      // b(); // b is not defined
//打印结果
小白 : 我爱不爱你，和你的颜值无关，取决于你对我好不好~~~
```

## 函数内部的特殊属性arguments

```javascript
 // 函数内部的属性 arguments 是 实参列表！！！
    //                         本质 是一个 【类数组】：有 下标  和 length
    //                         当函数 被 调用时，传入的 实参 都会被 添加到 arguments 属性中
    function showLove(gfName, bfName) {
      // console.log(arguments);

      // 遍历 实参列表
      for (var i = 0; i < arguments.length; i++) {
        console.log('arguments[' + i + ']=' + arguments[i]);
      }

      console.log(gfName + ' ,i love u ~~~~' + bfName);
    }

    showLove('御姐波多', '班长', '邹老师');
//打印结果
arguments[0]=御姐波多
arguments[1]=班长
arguments[2]=邹老师
御姐波多 ,i love u ~~~~班长
```

## 函数重载

```javascript
// 注意：JS中 函数 的 实参 和 形参 可以不用 一一对应！！！！！！！

    //1.函数重载： 多个函数 名字一样，但是 参数个数 不一样，那么 根据 个数不一样 就会执行 不同的业务代码！！！
    //1.1 java 和 C#中的 函数重载 的样子
    // function showLove(gfName){
    //   console.log(gfName + '我爱你~~~');
    // }

    // function showLove(gfName,bfName){
    //   console.log(gfName + '我爱你~~~' + bfName);
    // }

    // showLove('御姐波波');

    // showLove('御姐苍苍','班长')

    //1.2 JS 版本的 “函数重载”
    function showLove(gfName, bfName) {
      console.log(arguments[0]);
      console.log(arguments[1]);

      // 如果 传递的实参 个数 为 1，那么就执行 一段业务代码 
      if (arguments.length == 1) {
        // console.log(arguments[0]+ '，我爱你~~~');
        console.log(gfName + '，我爱你~~~');
      }

      // 如果 传递的实参 个数 为 2，那么 就执行 另一端业务代码 
      else if (arguments.length == 2) {
        // console.log(arguments[0] + '，我爱你~~~' + arguments[1]);
        console.log(gfName + '，我爱你~~~' + bfName);
      }
    }

    showLove('御姐波波');
    showLove('御姐波波', '班长');
//打印结果
御姐波波
10模拟函数重载.html:26 undefined
10模拟函数重载.html:31 御姐波波，我爱你~~~
10模拟函数重载.html:25 御姐波波
10模拟函数重载.html:26 班长
10模拟函数重载.html:37 御姐波波，我爱你~~~班长
```

## 对象

```javascript
 var a = 1; //  一个容器，可以存放 1 个数据
      var arr = [1,2,3]; // 一个特殊的盒子，里面可以存放 多个数据
      var func = function(){ // 一个存放 代码的盒子！！！

      }

      //1.对象：一个容器，可以存放各种数据：变量，数组，函数，对象~~~~~
      //  对象 内部 包含： 属性 和 方法
      //                  属性值 可以是 任意类型 的数据（字符串、数值、布尔值、对象、数组、函数）
      //                  属性名 和 属性值 之间 用 : 冒号
      //                  多个 属性之间 用 , 逗号  隔开！
      /* 
        var obj = {
          属性名1 : 属性值1,
          属性名2 : 属性值2,
          方法名1 : function(){

          }
        }

      */
      var obj = {
        name : '小冰冰',
        gender : true,
        age : 37,
        sleep : function(){
          console.log('小班班，快来睡觉觉咯~~~~~');
        }
      };

      //2. 访问 对象的成员(属性和方法)
      // 2.1 点 访问法
      console.log(obj.name);
      console.log(obj.gender);
      console.log(obj.age);
      obj.sleep();

      // var arr = [1,2,3]; // new Array();
      // arr.push(4);
//打印结果
02.对象.html:38 小冰冰
02.对象.html:39 true
02.对象.html:40 37
02.对象.html:32 小班班，快来睡觉觉咯~~~~~
```

## 对象成员访问

```javascript
// {} 创建 -- 字面量------------------------------
    var obj = { // 创建 带初始值的对象
      name: '裙姐',
      age: 35,
      fuSe: '非常黑',
      // hobby : '女',
      sayHi: function () {
        console.log('我是 周林林老师的 女朋友~~~~ 害羞~~~');
      }
    };
    console.log(obj);
    
    //1.通过 . 来访问 对象的成员 -----------------------------------------------------------
    console.log(obj.name); // '裙姐'
    obj.sayHi(); // 注意：一定要加 小括号！！！ 

    //2.设置 对象的 属性值
    obj.name = '林林妹';

    //3.如何向对象中 添加属性！！！！---------------------------------------------------------

    // 如果 . 后的面属性 不存在，则 相当于 添加属性
    obj.hobby = '女'; // 想 obj 对象中 添加了一个属性 hobby，并设置了 值 为 ‘女’

    //4.想对象中 添加 方法！！！！-----------------------------------------------------------
    obj.run = function () {
      console.log('我要分手~~~我要跑路~~~！');
    };

    //5.删除对象 的属性
    delete obj.fuSe;
    console.log(obj);

    //5.访问属性时的 特殊情况 ---------------------------------------------------------------
    //5.1 访问 不存在的属性  ,得到 undefined
    console.log(obj.bfName); // undefined

    // 5.2 访问 不存在的方法
    // obj.showLove(); // 报错：obj.showLove is not a function
```

## 对象成员的中括号访问法

```javascript
   var dog = {
      name: 'ruikey',
      gender: false,
      age: 1,
      bark: function () {
        console.log('汪汪~~~~我想你了~~~~~');
      }
    };

    //1. 使用 . 来访问 对象的成员
    //1.1 访问属性
    console.log(dog.name);
    //1.2 访问方法
    dog.bark();

    //------------------------------------

    console.log('----------------------------------');

    //2. 使用 [] 来访问对象的成员 -------------------------------------------------------------------------------------------
    //   可以使用 [] 访问 对象里的 成员，[] 中 传的是 属性的名字 字符串！！！！！
    console.log(dog['name']); // dog.name 【注意：属性名 一定要加 引号！！】
    console.log(dog['age']); // dog.age
    console.log(dog['gender']); // dog.gender

    dog['bark'](); // dog.bark();
```

## 对象方法里的this

```javascript
// 函数方法内部 有两个 常用的 属性： arguments 和 this  -- 本质上都是 局部变量
    //       arguments 中 存的是 调用函数时  传递给函数的 实参列表！！
    //       this      是 调用函数时，函数所属的对象！！！
    //                 this 口诀： 谁.出的方法，方法中的 this 就是谁！！

    var dog = {
      name: 'ruikey',
      gender: false,
      age: 1,
      bark: function () {
        console.log('汪汪~~~~我想你了~~~~~' + this.name);
      }
    };

    // this 口诀： 谁.出的方法，方法中的 this 就是谁！
    dog.bark();
    
    2,
    //全局作用域：就是 window 对象

    //1.所有的全局变量 和 函数，本质上 都是 添加到 window对象里的 成员-------------------------
    var age = 1; // window.age = 1;

    function a() { // window.a = function(){ console.log(this.age); }
      console.log(this.age);
    }

    // 2.所以 我们 可以 通过 window 点出 变量 和 函数 使用！！----------------------------------
    console.log(window.age);
    window.a();

    // 3. 凡是 属于 window的成员，都可以 省略 window. ，直接 访问 成员名字
    a(); // window.a();
```

## 简单工厂模式

```javascript
//比如
 // 批量创建对象： 兰老师 要创建 3个学员对象，用来保存 学员信息
    // var stu01 = {
    //   sName : '班长',
    //   sAge : 29,
    //   sGender: true,
    //   sayHi : function(){
    //     console.log('hi~~美女，我是【' + this.sName + '】，今年【' + this.sAge + '】岁了，性别【' + (this.sGender ? '男' : '女') + '】');
    //   }
    // };

    // var stu03 = {
    //   sName : '班长1',
    //   sAge : 39,
    //   sGender: true,
    //   sayHi : function(){
    //     console.log('hi~~美女，我是【' + this.sName + '】，今年【' + this.sAge + '】岁了，性别【' + (this.sGender ? '男' : '女') + '】');
    //   }
    // };
使用工厂函数方法

//1. 简单工厂方法 ---用来 创建 一个 学员对象，并返回
    function createStuInfo(stuName, stuAge, stuGender) {
      //1.1 创建一个 对象，并 设置了 属性 和 方法，然后将 形参的值 设置给 对应属性 值！！
      var stu01 = {
        sName: stuName,
        sAge: stuAge,
        sGender: stuGender,

        sayHi: function () {
          console.log('hi~~美女，我是【' + this.sName + '】，今年【' + this.sAge + '】岁了，性别【' + (this.sGender ? '男' : '女') + '】');
        }
      };

      //1.2 将创建完的对象 返回
      return stu01;
    }

    //2. 使用 简单工厂方法 创建对象 -- Object类型
    var stu01 = createStuInfo('班长', 29, true);
    var stu02 = createStuInfo('班长2', 19, true);
    
    //3. 调用 对象 里的 sayHi 方法
    stu01.sayHi();
    stu02.sayHi();

    console.log(stu02);
    
```

## 构造函数和new关键字

```javascript
//1.通过 new+构造函数 批量创建学员对象----------------------------------------------------
    //1.1 创建 构造函数 ： 名字 首字母 一般 大写~~~
    //         构造函数 就是用来 创建 对象的！！！
    //         构造函数：要结合 new 关键字来调用！！！！
    function StuInfo(stuName, stuAge, stuGender) {
      this.sName = stuName;
      this.sAge = stuAge;
      this.sGender = stuGender;

      this.sayHi = function () {
        console.log('hi~~美女，我是【' + this.sName + '】，今年【' + this.sAge + '】岁了，性别【' + (this.sGender ? '男' : '女') + '】');
      };
    }

    // 重复啰嗦一句话：【我们是通过 new 关键字 来 调用 构造函数，从而 创建一个 对象的！！！！】

    //1.2 通过构造函数 如何 创建对象呢？-------------------------------------------------------
    //    可以 【使用 new 关键字 来 调用 构造函数！！！】

    //1.3 new 关键字 做的 4件事情
    //               a. 创建 一个 空对象
    //               b. 将 空对象 传给 了 构造函数 里的 this
    //               c. 调用 构造函数-- 意味着 通过构造函数 为 空对象 添加了 成员（属性和方法）
    //               d. 返回 添加了 成员的 对象 （就是 第一步 创建的 那个 空对象，只不过 已经有成员了）

    //  创建的对象 都是 StuInfo类型的
    var stu01 = new StuInfo('小苍苍', 34, false);
    var stu02 = new StuInfo('班长', 18, true);
    stu01.sayHi();
    stu02.sayHi();

    console.log(stu01);



    function StuInfo(stuName, stuAge, stuGender) {
      this.sName = stuName;
      this.sAge = stuAge;
      this.sGender = stuGender;

      this.sayHi = function () {
        console.log('hi~~美女，我是【' + this.sName + '】，今年【' + this.sAge + '】岁了，性别【' + (this.sGender ? '男' : '女') + '】');
      };
    }
//打印结果
hi~~美女，我是【小苍苍】，今年【34】岁了，性别【女】
11使用构造函数和new关键字批量创建对象.html:48 hi~~美女，我是【班长】，今年【18】岁了，性别【男】
11使用构造函数和new关键字批量创建对象.html:38 
StuInfosAge: 34sGender: 
             falsesName: "小苍苍"
             sayHi: ƒ ()__proto__: Object
```

## 值类型和引用类型传参

```javascript
// ----------------------值类型变量 的赋值 与 传参-----------------------
    //1.1 值类型 赋值
    var a = 1;
    var b = a; // 是将 a 的值 复制一份 给了 b

    console.log(b); // 1

    //1.2 值类型 传参
    function changeNum(c) { // var c = a;
      c = 100; // 修改c 不会影响 a，因为是两个内存空间
      console.log(a); //100
    }

    changeNum(a); // 调用时，将 a 的值 复制了一份 给了 形参 c
    console.log(a); //1

    //-----------------------引用类型变量 的赋值 与 传参-----------------------
    //2.1 引用类型 赋值
    var stuObj = { // stuObj 变量中 保存的 对象的 【地址】
      age: 24
    };

    var stuObj2 = stuObj; // 将 stuObj 变量中保存的 对象的 【地址】 复制一份 给 了 stuObj2
    stuObj2.age = 27; // stuObj2 通过【地址】 修改了同一个对象的 age 属性值

    console.log(stuObj.age); // 27

    //2.2 引用类型 传参
    function changeStuAge(stuObj3) { // var stuObj3 = stuObj;
      stuObj3.age = 35; // stuObj3 通过【地址】修改了同一个对象的 age 属性值
    }

    changeStuAge(stuObj);// 调用时，将 stuObj 里保存的地址 复制一份 各类 stuObj3
    console.log(stuObj.age); // 35
```

## 数组的 新增 和删除

```javascript
//1. 数组的 新增 和 删除 元素的方法
    // push - 从数组 尾部 追加元素
    // pop - 从数组 的尾部 取出1个元素

    // unshift - 从数组 头部 追加元素
    // shift - 从数组 的头部 取出1个元素
var arr = ['P城', 'Y城', '四楼', '监狱'];

    console.log('arr=' + arr);

    arr.push('医院');
    arr.unshift('R城');

    console.log('arr=' + arr);

    var lastEle = arr.pop();
    console.log('lastEle=' + lastEle);

    var firstEle = arr.shift();
    console.log('firstEle=' + firstEle);

    console.log('arr=' + arr);

    console.log('-------------------------------------');
    //2.组合 使用
    //2.1 模拟 栈 操作 --- 先进后出(单方向操作)
    //         两种 栈 操作的方向： 头部存 头部取
    //                             尾部存 尾部取
    var arr2 = [];
    console.log('arr2=' + arr2);
    arr2.push(1);
    console.log('arr2=' + arr2);
    arr2.push(2);
    console.log('arr2=' + arr2);
    arr2.push(3);
    console.log('arr2=' + arr2);

    arr2.pop();
    console.log('arr2=' + arr2);
    arr2.pop();
    console.log('arr2=' + arr2);
    arr2.pop();
    console.log('arr2=' + arr2);


    console.log('-------------------------------------');
    //2.2 模拟 队列 操作 --- 先进先出
    //         两种 队列 操作的方向： 头部存 尾部取
    //                              尾部存 头部取
    var arr3 = [];
    
    console.log('arr3=' + arr3);
    arr3.push(1);
    console.log('arr3=' + arr3);
    arr3.push(2);
    console.log('arr3=' + arr3);
    arr3.push(3);
    console.log('arr3=' + arr3);

    arr3.shift();
    console.log('arr3=' + arr3);
    arr3.shift();
    console.log('arr3=' + arr3);
    arr3.shift();
    console.log('arr3=' + arr3);
06数组对象的api.html:16 arr=P城,Y城,四楼,监狱
06数组对象的api.html:21 arr=R城,P城,Y城,四楼,监狱,医院
06数组对象的api.html:24 lastEle=医院
06数组对象的api.html:27 firstEle=R城
06数组对象的api.html:29 arr=P城,Y城,四楼,监狱
06数组对象的api.html:31 -------------------------------------
06数组对象的api.html:37 arr2=
06数组对象的api.html:39 arr2=1
06数组对象的api.html:41 arr2=1,2
06数组对象的api.html:43 arr2=1,2,3
06数组对象的api.html:46 arr2=1,2
06数组对象的api.html:48 arr2=1
06数组对象的api.html:50 arr2=
06数组对象的api.html:53 -------------------------------------
06数组对象的api.html:59 arr3=
06数组对象的api.html:61 arr3=1
06数组对象的api.html:63 arr3=1,2
06数组对象的api.html:65 arr3=1,2,3
06数组对象的api.html:68 arr3=2,3
06数组对象的api.html:70 arr3=3
06数组对象的api.html:72 arr3=
```

## 数组的新增 翻转 删除 获取

```javascript
//1. concat 拼接数组，返回一个 拼接后的 新数组！~~~
    var arr = ['P城', 'Y城', '四楼', '监狱'];
    var arr2 = ['Z城', 'A城', '五楼', '医院'];

    var arr3 = arr.concat(arr2);
    arr3 = arr3.concat('军事基地','传智播客');

    console.log(arr3);

    //2. join 将 所有的 元素 按照 分隔符 拼接成 一个 字符串 返回
    // var str = arr3.join();// 默认 用 , 号 来 在字符串中 分隔  不同的元素
    var str = arr3.join('|');
    console.log('str=' + str);

    //3. reverse 翻转数组
    var arr = ['P城1', 'Y城2', '四楼3', '监狱4'];
    arr.reverse();
    console.log(arr);

    //4. splice 删除数组中的元素
    var arr = ['P城1', 'Y城2', '四楼3', '监狱4'];
    //arr.splice(2,1);
    arr.splice(2,1,'五楼3','六楼3');// 注意：第三个参数  用来 替换 被删除的元素的 位置
    console.log(arr.toString());

    //5. slice 获取 数组中 指定 下标区间 的元素 [beingIndex,endIndex)
    var arr = ['P城1', 'Y城2', '四楼3', '军事基地4'];
    //            0      1       2          3
    var arr2 = arr.slice(1,3); // slice 不会 修改 原数组，仅仅是 把 元素组里 对象下标 的元素 复制一份 存入新数组 返回
    console.log(arr.toString());
    console.log(arr2.toString());
Array(10)0: "P城"1: "Y城"2: "四楼"3: "监狱"4: "Z城"5: "A城"6: "五楼"7: "医院"8: "军事基地"9: "传智播客"length: 10__proto__: Array(0)
07数组对象的常用api.html:19 str=P城|Y城|四楼|监狱|Z城|A城|五楼|医院|军事基地|传智播客
07数组对象的常用api.html:24 Array(4)0: "监狱4"1: "四楼3"2: "Y城2"3: "P城1"length: 4__proto__: Array(0)
07数组对象的常用api.html:30 P城1,Y城2,五楼3,六楼3,监狱4
07数组对象的常用api.html:36 P城1,Y城2,四楼3,军事基地4
07数组对象的常用api.html:37 Y城2,四楼3
```

## 数组的排序

```javascript
 var arr = [ 'Y城好', '四楼也不错', 'P城','广州小蛮腰最美'];
    var arr = [5, 44, 33, 22, 11];

    console.log(arr.toString());

    arr.sort(daoXu);// 将 比较 两个元素 大小 的 方法 传入

    console.log(arr.toString());

    // 1.1 数值 升序排列 使用 ---------------
    function shengXu(prev,next){
      return prev - next;
    }

    // 1.2 数值 降序排列 使用 ---------------
    function daoXu(prev,next){
      return next - prev;
    }

08数组对象的常用api-sort排序.html:10 5,44,33,22,11
08数组对象的常用api-sort排序.html:14 44,33,22,11,5
```

## 字符串对象

```javascript
 //1.字符串的恒定性
      var str = 'james is comeing ~~~';
      str = 'linda is comeing~~~~';

      //2.使用 字符串的 方法 类 获取 新的字符串
      //2.1 charAt 根据下标 返回 字符
      var str = '传智播客好，传智播客妙，上了船就不退票~~~';
      var char1 = str.charAt(4);

      console.log(char1);

      //2.2 concat 拼接多个 字符串
      var str = '传智播客好，传智播客妙，上了船就不退票~~~';
      var str1 = str.concat('小白0基础，都能教好教会~~');
      console.log(str);
      console.log(str1);

      //2.3 indexOf 根据字符，返回在字符串中找到的【第一个】匹配字符的下标 
      var str = '~~~传智播客好，传智播客妙，上了船就不退票~~~';
      var haoIndex = str.indexOf('好');
      console.log(haoIndex);

      var haoIndex2 = str.indexOf('退票'); // 如果 找到字符串，会把找到的 字符串的第一个字符 下标返回
      console.log(haoIndex2);

      var czIndex = str.indexOf('传智');
      console.log(czIndex);

      //2.4 lastIndexOf 根据字符，返回在字符串中找到的【最后一个】匹配字符的下标 
      var str = '~~~传智播客好，传智播客妙，传智播客呱呱叫，上了船就不退票~~~';
      var haoIndex = str.lastIndexOf('传智');
      console.log(haoIndex);

      //2.5 截取字符串 substr(index,count) ，从 下标 index开始 ，截取 count 个字符
      var str = '~~~传智播客好，传智播客妙，传智播客呱呱叫，上了船就不退票~~~';
      var str1 = str.substr(9,5); // 如果 不传 第二个参数，就会从 指定下标 截取 到 字符串结束
      console.log(str);
      console.log(str1);

      //2.6 截取字符串 substring(index,endIndex) --> [index,endIndex)
      var str = '~~~传智播客好，传智播客妙，传智播客呱呱叫，上了船就不退票~~~';
      str1 = str.substring(0,3); // 如果 不传 第二个参数，就会从 指定下标 截取 到 字符串结束
      console.log(str);
      console.log(str1);

      //2.7 replace 替换 字符串中的 的子字符串
      var str = '我爱你，但我不敢说，可是一直默默的爱着你~~';
      // var str1 = str.replace('爱','狠'); // 换的是 第一个匹配 的子字符串
      var str1 = str.replace(/爱/g,'狠');  // 使用 //g 的方式 替换 所有 匹配的 子字符串

      console.log(str);
      console.log(str1);


      //2.8 将 字符串中 所有 的 小写 英文字母 都改成 大写
      var str = 'i love u ~~';
      var str1 = str.toUpperCase();
      console.log(str);
      console.log(str1);

      //2.9 将字符串中 所有的 大写 字母 转成 小写
      var str2 = str1.toLowerCase();
      console.log(str1);
      console.log(str2);
//打印结果
09字符串对象的api.html:15 好
09字符串对象的api.html:20 传智播客好，传智播客妙，上了船就不退票~~~
09字符串对象的api.html:21 传智播客好，传智播客妙，上了船就不退票~~~小白0基础，都能教好教会~~
09字符串对象的api.html:26 7
09字符串对象的api.html:29 20
09字符串对象的api.html:32 3
09字符串对象的api.html:37 15
09字符串对象的api.html:42 ~~~传智播客好，传智播客妙，传智播客呱呱叫，上了船就不退票~~~
09字符串对象的api.html:43 传智播客妙
09字符串对象的api.html:48 ~~~传智播客好，传智播客妙，传智播客呱呱叫，上了船就不退票~~~
09字符串对象的api.html:49 ~~~
09字符串对象的api.html:56 我爱你，但我不敢说，可是一直默默的爱着你~~
09字符串对象的api.html:57 我狠你，但我不敢说，可是一直默默的狠着你~~
09字符串对象的api.html:63 i love u ~~
09字符串对象的api.html:64 I LOVE U ~~
09字符串对象的api.html:68 I LOVE U ~~
09字符串对象的api.html:69 i love u ~~
```