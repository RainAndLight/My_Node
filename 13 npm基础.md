# 命令

| upm -v                  | 查看版本               |
| ----------------------- | ---------------------- |
| upm version             | 查看所有模块的版本     |
| upm install / i         | 包名  安装包           |
| upm remove /r           | 删除 包                |
| upm install 包名 --save | 添加依赖               |
| upm install             | 下载当前项目所依赖的包 |
| upm install 包名 -g     | 全局安装包             |

# 使用npm安装第三方模块

## 全局安装

+ 查看全局安装路径`npm root -g`

``` bash
npm install -g nodemon
```

> 全局安装之后，在任何位置都可以使用这个命令

## 本地安装

``` bash
`npm install express`
```



+ 安装完毕，生成node——modules和package-lock.json
+ `如果一个模块需要通过require（）去加载使用`，那么只能本地安装，所以得用一次安装一次

# express 框架

## 使用步骤

``` js
//加载模块
const express = require('express')
//创建服务
const app = express();
//开启服务
app.listen(3000,console.log('开启服务'))

//注册服务器事件
app.get()
app.post()


```

+ express 框架分装了一些额外的API 
  + 使用send（）方法响应数据的话  会自动设置content-type，但有时候会错误设置
  + send不能直接影响数字 需要加引号 否者当做状态码处理
+ sendFile  参数必须是绝对路径

## 中间件

+ 一个express应用是由许多的中间件完成的
+ 中间件就是一个函数 中间件函数要当做`app.use()`的参数  
+ 参数  `req、res、next`
+ next()会阻塞

`处理静态文件语法：`

``` js
const path = require('path');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('服务器开启了'));


app.use((req,req,next) => {
    const fs = require('fs');
    let filename = __dirname +'/public'+ req.url;
    fs.access(filename,(err) => {
        if(err){
            next();
        }else{
            res.sendFile(filename)
        }
    })
})

//简写   处理静态文件
app.use(express.static('public'))
```

`处理post请求`

``` js
app.use((req,res,next),() => {
    
})


//简写
const bodyParser = require('body-parser');
//如果请求头的Content-Type 为 application/x-www-from-urlencoded，则将请求体的值赋值给req.body

app.use(bodyParser.urlencoeded({extended:false}))
//extended:false 表示 接收的数据用querystring模块处理成对象
```



### 完整express代码

``` js
const express = require('express');

const app = express();

app.listen(3000,console.log('服务器开启成功'))

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

//测试接口
app.get('/time',(req,res) => {
    res.send(Date.now()+'')
})
```

# npm使用

+ ### 基本操作

``` js
//初始化仓库
npm init
npm init --yes //默认所有yes

//全局安装的模块 不能通过 require删除 -g全局
npm i 包名 -g
//查看全局安装时的安装目录
npm root -g

//卸载
npm un 包名

//一次性安装多个包 空格隔开
npm i express mysql

//查看缓存目录
npm config get cache
//从缓存目录安装包  999是分钟 超过这个时间才取服务器下载
npm i 包名 --cache-min 99999


```

+ ### 切换npm镜像源

``` js
//查看当前下载源
npm config ls
//其中这一行代表第三方模块的网站
registry = "https://registry.npmjs.org/"

// 下载包的时候切换下载源
npm install express --registry=https://registry.npm.taobao.org

//全局设置
npm config set registry https://registry.npm.taobao.org

// 原始的路径
// https://registry.npmjs.org/
// nrm 是管理镜像源的模块，通过nrm来管理镜像源
npm i nrm # 自行查询如何使用 
```

+ ### package.json

  + 创建package

  ``` js
  npm init -yes
  ```

  