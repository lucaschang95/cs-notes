# HTTP

特点:

1. **无连接**: 请求时建立连接, 请求完释放连接. 每个连接只处理一个请求
2. **无状态**: 当前请求不依赖一之前的请求



## 协议格式



#### 请求报文

- 请求行 `GET / HTTP/1.1`  
- 请求头部
- 空行
- 包体

#### 响应报文
- 响应行 `HTTP/1.1 200 OK`
- 请求头部
- 空行
- 包体



## HTTP方法

- **GET**：主要的获取信息的方法
- **HEAD**：响应与GET方法相同, 但服务器不发送body
- **POST**：常用语提交HTML FORM表单, 新增资源等
- **OPTIONS**：显示服务器对访问资源支持的方法, 幂等方法
- **PUT**：
- **DELETE**：
- **CONNECT:** 建立tunnel隧道
- **OPTIONS**:
- **TRACE**: debugging
- **PATCH**: 部分修改 partial modification?

**幂等**方法: 一次和多次的结果是一样的



#### GET和POST区别

- `GET`幂等, `POST`不是幂等
- `GET`请求内容放到url中, `POST`的请求参数放到包体中
- `GET`长度受限, `POST`长度不受限制





## 响应码

- **通用规则**:
  - 客户端不理解响应码时候, 将以该系列第一个响应码来处理

#### 1XX

请求已接收到, 需要进一步处理才能完成, HTTP/1.0不支持
- **100 Continue:** 客户端上传大文件前使用
  - 由客户端请求中`Expect: 100-continue`触发
- **101 Switch Protocols:** 协议升级使用 (ws或者http/2.0)
  - 由客户端发起请求中`Upgrade`头部触发
- **102 Processing:**  服务器收到, 正在处理. (如WebDAV的文件操作)
  - 时间太长会被假定为请求丢失

#### 2xx

- **200 OK:** 成功返回响应
- **201 Created:** 有新资源在服务器端被成功创建
- **202 Accepted:** 异步, 需要长时间处理的任务
- **203 Non-Authoritative Information:**
- **204 No Content:** 成功执行请求, 不携带响应包体, (暗示客户端无需更新视图)
- **205 Reset Content**:
- **206 PartialContent**: 使用range协议返回部分响应内容时的响应码



#### 3xx

**重定向使用Location指向的资源或者缓存中的资源, 同时重定向次数不应超过5次**

- **300 Multiple Choices:** 内容协商
- **301 Moved Permanently:** 永久重定向到另一个URI中
  - 永杰重定向可以直接缓存
- **302 Found:** 临时重定向
- **304 Not Modified:** 告诉客户端缓存仍然可以复用
  - 当客户端拥有可能过期的缓存时

#### 4xx

**客户端出现错误**

- **400 Bad Request:** 服务器认为客户端出现了错误
  - 如请求格式错误
- **401 Unauthorized:** 用户认证信息缺失或者不正确
- **403 Forbidden:** 服务器理解请求的含义, 但没有权限执行此请求
- **404 Not Found**: 没有找到对应的资源
- **405 Method Not Allowed**: 服务器不支持该method方法
- **406 Not Acceptable**: (内容协商头部) 不支持该内容
- **408 Request Timeout**: 服务器接收请求超时
- **410 Gone**: 永久性的找不到资源了

#### 5xx

服务器端出现错误
- **500 Internal Server Error:** 服务器内部错误
  - 错误没办法细分就使用500
- **501 Not Implemented**: 服务器不支持实现请求所需要的的功能
- **502 Bad Gateway:** 代理服务器无法获取到合法响应
- **503 Service Unabailable**: 服务器资源尚未准备好处理当前请求
  - 原因: 服务器端做请求限速, 或并发请求限制
- **504 Gateway Timeout**: 代理服务器无法及时从上游获得相应 
- **505 HTTP Version Not Supported**: 服务器http版本不支持



## 短连接与长连接

- `Connection`头部
  - 客户端请求长连接: `Connection: Keep-Alive`
  - 服务器表示支持长连接: `Connection: Keep-Alive`
  - 客户端复用连接
- HTTP/1.1默认支持长连接
- `Connection: Close` 短连接





## HTTP包体传输

定长包体
Content-Length: xxx



### 验证
首次缓存: `Last-Modified` `Etag`
之后请求会带上这两个值,
相关响应码: 
304 Not Modified

412 Precondition Failed


### 重定向

> 为什么需要URI重定向

- 提交FORM表单成功后需要显示内容页
- 站点从HTTP迁移到HTTPS
- 站点正在维护中
- 站点更换了新域名

返回3xx系列响应码, 同时`Location: new URI`

301: 永久重定向, 同时使用GET方法



## HTTP/1.1

- 长连接

- HTTP Pipeline 

  - 开启后, 请求和响应不再是依次交替得了. 可以一次性发送多个请求, 一次性接收多个请求.

- 更多请求方式

- 缓存处理 (新的缓存头)

- `host`请求头

- 断点续传 (`range`请求头) (206 partial content)

  

**长连接**

只有通信双方都有**connection: keep-alive**，才可以建立持久连接



**管线化**

一次发送多个http请求，但是服务器端会有**队首阻塞**的问题



## HTTP/2

**新特性: 二进制, 多路复用, 首部压缩, 服务器推送**



**二进制传输**



#### 多路复用

**原来一文本传输, 现在先进行二进制编码**

connection -- stream -- message -- frame

- Connection: 1个TCP连接, 包含一个或者多个Stream
- Stream: 一个双向通讯数据流, 包含1条或者多条Message
- Message: 对应HTTP/1中的请求或者响应, 包含一条或者多条Frame
- Frame: 最小单位

**特点**

- 一条TCP连接上, 可以并发存在多个处于OPEN状态的Stream
- 客户端和服务器都可以创建新的Stream
- 客户端和服务器都可以关闭Stream
- 同一条Stream内的Frame帧是有序的
- 从Stream ID的值可以分辨PUSH消息
  - 客户端奇数, 服务器偶数



#### 首部压缩

**HPACK算法**  **静态字典**和**动态字典**, 

哈夫曼编码：建立索引表，出现次数多的字符对应的索引尽可能短

#### 服务器主动推送



#### WebDAV

一种基于HTTP/1.1的协议, 在GET, POST, HEAD标准方法外添加了一些新的方法, 使得应用程序可对Web Server直接读写



浏览器发起HTTP请求的典型场景

- 从UTL中解析出域名
- 根据域名查询DNS, 获得相应的IP地址
- 三次握手建立TCP连接 (HTTPs要完成TLS/SSL握手)
- 构造HTTP请求, 填充上下文至HTTP头部
- 发起HTTP请求, 收到携带html的响应
- 浏览器引擎解析响应, 根据超链接构造其他HTTP请求
- 发送获取页面内容的HTTP请求



## HTTP常用头部

#### 通用

- `User-Agent` 用户信息
- `Cache-Control` 控制缓存行为
- `Connection` 连接性质



#### 请求

- `Accept` 能正确接收的类型







#### content-type

application/json：后端数据

application/javascript：javascript



text/html：html

text/css：css





#### Cookie

cookie是存在于http的header中的





## 长轮询/短轮询

**短轮询**

- 浏览器: 定时 (如: 1s) 向服务器发送请求
- 服务器: 服务器收到请求返回最新的数据



**长轮询**

- 客户端向服务器发送请求, 服务器hold注连接, 直到有新消息才返回响应
- 客户端处理完消息后再向服务器发送新的连接



#### keep-alive

多个http请求复用一个tcp连接，意味着只开启一个socket，意味着只开启一个进程

缺点：长时间的tcp连接容易导致系统资源无效占用

**合理配置keep-alive timeout的时间**



