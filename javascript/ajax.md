# AJAX

**Asynchronous JavaScript And XML**

**通过在后台与服务器进行少量数据交换, AJAX可以使网页实现异步更新**



## 创建请求

- `let httpRequest = new XMLHttpRequese()`



## 设置请求行

- `xhr.open(method, url, isAsync)`



## 设置请求头部

- `xhr.setRequestHeader(header, value)`

- 可以配合 **encodeURIComponent** 使用
- 如果是 **POST** 方法, 还需要额外设置 **Content-Type** 头部



## 定义各种回调函数





#### 超时处理

**定义超时时间**

`xhr.timeout = 5000`



**设置超时处理函数**

`xhr.ontimeout = function() {...}`







## 向服务器发送请求

- `httpRequest.send(string)`
  - string: 仅用于POST请求

- `httpRequest.sendRequestHeader(header, value)`



## 定义onreadyStatechange

**当 readyState 等于 4 且状态为 200 时，表示响应已就绪**



#### 实例的readyState属性

- `httpRequest.readyState`
  - 0: 请求**未初始化**
  - 1: 服务器连接**已建立**
  - 2: 请求**已接收**
  - 3: 请求**处理中**
  - 4: 请求**已完成**, 其响应已就绪



#### status

200: OK, 404: Not Found





## 服务器响应

- `httpRequest.responseText`
- `httpRequest.responseXML`





## AJAX中的事件

- `onloadstart`
  - `xhr.send()`方法后触发
- `onprogress`
  - 上传和下载时候50ms触发一次
- `onload`
  - 请求成功时候触发
- `onerror`
  - 网络层级别的错误会触发该事件, `4xx`响应码不会触发
- `onloadend`
  - 请求结束时候触发(包括成功请求和失败请求)
- `onreadystatechange`
- `onabort`
- `ontimeout`
  - timeout时候触发





## AJAX的状态

- **对应的事件**

  - `xhr.onreadystatechange`

- **对应的属性**

  - `xhr.readyState`: 每次变化触发上面的那个事件

  

#### `readyState`的取值

- **`0` UNSENT**
- **`1` OPENED**
- **`2`HEADER_RECEIVED**
- **`3` LOADING**
- **`4` DONE**