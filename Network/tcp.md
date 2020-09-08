# TCP

**transmition control protocal, 传输控制协议**

TCP协议是**面向连接的**, **可靠的**, **基于字节流**的传输协议.



- 点对点, 面向连接
- 双向传递
- 字节流: 打包成报文段, 保证有序接收, 重复报文自动丢弃
- 流量缓冲
- 可靠的传输服务
- 拥塞控制



## 三次握手

#### 握手的目标:

- 同步Sequence序列号
- 交换TCP通讯参数
    - MSS, 窗口比例因子, 选择性确认, 指定校验和算法



#### 过程

- Client: SYN, seq = x; (同步 + 同步序列号)
- Server: SYN, seq = x + 1 ; ACK, ack = y; (确认 + 确认序列号 同步 + 同步序列号)
- Client: ACK, ack = y + 1;



#### 握手时状态变迁

- Client:
  
    - CLOSED, SYN-SENT, ESTABLISHED
- Server:
  
    - CLOSED, LISTEN, SYN-RECEIVED, ESTABLISHED
    
    


> MSS: Max Segment Size
- TCP承载数据大小, 不包含TCP头部大小
- 选择目的
    - 尽量使每个TCP Segment携带更多信息
    - 防止TCP Segment被某个设备的IP层基于MTU拆分
- 默认MSS: 536 bytes (MTU: 576 bytes - 20 bytes IP headers - 20 bytes TCP headers)
- 握手阶段协商MSS









## 四次挥手

**TCP全双工, 两个方向单独关闭**

step 1: fin

step 2: ack

 step 3: fin

step 4: ack



#### 挥手时状态变迁

- initiator(发起者)
  - ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, TIME_WAIT, CLOSED
- receiver(接受者)
  - ESTABLISHED, CLOSE_WAIT, LAST_ACK, CLOSED
- TIME_WAIT持续2MSL (maximum segment lifetime), 4分钟. 但一般服务器不会这么做.



## 重传与确认

超时重传时间: **RTTs** (加权平均往返时间)

RTO (Retranmission TimeOut)

- RTO too small
    - unnecessary retransmission
- RTO too large
    - slow reaction to losses



## 流量控制

接收方通过报文告知发送方当前接收窗口剩余大小,



#### 滑动窗口

1. Sent and Ackonwledged
2. Sent But Not Yet Acknowledged
3. Not Sent, Recipient Ready to Receive
4. Not Sent, Recipient Not Ready To Receive

发送窗口: 2 + 3
可用窗口: 3



## 拥塞控制

慢启动，拥塞避免，快速重传，快速回复

- 拥塞窗口，动态变化
- 判断出现拥塞的依据，没有按时收到确认报文

#### 慢启动 slow start

- 拥塞窗口
- 发送窗口 = min(对方接收窗口, 拥塞窗口);
- 每收到一个ACK, 拥塞窗口扩充一倍



#### 拥塞避免 congestion avoidance

- 达到阈值后, 以线性方式增加



#### 快速重传 fast retransmission

- 接收方接收到失序segment, **立刻发送它所期待的ACK序列号**
- 发送方接收到3个重复的ACK时, 不再等待RTO定时器, 立刻重发报文段



#### 快速恢复 fast recoverey

- 拥塞窗口不必降到1 (比如降低一半)即可



## 可靠传输

**校验, 序号, 确认, 重传**

- 累计确认
- 超时重传

- 动态改变重传时间



## SYN攻击

#### 攻击方法

- 攻击者发送TCP SYN
- 服务器返回ACK之后, 攻击者不进行确认



#### 后果

- 服务器收不到确认, 重复发送ACK, 浪费了大量服务器的资源





https://juejin.im/post/6844903918334377991