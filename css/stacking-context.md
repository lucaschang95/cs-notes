# 层叠上下文



## 如何产生新的层叠上下文

- `<html></html>`本身就会产生一个层叠上下文
- 普通元素设置`position`属性 (非static) 并且设置`z-index`的属性为具体数值 (非auto) , 产生层叠上下文
- CSS3中的新属性
  - `opacity`不是1
  - `transform`不是`none`
  - 父元素`display`为`flex/inline-flex`, 子元素`z-index`不是`auto`



#### z-index

- `z-index`仅在定位元素上有效果 (position不为static)





## 层叠顺序

**用来判断在同一个层叠上下文中的层叠顺序**

- 层叠上下文(border/background) 
- 负`z-index`
- `block`块状盒子
- `float`盒子
- `inline/inline-block`盒子
- z-index: auto / z-indez: 0
- 正z-index





## 结论

- 如果两个元素在同一个层叠上下文, 使用**层叠顺序**判断
- 如果不在, 先判断所在层叠上下文的顺序
- 相同, 后面的覆盖前面的





- https://juejin.im/post/6844903667175260174