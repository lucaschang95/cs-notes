# V命令

**文本中**：**双大括号**进行插值

**v-once**: 一次性地插值

**v-html**: 解释为HTML，否则会被解释为普通文本



**HTML属性中**：

- **v-bind**：
  - `v-bind:id="dynamicId"`, 前面的是HTML属性，后面的是与之绑定的变量
  - 可以为class绑定一个变量
  - **缩写**：`:id="dynamicId"`



**v-on**：用于监听DOM事件

`<a v-on:click="doSomething">...</a>`

- 这个就是将clikc事件的处理时间设置成为`dosomething`
- **缩写**：`@click="dosomething"`