# Explorer


### 浏览器加载时间
- 解析HTML结构
- 加载外部脚本和样式表文件
- 解析并执行脚本代码 // 部分脚本会阻塞页面的加载
- DOM树构建完成 // DOMContentLoaded 事件
- 加载图片等外部文件
- 页面加载完毕 // load事件


### 请求时间详细分布
- **Queueing**
    - 存在更高优先级的请求
    - 此源已经打开6个TCP连接
    - 留恋其正在分配磁盘缓存的空间
- **Stalled** 请求可能因为Queueing中的任何原因而停止
- **DNS Lookup** 留恋其正在解析请求的IP地址
- **Proxy Negotiation** 留恋其正在与代理服务器协商请求
- **Request sent** 正在发送请求
- **Waiting** 等待响应的第一个字节
- **Content Download** 留恋其正在接收响应
- **Receiving Push**
- **Reading Push**  



## localStorage

- key-value pairs
- 只支持string类型
- 关闭浏览器进程时清空localStorage
- `localStorage.setItem()` `localStorage.getItem()` `localStorage.removeItem()`
- 配合`JSON.stirngify()`, `JSON.parse()`使用