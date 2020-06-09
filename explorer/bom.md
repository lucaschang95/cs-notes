# 浏览器对象模型(BOM)



**通过BOM可以access and manipulation of the browser window**

- BOM目前还没有统一的标准
- BOM, DOM其实是两个东西面向javascript语言的接口





## window对象

**代表浏览器的窗口**



#### 属性

- `window.innerWidth`, `window.innerHeight` 窗口大小
- `window.screen.width`, `window,screen.height`





## location对象

#### 属性

- `location.href`
- location.hostname`

- location.pathname`
- location.protocal`



#### 方法

- `window.location.assign(url)`





## history对象

**浏览器历史**

**这个就是react-router利用的**



- `history.pushState()`
  - 不会触发页面刷新, 增加历史记录, 地址栏有变化
- `history.replaceState()`
  - 跳转到新页面, 不增加历史记录
- 都会改变地址栏, 但是一个是state数组push, 一个是当前元素replace,





#### 方法

- `history.back()`
- `history.forward()`
- `history.go()`



## Navigator

**访问者(浏览器)的信息**

- **userAgent**: 浏览器信息
- **language**: 用户浏览器所用语言
- **languages**: 偏爱语言



## 弹出框

**警告框, 确认框, 提示框**

- `alert(text)`
- `confirm(text)` 返回boolean
- `prompt(text)` 可能返回`null`





## 定时事件

- `setTimeout(function, miliseconds)`
- `clearTimeout(timeoutVariable)`
- `setInterval(function, miliseconds)`
- `clearInterval(intervalVariable)`



## cookie

#### 添加cookie

- document.cookie = 'username=Bill Gates';
- 可以设置`expires`和`path`



## Ref

https://www.w3school.com.cn/htmldom/index.asp