## CSS垂直居中

#### 方法 1

- 通过设置`position: relative`和`top: 50%`, 使得上边界到中心处
- 使用负值的`margin-top`向上移高度的一半



#### 方法 2

在微调时不使用`margin-top`, 而是使用`transform: translate(0, -50%)`



#### 方法 3: calc一气呵成



#### 方法 3: flex

- 父元素设置`display: flex`
- `align-item: center`和`justify-content: center`





## CSS水平居中

#### 使用text-align属性

- 如果居中元素为inline/inline-block元素, 可以使用`text-align: center`



#### margin

- `margin: 0 auto`



## 总结

**position: relative**

**position: absolute**

**translate: transform(-50%, -50%)**

**display: flex**

**margin-top: -150px**



#### 居中元素宽高固定

1. absolute position + top&left shift  + margin
2. absolute postion + top&left shift + calc

+ 下面两种方法



#### 居中元素宽高不固定

1. absolute position + top&left shift  + translate: transform
2. flex + auto
3. flex + align-item