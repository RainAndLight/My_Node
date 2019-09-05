# MySQL

## 查

### 普通查询

``` js
//查询id小于10的英雄

select * from heroes id<10 

//双重条件加and

select * from heroes id<10 and sex='女'


```

### 模糊搜索

``` js
//模糊查询

//查询名字中带斯的
select * from heroes name="%斯%"

//第二字是斯
select * from heroes name="_斯%"
```

### 排序

``` js
//升序
select * from heroes order by id asc //默认

//降序
select * from heroes order by id desc

//查询年龄大于50的 并按照年龄降序排序
select * from heroes where age>50 order by age desc 
```

> 如果有where 和 order by 则 where 在 order by 之前

### 限制查询结果

``` js
// 查询前五个英雄
select * from heroes limit 0,5

//年龄最大的三个女英雄
select * from heroes where sex="女" order by age desc limit 3
```

+ 顺序 where 条件首先 其次 order by  最后 limit

## 增

`基本格式`:insert into 表名

`set方法`：

``` js
insert into heroes set ? id=?
value{
	name:'liqing',
    age:32,
    skill:'一库'
}
```





## 删

``` js
delete from heroes where id=1 //不加where将会删除所有数据
```



## 改

``` js
undata heroes set age=18,skill='在地上打滚' where id=19
//如果不加条件 会修改所有的行
```



### 连接查询

``` js
select * from 表1 连接 表2 on 两个表的关系

select * from boy join girl on boy.flower = girl.flower

//左右连接
select * from boy join `left/right` girl on boy.flower = girl.flower

//表起别名
select * from boy a join girl b on a.flower = b.flower
//字段起别名
selet b.name bn,b.flower bf,g.name gn,g.flower gf fromboy b join girl g on b.flower = g.flower 
```

# 小结：

- 查询

  select * from heroes  [where 条件]   [order by  字段  排序规则]   [limit   开始位置, 长度]

- 添加

  insert into heroes  set  字段=值, 字段=值,.....

- 修改

  update heroes set 字段=值, 字段=值,..... [where  条件]

- 删除

  delete  from  heroes  where  条件

# node中的Mysql模块

``` js
//本地安装
npm i mysql
```

curd: 就代表数据库的增删改查

+ c: create 就是添加 （增）
+ u: update 就是修改 （改）
+ r: read 就是查询 （查）
+ d: delete 就是删除 （删）

基本用法：

1. 加载mysql模块
2. 创建mysql连接对象
3. 连接mysql服务器
4. 执行sql语句
5. 关闭链接

``` js

const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'admin',
    database:'yingxiong'
    multipleStatements:true //输入多条sql命令
});
//连接服务器
conn.connect();
//查询
let sql = ‘select * from heroes’

conn.query(sql,[sql中的占位符],(err,result,fields)=>{
           err:错误信息
           result：结果
           fieldes：当前查询过程中涉及的字段信息，一般不用
           })
//断开连接
conn.end()
```

`占位符模式`

``` js
let sql = 'select * from heroes where id <？'
conn.query(sql,3,(err,result) => {
    if(err) throw err
    console.log(result)
})
```

`一次性执行多条sql：需要设置一个配置`

``` js
onst conn = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'admin',
    database:'yingxiong',

	multipleStatements:true

});
```

### 添加 create

``` js
//核心代码

var sql = 'insert into heroes set name="桐人"'
conn.query(sql,(err,result) => {
    if(err) throw err
    if(result.affectedRows>0){
       console.log('添加成功，id：'+result.insertId)
       }
  /*  result的返回值为：
    OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 49,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
  */
    //所以用 insertId获取id
})
```

