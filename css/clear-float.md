# CSS清除浮动

**wrapper div高度未设置, 且里面有float元素. 这种情况下, wrapper div不能自动伸长以适应内容的高度. 此时便需要清除浮动.**



## 方法

#### 1. 添加带clear属性的空元素

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

