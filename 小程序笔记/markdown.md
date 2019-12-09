# 小程序生命周期

## 应用生命周期

+ onLauch 小程序初始化
+ onshow 显示
+ onhide 隐藏
+ onError 小程序异常

## 页面生命周期

+ onLoad 加载
+ onShow
+ onReady
+ onhide
+ onUnload







## 小程序中添加购物车的实现

+ 全局定义购物车列表，局部访问数据添加，但是为了方便管理，在局部中调用全局方法  this.$parent.方法(参数)
+ 局部中访问全局数据 ：　this.$parent.global.变量名





## 小程序坑

![image-20191108090759105](markdown.assets/image-20191108090759105.png)