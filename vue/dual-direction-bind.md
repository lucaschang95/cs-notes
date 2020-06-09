# vue数据双向绑定

**使用v-model**



**视图=>数据**

- `addEventListener`：添加时间监听来实现



**数据=>视图**

- 使用对象的**访问器属性**

- **set**中添加一段更新视图的代码即可





#### 不同的组件时

- **text**和**textarea**元素
  - **value**属性和**input**事件
- **checkbox**
  - **checked**属性和**change**事件
- **select**
  - 使用**value**属性和**change**事件











#### v-model

**用在自定义组件上**

`<input v-model="searchText">`

- 等价于
  - `v-bind:value="searchText"`
  - `v-on: input="searchText = $event"`









