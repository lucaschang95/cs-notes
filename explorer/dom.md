# DOM

**document object model, js 通过它能改变HTML文档的所有元素**

- **w3c指定的DOM standard**



#### DOM1

- DOM1 (DOM Level 1)主要定义了HTML和XML文档的底层结构



#### DOM2

- DOM2 (DOM Level 2) 和 DOM3 (DOM Level 3) 在基础上加入了更多的交互能力, 提供了更高级的XML特性



#### DOM3



## 节点

#### 分类

1. 元素节点: `document.getElementById()`
2. 属性节点: `document.getElementById().getAttributeNode()`
3. 文本节点: `document.getElementById().firstChild`

**属性节点和文本节点都需要先找到元素节点**



#### `nodeName`属性

- 元素节点: 标签名称
- 属性节点: 属性名称
- 文本节点: 永远是 #text



#### nodeValue属性

- 元素节点: `null`
- 属性节点: 属性值
- 文本节点: 文本内容



#### nodeType属性

- 元素节点: 1
- 属性节点: 2
- 文本节点: 3
- 注释节点: 8
- 文档节点: 9



#### 节点(包括属性节点和文本节点)间关系(导航)

- `parentNode`
- `childNodes`
- `firstChild`
- `lastChild`
- `nextSibling`
- `previousSibling`



#### 节点(只有元素节点)间的导航

- `children`
- `parentElement`



#### 文本节点

- `document.createTextNode(text)`创建**文本节点**



## （元素节点）查找

#### 查找方法

通过 **id**, **标签名**, **类名**, **CSS选择器**, **HTML对象集合**来查找HTML元素

- `document.getElementById(id)` 
- `document.getElementsByTagName(name)`
- `document.getElementByClassName(name)`
- `document.querySelector(selector)`
- `document.querySelectorAll(selector)`



#### 区分：HTMLCollection 和 NodeList

- **HTMLCollection** 是动态的, **NodeList** 是静态的
- **NodeList** 包含元素节点, 属性节点, 文本节点, **HTMLCollection** 只包含







## （元素节点）增删

#### 创建

- `document.createElement(element)`



#### 挂载

- `element.appendChild(element)` 该节点会变为父节点的最后一个子节点
- `element.insertBefore(element1, element2)` 将element1插入到element2之前



#### 删除元素节点

- `element.removeChild(element)` 将子元素删除 (需要同时有父子的引用)
- **或者**: `element.parentNode.removeChild(element`)`







## （元素节点）修改

#### 替换元素节点

- `element.replaceChild(element1, element2)` 用element1替换element2





## 修改内容和样式

**id**

- `element.id`



**类名**

`node.classList`

- **添加**: `add()`
- **删除**: `remove()`
- **切换**: `toggle()`
- **包含**: `contain()`
- **替换**: `replace()`



**修改属性**

- `element.setAttribute(name, value)`
- `element.getAttribute(name, value)`
- `element.hasAttribute(name, value)`
- **或者**: `element.attribute = new value`



**内容**

- `element.innerHTML = HTML`
- `element.innerText = text`





#### 修改样式

- `element.style.fontSize = '16px'` **驼峰命名**
- `element.style.setProperty('font-size', '16px')`
- `element.style.removeProperty('font-size')







## 元素节点的集合

**HTMLCollection / NodeList**

- 通过`getElementsByTagName()`和`getElementsByClassName()`得到
- 通过索引访问









## document属性

- `document.body`
- `document.cookie`
- `document.domain`
- `document.lastModified`
- `document.referrer`
- `document.title`
- `document.URL`







## DOM事件

**deal by message queue**

https://developer.mozilla.org/en-US/docs/Web/Events



## 注册事件处理程序



#### `EventTarget.addEventListener`



#### HTML标签属性

- `<button onclick="alert('Hello world!')">`



#### DOM元素属性

- `myButton.onclick = function(event){alert('Hello world')}`





#### e.target

- `e.target`指向触发事件的元素
- **必须**在event handler中的第一个元素声明



#### e.currentTarget

- 指向绑定的元素



#### preventDefault函数

- 阻止触发这个事件的default action



#### stopPropagation



#### Event Delegation 事件委托

1. When we have an element with lots of child elements that we are interested in;
2. When we want an event handler attached to an element that is not yet in the DOM when our page is loaded.

使用event bubbling和eventObj.target属性完成事件委托





## window.onload和DOMContentLoaded

- `onload`: 页面上所有DOM, css, jss, 图片等都已经加载完成
  - 存在于`window`对象上
- `DOMContentLoaded`: 仅DOM加载完成 (without waiting for resources to finish loading)
  - 存在于`document`对象上







