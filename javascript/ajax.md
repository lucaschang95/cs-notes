# AJAX

**Asynchronous JavaScript And XML**

**通过在后台与服务器进行少量数据交换, AJAX可以使网页实现异步更新**



## 创建请求

- `let httpRequest = new XMLHttpRequese()`



## 设置请求行

- `xhr.open(method, url, isAsync)`
- isAsync：默认是true，就是异步的请求，同步的请求用户体验不佳



## 设置请求头部

- `xhr.setRequestHeader(header, value)`

- 可以配合 **encodeURIComponent** 使用
- 如果是 **POST** 方法, 还需要额外设置 **Content-Type** 头部





## 请求属性

#### responseType属性

`responseType`属性是一个字符串，表示服务器返回数据的类型。使用`xhr.response`属性来接收。



#### timeout属性

`timeout`属性表示请求在等待响应多少毫秒之后终止，否则触发`ontimeout`响应事件



#### withCredentials属性

`withCredentials`属性是一个布尔值，表示跨域请求时是否协带凭据信息（`cookie`、`HTTP`认证及客户端`SSL`证明等）。默认为`false`。



**需要后端配合**

- 后端的`response`添加`Access-Control-Allow-Origin`，且必须制定域名，`Access-Control-Allow-Credentials`这个头部必须为true







## 向服务器发送请求

- `httpRequest.send(string)`
  - string: 仅用于POST请求

- `httpRequest.sendRequestHeader(header, value)`



## 定义onreadyStatechange

**当 readyState 等于 4 且状态为 200 时，表示响应已就绪**



#### status

200: OK, 404: Not Found





## 服务器响应

- `httpRequest.responseText`
- `httpRequest.responseXML`







#### readyState属性和onreadystatechange事件

`readyState`属性表示请求/响应过程的当前阶段

- 0（UNSENT）未初始化
- 1（OPENED）已经初始化（调用了open方法）
- 2（HEADER_RECEIVED）
- 3（LOADING）
- 4（DONE）完成



只要`readyState`属性的值发生变化，都会触发一次`onreadystatechange`事件



#### timeout属性和ontimeout事件

`timeout`属性表示请求在等待响应多少毫秒之后终止，否则触发`ontimeout`响应事件



#### abort()方法和onabort事件

在接收到响应之前调用`abort()`方法用来取消异步请求。





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







## 参考

- https://juejin.im/post/6844904052875067400