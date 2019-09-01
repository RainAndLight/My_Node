# ES6

## var let const

### let

特点：

1. let 只能定义一次
2. 块级作用域
3. 没有作用域提升
4. let声明的变量不会成为window对象中的属性和方法

### const

特点：

 	1. 常量
 	2. 常量不可变
 	3. 必须初始值
 	4. 块级作用域
 	5. 常量独立

### var 



### 三者区别

| 关键字 | 变量提升 | 块级作用域 | 初始值 | 更改值 | 通过window调用 |
| :----: | :------: | :--------: | :----: | :----: | :------------: |
|  let   |    ×     |     √      |   -    |  Yes   |       No       |
| const  |    ×     |     √      |  Yes   |   No   |       No       |
|  var   |    √     |     ×      |   -    |  Yes   |      Yes       |

## 解构

### 数组解构

 1. 变量和值一 一对应

    ``` js
    let arr = [5, 9, 10];
    let [a, b, c] = arr;
    console.log(a, b, c); // 输出 5 9 10
    ```

2. 变量多，值少，少值的报underfined

3. 变量少，值多，正常

4. 按需求取值

   ``` js
   let arr = [1,2,3,4,5,6,8,9]
   let [,,,a,,b] = arr; //不需要的变量用空位占位
   console.log(a,b)// 5,9
   ```

5. 剩余值

   ``` js
   let arr = [1,2,4,,5,6,7,8,9];
   let [a,b]
   ```

6. 复杂情况 

   ``` js
   let arr = ['zhangsan',18,['80kg','175cm']]
   let [,,[a,b]] = arr 
   ```

### 对象的解构

 1. 与数组大致相同 **默认要求变量与属性名一致**

    ``` js
    let {a,b} = {a:666,b:2333}
    console.log(a,b)// 666,2333
    ```

	2. 可以给变量起别名

    ``` js
    let {a,b:c} = { a:1,b:2 }
    console.log(c)//2
    ```

	3. 变量名和属性名一致即可 不需要一 一对应

	4. 剩余值

    ``` js
    let obj = {a:1,b:2,c:3};
    let{...a} = obj;
    console.log(a)//a:1,b:2,c:3
    ```

	5. 复杂情况

    ``` js
    let obj = {
        name: 'zhangsan',
        age : 22,
        dog : {
            name : 'maomao',
            age : 1
        }
    }
    let {dog:{name , age }}// maomao ,1
    ```

    ### 对象解析实例

    ``` js
    // 假设从服务器上获取的数据如下
    let response = {
        data: ['a', 'b', 'c'],
        meta: {
            code: 200,
            msg: '获取数据成功'
        }
    }
    // 如何获取到 code 和 msg
    let {meta : code , msg } = response
    console.log(code, msg); // 200, 获取数据成功
    ```

    

##	es6之前函数写法

```js
//1.使用function 命令
function fn (x,y) {
    return x + y
}
// 2. 使用函数表达式
var fn = function (){
    
}
// 3 构造函数
function Fn(){
    this.name = name
}
var fn = new Fn()
//自调用函数
(function(res){
    
})(res)
```

##	箭头函数

### 基本定义

``` js
//写法
let fn = (x) => {
    return x * x
}
```

### 箭头函数的特点

- 形参只有一个，可以省略小括号

  ``` js
  //原函数
  let fn = (x) => {
      return x * x
  }
  //等同于
  let fn = x => {
      returen x * x
  }
  ```

- 函数体只有一句话，可以省略大括号和return

  但是没有参数不可以省略

  ``` js
  let fn = (x) => {
      return x * x
  }
  
  //等同于
  let fn = x => x * x 
  ```

- 箭头函数没有arguments

  ``` js
  let fn = () => {
      console.log(arguments); // 报错，arguments is not defined
  };
  fn(1, 2);
  ```

- 箭头函数this指向 为windows

  ``` js
  var name = 'lisi'; // 测试时，这里必须用var，因为用let声明的变量不能使用window调用
  let obj = {
      name: 'zhangsan',
      fn : () => {
          console.log(this); // window对象
          console.log(this.name); // lisi
      }
  };
  obj.fn();
  ```

- 箭头函数不能作为构造函数

### 参数的默认值

``` js
//es5 默认值的写法
function fn (x,y) {
    y = y || 'word'
}
console.log(fn('hello'))

// es6 默认值的写法
let (x , y = 'word') => {
    return x + y;
}
```

#### rest参数

定义：把多余参数放到一个数组中，可以代替arguments的使用

``` js
//参数很多  不确定个数
function fn (a,b,...values){
    console.log(a)
    console.log(b)
    console.log(values)// 2 3 4 5 6 
}
fn(1,2,3,4,5,6)
```

> **注意  ， rest参数只能是最后一个参数**

