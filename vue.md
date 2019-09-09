# Vue基本语法和概念

## 什么是Vue.js

+ 是最火的一个前端框架，React是最流行的一个前端框架（Web，手机app也可以开发 vue需要借助Weex）
+ 三大前端主流框架：Angular.js  React.js Vue.js
+ Vue.js 是一套构建用户界面的框架 `只关注视图层` 便于与第三方库或者既有项目整合
+ 前端工作 主要负责MVC中的V这一层  和界面打交道 来制作页面效果

## 为什么学习流行框架

提高开发效率的发展历程：

原生js => jQuery => 模板引擎 => angular => vue

不再操作DOM元素  更多时间去关注业务逻辑

## 框架和库的区别

+ 框架是一套完整的解决方案，对项目侵入性较大 如果需要更换框架 需要重新构架整个项目
+ 库（插件）：提供某一个小功能，对项目侵入性较小，很容易切换库

## MVC 与MVVM

+ mvc 是后端分层开发概念

![snipaste_20190908_214603](images\snipaste_20190908_214603.png)

+ MVVM 是前端视图层的概念 主要关注与视图层分离 也就是说 MVVM把 前端的视图层分为了三个部分 Model，view ， vm ViewModel

## Vue 三种安装方式

1. 采用本地的文件引入
2. 采用现在cdn引入的方式 需要花钱 线上
3. npm 安装 （项目用这个，现阶段教学用本地）

## 为什么要在body结尾处加载script

1. html渲染顺序是从上到下，如果遇到script 标签  会停止渲染 先去解析 解析完成之后在渲染 如果js包非常大  会造成页面渲染卡顿  会出现瞬间白屏

## Vue特点：

1. 数据驱动视图 可以让我们只关注数据 完全`解耦`**数据** 和 **视图** => 响应式数据 => 数据变化=> 视图一定变化
2. MVVM双向绑定 改变视图 或者改变数据 另外一个自动改变
3. 适应当前`SPA`的项目开发single page application

## vue初体验：

### 五个步骤：

``` html
// 1. 设置Vue 管理的视图

<div id="app" class='app'>
    // 5. 在管理视图中 用{{}}使用data中数据
    {{name}}
    <p style=“color:red”>{{title}}</p>
</div>
// 2. 引入vue.js
	script src
<script>
// 3. 实例化一个对象
    var vm = new Vue({
        el:'#app',  // 4. 设置Vue实例的选项 将视图和vue关联
        el:'.app'  //class选择器也可以 不过只能对应一个视图 class也就没有意义 用id就好
        el:docment.getElementById('app') // dom 元素也可以
        data:{	//
            name:'hello world'，
            title:'任性'
        }
    })
</script>
```

### el选项：

+ 指定Vue实例所管理的html视图

+ el一旦确定不再改变
+ el不能挂载在body 和 html 标签上

### data选项：

+ 数据变化 => 视图变化
+ 可以通过 vm.$data.name 拿到值 等于号可以重新赋值  或者 **vm.name = ''** 赋值
+ 视图绑定的数据 必须在data中声明

### methods：

+ 方法中的this 自动绑定vue实例 this.name
+ 是一个对象
+ 可以直接通过vm实例访问方法  或者 在插值表达式中使用
+ 可以通过 vm.调用带data中所有的属性
+ 可以通过vm. 调用带methods 所有的方法
+ 所以 在data中命名中  不能喝methods中的方法重名
+ 懒人写法 fn3（）{   }  等价于 fn3： function (){}
+ methods中不能用箭头函数 this绑定父级作用域

## 差值表达式：

![1568000882998](C:\github 库\My_Node\vue.assets\1568000882998.png)

## 指令：

+ v- 前缀  Directives  v- 后面预期值是`单个Javascript 表达式` （v-for 是例外）

### v-text:

``` html
//插值表达式
<p v-text='name'></P>
<p v-text='name + 1'></P>
<p v-text='name +'真棒''></P>


var nm = new Vue({
	el:'#app',
	data:{
		name:'张三'，
		
},
	methods:{

}
})
```

![1568011695779](C:\github 库\My_Node\vue.assets\1568011695779.png)

### v-html 和 v-text:

+ v-text 会覆盖标签里面所有的内容
  + 而差值表达式则是更新标签中局部的内容
+ 相当于inner-html 和 inner-text
+ `尽量少使用html （xss攻击）`

### v-if 和 v-show（条件渲染）:

![1568013065518](C:\github 库\My_Node\vue.assets\1568013065518.png)

+ v-show 会渲染标签，只不过在样式中加入一个 display：none；

+ v-if 直接决定元素的添加或者删除

+ 如果需要频繁的切换 则使用v-show 

  else 则用v-if  这个用的多

![1568013720455](C:\github 库\My_Node\vue.assets\1568013720455.png)

+ `如果不想要div 可以吧div标签换成 template`,这个方法v-show不好使
+ 这里会定义一个showmessages属性 值为布尔值 来控制元素的显示隐藏
+ 如果 要显示隐藏 则在控制台 输入 vm.showmessages=false
+ v-if 有更高的切换开销  v-show 有更高的初始渲染

### v-on绑定事件：

+ 使用方法：v-on:事件名.修饰符='方法'  或者用@代替v-on：
+ `修饰词` .once只触发一次 .prenent 调用 event.preventDefault()

案例：点击出现和消失

![1568015346369](C:\github 库\My_Node\vue.assets\1568015346369.png)

+ v-on：cilck 等价于 `@click`
+ 事件传参
  + 匿名传参：如果 只写方法名  那么调用方法中会有一个默认参数  就是 `event`
  + 显示传参：如果传入参数 ， 同时也想用event 那么在指令中`fn（$event , 1）{    }` 否则直接写就会 报错underfined
  + 方法写不写括号是有区别的！！

+ 案例：

两个事件：

	1. onchange   失去光标改变
   	2. oninput   随时改变

 	3. 如何获取value `e.target.value`

### v-for：数组与对象用法不同

#### 数组：

+ 循环谁，指令在谁身上 而不是其父级元素  就是要生成谁
+ 根据一组数组或者对象的选项进行渲染
+ `v-for`需要`item in items`特殊的语法   或者将 in 换成 of
+ `items`是源数组或者对象
+ `(item,index) in items`   遍历 及 索引

案例：

![1568017457266](C:\github 库\My_Node\vue.assets\1568017457266.png)

案例中注意：

+ .split( '' ) 结果 是把数组拆分
+ reverse（） 把数组颠倒
+ join（''） 数组合并

#### 对象：

语法：

``` js
item in items  // item为当前遍历属性对象的值
(item, key, index) in  items //item为当前遍历属性对象的值 key为当前属性名的值  index为当前索引的值
```



### v-for key：

+ 使用  ： 通常给列表数据中的唯一值 也可以用索引值
+ `:key='index'`

案例：

![1568019857024](C:\github 库\My_Node\vue.assets\1568019857024.png)

### v-if 和 v-for相遇

+ v-for 的 优先级 大于v-if

![1568020080503](C:\github 库\My_Node\vue.assets\1568020080503.png)

``` js
<body>
    <div id="app">
        <p v-if="item>10" v-for="(item,key,index) in list" :key='index'>{{item}}</p>
    </div>
    <script src="./vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                list:[1,5,6,8,55,88,99,20,4]
            },
            methods: {}
        });
    </script>
</body>
```

## 表格案例：

+ 如果想测试 arr.length === 0 的效果 可以在控制台输入 vm.arr=[];

# 第一天总结

![1568022088140](C:\github 库\My_Node\vue.assets\1568022088140.png)











### 渲染一句话：

#### 插值表达式

``` html
<body>
    <div id="app">
        <p>{{ msg }}</p>  //mvvm中的 v
    </div>
</body>

<script src="../js/Vue.js v2.6.10.js"></script> //首先引入vue.js
<script>
	//实例化一个Vue对象 构造函数
    var nm = new Vue({ 
        el:'#app',		//表示要控制页面上的哪儿个区域
        //data 就是mvvm中的m
        data:{			//data属性中，存放的是 el 中要用到的数据
            msg:'hello vue'	//不需要再操作DOM元素了
        }
    })

</script>
```

#### 防止渲染闪烁

``` 
<style>
	[v-cloak] {
		display:none;
	}
</style>
```

### v-text

``` html
//会覆盖原本元素中的内容

```

#### v-html

也会覆盖 但是当做html解析

#### v-bind

v-bind:  是指要绑定的属性

v-oon  绑定事件



小结：

![1567955357563](C:\github 库\mynote\vue.assets\1567955357563.png)

![1567954347835](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567954347835.png)

`this指向 实例化对象` 所以调用data里面的属性 方法 必须用this.什么


# 打包工具Webpack，Gulp

