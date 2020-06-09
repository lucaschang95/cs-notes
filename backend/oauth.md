# OAuth2 协议

**Open Authrization, 开放授权协议**

**第三方无需知道用户的账号及密码, 就可以获取到用户授权的信息**





## 四个重要角色

- **Resorece Owner**:   资源拥有者
- **Resorece Server**: 资源服务器
- **Client**:  第三方应用客户端
- **Authorization Server**: 授权服务器



## 部署

#### 作为 Resource server

- 提供接口
  - 授权许可的接口
  - 访问令牌的接口
  - 第三方程序注册服务



## 前提

- Client 注册成为 Resource Server 的第三方应用



## 过程

- 用户登录第三方网站
- 第三方网站向授权服务器发起授权请求, (其实就是访问一个URL, 第三方网站需要提供client_id等信息)
- 授权服务器验证用户身份(用户登录)后, 返回授权许可(Authorization Grant) (比如授权码)
- 第三方网站使用授权许可, 拿到令牌

- 使用token去资源服务器访问受限资源

![过程](https://images2015.cnblogs.com/blog/168328/201612/168328-20161228154537320-2101529434.jpg)



## 授权方式

**4种授权方式, 不同的是拿到访问令牌的过程**



#### 授权码模式

**过程**

- (A) **Client** 使用浏览器访问 **Authorization server**, 访问URL由 **Authorization server** 提供
  - **Client** 需提供一些信息
- (B) **Authorization server** 验证 **Client** 中传递的信息, 如果无误则提供页面供 **Resource owner** 登录, 登录后可选择提供哪些资源以及读写权限
- (C) **Authorization server** 返回一个授权许可 (**这里是授权码 Authorization code**)
- (D) **Client** 拿着授权码和自己一些参数去请求访问令牌的API, 获取访问令牌
- (E) **Authorization server** 返回访问令牌, 刷新令牌, 令牌有效时间给 **Client**



这个模式下拿到的是 code, 使用code获取token

**response_type**    必须, 固定为 **code**, 表示一个授权码请求

**client_id**    必须, 这时客户端在第三方注册应用后得到的唯一标识

**redirect_uri**    可选, 通过客户端注册的重定向URI

**scope**   可选, 请求资源范围

**state**    可选, 如果存在, 原样返回给客户端

**这些参数是跳转到授权页面时候携带的参数**







## 刷新令牌

这个是跟随第一次 **Access Token Response 返回的**





## ref

- https://www.cnblogs.com/linianhui/p/oauth2-authorization.html