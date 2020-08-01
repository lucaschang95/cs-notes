# 网络攻击



## sql注入

**修改url, 使得后台执行攻击者想要的sql语句, 达到攻击效果**



#### 防范

字符串处理





## 跨站脚本 (XSS)

**cross-site scripting**

**攻击者通过各种方法, 在用户访问的网站中注入自己的脚本**



#### 分类

- **反射型攻击**
  - 攻击者制作好含有XSS代码的链接
  - 用户点击恶意链接
  - 服务器将带有XSS代码的数据发送给用户 (前提: 相应数据或页面中包含提交的数据)
  - 无辜用户执行XSS



- **持久型**
  - 恶意用户提交评论时, 嵌入XSS代码
  - XSS代码存入数据库
  - 无辜用户查看评论时, 拿到了XSS代码
  - 无辜用户浏览器执行XSS



- **DOM型**
  - DOM树中植入代码, 不会与后台交互
  - `location.search` `location.hash` 并使用`document.write()` `



#### 区别

- XSS代码储存位置 (URL, 数据库)







#### 解决方法

- **输入时**. 进行过滤/编码

  - **检查**
  - **过滤**: 
    - 用户名密码等只允许字母和数字
    - 直接过滤script标签
  - **转义**
    - `<`, `>`, `'`, `"` 等

- 对动态输出到页面的内容进行编码 (React便是如此)

  - 也是**检查过滤和转义**

  - 比如只使用`innerTex`t, 不使用`innerHTML`

  - 输出到html编译器前转义, react escape everything before rendering, 转义方法如下

  - < 转成 &lt;

    \> 转成 &gt;

    & 转成 &amp;

    " 转成 &quot;

    ' 转成 &#39

- 白名单

  - 白名单作用是允许的标签以及属性等

- cookie设置http-only

  - 这样JavaScript就无法读取该条cookie了

- 写代码时候使用innerText

https://blog.csdn.net/hxpjava1/article/details/81005195





## 跨站请求攻击伪造（xsrf）

**CSRF, crosee site request forgery**

**利用用户身份, 执行用户非本意操作**



#### 解决方法

**思想是验证该请求是否来自本网站**

- POST方法

- 验证`Referrer`请求头
  - 容易被修改
- cookie: samesite
- 开启csrf token验证
  - 在cookie和表单中各插入相同的token
  - 用户提交时, 验证这两个token是否相同





## 中间人攻击



#### 解决方法

- https