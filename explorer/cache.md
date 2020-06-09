# 浏览器缓存机制

**http性能优化非常重要的一环**



## 相关的HTTP头部

- `Expires `
- `Cache-Control`
- `Last-Modified` / `If-Modified-Since`
- `Etag` / `If-None-Match`



## 缓存位置

- Service Worker
- Memory Cache
- Disk Cache
- Push Cache



## Memory Cache

- 主要包含当前tab的img, css, js
- 生存期: 关闭tab之前



## Disk Cache

- 容量大, 时效性长
- 根据HTTP Header判断



## 缓存过程

- 浏览器每次发起请求, 会现在浏览器缓存中查找该请求的结果以及缓存标识
- 浏览器每次拿到响应, 都会将该结果和缓存标识存入浏览器缓存中



## 强缓存

**强缓存: 不会向服务器发送请求, 返回200状态码, chrome显示from disk cache或者from memory cache, 可以通过设置两种HTTP头部实现: Expires和Cache-Control**

- Cache-Control是HTTP/1.1的产物, Expires是HTTP/1.0的产物, Cache-Control优先级更高



## Cache-Control

**既可以用在请求中, 也可以用在响应中**



#### 请求中的头部

**请求中的头部和代理服务器息息相关**

-  `max-age`, `max-stale`, `min-fresh`, `no-caache`, `no-store`, `no-transform`, `only-if-cached`
- **max-age:** 客户端不接收Age超过max-age的缓存
- **max-stale:** 即使已经不新鲜, 但是如果陈旧秒数不超过max-stale, 客户端仍打算使用
- **min-fresh:** age小于min-fresh都不要把代理服务器上的缓存返回给我
- **no-cache:** 不能直接使用缓存作为响应, 除非你从上游服务器得到了304的响应码
- **no-store:** 代理服务器不要对该请求进行缓存
- **no-transform:** 不要休息包体内容





#### 响应中的头部

: `max-age`, `s-maxage`, `must-revalidate`, `proxy-revalidate`, `no-cache`, `no-store`, `public`, `private`

- **max-age:** 超过max-age后缓存过期

- **no-cache:** 使用前必须验证

- **no-store:** 不能缓存

- **must-revalidate:** 一旦过期, 必须验证后才能使用

- **proxy-revalidate:** 告诉代理服务器一旦资源过期, 必须验证后才能使用

- **public: ** 私有缓存和共享缓存都可以缓存该响应

- **private:**  代理服务器不得缓存

- **no-transform:** 代理服务器不能修改包体内容  

  







## 协商缓存

**浏览器携带缓存标识向服务器发起请求**

- 协商缓存生效, 返回304 Not Modefied
- 协商缓存失效, 返回200 OK
- Last-Modified/ If-Modified-Since
- Etag/ If-None-Match



#### 判断缓存是否过期

**优先级**: `Cache-Control` > `Expires` > 预估时间 



## 情景

**频繁变动的资源**

- **Cache-Control: no-cache** 同时配合 **ETag, Last-Modified**



- **Cache-Control: max-age=xxx** 同时对文件名进行hash处理, 改变资源时候同时改变资源名称





## Conclusion

强制缓存优先于协商缓存, 若强制缓存生效(Expires和Cache-Control)则直接使用缓存, 若强制缓存不生效则使用协商缓存(Last-Modified/If-Modified-Since和Etag/If-None-Match)



## Ref

1. (https://www.jianshu.com/p/54cc04190252)