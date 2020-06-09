# Flex

**flex是一维排列方式**

**开启: `display: flex`** 或者 **`inline-flex`**

#### 默认属性

- 按行排列, 不会伸长, 但会缩短, 纵向会伸长



#### flex-direction

- 可选值：row, row-reverse，column，column-reverse

**默认是row**



#### justify-content

- 可选值：start，center，space-between，space-around, space-evenly



#### align-items

stretch`, `center`, `start`, `end

**可以被align-self改写**



#### `flex-wrap`

**决定是否会换行显示**

`nowrap`, `wrap`, `wrap-reverse`



#### `flex-flow`

**他是`flex-direction`和`flex-wrap`的简写方式**





#### flex

由flex-basis，flex-grow，flex-shrink组成

**flex-grow**：缩小时，它缩小的比例

**flex-shrink**：在扩大缩小之前，这个flex对象应该是多大

**flex-basis**：扩大时，它扩大的比例

- auto：找到每个flex item的max-content作为flex-basis，然后剩余空间平均分配
- 0：设置为0的时候，代表完全忽略每个对象的flex-basis，直接进行分配





**flex增长收缩行为受到对象min-content影响**