# 事件





#### addEventListener

- `target.addEventListener(type, listener[, useCapture])`
- 默认是在冒泡阶段注册

- removeEventListen也是同理
- 要想注册过的事件能被移除，必须将回调函数保存起来



## 事件流

DOM事件流分为三个阶段：**捕获阶段**，**目标阶段**，**冒泡阶段**

- 捕获事件先于冒泡事件

- 捕获事件中，父级事件先于子级事件
- 冒泡事件中，子级事件先于父级事件
- 在触发事件的DOM元素上注册事件时，不区分捕获和冒泡，触发先注册的。



**阻止事件流的传播**

`e.stopPropgation()`





## 事件对象

事件监听时，回调函数会被注入**事件对象**



**常用属性**

- e.target：触发事件的节点
- e.currentTarget：正在监听事件的节点（可能不是触发事件的节点）
- e.preventDefault()：取消事件的默认行为
- e.stopPropagation()：阻止事件的继续传递







## 事件





#### 触摸事件

****

**touchstart**，**touchmove**，**touchend**



**Touch对象**

- clientX
- clientY
- identifier
- pageX
- pageY
- screenX
- screenY
- target