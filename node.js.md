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

