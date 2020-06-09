# 内容分发网络 (CDN)

**Content Delivery Network, **

**通过在网络各处部署节点服务器, 实现将源站内容分发至所有CDN节点**

**降低访问延迟, 提高网站的响应速度**



**关键词: DNS递归查询, CNAME**



- 给源站添加CNAME
- DNS解析源站域名发现有CNAME记录

- DNS服务器会向CNAME发起请求

- CDN通过预定义好的策略将能够最快响应用户的CDN节点的IP地址返回