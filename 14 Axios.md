# 在vue项目中封装axios



首先 npm i axios -S



utils 下 request.js中

``` js
import axios from 'axios'


const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/
})


// 请求拦截器
..........
// 响应拦截器
..........
export defaults request 
```

+ 为什么复制一个axios挂载到vue原型上，
  + 如果你的项目有多个请求地址
  + 这样有多个baseURL 可以const 不同request 导出 ， 从而实现不同的baseURL切换



然后在app.vue中引入

``` vue
import request from '@/utils/request'
```

