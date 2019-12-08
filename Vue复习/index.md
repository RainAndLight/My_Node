# Axios

## 配置axios

``` js
Vue.prototype.$http = Axios  // 所有的实例都有了这个方法 
```



## axios 设置默认请求头

``` js
Axios.defaults.baseURL = "http://localhost:3000"; // 设置共享的方法
```



# 创建项目

``` 
vue create demo //vue 3.0
vue init webpack Vue-Project  // vue2.0
```

### vue-cli

cnpm i - g @vue / cli //全局安装脚手架

npm install -g @ vue / cli-init //兼容2.0



2.0版本创建

$ vue init webpack-simple heroes //英雄为项目名称

$ npm i //安装依赖

$ npm run dev //跑起来

### 环境配置

1. 安装node.js
   安装完成后，可以命令行工具中输入 node -v 和 npm -v，如果能显示出版本号，就说明安  装成功
2. 安装vue-cli
   npm install -g vue-cli （npm安装方法）
   npm install -g cnpm --registry=https://registry.npm.taobao.org（安装cnpm 淘宝镜像）
   cnpm install -g vue-cli （cnpm 安装方法  安装快一点）
   安装完成后，可以使用 vue -V （注意 V 大写）查看是否安装成功。
3. 生成项目
   vue init webpack Vue-Project  // vue2.0
   作者：丁小凯_eafe链接：https://www.jianshu.com/p/1f81af71ef86来源：简书著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。





# 声明式导航中的激活样式

``` vue
<router-link to="/">Home</router-link> 
```

``` less
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
```





# 插槽

## 默认插槽

``` vue
// 父组件中
<son>默认插槽内容</son>
// 组组件中
<div>
    <slot></slot>
</div>
```





## 具名插槽

``` vue
// 父组件
<span slot='子组件的名字'></span>
// 子组件
<div>
    <slot name='名字'></slot>
</div>
```





## 作用域插槽

``` vue
// 父组件
<div>
    <span slot-scope='obj'>{{obj.name1子组件传出去的属性名 }}</span>
</div>
// 子组件
<template>
	<div>
        <span v-bind:name1='name'></span>
    </div>
</template>
data(){
	return {
		name : 'abc'
	}
}
```





# element 表单验证

``` vue
<el-from>
	<el-from-item>
		<el-input> 内容<el-input>
	<el-from-item>
</el-from>
```



### 自动验证前的三步

1. ```js
   export default {
     data () {
       return {
         loginFrom: {
           mobile: '',
           code: '',
           agree: ''
         }
       }
     }
   }
   ```

   - 绑定 v-model=''  data中的数据

   ```js
   <el-input v-model='loginFrom.mobile' placeholder="请输入手机号"></el-input>
   ```

   - <el-from :model='loginFrom'>

2. <el-form :model='loginFrom' :rules='loginRules'> 绑定规则

3. ```vue
   <el-form-item prop='mobile'>
             <el-input v-model='loginFrom.mobile' placeholder="请输入手机号">		</el-input>
   </el-form-item>
   ```

   - 每个item 中 绑定 prop校验 值为 input中model中的`字段`

### 手动验证

1. 给from表单定义一个 ref属性

```js
<el-form ref='myFrom' :model='loginFrom' :rules='loginRules'>
```

2. 注册点击事件

```js
<el-button  type="primary" class="denglu" @click="login">登录</el-button>
```

3. validate 校验函数的使用

```js
methods: {
    login () {
      // 方法中传入的一个函数 两个校验蚕食 是否校验成功的字段和没有成功的字段
      this.$refs.myFrom.validate(function (isok) {
        if (isok) { console.log(123) }
      })
    }
  }
}
```

### 验证规则

```js
mobile: [{ required: true, message: '139，8个8 ，写吧' }, { pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, message: '手机号写的不对' }],
        code: [{ required: true, message: '验证码246810，写吧' }, { pattern: /^\d{6}$/, message: '请输入正确的6位验证' }]
```

### 自定义规则

rule :  当前规则

value ： 值

callback ： 回调函数

```js
agree: [{
          validator: function (rule, value, callBack) {
            value ? callBack('okokok') : callBack('得勾选呐')
          }
        }]
```





# 登录页面怎么做的

+ element-ui el-card、el-from 制作静态页面
+ 自动验证，手动验证
  + 自动验证
    + el-from绑定：modle属性
    + el-from-item 绑定 v-modle data中的from数据
    + el-from 规则属性 :rules
    + el-from-item 绑定prop验证字段 只需要写字段名
  + 手动验证
    + 登录注册点击事件，发送axios请求
    + 本地持久化token值





# 路由导航守卫



+ router.beforeEach  => 全局前置守卫 => 在每一个路由发生改变之前 会触发这个事件

``` js
router.beforeEach(function(to,from,next){})
```

**to: Route**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)

**from: Route**: 当前导航正要离开的路由

**next: Function**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。





``` js
import router from './router'
// 全局前置守卫
router.beforeEach(function (to, from, next) {
  // 判断 拦截的范围
  if (to.path.startsWith('/home')) {
    // 进入到了拦截范围
    // 判断是否登录 有token 就登录 没token就没登录
    let token = window.localStorage.getItem('user-token') // 获取token
    if (token) {
      // 如果有token
      next()
    } else {
      next('/login') // 没有token 就跳转到登录页
    }
  } else {
    next() // 放行
  }
})
// 先导出
export default router
```





# axios 请求拦截器

``` js
// 负责对axios进行处理
import axios from 'axios'
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  // config是要发送请求的配置信息
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token 到headers属性 因为所有接口要求的token格式是一样的
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})
export default axios
```



