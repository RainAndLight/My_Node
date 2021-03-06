# 引入CSS样式表
* 行内样式表
* 内部样式表
* 外部样式表
# 显示模式display
* 行内元素      inline            一行多个，不可设置宽高
* 块级元素      block             一行一个，可设置宽高
* 行内块元素  inline-block  一行多个，可设置宽高
# 选择器
## 基本选择器
* **标签选择器**
* **类选择器**
* **ID选择器**
* **通配符选择器**
## 复合选择器
* 1、**后代选择器**
  * p a{}  子孙后代
* 2、**子代选择器**
  * p>a{} 子元素
* 3、**交集选择器**
  * p.a{} 同时满足
* 4、**并集选择器**
  * p,a{} 属性相同代码
* 5、**相邻选择器**
  * p+a{} p的下一个a标签
* 6、**属性选择器**
  * [href] 属性选择标签
  * [href="abc.html"] 完整属性选择标签
  * [href^="abc"] 以什么开头
  * [href$=".html"] 以什么结尾
  * [href*="b"] 包含即可选中
* 7、**伪类选择器**
  * 链接伪类选择器
    * :link        未访问
    * :visited   以访问
    * :hover    鼠标经过
    * :active    被点击的那一刻
  * 结构伪类选择器
    * :first-child
    * :last-child
    * :nth-child(n)
    * :nth-last-nth-child(n)
    * :nth-of-type(n)
* 8、**伪元素选择器**
  * ::befor
  * ::after
* 9、**占位符选择器**
  * ::placeholder
# 文本文字样式
## CSS Text
* **color 文本颜色**
  * 颜色的名称 - 如red
  * 十六进制值 - 如"＃FF0000"
  * 一个RGB值 - rgb(255,0,0)
* **text-indent  首行缩进**
* **text-align  水平对齐方式**
* **text-decoration  文本的装饰**
  * none
  * underline
  * overline
  * line-through
* **word-spacing  字间距**
* **letter-spacing  字符间距**
* **line-height  行间距**
## CSS Fonts
#### font
```css
font:font-style font-weight font-size/line-height font-family;
```
- **font-size**
- **font-family**
  - 中文
  - 英文
  - Unicode
    - escape(“中文”)  --浏览器conlose中获取Unicode的值
- **font-weight  加粗**
  - 400   normal
  - 700   bold
- **font-style  倾斜**
  - normal
  - italic
  - oblique
# CSS Backgrounds
## background
```css
background:color image repeat attachment position;
```
- **background-color  颜色**
   - 默认:transparent 透明
- **background-image  图片**
   - url(路径)
- **background-repeat  重复**
   - repeat
   - repeat-x
   - repeat-y
   - no-repeat
- **background-position  位置**
   - 方位 left|right|center|top|bottom
   - x y 用数值表示
   - 数值方位结合使用
   - 百分比
- **background-attachment  附着**
   - scroll :背景图像是随对象内容滚动
   - fixed : 背景图像固定(固定在body上)
# CSS三大特性
## 层叠性
* 长江后浪推前浪，前浪死在沙滩上
## 继承性
* 龙生龙，凤生凤，老鼠生的孩子会打洞
## 优先级
* 权重优先级
  * 继承或者*    0,0,0,0
  * 每个元素(标签选择器)    0,0,0,1
  * 每个类、伪类    0,0,1,0
  * 每个ID    0,1,0,0
  * 每个行内样式 style=""    1,0,0,0
  * 每个!important  重要的∞  无穷大
# CSS布局三种机制
## 1、普通流（盒模型box）
* **01、边框border**
  * border-style
    * none
    * solid
    * dashed
    * dotted
    * double
  * border-width
  * border-color
  * border-collapse:collapse；
    * table的细线边框 表格的专属属性
* **02、内边距padding**

    * top/right/bottom/left
* **03、外边距margin**
    * top/right/bottom/left
    * 水平居中
      * 文字：text-align: center；
      * 盒子：margin: 0 auto;
    * 清除内外边距
      ```css
      * { padding:0; margin:0;}
      ```
    * 嵌套块元素垂直外边距的合并
      * 可以为父元素定义1像素的上边框或上内边距。
      * 可以为父元素添加overflow:hidden。
* **04、盒子模型布局稳定性**

    * width >  padding  >   margin
* **05、CSS3特有样式**
    1. border-radius
    2. box-shadow
       水平阴影 垂直阴影 模糊距离（虚实） 阴影尺寸（影子大小）  阴影颜色  内/外阴影；
    3. 透明设置
       rgba()   设置单颜色的透明
       opacity 设置元素整体透明
## 2、浮动float
* **none 、left、right**
* **浮动的特点**
  1. 浮动的元素脱离标准流的控制, 不占据原来是位置
  2. 浮动可以使(块)元素在一行上显示
  3. 浮动只能浮动的到父元素的左边和右边, 会受到父元素内边距的约束
  4. 浮动的元素顶对齐, 代码换行不会生成缝隙
  5. 浮动的元素有了行内块的显示特点
     * 1）块元素浮动之后,不会默认父元素的宽度了,默认宽高为0, 内容会撑开宽高
     * 2）行内元素浮动之后可以设置宽高了
  6. 浮动元素只会影响下边的元素,不会影响上边不浮动的标准流里边的块元素
  7. 当文字,行内元素,行内块元素,遇到浮动元素不会跑到他的下边,会环绕浮动元素
* **清除浮动**
  * 原因
    清除浮动是为了解决父元素不能设置高度, 里边的浮动的子元素不能撑开父元素高度的问题
  * 方法
    ```css
    1、/*额外标签法 就是在最后一个浮动元素的后边,添加额外标签,<div style="clear:both;"></div> 不推荐使用*/
    
    2、/*给浮动元素的父元素(亲爹)使用overflow: hidden;清除浮动 ,触发了BFC,块级格式化上下文, 独立的布局区域
    弊端是如果子元素出了父元素的范围,会被隐藏掉*/
    
    3、/*给浮动元素的父元素(亲爹),调用.clearfix清除浮动*/
    .clearfix:after {
        content: '';
        display: block;
        height: 0;
        /*显示模式为隐藏*/
        visibility: hidden;
        clear: both;
    }
    /*为了兼容ie6-7清除浮动*/
    .cleafrix {
        *zoom: 1;
    }
    
    4、/*给浮动元素的父元素(亲爹), 调clearfix 双伪元素清除*/
    .clearfix:before, .clearfix:after {
        content: "";
        display: table;
    }
    .clearfix:after {
        clear: both;
    }
    /*兼容ie6-7清除浮动*/
    .clearfix {
        *zoom: 1;
    }
    ```
## 3、定位position
**定位=定位模式+边偏移**
* **定位模式**
  1. **静态定位（static）**
     静态定位 不会动 标准流 元素默认的定位方式
  2. **相对定位（relative）**
     1）相对定位的元素不脱标,还占据原来的位置
     2）相对定位的元素位置偏移永远基于自身位置
  3. **绝对定位（absolute）**
     1）绝对定位的元素脱离了标准流的控制, 不占据原来的位置
     2）绝对定位的元素,如果所有的父元素都没有使用定位,位置偏移基于浏览器
     3）绝对定位的元素,如果父元素有定位,位置偏移基于离他最近的使用了定位的父元素位置偏移
     4）绝对定位的元素有了行内块的显示特点
     		绝对定位的块元素,不会默认父元素的宽度了,默认宽高为0, 内容会撑开宽高
     		绝对定位的行内元素可以设置宽高了
     * **子绝父相：**
       子绝父相, 子元素绝对定位,父元素相对定位；
       父元素相对定位不脱标,在标准流占据位置,子元素绝对定位,可以移动到父元素的任意位置, 父元素占位置,下边盒子不能上来,布局正常
  4. **固定定位（fixed）**
     绝对定位的元素位置偏移基于浏览器的时候,会随着滚动条滚动
     固定定位的元素位置偏移基于浏览器可视窗口,不会随着滚动条滚动
  * **定位盒子居中显示**

    ```css
    /*1.向右走父元素宽度的一半*/
    	left: 50%;
    /*向左走盒子自身宽度的一半*/
    	margin-left: -50px;
    /*向下走父元素高度的一半*/
    	top: 50%;
    /*向上走盒子自身高度的一半*/
    	margin-top: -50px;
    	
    /*2.这种方法子元素必须是设置的宽高,内容撑开的宽高无效*/
    	left: 0;
    	right: 0;
    	top: 0;
    	bottom: 0;
    	margin: auto;
    ```
  * **定位元素的堆叠顺序 z-index**
    	1）属性值：正整数、负整数或 0，默认值是 0，数值越大，盒子越靠上；
      2）如果属性值相同，则按照书写顺序，后来居上；
      3）数字后面不能加单位。
      注意：z-index 只能应用于相对定位、绝对定位和固定定位的元素，其他标准流、浮动和静态定位无效。
* **位偏移**

  * top、bottom、left、right
# 高级技巧
## 1.元素的显示与隐藏
* **display显示**
  none隐藏对象 隐藏之后不再保留位置 相反的是block
* **visibility可见性**
  visible对象可见
  hidde对象隐藏 隐藏之后保留原有位置
* **overflow溢出**
  visible 溢出部分可见
  hidden 溢出隐藏
  scroll 总显示滚动条
  auto 超出时才自动生成滚动条
## 2.CSS用户界面样式
* **鼠标样式 cursor**
  default 默认值 小白
  pointer 小手
  move 移动
  text 文本
  not-allowed 禁止
  help 帮助
* **轮廓线 outline**
  与borlder用法几乎相同 一般用 outline: none;
* **防止拖拽文本域 resize**
  一般用 resize：none;
## 3.vertical-align行内块垂直对齐方式
* baseline(默认值 基于基线对齐)
* top 顶线对齐
* middle 中线对齐
* bottom 底线对齐
## 4.溢出的文字隐藏
* white-space
  normal
  nowrap 强制一行内显示文字
* text-overflow 文字溢出
  clip 不显示省略号 简单的裁切
  ellipsis 当前文本溢出是显示省略标记
* ...使用三部曲
  ```css
  /*1. 先强制一行内显示文本*/
      white-space: nowrap;
  /*2. 超出的部分隐藏*/
      overflow: hidden;
  /*3. 文字用省略号替代超出的部分*/
      text-overflow: ellipsis;
  ```
## 5.精灵图sprite
* 使用步骤
  1. 测量需要的精灵图局部大小,给盒子设置成宽高
  2. 背景定位的值,设置成测量的局部大小坐标值的负值
## 6.字体图标iconfint
*  http://www.iconfont.cn/
*  使用方法:
  1、声明字体
  2、盒子改变font-style
  3、使用字体图标Unicode码
# CSS3
## 1、过渡(transition)
```CSS
transition: 要过渡的属性  花费时间  运动曲线  何时开始;
	transition-property  /*规定应用过渡的 CSS 属性的名称*/
	transition-duration  /*定义过渡效果花费的时间。默认是 0*/
	transition-timing-function	/*规定过渡效果的时间曲线。默认是 "ease", "linear"匀速*/
	transition-delay	/*规定过渡效果何时开始。默认是 0*/
```
## 2、2D转换(transform)
	2.1 位移 translate(x,y)
		  一个值只代表x值
		  百分比是按照自身
	2.2 旋转 rotate(deg)
	2.3 旋转源点设置 transform-origin: 水平位置 垂直位置;
	2.4 缩放 scale(number,number)
		  大于1放大、大于0小于1缩小
## 3、动画(animation)
* 3.1 定义动画
```css
@keyframes 动画序列名称 {
  from {
  		开始状态
  }  
  to {
  		结束状态
  }
}
或者用百分比
```
* 3.2 调用动画
```css
animation: name duration timing-function delay iteration-count direction fill-mode;
	animation: 动画的名称 动画持续的时间 运动的曲线 延迟时间 动画的次数 是否可以逆播 是否保持结束状态;
	@keyframes   /*定义动画*/
	animation-name		/*动画名称*/
	animation-duration	/*动画一个周期时间*/
	animation-timing-function /*运动时间曲线。默认是 "ease" 缓冲，linear匀速，steps(数字)步长*/
	animation-delay		/*动画开始时间*/
	animation-iteration-count	/*动画播放次数。默认是 1。还有 infinite无限循环*/
	animation-direction		/*下个周期是否逆向播放*/
	animation-play-state	/*规定动画是否正在运行或暂停。默认是 "running"。还有“paused”*/
	animation-fill-mode		/*规定动画结束后状态，保持 forwards 回到起始 backwards*/
```
## 4、3D转换(transform)
* 4.1 位移
  ```css
  -transform: translateX(100px)
  -transform: translateY(100px) 
  -transform: translateZ(100px)
  transform: translate3d(100px, 100%, 0);
  ```
* 4.2 视距
  * perspective: 500px;
    作用：近大远小的效果 透视感  (父元素设置视距)
* 4.3 旋转
  ```css
  transform: rotateX(45deg); 
  transform: rotateY(45deg); 
  transform: rotateZ(45deg); 
  transform: rotate3d(1, 1, 0, 45deg);
  ```
* 4.4 样式属性 transform-style: preserve-3d;
  若要显示并且要保持立体空间，需要给盒子设置样式属性