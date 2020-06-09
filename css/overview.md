# css

CSS(Cascading Style Sheets), style and lay out the web





## 如何解决inline-block引起的空白间隙

- 代码

```html
<ul>
    <li>item1</li>
    <li>item2</li>
</ul>
```

- 造成空隙的原因: 标签之间有空格和换行符, 空白字符也会有CSS样式 (取决于字体大小)

#### 解决方法

1. 删除标签之间的空格与换行符
2. 设置父元素`font-size: 0`, 子元素中重新设置`font-size`





## CSS模块化问题

- 使用Less, Sass等CSS预处理器





## 前端工程化

#### 解决方案

- 制定开发方案
- 分治
- 组件化





## link和@import区别

**两个层面上的东西**



#### 属性不同

- **link** 是 HTML提供的标签, 而 **@import** 是CSS中的语法规则



#### 加载顺序不同

- 页面打开时, **link** 引用的CSS文件被加载, 而 **@import** 引用的CSS等页面加载完最后加载



#### 兼容性

- **link** 标签不存在兼容性问题, 而 **@import** 会有兼容性问题



#### DOM操作性

- **link** 标签可以通过JavaScript的DOM操作进行修改





## display

#### 常见的block元素

- div, ul, li, dl, dt, dd, h1, p..

#### 常见的inline元素

- a, b, strong, i,



#### 区别

-  block: 独占一行, inline: 水平方向排列, 
- block可以包含block和inline, inlin可以包含inline和文本
- inline元素width, height无效, 垂直方向padding个margin无效





## margin collapse

- 都为正数, 取较大值
- 都为负数, 取绝对值较大
- 一正一副, 取和



## 元素隐藏方法

#### `opacity: 0` **改变透明度**

- DOM可以访问
- 占据空间
- 可以点击



#### `visibility: hidden`

- DOM可以访问
- 占据空间
- 不响应用户交互
- 读屏幕软件中会被隐藏



#### `display: none`

- DOM可以访问
- 不占据空间





- 





## 如何减少重绘和重排

- `transform`代替`top`
- `visibility`代替`display: none`
- 