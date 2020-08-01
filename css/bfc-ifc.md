# 格式化上下文 (BFC，IFC)

**会形成个独立的渲染区域**



## 形成BFC

- 根元素（html）
- 浮动元素 (float)
- overflow的值不为visible（hidden，scroll，auto，inherit）
- position的值为absolute或fixed
- display的值为inline-block, table-cell, table-caption

**注意**: 通常使用`overflow`来形成一个bfc





## BFC的特性

- 内部的Box会在**垂直方向放置**
- 内部box**靠左**, margin外侧与容器的content重合
- 垂直方向上的距离由margin决定, 容器内的box之间会发生**margin的重叠**
- bfc的区域不会与float的元素区域重叠.
- 计算bfc的高度时，浮动元素也参与计算
- bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。



## 作用

1. 清除内部浮动
3. 避免margin重叠
4. 防止文字环绕



## 行级排版上下文

**inline formatting context**



#### ifc内排版规则

- 盒子在一行内水平摆放
- 一行放不下, 换行显示
- text-align决定一行内盒子的水平对齐
- vertical-align决定一个盒子在行内的垂直对齐
- 避开浮动元素



