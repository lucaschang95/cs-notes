# 跨域 (同源策略)

**schema, domain, port (协议, 主机, 端口), 只要有一点不同即为跨域** 

- 第三方API
- 前后端分离





- 可用性

  - 带有src的属性标签的可以跨域访问

  - 跨域写操作: 表单提交, 重定向请求

- 安全性 浏览器需要防止站点A的脚本向站点B发起危险操作
  - Cookie, LocalStorage 和 IndexDB无法读取
  - DOM无法获得
  - AJAX请求不能发送



## CORS 

**Cross-Origin Resource Sharing(CORS)**

**CORS需要在可用性和安全性中间寻找平衡点**





## 实现跨域的方式

- JSONP
- CORS
- websocket





## JSONP

**原理: 数据以JSON格式通过函数参数返回**

**过程: JSONP之前**



#### JSONP过程

- 将整个过程包装到一个函数中

-  根据url, 请求名称, 值和回调函数名称, **构造请求url** (GET方法)
- **构造**script标签, 并**挂载**到DOM上
- 挂载script元素, 等待调用
- 
- 完事后删除script





#### 缺点

- 只支持 **GET** 方法
- 这个回调函数必须是一个全局函数





## CORS

#### 基本思想

- 如果站点B允许站点A的脚本访问其资源, 必须显示的告诉浏览器: B是被允许的

- 请求时带`Origin`头部
- 返回`Access-Control-Allow-Origin`



#### 简单请求

简单请求需满足: 

- GET/HEAD/POST方法之一
- 仅能使用CORS安全的头部: `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` (内容协商的头部)
- Content-Type的值只能是 text/plain, muiltipart/form-data, application

发送时额外携带 **Origin**, 返回时额外携带 **Access-Control-Allow-Origin**





简单请求的跨域访问

- 浏览器构造HTTP请求中携带`Origin`头部告知server来自哪个域
- server响应中携带`Access-Control-Allow-Origin`头部告知表示允许哪些域
- 浏览器放行

 

#### 复杂请求

多了预检请求 (preflight request)

- 预检请求: 
  - 方法: option
  - **Origin**
  - **Access-Control-Request-Method**
- **Access-Control-Request-Header**
- 预检请求响应:
  - **Access-Control-Allow-Origin**
  - **Access-Control-Allow-Method**
  - **Access-Control-Allow-Headers**
  - **Access-Control-Expose-Headers**    哪些响应头部可以供客户端使用
  - **Access-Control-Allow-Credentials** 告知浏览器是否可以将 **Credentials** 暴露给客户端使用 
- 正式请求:
  - 方法变为了用于ajax的方法, 众多头部也都在
  - 同时, 复杂请求其他的头部也都会加上
