# Float

float: left, right

clear: lefr, right, both




clearfix
- overflow: auto

- display: flow-root



## 清除浮动

**BFC或者直接清除浮动**

#### 1. 添加带`clear: both`属性的空元素

#### 2. 父元素的overflow属性

- 设置`overflow: hidden`和`overflow: auto`

#### 3. ::after的伪元素

```
.main::after {
  content: '';
  display: block;
  clear: both;     
}
```
