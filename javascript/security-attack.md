# web安全攻击手段





## 跨站脚本攻击 (xxs)

**在网页中嵌入恶意脚本**

- 分为三类: 持久型, 非持久型, 基于DOM

#### 如何避免

- 校验, 转义





## 跨站请求伪造 (CSRF)

**cross site request forgery, 劫持受信任用户向服务器发送非预期请求**

1. Victim signs on to bank site
2. Victim visits attacker.com
3. Pag contains CSRF code (向mybank提交转账表单)
4. Brower sends the request with Cookie



如何防范?

1. cookie设置same site属性 (cookie不随着跨域请求发送)
2. 验证请求中的referer
3. 通信时服务器生成随机, 利用token验证



## sql注入

**非法访问数据库信息**



#### 如何防范

校验 转义