# Node.js

## 介绍

+ node 提供了一种JS的执行环境

+ Node不但可以执行ECMAscript，Node还自带很多全局对象和很多模块。

  ![1552618083956](C:\Users\Administrator\Desktop\新建文件夹\总结\md\images\1552618083956.png)

## 全局变量

### global对象

说明：

+ global相当于浏览器中的Window对象
+ global中的成员在使用时，可以省略global

#### 常用成员介绍：

1. console
2. process 和进程相关
3. setInterval 
4. **require（）** 用于在js文件中引入另外的文件
   1. require（） 可以在js文件中加载另外的js文件（模块）
   2. require（）可以在js文件中加载json文件
5. __dirname 绝对路径 
6. __filename 包含文件名的绝对路径

> ps：__diername,  filename,  exports , module ,require  这五个不能通过global调用  但是可以直接使用

## Node 核心模块

### path模块

#### 作用：

- 处理路径的模块

#### 说明：

+ 路径处理，获取文件的后缀
+ 不一定存在对应的文件

#### 语法：

``` js
//加载模块
let path = require('path')
const path = require('path')
```

#### API：

 - 调用path模块中的方法，来处理相应的问题，下面列举path模块中的几个方法

     | 方法                       | 作用                             |
     | -------------------------- | -------------------------------- |
     | path.basename(path[, ext]) | 返回 path 的最后一部分(文件名)   |
     | path.dirname(path)         | 返回目录名                       |
     | path.==extname==(path)     | 返回路径中文件的扩展名(包含.)    |
     | path.format(pathObject)    | 将一个对象格式化为一个路径字符串 |
     | path.==join==([...paths])  | 拼接路径                         |
     | path.parse(path)           | 把路径字符串解析成对象的格式     |
     | path.resolve([...paths])   | 基于当前**工作目录**拼接路径     |

### fs模块

#### 作用:

- 文件系统

#### 说明：

  - 对文件/文件夹的操作  file system

使用方法：

``` js
//加载模块：
const fs = require('fs');
```

#### API：

| API                                         | 作用              | 备注           |
| ------------------------------------------- | ----------------- | -------------- |
| fs.==access==(path, callback)               | 判断路径是否存在  |                |
| fs.appendFile(file, data, callback)         | 向文件中追加内容  |                |
| fs.copyFile(src, callback)                  | 复制文件          |                |
| fs.mkdir(path, callback)                    | 创建目录          |                |
| fs.readDir(path, callback)                  | 读取目录列表      |                |
| fs.rename(oldPath, newPath, callback)       | 重命名文件/目录   |                |
| fs.rmdir(path, callback)                    | 删除目录          | 只能删除空目录 |
| fs.stat(path, callback)                     | 获取文件/目录信息 |                |
| fs.unlink(path, callback)                   | 删除文件          |                |
| fs.watch(filename[, options][, listener])   | 监视文件/目录     |                |
| fs.watchFile(filename[, options], listener) | 监视文件          |                |

> 参数：access

``` js
const fs = requer('fs');

fs.access('c:a/b/c/d',(err) => {
    //err 为null 则没有错误
    //err 为真 则不存在文件 输出err
    if(err){
        console.log(err);
    }else{
        console.log(‘文件存在’)
    }
})
```

> 参数：readFile

``` js
//异步读取文件
fs.readFile('./index.html',(err,data) => {
    if (err) throw err
    console.log(data);//读取到的是二进制数据
    console.log(data.tostring())//得到原始数据
})

//可以在参数加入utf-8 来获取原始数据

```

> 参数：writeFile
>
> 说明：如果目录不存在，则创建，存在，覆盖

``` js
//writeFile -- 异步写入文件
fs.writeFile('inden.html','hello word',(err) => {
    if (err) throw err;
    console.log('文件写入成功')
})
```

### querystring模块

#### 作用：

+ 处理查询字符串（请求参数）的模块

#### 语法：

``` js
//将字符串转换成JS对象
querystring.parse('id=1&age=18');


//将JS对象转换成查询字符串
querystring.stringify({id:1,age:18})
```

### url模块

#### 作用：

+ 解析url

#### 说明：

- 一个完整的url	协议 : // 主机地址 : 端口号/文件地址？参数&参数【#锚点】
- 旧的API不使用，新的API（ECMAscript新增对象URL），通过实例化URL，来解析url

#### 语法：

``` js
//提供一个完整的URL，不论地址真假，可以参数部分与域名二者的组合
let myURL = new URL('http://www.123.com/index.html?id=1&age=18')

//组合
let myURL = new URL('index.html?id=1&age=18','http://www.123.com')


//取值
let age = myURL.searchParams.get('age');
//输出 18
```

### http 模块

作用：

- 可以使用http模块搭建服务器

说明：

- node 不同与 Apache ，安装完node并没有一个能够提供Web服务环境，需要使用http模块自己来搭建Web服务器
- http是一个系统模块，让我们能够通过简单的流程创建一个Web服务器

步骤：

1. 导入核心模块
2. 创建server对象
3. 注册request事件
4. 监听端口  ps.  步骤3 4 可以颠倒

  代码：

``` js
//加载模块
const http = require('http');
//创建服务对象一般命名为server
consr server = http.createServer();
//设置端口 开启服务
server.listen(3000,() => {
    console.log('服务成功开启')
})
//给server注册请求事件（request）
server.on('request',(req,res) => {
    console.log(’收到请求‘)
})
//  此刻 浏览器正在等待服务器返回结果
```

响应事件 res req

``` js
//固定三句话
const http = require('http');
consr server = http.createServer();
server.listen(3000,() => {
    console.log('服务成功开启')
})
//重点 响应事件
server.on('request',(req,res) => {
    //res.end() 响应体
    //res.setHeader() 设置响应头
    //res.write(’响应体‘) 设置响应体 不会响应
    //res.writeHead() 设置响应头 设置响应状态码
    //res.statusCode = 404  设置响应状态码
    res.setHeader('Content-Type','text/html','charset=utf-8')
})
```

响应不同文件：

``` js
const fs = require('fs')
const http = require('http');
const sever = http.createServer();
sever.listen(3000, () => console.log('服务器开启成功'))


//注册请求事件
sever.on('request', (req, res) => {

    console.log(req.url) //  /index.html

    let filmname = '.' + decodeURIComponent(req.url)

    console.log(filmname); // ./index.html

    fs.access(filmname, 'utf-8'(err) => {
        if (err) {
            //文件不存在
            res.statusCode = 404;//状态码
            res.end('');
        }else{
          //文件存在
          fs.readFile(filmname,(err,data) => {
            if (err) throw err;
            res.end('data');
          })
        }

    })
})
```

## 浏览器提交的数据格式

+ 查询字符串格式  比如 `name=li&age=13`
  + 如果没有文件上传一般是这种
  + 浏览器需要设置Content-Type 告诉浏览器 我给你提交的数据是什么格式
+ FormData 格式 ，就是一个FormData对象
  + 有文件上传
  + 浏览器会自动设置Content-Type  为 multiple/form-data
+ json格式  vue用到

## 服务器接收浏览器的数据

+ 接收查询字符串格式的数据

## 设置请求头的2种方法

``` js
//方法一
res.setHeader('Content-Type','text/html;charset=utf-8')
//方法二
res.writeHead(200,{				//200为状态码
    'Content-Type','text/html;charset=utf-8'   
})
//方法三

```



# npm

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

### 处理静态文件语法：

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

### 处理post请求

``` js
app.use((req,res,next),() => {
    
})


//简写
const bodyParser = require('body-parser');
//如果请求头的Content-Type 为 application/x-www-from-urlencoded，则将请求体的值赋值给req.body

app.use(bodyParser.urlencoeded({extended:false}))
//extended:false 表示 接收的数据用querystring模块处理成对象
//调用post获得的参数
app.post('/deleteMsg',(req,res) => {
    console.log（req.body）
})
```

### Multer中间件：

介绍：

+ multer是一个node.js中间件

为什么需要他：

+ 因为上一个中间件处理不了content-type为·`multipart/form-data`的表单数据

作用：

+ 上传文件

#### 使用教程

##### 安装

``` bash
npm i --save multer
```

##### 基础使用

``` js
var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' }) //会创建一个uploads目录放文件
var app = express()
app.post(/请求接口, upload.single('文件的name'), function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
})
```

##### 注意：

使用multer，在静态资源中间件加载中加入一句

``` js
app.use(express.status('uploads'))
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

## module.exports 导出属性和方法

- 将变量、对象、函数等挂载到global对象上并不推荐，因为容易造成变量污染。
- 推荐使用 module.exports 导出模块中定义好的变量、对象、方法
- 使用require加载（导入）模块后，就能使用模块中定义好的变量、对象、方法了

bbb.js 中定义一些变量，然后使用 `module.exports导出`：

```js
// 定义一些变量
let abc = 'hello';

let fn = (x, y) => {
    console.log(x + y);
};

// Node提供一套方案：
// 使用 module.exports 来导出模块（导出的只能是对象或函数）

module.exports = {
    abc: abc,
    fn: fn
};
```

aaa.js 加载 bbb.js ，然后就得到了 bbb 中导出的对象：

- 导入自己定义的js文件，必须加  `./`

```js
// 导入模块(基本上和之前加载模块一样)
const bbb = require('./bbb.js');

// console.log(bbb); // { abc: 'hello', fn: [Function: fn] }

console.log(bbb.abc); // hello
bbb.fn(7, 8); // 15
```

### mysql的封装调用

``` js
//封装mysql模块
function database(sql, value, callback){
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'admin',
        database: 'herosnverdie',
        multipleStatements: true
    });
    conn.connect();
    conn.query(sql, value, callback);
    conn.end()
}
module.exports = database;
```

``` js
//调用
db（）
```

