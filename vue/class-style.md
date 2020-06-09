# class，style



#### 绑定class

- 可以是**数组**，**对象**被`JSON.stringify()`后的字符串



**对象时**

`<div v-bind:class="{ active: isActive }"></div>`

- 这个对心可以是**字面量**，也可以是**变量**，甚至可以是**computed（计算属性）**
- **选择性**：每一项渲染与否决定于这一项的值



**数组时**

`<div v-bind:class="[activeClass, errorClass]"></div>`

- 其中，数组中的这两个都是变量，**由变量的值决定绑定哪个class**
- 每一项都添加，添加的类名由数组内容来决定





#### 绑定style

**style中，每一项可以绑定一个字符串，可以是一个变量（动态绑定）**

**一般是将一个style对象绑定上去**



**对象时**

`<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>`

- 传入一个**对象**经过**stringify**后的结果
- 对象属性名：style项的名称
- 属性值：对应项的值（可以是字符串或者变量）



**数组时**

- 每一项是一个对象
- 可以把**多个style对象绑定到同一个DOM上**

