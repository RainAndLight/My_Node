# React

## react的基本使用

### 安装

``` bash
npm i react react-dom -S
```

### 最原始的使用（引入js）

1. 下载包引入react和react-dom的js

   ![image-20191110091854998](README.assets/image-20191110091854998.png)

2. 创建react元素

   ``` js
   let a = React.createElement('h1',null,'我是h1标签')
   ```

3. 吧创建的标签渲染到页面上

   ``` js
   ReactDOM.render(a,document.getElementById('root')
   ```

   ![image-20191110092341960](README.assets/image-20191110092341960.png)

   ![image-20191110093053462](README.assets/image-20191110093053462.png)

   > react.createElement(元素，键值对，内容1，内容2) 第三个属性之后需要在添加节点

1. 创建脚手架

   ``` bash
   npx create-react-app react01
   // vue 中 必需先下载包 再创建 项目
   ```

2. 启动 ： 

   ``` bash 
   npm strat
   ```

3. 将src目录下都删完，再创建index

4. index中

   ``` html
   //导入包
   import React form 'react'
   import ReactDOM form 'react-dom'
   
   //创建元素
   let a = React.createElement('h1',null,'我是h1')
   
   //渲染
   ReactDOM.render(a,document.getElementById('root'))
   ```

## JSX

+ JSX是javaScript XML 的简写

+ 为什么可以这么写？ 
  脚手架自带了Webpack帮我们转换

+ 针对创建React元素

  直接正常写代码

  ``` html
  a = <div>123</div>
  ```

  ``` react
  import React from 'react'
  import ReactDOM from 'react-dom'
  
  
  let myName = '宫彦祖'
  let a =(
      <div className='abc'>
          <h1>
              hello word
              
          </h1>
          <p>
              {myName}
          </p> 
      </div>
  ) 
  
  ReactDOM.render(a,document.getElementById('root'))
  ```

  

> 注意点：
>
> 1. 第一个元素换行要小心 ， 也就是a =<div></div>的时候，以后可以用（）包裹`a = （）` `内容包裹起来`
> 2. {  } 内不能写 if for while 等语句
>    `可以写 运算、三元运算`
> 3. React 没有v-if之类的指令

## 条件渲染if

![image-20191110111443075](README.assets/image-20191110111443075.png)

![image-20191110111854614](README.assets/image-20191110111854614.png)

``` react
import React from 'react'
import ReactDOM from 'react-dom'
 
let isloading = false
let a = () => {
    return isloading ? <div>Loading....</div> : <div>加载完成</div>
}

ReactDOM.render(a(),document.getElementById('root'))
```

## 数组map

+ 原生用法

![image-20191110113812442](README.assets/image-20191110113812442.png)

+ React 用法

![image-20191110114128007](README.assets/image-20191110114128007.png)

``` react 
let arr = [
    { name: '小米', id: 1 },
    { name: '华为', id: 2 }
]

let a = (
    <ul>
        {
            arr.map((item,index)=> {
            return <li key={item.id}>{item.name}</li>
            })
            //代码简化
            arr.map(item => <li key={item.id}>{item.name}</li>)
        }
    </ul>
)
```

> `注意：只要要写js了，就要用{}包起来`

## React的样式

1. 行内样式

   ``` react
   let a = <div style={{color:'red',background:'balck'}}></div>
   ```

   `两个{}代表js中写对象`

2. clssName

   ``` react
   //style 样式的写法
   //先导入
   import './index.css'
   
   let a = (
       <div className='box'>
           hello , word 
       </div>
   )
   ```

   + className = 'box'

## React 创建组件的两种方式

### 1.函数创建组件

要求：

1. `首字母必须大写`

2. `必须return`，没有的话可以`return null`
3. 使用函数组件当成`标签`使用就可以了，单标签也可以

``` react
import React from 'react'
import ReactDOM from 'react-dom'


function First (){
    return <div>hello word... </div>
}


ReactDOM.render(<First/>, document.getElementById('root'))
```

### 2. class 类组件

ES6 class 类的回忆：

![image-20191110150121062](README.assets/image-20191110150121062.png)

继承：

![image-20191110150448061](README.assets/image-20191110150448061.png)

稍微复杂的写法：

+ 这样会报错，需要在constructor中写一个`super()`

![image-20191110150532556](README.assets/image-20191110150532556.png)





react 类组件正儿八经的：

在一个页面写：

``` react
class Abc extends React.Component{
    render(){
        return (
            <div>
                hello word 
            </div>
        )
    }
}
```

引入组件：

组件部分

``` react 
import React from 'react'

class Header extends React.Component{
    render(){
        return <div>hello world</div>
    }
}

export default Header
```

入口文件部分(index)

``` react 
import Header from './header/header'
```



注意：

`入口文件必须导入 react 和 react-dom`

## 事件绑定

示例：

``` react
//事件绑定
class Header extends React.Component{
    abc(event){
        console.log(153);
        
    }
    render(){
        return (
            <button onClick={this.abc}>点击</button>
        )
    }
}
```

注意：

`this.abc`后面不能加（） 否则没有点击直接调用

事件对象：

``` react
import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    abc(e){
        console.log('事件对象',e);
        
    }
    render(){
        return (
            <button onClick={this.abc}>点击</button>
        )
    }
}

ReactDOM.render(<Header /> , document.getElementById('root'))
```



​		e.preventdeault()阻止默认行为

## 数据  state数据

state 就相当于Vue中的data

+ 无状态组件，没有操作state数据 函数组件
  + 只是单纯的显示
+ 有状态组件 操作state组件 类组件
  + 可以点击和发ajax
+ 数据写到state中
  + 使用，this.state.变量名

``` react 
class Header extends React.Component {
    state = {
        foo:'world'
    }
    render(){
        return (
            <div>
                hello {this.state.foo} 
            </div>
        )
    }
}
```

### 修改数据

+ 修改数据必须用 this.setState({ 变量：值 })

+ 不能直接赋值改修 

![image-20191110164126738](README.assets/image-20191110164126738.png)

++ -- 案例：

``` react

```

this指向问题：

1. `箭头函数`

![image-20191110165738649](README.assets/image-20191110165738649.png)

2. 第二种改法

   ![image-20191110165853869](README.assets/image-20191110165853869.png)

3. 改变this指向 bind
   ![image-20191110171411875](README.assets/image-20191110171411875.png)





### 复习：改变this 的指向

bind 改变this指向 并返回新函数

call 改变this指向  并执行函数

apply 改变this指向	并执行函数







## 受控表单变单元素板顶了state数据

实现了类似Vue中的v-modle效果

![image-20191111093149538](README.assets/image-20191111093149538.png)

基本代码：

``` react
import React from 'react'
import ReactDOM from 'react'



class Foo extends React.Component{

    state = {
        value:''
    }
    getValue=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return (
            <input onChange={this.getValue} value={this.state.value}></input>
            <div>{this.state.value}</div>
        )
    }
}


ReactDOM.render(<Foo></Foo>,document.getElementById('root'))
```





## 扩展运算符

``` js
var a = [1,2,3]
var b = [4,5,6]
var c = [...a,...b] //1,2,3,4,5,6
```





## ref(了解)

![image-20191111112952540](README.assets/image-20191111112952540.png)

代码实现：

``` react

```





## 子父兄传值

### 父用子组件：

![image-20191111113307050](README.assets/image-20191111113307050.png)

### 父向子传值

1. 在需要传值的组件上面，写上属性
2. 在子组件直接使用this.props获取

![image-20191111113608330](README.assets/image-20191111113608330.png)

### 子传父

![image-20191111114417970](README.assets/image-20191111114417970.png)





代码：

​	注意：`想要渲染，需要用到componentDidUpdata(){}`

``` react
class Parent extends React.Component{
    state = {
        foo:'123'
    }
    add=(val)=>{
        this.setState({
            foo:val
        })
    }
    render(){
        return (
            <div>
                父组件
                {this.state.foo}
                <Son1 name={this.add}></Son1>
            </div>
        )
    }
} 

class Son1 extends React.Component{
    state={
        foo:'son1'
    }
    add=()=>{
        this.props.name(this.state.foo)
    }
    render(){
        
        return (
            <div>
                子组件
                <button onClick={this.add}>点击给父组件传值</button>
            </div>
        )
    }
}
```





### 兄弟传值

亲兄弟找父亲



![image-20191111145128857](README.assets/image-20191111145128857.png)

``` react
class Parent extends React.Component{
    state = {
        foo:0
    }
    add=(val)=>{
        this.setState({
            foo:val
        })
    }
    render(){
        return (
            <div>  
                <Son1 value={this.state.foo}></Son1>
                <Son2 value={this.add}></Son2>
            </div>
        )
    }
}

class Son1 extends React.Component{
    state={
        foo:'son1'
    }
    render(){
        return (
            <div>
                Son1接收值：{this.props.value}
            </div>
        )
    }
}
class Son2 extends React.Component{
    state={
        foo:'Son2的值'
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.props.value(this.state.foo)
                }}>点击</button>
            </div>  
        )
    }
}
```





表兄弟

redux相当于Vuex



### 爷孙传值

![image-20191111150451018](README.assets/image-20191111150451018.png)

![image-20191111150555274](README.assets/image-20191111150555274.png)

比较复杂





只要稍微复杂一点都是用的是redux









### 函数组件父传子

![image-20191111153931514](README.assets/image-20191111153931514.png)

+ 这里不用this.props.name直接可以传值







### 父传子中，标签中间的内容

`this.props.children`获得

![image-20191111155333281](README.assets/image-20191111155333281.png)







## props类型验证

![image-20191111161606594](README.assets/image-20191111161606594.png)

1. ``` bash
   yarn add props-types
   ```

2. ``` react
   import PropsTypes from 'props-types'
   ```

3. 要验证组件 .propType={传的名字：验证规则}

   ``` react
   //在组件外面写
   组件.propTypes={
       name:PropTypes.string
   }
   ```

   

如果没有传prop值，则给一个默认的值

组件.defaultProps={名字：默认值}

![image-20191113090906296](README.assets/image-20191113090906296.png)





## React生命周期

![image-20191111172016466](README.assets/image-20191111172016466.png)

``` react
class Parent extends React.Component{
    //constructor 创建组件时最先执行
    /*
        作用：1. 初始化state
              2. 为事件处理程序绑定this
    */ 
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    // 简化写法
	state={
        count:0
    }

    // render 每次渲染都会触发 `注意，不能调用setState()`
    render(){
        return (
            <div>
                {console.log('render')}
                <button 
                onClick={()=>{
                    var newCount = this.state.count - 1
                    this.setState({
                        count:newCount
                    })
                }}
                >-</button>
                {this.state.count}
                <button 
                onClick={()=>{
                    var newCount = this.state.count + 1
                    this.setState({
                        count:newCount
                    })
                }}
                >+</button>
            </div>
        )
    }


    //DOM渲染完成后
    /*
        作用：1. 发送Ajax请求
              2. DOM操作
    */
    componentDidMount(){
        console.log('componentDidMount');
        
    }


    // 组件更新后触发
    /*
        作用：1. 发送Ajax请求
              2. DOM操作
        `注意，要用setState（）必须放在一个if条件中`
    */
    componentDidUpdate(){
        console.log("componentDidUpdate");
        
    }


    // 卸载
    // 作用：清理定时器
    componentWillUnmount(){
        console.log('componentWillUnmount');
        
    }
}
```

不常用的：

+ 所有带will的
+ ![image-20191113092530241](README.assets/image-20191113092530241.png)
  + 可以用来控制组件是否要更新

+ ![image-20191113092836833](README.assets/image-20191113092836833.png)







## 组件复用

两种方式：

1. render props模式
2. 高阶组件（HOC）

### render props模式

步骤：

1. 给组件写一个render函数，然后return 内容

2. 子组件用this.props.render（） 接收

![image-20191113094723099](README.assets/image-20191113094723099.png)

> `推荐使用标签内容的方式，然后用this.props.Children()的方式接收`

![image-20191113103044955](README.assets/image-20191113103044955.png)





### 高阶组件（HOC）

把一个组件传入函数 函数里面用另外一个组件包裹住 返回

这样做 组件不仅自己有 还有包裹的那个公共部分

![image-20191113105305143](README.assets/image-20191113105305143.png)







## setState（）说明

+ 是异步的
+ 多次修改相同的，值会执行一次，他会合并修改内容
+ `setState（{}，()=>{}）`，第二个参数拿到的数据是最行新的
+ 正常情况还是原来的修改方式，只有修改需要立刻拿到数据，才需要第二个回调函数

还有一个复杂语法，了解：ps(也是异步的)

![image-20191113114806207](README.assets/image-20191113114806207.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           





## jsx语法的转化过程

+ jsx仅仅是React.createElement() 的语法糖
+ jsx 语法被 @babel/preset-react 插件编译 为 React.createElement() 帮助我们转化成浏览器认识的



## webpack 如何编译

+ 有一个文件叫 webpack.config.js  在Vue和React中被隐藏起来了，因为脚手架自带
+ wabpack.config.js
  + entry 入口
  + output 打包后的文件
  + loader 下载各种loader css-loader less-loader....
  + plugin 小插件







## 组件更新机制

补充：

​	html改变时，页面会重绘，重排

react的优化：

![image-20191113145408311](README.assets/image-20191113145408311.png)

+ 一个组件数据变化  那么只有当前组件会变化，其他的不会变化



## 组件性能优化

### 减轻state

+ 只存储跟组件渲染相关的数据
+ 固定死的数据，可以不放在state中

两种写法：

1. 直接在外面定义 let name = “XXX”
2. 在组件中直接 name = “XXX” 调用用this.name



### 组件更新是否渲染

![image-20191113160136088](README.assets/image-20191113160136088.png)

+ 继承改变
+ 缺点：只能进行简单比对，数组就不能比对

+ 也就是复杂数据类型就不能用这个了，只有简单类型可以使用
+ 简单类型：Number string true of false undefined
+ 复杂类型：Array Object





## 虚拟DOM和Diff算法

为什么会有虚拟DOM：

​	如果每次修改数据，会更新组件的全部内容  性能是很差的



本质：js对象

![image-20191113164523610](README.assets/image-20191113164523610.png)





### diff算法，找不同

把新生成的虚拟的DOM 和原来的DOM对比，如果有不同的地方，他会找到真实DOM那个位置修改



![image-20191113165656365](README.assets/image-20191113165656365.png)

+ 先比较组件是否有变化  如果变化直接修改 如果没有变化就继续进入组件内部、
+ 再去比较外层节点元素 如果变化 就 更新 没有变化 继续进入
+ 比较最里面 如果变化 更新 没有变化 就不更新
  +  这也解释了 为什么要加上key
  + 加 key 就会更新组件







## React路由

1. ``` bash
   yarn react-router-dom
   ```

2. 导入：
   import Router from 'react-router-dom'



![image-20191114094414757](README.assets/image-20191114094414757.png)





### 路由的原理



#### hash模式

![image-20191114094936348](README.assets/image-20191114094936348.png)



#### history 模式

不带#的，的地址，叫`history 模式`

![image-20191114095349368](README.assets/image-20191114095349368.png)





### React,Vue，两种模式都可以用

![image-20191114095901396](image-20191114095901396.png)

+ 改变包裹，即可改变模式
+ React 一般用history模式，打包后需要传到服务器才正常
+ hash 模式，打包后 即使没有传到服务器也正常

两者监听函数不同：

​	![image-20191114100206971](README.assets/image-20191114100206971.png)



## 声明式导航

直接写link或者a链接

``` html
<link to="/home">去home页面</link>
```



## 编程式导航

使用js来跳转

![image-20191114102905844](README.assets/image-20191114102905844.png)

![image-20191114103206917](README.assets/image-20191114103206917.png)





## 默认地址匹配

![image-20191114105124931](README.assets/image-20191114105124931.png)

exact是精确匹配路径，否则就是模糊匹配，只要前面相似，都会匹配







## 路由参数

![image-20191114111854448](README.assets/image-20191114111854448.png)

传参 在path路径后/:id 

### 如何拿到这个值呢:

​	在componentDidMount里

`this.props.math.params.id`

``` react
//入口文件
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'

ReactDOM.render(<App />, document.getElementById('root'))
```



``` react
//app组件中
import React from 'react'

import {BrowserRouter as Router , Route , Link} from 'react-router-dom'

import Login from './components/login'
import Detail from './components/detail'

export default class App extends React.Component{
    render(){
        return (
            <Router>
                根组件
                <Route exact path="/login" component={Login}></Route>
                <Link to="/login">123</Link>
                <Route exact path='/detail/:id' component={Detail}></Route>
            </Router>
        )
    }   
}
```



``` react
//detail组件中
import React from 'react'
export default class Detail extends React.Component{
    render () {
        return (
            <div>详情页面</div>
        )
    }

    componentDidMount(){
        console.log("传来的id是",this.props.match.params.id);
    }
} 
```







## 嵌套路由

注意：

​	父路由就不能写exact 精确匹配了



## Switch（了解）

![image-20191114115947210](README.assets/image-20191114115947210.png)

path相同，只显示第一个





## 路由的跳转

### 重定向

重新跳转，redirect

``` react
import { Redirect } from 'react-router-dom'
<Route
    exact
    path="/"
    render={
        ()=>{
            return <Redirect to="/login"></Redirect>
        }
    }
    >

</Route>
```





## 一个简单的跳转案例

效果：

![image-20191114155139136](README.assets/image-20191114155139136.png)

点击下方tabbar栏可以跳转到子路由





实现：



入口文件：

``` react
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'

ReactDOM.render(<App />, document.getElementById('root'))
```



app.js文件：

``` react
import React from 'react'

import {BrowserRouter as Router , Route , Link , Redirect} from 'react-router-dom'

import Home from './components/home'

export default class App extends React.Component{
    render(){
        return (
            <Router>
                <Route
                    exact
                    path="/"
                    render={
                        ()=>{
                            return <Redirect to="/home"></Redirect>
                        }
                    }
                ></Route>
                <Route path="/home" component={Home}></Route>
            </Router>
        )
    }   
}
```





home 组件：

``` react
import React from 'react'
import { Route , Link } from 'react-router-dom'
import '../css/home.css'
import News from '../components/news'
import My from '../components/my'
export default class Home extends React.Component{
    render () {
        return (
            <div className="a">
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/my" component={My}></Route>
                <div className='tabbar'>
                    <Link className="news" to="/home/news">
                        新闻
                    </Link>
                    <div className="my" onClick={()=>{
                        this.props.history.push('/home/my')
                    }}>
                        我的
                    </div>
                </div>
            </div>
            
        )
    }
}
```

+ 跳转的方式可以用Link 或者 点击事件完成
+ component 文件夹 方式





# 项目

## 技术栈

![image-20191114162225647](README.assets/image-20191114162225647.png)



## 启动

![image-20191114172243345](README.assets/image-20191114172243345.png)



下载的包：

![image-20191114172450386](README.assets/image-20191114172450386.png)



## 过程：

![image-20191116091624557](README.assets/image-20191116091624557.png)





## 项目结构调整

![image-20191116092543043](README.assets/image-20191116092543043.png)



## ant-mobile 

#### 阿里巴巴移动端组件库的使用：

1. 下载
2. 导入 import {} from 'ant-mobile'
3. 导入css
4. 引入组件

### 路由

![image-20191116102229357](README.assets/image-20191116102229357.png)

## 初始化样式

index.css：

``` css
/* 
  全局样式
*/
html,
body {
  font-family: 'Microsoft YaHei';
  color: #333;
  background-color: #fff;
}

html,
body,
#root,
.App,
.map,
.home,
.houselist,
#container {
  height: 100%;
}
body {
  margin: 0px;
  padding: 0px;
}

* {
  box-sizing: border-box;

  /* 
    解决 轮播图 手动滚动时，报错的问题：
    https://www.jianshu.com/p/04bf173826aa
    https://juejin.im/post/5ad804c1f265da504547fe68
  */
  touch-action: pan-y;
}

ul,
p,
dd,
h1,
h3 {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}

.fixed {
  overflow: hidden;
}

.loading {
  text-align: center;
  padding-top: 100px;
}

.houseloading {
  height: 115px;
  background-color: #f6f5f6;
}
.StickyFixed{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index:9999;
}
```





## tabbar

![image-20191116112349709](README.assets/image-20191116112349709.png)

+ 先import 引入 tabbar
+ state 函数 内容复制

![image-20191116114023110](README.assets/image-20191116114023110.png)



## 字体图标

![image-20191116143608804](README.assets/image-20191116143608804.png)







## axios

Vue中是这样发送“

![image-20191116164216944](README.assets/image-20191116164216944.png)





## 轮播图，可以写成项目难点

settimeout ， 也可以解决问题 ，但是不正统

+ 难点，滑动报错
+ 改变true不自动轮播
+ 返回数据时候，setState也不自动轮播







## Sass

less 需要下载 less-loader

sass 也需要下载 node-sass

文件后缀 index.scss





## 本地图片

react 和 Vue 

+ 本地图片是不能直接src引入的
+ http开头的是可以直接用
+ 非要用本地图片的话，用import导入即可





## axios 传参数

get：

​	![image-20191117095053334](README.assets/image-20191117095053334.png)





post：

​	

## 租房小组

![image-20191117111650054](README.assets/image-20191117111650054.png)





## 顶部搜索栏

![image-20191117144604824](README.assets/image-20191117144604824.png)



## 定位

原生js的方式：

``` js
navigator.geolocation.getCurrentPosition(()=>{}) //没用
```

![image-20191117145555169](README.assets/image-20191117145555169.png)





## 百度地图API：

老师的ak：

ak:    zglDtYGLlnC4f9lehyYdhuODeR4e5Sk4

我的ak：4ATlhddqMOGoPFoU1SYNNI747tPGpLwB



react使用百度地图的一个bug：

​	在public 里面的index中 引入js，但是也不能直接使用，比如你引入jQuery 可以直接使用$一样



这时候，在BMap加一个前缀，window



+ 11显示区 13显示镇 15街道 小区





截取的方法

![image-20191117161958905](README.assets/image-20191117161958905.png)







## object 的方法

![image-20191119092634206](README.assets/image-20191119092634206.png)





## 城市列表

### 城市列表返回数据修改

![image-20191119092718998](README.assets/image-20191119092718998.png)





### 获取当前定位

![image-20191119102514273](README.assets/image-20191119102514273.png)







这里需要看视频

![image-20191119103027277](README.assets/image-20191119103027277.png)







![image-20191119104038666](README.assets/image-20191119104038666.png)





## 长列表性能优化

方案：

+ 懒渲染
+ `可视区域渲染`



#### 懒加载

每次显示规定的数据  再加载  再上拉加载就新加

#### React-virtualized 可视区渲染

只有看见的区域 渲染数据 其他地方是没有的 效率高

![image-20191119144354518](README.assets/image-20191119144354518.png)

![image-20191119150834996](README.assets/image-20191119150834996.png)





### 字母点击事件及高亮

<img src="README.assets/image-20191120092521580.png" alt="image-20191120092521580" style="zoom:150%;" />

![image-20191120092621643](README.assets/image-20191120092621643.png)![image-20191120092633935](README.assets/image-20191120092633935.png)

### 点击城市，修改定位城市，跳转首页



indexof 有的话返回索引， 没有返回-1





1. 没有房源的话就提示 toast
2. 有的话就修改 localstorage 里面的city
3. 跳转首页
4. 修改首页的获取定位的方法，用utils 封装的组件





## 封装导航栏

![image-20191120102925814](README.assets/image-20191120102925814.png)



## withRouter

注意：`如果react 中 组件时/map 这种路由直接渲染的页面可以正常使用路由信息，但是如果非路由页面。不能直接使用路由信息，需要使用高阶组件`

![image-20191120104519960](README.assets/image-20191120104519960.png)这样用withRouter 导出的时候包裹起来





就可以正常使用路由信息了





### 对封装组件传值进行prop验证

![image-20191120110215660](README.assets/image-20191120110215660.png)





![image-20191120110159216](README.assets/image-20191120110159216.png)







## 样式的覆盖问题



现在写的scss、都是局部样式，只要类名相同，样式就会都起效



vue中 style 中 写 scoped



react 中如何解决：

1. 起名的时候 `map.module.css`
2. import styles from './index.module.css'
3. 使用的时候，得这样用，<div className={styles.news}></div>

![image-20191120114030248](README.assets/image-20191120114030248.png)



+ 如果要在`局部样式中写全局样式`：

![image-20191120114840806](README.assets/image-20191120114840806.png)



### css-modules 的原理

帮我们把类名重新随机生成





## 根据城市名字更换经纬度

### 创建页面

![image-20191120150241393](README.assets/image-20191120150241393.png)



### 地图控件

+ 手写一个小控件
+ 然后循环遍历 ， 生成不同的控件







## 点击小区名，获取房源



### 获取数据

![image-20191122103651790](README.assets/image-20191122103651790.png)



### 渲染

复制 html 和 css 

然后map 循环小盒子 ， 循环后再循环 i 标签 就好了



## 移动地图 用panBy（X,Y）

### 移动端事件

ontouchesstart / move / end



e.changedTouches[0].clientX 相对于正常的左上角

e.changedTouches[0].pageX 相对于页面的左上角，可能滚出去



window.innerWith / Height  获取屏幕的宽/高



### 三个小问题

![image-20191122152128093](README.assets/image-20191122152128093.png)





# axios 地址配置

## vue中的配置

![image-20191122154708439](README.assets/image-20191122154708439.png)

## react的配置

![image-20191122154759901](README.assets/image-20191122154759901.png)



在utils 中创建 api.js 中配置



## 配置发开和上线的接口ip

+ 根目录创建文件![image-20191122161215231](README.assets/image-20191122161215231.png)

+ 在api axios 配置中配置 不同的 接口地址请求头

![image-20191122161458407](README.assets/image-20191122161458407.png)





![image-20191122161814595](README.assets/image-20191122161814595.png)





地址写在![image-20191122161828646](README.assets/image-20191122161828646.png)中





### 环境变量配置





# list 组件开始

## 导航栏

+ 首页一样 ， 所以封装一个公共组件





## filter 组件图示

![image-20191123093012419](README.assets/image-20191123093012419.png)





![image-20191123104105638](README.assets/image-20191123104105638.png)

这个写法 ， 字传父修改 state中的内容 ， 后面的会把前面的覆盖

![image-20191123104721819](README.assets/image-20191123104721819.png)





## if判断中 ， continue跳出，下一个判断

![image-20191125093136959](README.assets/image-20191125093136959.png)





## findindex 返回索引

![image-20191125115303358](README.assets/image-20191125115303358.png)