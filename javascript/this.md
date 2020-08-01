# this



## 全局作用域中的`this`

- 指向`window`对象



## 函数中的`this`

- 普通模式
  - 指向`window`对象
- `"use strict"`
  - 指向`undefined`



## 对象方法中的`this`

- 指向该对象



## 构造函数中的`this`

- 指向`new`出来的新对象



## event handler中的`this`

- 指向了该DOM对象



## 箭头函数中的`this`

- 指向定义时的上下文



## call, apply, bind

**改变指向**



## this绑定的优先度

new > 方法调用 > window



## 隐式丢失

- 立即调用会丢失
- 间接引用会丢失





https://image.fundebug.com/2019-03-19-01.png