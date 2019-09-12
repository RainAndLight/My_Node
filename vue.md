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

## 插值表达式：

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
+ `v-for(item , key , index ) in items`

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



## v-bind

+ `v-bind:id='ID'`
+ 简写 `<p :id="'ID'">  </p> ` // 不加引号为变量
+ 加引号和不加引号区别
+ 绑定一般属性的用法  <p v-bind:属性名='数据对象中的属性名'></p>>

### 案例：基本使用

``` js
//代码：
<body>
    <div id="app">

        <input type="text" value="666" v-bind:id='ID'></input>
        <img :src="src" alt="" style="width:100px;height: 100px;">
    </div>
    <script src="../vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                ID: 'a',
                src: 'http://pic37.nipic.com/20140113/8800276_184927469000_2.png'
            },
            methods: {

            }
        });
    </script>
</body>
```

### 绑定class对象语法：

绑定clss的对象语法

案例：v-bind： 绑定 class 对象语法：

语法： ` b-bind：class=" clss类名 ： 布尔值 "`//布尔值一般用data数据边量替换

+ 原来的class也会存在 新添加的class如果渲染有重复 那么将覆盖效果

``` html
	<style>
        .left {
            position: absolute;
            left: 0;
            color: brown;
        }

        .right {
            position: absolute;
            right: 0;
            color: #0f0;
        }

        .default {
            font-size: 40px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div id="app">
        <!--   :class="{ class名称": 布尔值 }" -->
        <p :class="{left:showLeft,right:showRight}" class="default">
            9月13号放假去天安门
        </p>
    </div>
    <script src="../vue.js"></script>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                showLeft: true,
                showRight: true
            },
            methods: {}
        });
    </script>
</body>
```



### 绑定class数组语法：

语法：`：class="[  class变量1 ， class变量2   ]"`

代码：

+ class变量1 可以写为 [{ class名 ： 代表布尔的变量 }]
+ 数组中加入单双引号 代表这是个 字符串 

``` html
<body>
    <!-- **`任务`**

        1. 实例化一个Vue实例
        2. 定义一个p标签 原有class 为default 
        3. 使用v-bind数组语法将class变为 default primary danger info
        
        **`路径`**参照实现代码 -->
    <div id="app">
        <p class="default" :class="[primary,'danger','info']">666</p>
    </div>
    <script src="../vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                primary: 'primary',
                danger: true,
                info: true
            },
            methods: {}
        });
    </script>
</body>
```



### 绑定 style对象语法

语法： ` v-bind：style="{  css属性：变量名  }"` 

案例：

+ 比如 font-size等 带 -  这个符号的  需要采用驼峰写法 把这个 - 去掉

``` html
<body>
    <div id="app">
        <p style="color:aqua" :style="{color:color , fontSize:fontsize ,fontWeight:fontwight}">Lisa:刀剑神域op</p>
    </div>
    <script src="./vue.js"></script>
    <script>
        //         **`任务`**

        // 1. 实例化一个Vue实例
        // 2. 定义一个p标签 原有样式 为字体红色
        // 3. 使用v-bind绑定对象语法 将字体大小设置为48px ,加粗
        var vm = new Vue({
            el: '#app',
            data: {
                color: 'red',
                fontsize: '48px',
                fontwight: 1000
            },
            methods: {

            }
        });
    </script>
</body>
```

### 绑定 style 数组 写法：

语法：  v-bind:style="[对象1，对象2]"      ：style="[ {color:red},{fontSize:'40px'} ]"   

代码：

+ 对象1 可以为data 数据

``` html
<body>
    <div id="app">
        <p :style="[a]" style="color:red">123456</p>
    </div>
    <script src="../vue.js"></script>
    <script>
        // ** `任务` **

        // 1. 实例化一个Vue实例
        // 2. 定义一个p标签 原有样式 为字体红色
        // 3. 使用v - bind绑定数组语法 将字体大小设置为48px, 加粗
        var vm = new Vue({
            el: '#app',
            data: {
                a: {
                    fontSize: '48px',
                    fontWeight: 1000,
                    color: "aqua"
                }
            },
            methods: {

            }
        });
    </script>
```



案例：控制style 中 字体大小

+ 所用到的 两个Number 方法 parseInt parseFloat   比如 48px  直接取48  如果是 px48 不行

``` html
<body>
    <div id="app">
        <button @click="big">变大</button>
        <button @click="sm">变小</button>
        <p :style="[a]" style="color:red">123456</p>
    </div>
    <script src="../vue.js"></script>
    <script>
        // ** `任务` **

        // 1. 实例化一个Vue实例
        // 2. 定义一个p标签 原有样式 为字体红色
        // 3. 使用v - bind绑定数组语法 将字体大小设置为48px, 加粗
        // 4. 添加按钮 完成字体变大变小
        var vm = new Vue({
            el: '#app',
            data: {
                a: {
                    fontSize: '48px',
                    fontWeight: 1000,
                    color: "aqua"
                }
            },
            methods: {
                big() {
                    this.a.fontSize = Number.parseInt(this.a.fontSize) + 10 + 'px'
                },
                sm() {
                    this.a.fontSize = Number.parseInt(this.a.fontSize) - 10 + 'px'
                }
            }
        });
    </script>
</body>
```



## v-model：

+ 会忽略 表单元素的value checked selected 特性的初始值  以data中选项中声明的为初始值
+ 特点：数据的双向绑定、双向同步

### 原理：

+ 注意 这里 用的是` input 事件` 才能实现 随时改变

![1568085842802](C:\github 库\My_Node\vue.assets\1568085842802.png)



### 双向绑定基本代码：

``` html
<body>
    <div id="app">
        <p>{{msg}}</p>
        <input type="text" v-model="msg">
    </div>
    <script src="../vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '123'
            },
            methods: {}
        });
    </script>
</body>
```



### v-model 绑定其他表单元素：

![1568086520785](C:\github 库\My_Node\vue.assets\1568086520785.png)

``` html
    <div id="app">
        <p>{{name}}</p>
        <input type="text" :value="name" @input="changeInput">
        <p>{{checkboxName}}</p>
        <input type="checkbox" v-model="checkboxName">
        <p>{{textareaName}}</p>
        <textarea v-model="textareaName" name="" id="" cols="30" rows="10"></textarea>
        <p>{{radioName}}</p>
        <input type="radio" v-model="radioName" value="男">男
        <input type="radio" v-model="radioName" value="女">女
        <p>{{selectName}}</p>
        <select v-model="selectName">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
    <script src="../vue.js"></script>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                name: '123',
                checkboxName: '456',
                textareaName: '789',
                radioName: '男',
                selectName: '1'
            },
            methods: {
                changeInput(e) {
                    this.name = e.target.value
                }
            }
        })
    </script>
```



## v-cloak  防止闪烁

1. 在#app 那个标签上写上 v-cloak 
2. style中加入[ v-cloak ] {  display:none;  } 属性选择器

## v-once 

作用 ： 只渲染一次页面视图

### 案例：

增加商品：

``` html
// 1. 注册点击事件
// 2. 让input text 与 data 中的 name 双向绑定 
// 3. 向list 数组中 添加 name

<input type="text" v-model="name">
<input type="button" value="添加" @click="addItem" :disabled="!name">

addItem() {
                    console.log(123)
                    this.list.unshift({
                        name: this.name,
                        time: new Date()
                    })

                }
```

删除案例：(  splice 方法  )

``` html
//关键  v-for循环在时  <tr v-for="(item,index) in list" :key='index'>  所以可以拿到他的index 值 相当于id
// 删除  delItem(index) {
                    if (confirm('你确定删除吗？')) {
                        this.list.splice(index, 1)
                    }
                }
```

删除案例：（filter 方法）

``` html
delItem (index) {
	this.list = this.list.filter(item,index){return index!index}
}
```

删除案例（es6 filter 简写方式）

``` html
delItem (index){
	this.list = this.list.filter((item,index) => index!index)
}
```



## 数组的过滤器 filter 方法

+ filter 方法函数中需要返回一个 条件表达式  => 布尔值 
  + 如果布尔值 为true 则将当前item
  + 如果布尔值为 false  则 不返回

``` js
//使用方法
[1,2,3,4,5,6].filter(fucntion(item,index){return item > 4}) //[5,6]

```



## vue 中的 filter 过滤器

使用场景：

+ data中的数据格式 -- 日期格式 货币格式  大小写 等
+ 使用位置  {{  msg |  过滤器名称  }}   和  v-bind="表达式 |  过滤器的名称"

+ 全局 和 局部的区别  
  + 全局 在new vue 上面 Vue.filter( '过滤器名称', (value要处理的参数) => {reutrn 返回数据处理的结果} )
  + 全局过滤器不会覆盖原数据

  ``` html
  <body>
  
      <div id="app" v-cloak>
          <p>{{name | toUpper}}</p>
      </div>
      <script src="../vue.js"></script>
      <script>
          Vue.filter('toUpper', (value) => {
              return value.toUpperCase();
          })
          var vm = new Vue({
              el: '#app',
              data: {
                  name: 'abc'
              },
              methods: {}
          });
      </script>
  </body>
  ```

  

  案例： 将abc 中 第一个字母大写

  + 其中` toUpperCase()`  为转化成大写   
  + `charAt（）`  返回指定索引下标的元素
  + `sbutr（）`截取字符串

  ``` html
  <body>
  
      <div id="app" v-cloak>
          <p>{{name | toUpper}}</p>
          <input type="text" v-model="name">
      </div>
      <script src="../vue.js"></script>
      <script>
          Vue.filter('toUpper', (value) => {
              return value.charAt(0).toUpperCase() + value.substr(1)
          })
          var vm = new Vue({
              el: '#app',
              data: {
                  name: 'abc'
              },
              methods: {}
          });
      </script>
  </body>
  ```

  

  + 局部 在Vue实例上的选项上 与 el data methods 同级 `filters` 所有过滤器集合 当前实例使用 

  ``` html
  <body>
      <div id="app">
          <p>{{ 'abc' | toUpper }}</p>
      </div>
      <script src="../vue.js"></script>
      <script>
          var vm = new Vue({
              el: '#app',
              data: {
  
              },
              methods: {
  
              },
              filters: {
                  toUpper(value) {
                      //第一种方法
                      return value.charAt(0).toUpperCase() + value.substr(1)
                      //第二种方法
                      toUpper(value) {
                      return value.split("").map((item, index) => {
                          if (index === 0) {
                              return item.toUpperCase()
                          } else {
                              return item
                          }
                      }).join("")
                  }
                      //第三种方法
                      return value.split("").map((item,index) => (
                         	index === 0 ?  item.toUpperCase() :  item
                      )).join("")
                  }
              }
          });
      </script>
  </body>
  ```

  ##  map() 过滤器

  ``` js
  map.((item,index) => {
      if(index === 0 ) {
          return item
      }
  })
  ```

## 过滤器 - 传参数 和串联使用

语法：

​	`{{  msg |  toLower（1） }}`  传参数 不会影响value  value 永远排在第一位置

​	`{{  msg |  toLower（1） | reverse }}` reverse  拿到的value 是 toLower 过滤过的值

案例 ：  将 ABC  中 的b（b可以为指定索引）转化为小写 并且倒转

``` html
<body>
    <div id="app">
        <p>{{name | toLower(1) | reverse}}</p> //如果写2 则index是第三位
        <input type="text" v-model="name">
    </div>
    <script src="../vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                name: 'ABC'
            },
            methods: {

            },
            filters: {
                toLower(value, index) {
                    return value.split("").map((item, i) => (
                        i === index ? item.toLowerCase() : item
                    )).join("")
                }，
                reverse(value) {
                    return value.split("").reverse().join("")
                }
            }
        });
    </script>
</body>
```

其中 tolower 的方法 原始写法为

![1568191719505](C:\github 库\My_Node\vue.assets\1568191719505.png)

## debugger

+ 在 需要断点的地方输入debugger；即可
+ 会在调试的时候 自动进入该断点
+ 天使完毕之后 删除





## MOMENT .js 类库 的使用

``` js
//引入js
<script src="../moment.min.js"></script>
//定义一个过滤器
Vue.filter('time', (value，a) => {
            return moment(value).format( a || "YYYY-MM-DD hh:mm:ss")
        })
//插值表达式
{{  timeNow | time（YYYY-MM-DD hh:mm:ss）  }}
```

+ 在 插值表达式中传入实参使用
+ filter 函数体中 format 判断 a 如果有a  则用a 的格式  没有的 按照默认值



## ref 操作DOM元素



作用： 通过ref 来获取 DOM 元素

语法： 给元素标签内定义 ref 属性 然后 通过 方法中 $refs.名称 来获取DOM 对象

``` html
<body>
    <div id="app">
        <input type="text" ref="getInput">
        <input type="button" value="按钮" @click="getInputValue">
    </div>
    <script src="../vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
            },
            methods: {
                getInputValue() {
                    this.$refs.getInput.value = 'abc'
                },
            }
        });
    </script>
</body>
```

## 	数组some findindex  indexOf filter方法：

![1568210005480](vue.assets/1568210005480.png)

![1568212031799](vue.assets/1568212031799.png)

remove 可以采用es6的箭头函数





### 过滤器

+ 全局 和 局部的区别  
  + 全局 在new vue 上面
  + 局部 在Vue实例上的filters 所有过滤器集合 当前实例使用

``` js
//全局
Vue.filter（）Vue.filter('toUpper',function(){

}) // 转大写
```



![1568101712245](C:\github 库\My_Node\vue.assets\1568101712245.png)

### 局部过滤器：

![1568103118456](C:\github 库\My_Node\vue.assets\1568103118456.png)

第三种方式![1568103181345](C:\github 库\My_Node\vue.assets\1568103181345.png)

案例：

![1568104507291](C:\github 库\My_Node\vue.assets\1568104507291.png)























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

v-on  绑定事件



小结：![1568108089012](C:\github 库\My_Node\vue.assets\1568108089012.png)

![1567955357563](C:\github 库\mynote\vue.assets\1567955357563.png)

![1567954347835](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567954347835.png)

`this指向 实例化对象` 所以调用data里面的属性 方法 必须用this.什么



# 打包工具Webpack，Gulp

