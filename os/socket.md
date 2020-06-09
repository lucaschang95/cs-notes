# 套接字 (socket)

**network I/O queue的一种抽象**

**进程间通信的一种方式**

- 数据转移就像文件







## 客户端socket

只有一个 **连接socket (connection socket)**

#### 过程

- 创建客户端socket
- 连接到特定端口 (host:post)



## 服务器socket

**通过socket的复制, 并与客户端socket连接**

**监听socket (listen socket)** 和 **连接socket (connection socket)**



#### 过程

- 创建服务器socket
- 将绑定到特定地址 (主机:端口)
- 监听socket (listen使其变为监听socket)
- 有请求时候, 尝试 **Accept**, 同时创建一个新的连接socket
- 成功后, **fork** 当前进程
- 父进程关闭 **connect socket**, 重新监听
- 子进程关闭 **listen socket**  继续通信

**这是一个循环**





**5个值**

- 客户端地址, 客户端端口, 服务器地址, 服务器端口, 协议





**好处**

分工

并发



https://www.cnblogs.com/liangjf/p/9900928.html