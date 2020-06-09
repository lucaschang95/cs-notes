# 优化



## RAIL模型

**Response, Animation, Idle, Load**



## 评估性能工具

#### lighthouse

**已经集成到chrome**



## chrome devtools





## 网络

**减少HTTP请求, 同时能并行进行请求**



#### 减少请求资源大小或者次数

- **利用浏览器的缓存机制**
  - 合理配置私有缓存和共享缓存
  - 使用 **Expires** **Cache-Control** 头部, 配合 **ETag** 和 **Last-Modified**



- 图片可以使用CSS sprite, 或者使用base64编码



- **尽量 合并 和 压缩 CSS和JavaScript文件**

  - 使用webpack这类打包工具
  - 服务器发送时 使用 **Content-Encoding: gzip, deflate**

  

- **避免redirect**



- **减少cookie的大小, 减少对cookie的使用**





#### 并行请求

- **内容分发网络 (CDN)**
  - 可以CNAME到一个延迟较低的节点 (**减少网络延迟**)
  - 突破最大并发数限制
  - 还有负载均衡的效果



#### 降低延迟

- DNS时间
- CDN





## 资源



#### 懒加载

**将不关键的资源延后加载**

- 利用滚动事件, 只加载自定义区域
- 通过JavaScript改变图片的`src`来实现



#### CSS/JavaScript

- 压缩混淆
- 从外部引入



**CSS**

- 使用link标签, 放到页面顶部

- 避免使用CSS表达式

  

**JavaScript**

- 脚本放到页面底部
- 精简代码





## 优化资源加载

#### 资源加载位置

- CSS放在head中
- JavaScript文件放在body底部



#### 资源加载时机

**异步script标签** (defer, async)

**模块按需加载**



**图片懒加载**

在SPA等业务逻辑比较复杂的系统中, 可以根据 **路由** 来加载页面需要的业务模块







## 代码优化



#### CSS

- 利用CSS "从后向前匹配" 的匹配规则

- 减少CSS表达式的使用
- 减少页面重绘, 重排的属性的使用, 比如可以使用 transform (只会导致Composite)



#### JavaScript

- 尽量减少对于DOM操作的次数, 或者批量操作DOM
- 防抖, 节流
- 图片懒加载









## 其他

- 使用AJAX缓存
- 延迟加载, 按需加载, 懒加载 (图片懒加载)



## 





