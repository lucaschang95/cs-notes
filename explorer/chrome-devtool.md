# chrome devtool





## network panel

#### 作用

- **查看每个资源的HTTP信息**
- **模拟不同网速 (slow 3G...)**
- **查看每个资源加载中每个过程所耗时间**
- **阻塞一个资源, 并查看它的影响**





## 资源请求时间分析

- **Queueing 排队**
  - 有更高优先级的请求时
  - 同该站点已经有了6个TCP连接
  - 正在分配空间
- **Stalled 排队停止**
- **DNS 查询**
  - resolving IP address
- **Proxy negotiation**
- **Request sent 发送请求**
- **Waiting (TTFB, tiem to first byte)**
- **Content Download**

