# 内容协商

**一个URI对应了一个资源的多种表述**





## 方式

#### 主动式内容协商

- 服务器根据客户端的资源表述, 武断的选择一种资源返回



#### 响应式内容协商





## 主动式内容协商

#### 请求时

**Accept**

**Accept-Language: en**

**Accept-Encoding: br, gzip**



#### 返回时

**Content-Location: URLe**

**Content-Type: text/html**

**Content-Language: en**

**Content-encoding: br**





## 响应式内容协商

第一次返回300, 和内容 (url列表), 由客户端来决定请求哪个