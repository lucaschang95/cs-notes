# Cookie Session LocalStorage SessionStorage

**作用域, 生命周期, 存储大小**



## Cookie

**解决http无状态的协议的情况**

**服务器通过设置`SetCookie`这个响应头部, 将cookie信息返回给浏览器, 浏览器将cookie信息保存在本地. 当下次向同一服务器发起HTTP请求时, 浏览器会自动将cookie信息放到请求头部中.**

- 大小: 4KB以内
- 有些浏览器对cookie有限制



- `Cookie: cookie1=value; cookie2=value2`
- `Set-Cookie: cookie1=value; Expires = a date`
  - 一般以服务器返回这个头部



#### Cookie属性

- **Name**.  cookie的名字
- **Value**. cookie的值
- **Domain**. 
  - **Domain和Path**都是处理作用域
  - 如果未指定, 默认是当前document的host
  - 指定后, subdomain也包括
- **Path**.
  - 能匹配到即可, subpath也包括
  - 默认是都有
- **Expires/Max-Age**
- **Size**. in bytes
- **Secure**. 开启只能通过HTTPS发送
- **HttpOnly**. 
  - 开启后, 该cookie对于`document.cookie`的API关闭, 无法使用JavaScript访问
- **SameSite**. 
  - 开启后, 跨域请求不发送cookie
  - 可能会造成不好的用户体验
  - `strict`
    - 跨站cookie都不发送
  - `lax`
    - 导航到第三方get请求可以 (链接 预加载 get表单)



#### 第三方cookie

跨域响应`Set-Cookie`



## Session

**存放在服务器端的, 用来存放用户数据的类似HashTable的数据结构. 通过`Set-Cookie`返回给浏览器, 浏览器下次请求时会带上这个包含`sessionID`的cookie**



## Cookie和Session的区别

1. 存放位置
2. 存放位置导致的安全性
3. cookie影响网络性能, session影响服务器资源
4. cookie大小和数量受限制





## WebStorage

**HTML5中, 提供的一种在客户端本地保存数据的功能, 包括: localStorage 和 sessionStorage**



- **大小**: 10MB作用
- **永不过期**

- 只接受**string**类型, 配合JSON使用
  - `JSON.stringify()`和`JSON.parse()`
- 受到**同源策略** (protocol, domain, port)限制
- 可以说



#### 方法

- **`setItem(key, value)`**
- **`getItem(key)`**
- **`removeItem(key)`**
- **`clear()`**
- **`key(index)`**
- **`length`**



#### onstorage事件

在除自己以外, `localStorage`和`sessionStorage`可以接触到的window中触发

- event的属性: `key`, `oldValue`, `newValue`, `url`



#### 作用域

- 不同浏览器不共享 WebStorage
- 两个 WebStorage 均受到同源策略限制
- localStorage 还需要相同浏览器环境
- sessionStorage 还需要相同标签



#### 不同点

- 生命周期
- 共享
  - 不同浏览器不能共享web storage
  - 相同浏览器共享localStorage
  - 不同标签之间不共享sessionStorage



#### 如何遍历?

- `key(list)`配合`length`使用
- `Object.keys()`

