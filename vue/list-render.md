# 列表渲染

**指令：v-for**：基于一个**数组/对象**渲染一个**列表**

`<div v-for="item in items">{{item}}</div>`

` <li v-for="(item, index) in items">`



**for...in：key，for...of：value**



#### 在vue中

v-for中使用**of**一般是迭代数组

使用**in**一般是迭代对象



**key**

同react一样，要配合key使用