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

## vue初体验：

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

