# ComputerNetwork
knowledge of ComputerNetwork

## 计算机网络概述
----
计算机网络的**概念**、**组成**、**功能**、**分类**

网络包含计算机网络。

计算机网络：是一个将分散的、具有独立功能的计算机系统，通过通信设备与线路连接起来，由功能完善的软件实现资源共享和信息传递的系统。

计算机网络是互联的、自治的计算机集合。（互联：互联互通，自治：无主从关系）

**计算机网络的5大功能：**
1. 数据通信（连通性）
2. 资源共享（硬件、软件、数据的共享）
3. 分布式处理：Hadoop平台
4. 提高可靠性
5. 负载均衡

**计算机网络的组成**
1. 组成部分 硬件、软件、协议
2. 工作方式 边缘部分 用户直接使用 C/S方式 P2P方式
    核心部分 边缘于部分服务
3. 功能组成 通信子网 实现数据通信
    资源子网 实现资源共享/数据处理

**计算机网络的分类**
1. 按分布范围分 广域网WAN 城域网MAN 局域网WAN 个人区域网PAN
2. 按使用者分 公用网、专用网
3. 按交换技术分
4. 按拓扑结构分 广域网通常使用网状型
5. 按传输技术分 广播式网络 共享公共通信信道
               点对点网络 使用分组存储转发和路由选择机制


## 计算机网络概述
----
标准化工作及相关组织

标准的分类 法定标准：由权威机构制定的正式的、合法的标准 OSI
           事实标准：某些公司的产品在竞争中占据了主流 TCP/IP

RFC（Request For Comments）因特网标准的形式
1. 因特网草案
2. 建议标准
3. 草案标准
4. 因特网标准


### 性能指标

**速率**：数据率、数据传输率或比特率，单位：1kb/s, 1Mb/s……（此处b为bit，进制1000）
（而在形容存储容量是，使用Byte为单位，进制1024）

**带宽**：单位时间内能通过的最高数据率，单位是“比特每秒”。（网络设备所支持的最高速度，如交换机、wifi）
吞吐量：单位同带宽

**时延**：指数据从网络的一端发送到另一端所需的时间，单位是s。
      包括：发送时延、传播时延、排队时延和处理时延

**时延带宽积**：传播时延与带宽的乘积，指同一时间仍在传播的数据总量

**往返时延（RTT）**：从发送方发送开始，到发送收到接收方的确认。
- RTT为传播时延的2倍

**利用率**：信道利用率 网络利用率

## 计算机网络体系结构与参考模型
----
##### 发送文件前要完成的工作：
1. 发起通信的计算机必须将数据通信的通路进行激活。
2. 要告诉网络如何识别目的主机。
3. 发起通信的计算机要查明目的主机是否开机，并且与网络连接正常。
4. 发起通信的计算机要弄清楚，对方计算机中文件管理程序是否已经做好准备工作。
5. 确保差错和意外可以解决。

##### 分层的基本原则
1. 各层之间相互独立，每层只实现一种相对独立的功能。
2. 每层之间界面自然清晰，易于理解，相互交流尽可能少。
3. 结构上可分割开。每层都采用最合适的技术来实现。
4. 保持下层对上层的独立性，上层单向使用下层提供的服务。
5. 整个分层结构应该能促进标准化工作。

网络体系结构是从功能上描述计算机网络结构。

计算机网络结构简称网络体系结构是分层结构。

每层遵循某个/些网络协议以完成本层功能。

计算机网络体系结构是计算机网络的各层及其协议的集合。

计算机网络分层结构：
- 7层OSI参考模型（法定标准）
- 4层TCP/IP参考模型（事实标准）

国际标准化组织（ISO）于1984年提出开放系统互连（OSI）参考模型。

|  |     OSI七层模型   |                   TCP/IP协议4层模型 |
|----|:----:|----|
|7|应用层     |应用层：向用户提供应用服务时通信的活动|    
|6|表示层     |传输层：提供两台计算机之间的数据传输|
|5|会话层     |网络层：处理在网络上流动的数据包
|4|传输层     |链路层：用来处理连接网络的硬件部分
|3|网络层     |
|2|数据链路层 |
|1|物理层     |

通信过程类似打包、运输和拆包的过程。

##### OSI各层模型

**应用层**：所有能和用户交互产生网络流量的程序，如：QQ。

**表示层**：用于处理在两个通信系统中交换信息的表示方式（语法和语义）。
- 功能一：数据格式变换，如将比特流转换为图片。
- 功能二：数据加密解密，如密码。
- 功能三：数据压缩和恢复。

**表示层**通常包含在应用层中。

**会话层**：向表示层实体/用户进程提供建立连接并在连接上有序地传输数据。
这是会话，也是建立同步（SYN）。
- 功能一：建立、管理、终止会话
- 功能二：使用校验点可使会话在通信失效是从教研点/同步点继续恢复通信，实现数据同步。（适用于大文件）

传输层：负责主机中两个进程的通信，即端到端的通信。传输单位是报文段或用户数据包。
资源子网和通信子网之间的接口。
- 功能一：可靠传输、不可靠传输
- 功能二：差错控制
- 功能三：流量控制
- 功能四：复用分用

**网络层**：把分组从源端传送到目的端，为分组交换网上的不同主机提供通信服务。
网络层传输单位是数据报。
- 功能一：路由选择（路由算法）
- 功能二：流量控制
- 功能三：差错控制
- 功能四：拥塞控制，全局宏观

数据链路层：把网络层传下来的数据报组装成帧

物理层：在物理媒体上实现比特流的透明传输。


#### TCP/IP参考模型

|OSI参考模型 | TCP/IP参考模型 |      TCP/IP协议栈|
|----|----|----|
|应用层  |       应用层     |         HTTP FTP DNS|
|表示层   |      1          |          |
|会话层    |     1|
|传输层    |     2传输层    |          TCP UDP|
|网络层    |     3网际层    |          IP|
|数据链路层 |    4网络接口层 |         Ethernet ATM Frame Relay|
|物理层   |      4||

##### OSI参考模型与TCP/IP参考模型相同点
1. 都分层
2. 局域独立的协议栈的概念
3. 可以实现异构网络互联

##### 不同点：
1. OSI定义三点：服务、协议、接口
2. OSI先出现，参考模型先于协议发明，不偏向特定协议。
4. TCP/IP设计之初就考虑到易购网互联问题，将IP作为重要层次。

**5层参考模型 综合了两者的优点 通用的模型**
|应用层     | 支持各种网络应用 FTP SMTP HTTP|
|:----:|----|
|传输层  |    进程-进程的数据传输 TCP UDP|
|网络层     | 源主机到目的主机的数据分组路由与转发 IP ICMP OSPF|
|数据链路层 | 把网络层传下来的数据报组装成帧 Ethernet PPP|
|物理层    |  比特传输|


## 通信基础
----

物理层基本概念：物理层解决了如何在连接计算机的传输媒体上传输数据比特流。
物理层主要任务：确定与传输媒体借口有关的一些特性。（定义标准）
1.机械特性 定义物理连接的特性，规定物理连接时所采用的规格、接口形状、引线数目、引脚数量和排列情况。
2.电气特性 规定传输二进制位是，线路上信号的电压范围、阻抗匹配、传输速率和距离限制等。
3.功能特性 指明某条线上出现的某一电平表示何种意义，接口部件的信号线的用途。
4.规程特性（过程特性） 定义各条物理线路的工作规程和时序的关系。


数据通信基础知识
分为：源系统、传输系统、目的系统

数据通信相关术语
通信的目的是传送消息。
数据：传送信息的实体，通常是有意义的符号序列。
信号：数据的电气/电磁的表现，是数据在传输过程中的存在形式。（包括数字信号，模拟信号）
信源：产生和发送数据的源头。
信宿：接收数据的终点。
信道：信号的传输媒介。一条通信线路包含一条发送信道和一条接受信道。

三种通信方式
从通信双方信息的交互方式看，可以有三种基本方式：
1.单工通信 只有一个方向的通信而没有反方向的交互，仅需要一条信道。
2.半双工通信 通信的双方都可以发送或接受信息，但任何一方都不能同事发送和接收，需要两条信道。
3.全双工通信 通信双方可以同时发送和接受信息，也需要两条信道。

两种数据传输方式
串行传输：速度慢，费用低，适合远距离。
并行传输：速度快，费用高，适合近距离。（用于计算机内部数据传输）


码元：码元是指用一个固定时长的信号波形（数字脉冲），代表不同离散数值的基本波形，数数字通信中数字信号的计量单位，这个时长内的信号成为k进制码元，而该时长称为码元宽度。当码元的离散状态有M个时，此时码元称为M进制码元。

速率：速率也叫数据率，是指数据的传输速率，表示单位时间内传输的数据量。可以用码元传输速率和信息传输速率表示。
码元传输速率：调制速率，一秒内传输码元的个数，信号变化的次数。单位：波特（Baud）。
码元传输速率与进制无关。
波特率和比特率只有在码元是二进制码元的时候相等。


编码与调制
基带信号与宽带信号
基带信号：将数字信号直接用电压表示，再送到数字信道上去传输（基带传输）。
宽带信号：将基带信号进行调制后形成的频分复用模拟信号，再传送到模拟信道上去传输。
数据——数字信号 编码
数据——模拟信号 调制

数字数据编码为数字信号
1.非归零编码 NRZ  高1低0 编码容易实现，但没有检错功能，且无法判断一个码元的开始和结束，以至于收发双方难以保持同步。
2.曼彻斯特编码  前低后高为1，前高后低为0.
3.差分曼彻斯特编码 同1异0 若码元为1，则前半个码元的电平与上一个码元的后半个电平相同。自同步，抗干扰能力强于曼彻斯特编码。
4.归零编码 RZ   信号电平在一个码元之内都要恢复到零。
5.反向不归零编码 NRZI   信号电平翻转表示0，信号电平不变表示1.
6.4B/5B编码 在比特流中插入额外的比特以打破一连串的0或1，就是用5个比特来编码4个比特的数据。其编码效率为80%.

奈氏准则&香农定理
影响失真的因素：1.码元传输速率
                2.信号传输距离
                3.噪声干扰
                4.传输媒体质量

奈氏准则（采样定理）：在理想低通条件下，为了避免码间串扰，极限码元传输速率为2WBaud，W是信道带宽，单位是Hz。

香农定理：信道的极限数据传输速率：Wlog2(1+S/N) (b/s)


第三章
1.链路层的功能
2.链路层的两种信道
3.局域网、广域网
4.链路层的设备

数据链路层的基本概念
结点：主机、路由器
链路：网络中两个结点之间的物理通道，链路的传输介质主要有双绞线、光纤和微博。分为有线链路、无线链路。
数据链路：网络中两个结点间的逻辑通道，把实现控制数据传输协议的硬件和软件加到链路上就构成了数据链路。
帧：链路层的协议数据单元，分装网络层数据报。

数据链路层功能概述：数据链路层在物理层提供服务的基础上向网络层提供服务，其最基本的服务试讲院子网络层来的数据可靠地传输到相邻结点的目标机网络层。其主要作用是加强物理层传输原始比特流的功能，将物理层提供的可能出错的物理连接改造成为逻辑上无差错的数据链路，使之对网络层表现为一条无差错的链路。
功能一：为网络层提供服务。无确认无连接服务，有确认无连接服务，有确认面向连接服务。
功能二：链路管理，即连接的建立、维持、释放（用于面向连接的服务）。
功能三：组帧。
功能四：流量控制。限制发送方哦~
功能五：差错控制（帧错/位错）

封装成帧：在一段数据的前后部分添加首部和尾部，这样就构成了一个帧。接收端在收到物理层上交的比特流后，就能根据首部和尾部的标记，从收到的比特流中识别帧的开始和结束。
首部和尾部一个重要作用：帧定界
帧同步：接收方应当能从比特流中区分出帧的起始和终止。  

透明传输：不管数据是什么样的比特组合，都应当能够在链路上传送。

1.字符计数法
帧首部使用一个计数字段来标明帧内字符数。
缺点：鸡蛋装在一个篮子里

2.字符填充法（防止输入的数据与SOH，EOT一样）
ASCII码无需顾虑
非ASCII码采用字符填充法实现透明传输。
具体实现过程：控制信息前面加上转义字符。（转义字符也是8比特字符）

3.零比特填充法
首尾标志符是一样的。（01111110）
数据部分：在发送端，扫描整个信息字段，只要是连续5个1，就立即填入1个0。
                在接收端，先确定边界，再用硬件对比特流进行扫描，发现连续5个1时，删除后面的0。
保证了透明传输，比特流中可以传送任意比特组合。

4.违规编码法
诸如曼彻斯特编码，均为高-低，低-高组合，可以用高-高，低-低来定义帧的起始和终止。实现的方法比较简单。

目前比较普遍使用的方法是零比特填充法和违规编码法。

差错控制（检错编码）
差错从何而来
全局性  1.由于线路本身电气特性所产生的随机噪声（热噪声）
局部性  2.外界特定的短暂原因造成的冲击噪声
差错  位错 比特位出错
      帧错 丢失 重复 失序

数据链路层的差错控制
差错控制  检错编码 奇偶校验码 循环冗余码
          纠错编码 海明码

物理层编码针对的是单个比特，而数据链路层的编码针对的是一组比特。

冗余编码：在数据发送之前，先按某种关系附加上一定的冗余位，构成一个符合某一规则的码字后再发送。当要发送的有效数据变化时，相应的冗余位也随之变化，使得码字遵从不变的原则。接收端根据收到码字是否符合原规则，从而判断是否出错。

检错编码-奇偶校验码
n-1位信息元，1位校验元（校验信息元中1的个数是奇数个还是偶数个）

奇偶校验码特点：检错能力为50%

CRC循环冗余码 发送端：发送的数据码除以生成码得到冗余码，并添加到尾部。
              接收端：接收到的数据直接除以生成码，为0，则接收。否则舍弃。
凡是接收端数据链路层接受的帧，我们都能以接近1的概率认为这些帧在传输过程中没有产生差错。

纠错编码-海明码
海明码：发现双比特错，但只能纠正单比特错。

工作流程：
确定校验码位数r -> 确定校验码和数据的位置 -> 求出校验码的值 -> 检错并纠错

数据链路层的流量控制
较高的发送速度和较低的接收能力的不匹配，会造成传输出错，因此流量控制也是数据链路层的一项重要工作。

流量控制的方法
停止-等待协议 （发送窗口大小=1，接收窗口大小=1）
每发送完一个帧就停止发送，等待对方的确认，在收到确认后再发送下一个帧
后退N帧协议   发送窗口大小>1，接收窗口大小=1
选择重传协议  发送窗口大小>1，接收窗口大小>1

滑动窗口解决：1.流量控制（收不下就不给确认，想发也发不了）
              2.可靠传输（发送方自动重传）


停止等待协议
1.为什么要有停止-等待协议
除了比特出差错，底层信道还会出现丢包问题。（丢包：物理线路故障、设备故障、病毒攻击、路由信息错误等原因，会导致数据包的丢失。）

停止等待协议+自动超时重传
1.发送完一个帧后，必须保留副本。
2.数据帧和确认帧必须编号。

传输数据使用的两种链路
点对点链路， 广播式链路

纯ALOHA协议的思想：不监听信道，不按时间槽发送，随机重发。想发就发。
冲突如何检测？
如果发生冲突，接收方就会检测出差错，然后不予确认，发送方在一定时间内收不到就会判断发生冲突。
冲突如何解决？
超时后等一随机时间再重传。

时隙ALOHA协议
时隙ALOHA协议的思想：把时间分成若干个相同的时间片，所有用户在时间片开始时刻同步接入网络信道，若发成冲突，则必须等到下一个时间片开始时刻再发送。

CSMA协议（载波监听多路访问协议 carrier sense multiple access）
CS：载波侦听/监听，每一个站在发送数据之前要检测一下总线上是否有其他计算机在发送数据。
协议思想：发送帧之前，监听信道。

CSMA/CD协议，从属于CSMA协议（CD: collision detection）
边发送边监听：半双工网络
当重传16次仍不能成功是，说明网络太拥挤，认为此帧永远无法正确发出，抛弃此帧并向高层报告出错。

CSMA/CA协议（CA: collision avoidance）
发送数据前，先检测信道是否空闲。
空闲则发出RTS（request to send），RTS包括发射端的地址、接收端的地址、下一份数据将持续发送的时间等信息；信道忙则等待。
接收端收到RTS后，将响应CTS（clear to send）。
发送端收到CTS后，开始发送数据帧（同时预约信道：发送方告知其他站点自己要传多久数据）。
接收端收到数据帧后，将用CRC来检验数据是否正确，正确则响应ACK帧。
发送方收到ACK就可以进行下一个数据帧的发送，若没有则一直重传至规定的重发次数为止。

轮询访问介质访问控制
轮询协议：主节点轮流“邀请”从树节点发送数据

令牌传递协议：
令牌：一个特殊格式的MAC控制帧，不含任何信息
控制信道的使用确保同一时刻只有一个节点独占信道。
每个节点都可以在一定的时间内（令牌持有时间）获得发送数据的权利，并不是无限制的持有令牌。
问题：1. 令牌开销
          2. 等待延迟
          3. 单点故障
采用令牌传送方式的网路常用于负载较重、通行量较大的网络中。

MAC协议总结

介质访问控制  静态划分信道----信道划分介质访问控制  频分多路复用FDM
                                                                                时分多路复用TDM
                                                                                波分多路复用WDM
                                                                                码分多路复用CDM
                     动态分配信道----轮询访问介质访问控制  令牌传递协议
                                        ----随机访问介质访问控制  ALOHA协议
                                                                                CSMA协议
                                                                                CSMA/CD协议
                                                                                CSMA/CA协议

  局域网基本概念和体系结构
局域网（Local Area Network）：
特点1：覆盖的地理范围较小
      2：使用专门的传输介质
      3：通信延迟时间短，可靠性较高
      4：各站为平等关系
      5：多采用分布式控制和广播式通信，能进行广播和组播。
决定局域网的主要要素为：网络拓扑，传输介质与介质访问控制方法。
局域网拓扑结构：星型 总线型 环形 树形
常用的为：总线型

IEEE 802标准
IEEE 802系列标准是IEEE 802 LAN/MAN标准委员会制定的局域网、地域网技术标准（1980年2月成立）。其中最广泛使用的有以太网、令牌环、无线局域网等。这一系列标准中的每一个子标准都由委员会中的一个专门工作组负责。

以太网（Ethernet）
以太网指的是由Xerox公司创建并由Xerox、Intel和DEC公司联合开发的基带总线局域网规范，是当今现有局域网采用的最通用的通信协议标准。以太网络使用CSMA/CD技术。
以太网在局域网各种技术中占统治性地位：
1. 造价低廉
2. 是应用最广泛的局域网技术
3. 比令牌环网、ATM网便宜，简单
4. 满足网络速率要求：10 mb/s - 10 Gb/s

IEEE 802.3: IEEE 802委员会802.3工作组制定的第一个IEEE以太网标准。

以太网提供无连接、不可靠的服务
无连接：发送方和接收方无“握手过程”。
不可靠：不对发送方的数据帧编号，接收方不向发送方进行确认，差错帧直接丢弃，差错纠正由高层负责。

以太网拓扑：逻辑上总线型，物理上星型。

适配器与MAC地址
计算机与外界有局域网的连接是通过通信适配器的。
网络接口卡NIC（network interface card），适配器上装有处理器和存储器。
ROM上有计算机硬件地址MAC地址。
在局域网中，硬件地址又称为物理地址，或MAC地址（实际上是标识符）。
MAC地址：每个适配器有一个全球唯一的48位二进制地址，前24位代表厂家（由IEEE规定），后24位由厂家自己制定。常用6个HEX表示，如02-60-8c-e4-b1-21。

IEEE 802.11 无线局域网的通用的标准，它是由IEEE所定义的无线网络通信的标准。

广域网
广域网（WAN，Wide Area Network），通常跨接很大的物理范围，几十公里到几千公里，它能连接多个城市或国家，形成国际性的远程网络。
广域网的通信子网主要是用分组交换技术。广域网的通信子网可以利用公用分组交换网】卫星通信网和无限分组交换网。它将分布在不同地区的局域网或计算机系统互联起来，达到资源共享的目的。Internet是世界范围内最大的广域网。

PPP协议的特点
点对点协议PPP（Point - to - Point Protocol）是目前使用最广泛的数据链路层协议，用户使用拨号电话接入因特网时一般都是用PPP协议。

链路层扩展以太网
网桥&交换机
网桥根据MAC帧的目的地址对帧进行转发和过滤。当网桥收到一个帧时，并不向所有接口转发此帧，而是先检查此帧的目的MAC地址，然后再确定将该帧转发到哪一个接口，或者是把它丢弃（即过滤）。
网桥优点：
1. 过滤通信量，增大吞吐量。
2. 扩大了物理范围。
3. 提高了可靠性。
4. 可互联不同物理层、不同MAC子层和不同速率的以太网。

以太网交换机的两种交换方式
直通式交换机、存储转发式交换机
存储转发式交换机：将帧放入高速缓存，并检查是否正确，正确则转发，错误则丢弃。延迟大，可靠性高，可以支持具有不同速率的端口的交换。

冲突域：在同一个冲突域中每一个节点都能收到所有被发送的帧。简单地说只能有一台设备发送信息的范围。
广播域：网络中能接收任意设备发出的广播帧的所有设备的集合。简单地说如果站点发出一个广播信号，所有能接收到这个信号的设备范围称为一个广播域。

|   |   能否隔离冲突域  |   能否隔离广播域|
|----|----|----|
|物理层设备（中继器、集线器）|    false   |  false|
|链路层设备（网桥交换机）    |    true    |   false|
|网络层设备（路由器）       |      true   |     true|

网络层
主要任务是把分组从源端传到目的端，为分组交换网上的不同主机提供通信服务。
分组是把数据报切割而来的数据片段。
功能一：路由选择与分组转发（最佳路径）
功能二：异构网络互连
功能三：拥塞控制 （采取措施、缓解拥塞）

### 数据交换方式
----
数据交换可以减少链路

##### 数据交换分为：
1. 电路交换
2. 报文交换
3. 分组交换
  1. 数据报方式
  2. 虚电路方式

因特网使用分组交换。

#### 几种传输单元名词辨析
|应用层|报文|
|----|:----:|
|传输层|报文段|
|网络层|IP数据段，分组|
|数据链路层|帧|
|物理层|比特流|


每个分组都携带源和目的地址。
路由器根据分组的目的地址转发分组：基于路由协议/算法构建转发表；检索转发表；每个分组独立选路。

IP数据报格式：首部 + 数据部分
首部：固定部分（20 byte） + 可变部分

IP数据报分片
最大传送单元MTU：链路层数据帧可封装数据的上限
以太网的MTU是1500字节

IP地址
IP编址的历史阶段

分类的IP地址

IP地址：全世界唯一的32位/ 4字节的标识符，标识路由器、主机的接口

IP地址::={<网络号><主机号>}

分类的IP地址
A类（1 ~ 126）：网络号占1B,开头为0
B类（128 ~ 191）：网络号占2B,开头为10
C类（192 ~ 223）：网络号占3B，开头为110

私有IP地址

|地址类别|地址范围|网段个数|
|----|----|----|
|A类|10.0.0.0 ~ 10.255.255.255|1|
|B类|172.16.0.0 ~ 172.31.255.255|16|
|C类|192.168.0.0 ~ 192.168.255.255|256|

路由器对目的地址是私有IP地址的数据报一律不进行转发

NAT Network Address Translation 网路地址转换 

网络地址转换NAT
网络地址转换NAT（Network Address Translation）：在专用网连接到因特网的路由器上安装NAT软件，安装了NAT的叫NAT路由器，他至少有一个有效的外部全球IP地址
NAT translates a set of IP addresses to another set of IP addresses
简而言之， NAT就是一个Table.
NAT helps preserve the limited amount of IPv4 public IP addresses.

NAT转换表

|WAN端|LAN端|
|----|----|
|172.38.1.5：40001|192.168.0.3：30000|
|172.38.1.5:40002|192.168.0.4:30001|

当数据通过NAT路由器时根据转换表进行转换

#### 子网划分与子网掩码
分类的IP地址的弱点：
1. IP地址的空间利用率有时很低。
2. 两级IP地址不够灵活

##### 子网划分：
- 两级IP地址：网络号 + 主机号
- 三级IP地址：网络号 + 子网号 + 主机号
- 某单位划分子网后，对外仍表现为一个网络，即本单位外的网络看不见本单位内子网的划分。

子网掩码
- 二级IP地址 145.13.3.10
- 两级IP地址的子网掩码：255.255.0.0（二进制下为16个1后面有16个0）（**网络号部分全1，主机号部分全0**）
- 三级IP地址 145.14.3.10
- 三级IP地址的子网掩码：255.255.255.0（**网络号 + 子网号部分全1，主机号部分全0**）
- 子网掩码与IP地址按位与，就得到了子网的网络地址145.14.3.0

路由器转发分组的算法：
1. 提取目的IP地址
2. 是否直接交付
3. 特定主机路由
4. 检测路由表中有误路径
5. 默认路由0.0.0.0
6. 丢弃，报告转发分组出错

#### 无分类编址CIDR
无分类域间路由选择
1. 消除了传统的A类，b类和C类的地址以及划分子网的概念。
  - CIDR记法：IP地址后加上"/"，然后写上网络前缀的位数，如：128.14.32.0/20
2. 融合了子网地址和子网掩码，方便子网划分

#### 构成超网
- 将多个子网聚合成较大的子网，叫做构成超网，或路由聚合。
- 方法：将网络前缀缩短

#### 最长前缀匹配
- 使用CIDR时，查找路由表可能得到几个匹配结果，应选择具有最长网络前缀的路由。前缀越长，地址快越小，路由越具体。

### ARP协议
- ARP高速缓存（IP地址与MAC地址的映射）
- 由于在实际网络的链路上传送数据帧时，最终必须使用MAC地址
- ARP协议：完成主机或路由器IP地址到MAC地址的映射。（解决下一跳走哪儿的问题）
- ARP协议使用过程：检查ARP高速缓存，有对应表项则写入MAC帧，没有则用目的MAC地址为FF-FF-FF-FF-FF-FF的帧封装并广播ARP请求分组，同一局域网中所有主机都能收到该请求。目的主机收到请求后就会向源主机单薄一个ARP相应分组，源主机收到后将此映射写入ARP缓存（10-20 min 更新一次）

### DHCP (Dynamic Host Configuaration Protocol)
动态主机配置协议, 是一个**局域网**的网络协议

DHCP有三种机制分配IP地址
- Autoamtic Allocation
- Dynamic Allocation
- Mannual Allocation

- 静态配置 动态配置
- 静态配置 有IP地址 子网掩码 默认网关
- 动态配置 由DHCP服务器完成

动态主机配置协议DHCP是应用层协议，使用客户/服务器方式，客户端和服务端通过GM博方式进行交互，基于UDP。

- DHCP提供即插即用的联网机制，主机可以从服务器动态获取IP地址、子网掩码、默认网关、DNS服务器与IP地址
1. 主机广播DNCP发现报文
2. DHCP服务器广播DNCP提供报文
3. 主机广播DNCP请求报文
4. DHCP服务器广播DHCP确认报文

#### ICMP协议 网际控制报文协议
为了更有效地转发IP数据报和提高交付机会


IPv6协议
----
从根本上解决地址耗尽问题，改进首部格式（快速处理/转发数据报）

IPv6和IPv4
1. IPv6将地址从32位（4B）扩大到128位（16B），更大的地址空间。
2. IPv6将IPv4的校验和字段彻底移除，以减少每跳的处理时间。
3. IPv6将IPv4的可选字段移出首部，变成了扩展首部，成为灵活的首部格式，路由器通常不对扩展首部进行检查，大ad提高了路由器的处理效率。
4. IPv6支持即插即用（即自动配置），不需要DHCP协议。
5. IPv6首部长度必须是8B的整数倍，IPv4首部是4B的整数倍。
6. IPv6只能在柱基础分片，IPv4可以在路由器和主机处分片。

IPv6的地址表示形式：
一般形式： 冒号十六进制记法 4BF5:AA120216:FEBC:BA5F:039A:BE9A:2170


#### IPv6向IPv4过度的策略：
- 双栈协议：双协议栈技术就是指在一台设备上同时启用IPv4和IPv6协议栈。这样的话，这台设备既能和IPv4网络通信，又能和IPv6网络通信。如果这台设备是一个路由器，那么这台路由器的不同接口上，分别配置了IPv4地址和IPv6地址，并很可能分别连接了IPv4和IPv6网络。如果这台设备是一个计算机，那么他将同时拥有IPv4和IPv6地址，并具备了同时处理这两个协议地址的功能。

- 隧道协议： 通过使用互联网络的基础设施在网络之间传递数据的方式。使用隧道传递的数据（或负载）可以是不同协议的数据帧或报。隧道协议将其他协议的数据帧或包重新封装然后通过隧道发送

#### 路由算法
最佳路由：“最佳”只能是相对于某一种特定要求下得出的较为合理的选择而已。
- 静态路由算法：管理员手动配置路由信息 简单可靠
- 动态路由算法（自适应路由算法）：路由器间彼此交换信息，按照路由算法优化出路由表项（算法复杂，增加网络负担）

RIP协议
RIP协议要求每一个路由器都维护从它自己其他每一个目的网络的唯一最佳距离记录。（经过的路由器个数）

1. 仅和相邻路由器交换信息
2. 路由器交换的信息是自己的路由表
3. 每30秒交换一次路由信息。若超过180s没有收到邻居路由器的通告，则判定邻居没了。
4. 经过若干次更新后，所有路由器的路由表都会“收敛”

OSPF协议
- 开放最短路径OSPF协议：“开放”表明OSPF协议不是受一家厂商控制，而是公开发表的；
- "最短路径优先"使用了Dijkstra提出的最短路径算法SPF
- 特征是分布式的链路状态协议

OSPF的特点：
1. 使用泛洪法向自治系统内所有路由器发送信息。而每一个相邻的路由器又再次将此信息向相邻路由器发送该信息。
2. 发送的信息就是与本路由器相邻的所有路由器的链路状态（本路由器和哪些路由器相邻，以及该链路的度量/代价 -- 费用、距离、时延）
3. 只有当链路状态发生变化时，路由器才向所有路由器发送此信息。


IP数据报的三种传播方式
1. 单播
2. 广播
3. 组播

组播提高了传输效率
属于多博泽的设备江波分配一个组播组的IP地址。（一群共同需求的主机的相同标识 ）


#### 路由器
路由器是一种具有多个输入端口和多个输出端口的专用计算机，其任务是转发分组。（分组转发 + 路由选择）
路由器中的输入和输出队列产生溢出是分组丢失的主要原因。

三层设备的区别：
- 路由器 可以互连两个不同网络层协议的网段。
- 网桥 可以互连两个物理层和链路层不同的网段。
- 集线器 不能互连两个物理层不同的网段。

### 传输层
只有主机才有的层次

传输层的功能
1. 提供进程和进程之间的逻辑通信
2. 复用和分用
3. 传输层对收到的报文进行差错检测

传输层的两个协议：面向连接的传输控制协议TCP、无连接的用户数据报协议UDP
> TCP: 传送数据之前必须建立连接，数据传送结束后要释放连接。不提供广播或多波服务。由于TCP要提供可靠的面向连接的传输服务，因此不可避免的增加了许多开销：确认】流量控制、计时器及连接管理等。（可靠，面向连接，时延大，适用于大文件。）

> UDP: 传送数据之前不需要建立连接，收到UDP报文后也不需要给出任何确认。（不可靠，无连接，实验小学，适用于小文件）

#### 传输层的寻址与端口
**端口** 是传输层的SAP，标识主机中的应用进程。
- 端口号是有本地意义，在因特网中不同计算机的相同端口是没有联系的。
- 端口号长度是16bit，能表示65536个不同的端口号


#### 套接字Sockte
- (主机IP地址，端口号)
- 在网络中采用发送方和接收方的套接字组合来识别端点，套接字全部以表示了网络中的一个主机和他上面的一个进程

### UDP协议


### TCP协议
1. TCP是面向连接（虚连接）的传输层协议。
2. 每一条TCP连接只能有两个端点，每一条TCP连接只能是点对点的。
3. TCP提供可靠交付的服务，无差错、不丢失、不重复、按需到达。
4. TCP提供全双工通信
5. TCP面向字节流

#### TCP连接管理
TCP连接的三个阶段：
- 连接建立
- 数据传送
- 连接释放
TCP连接的建立采用客户服务器方式，主动发起连接建立的应用进程叫做客户，而被动等待连接建立的应用进程叫服务器

#### TCP的连接建立
> round1: 客户端发送**连接请求报文段**，无应用层数据

SYN = 1, seq = x (random)

> round2: 服务器端为该TCP连接**分配缓存和变量**，并向客户端返回**确认报文段***，允许连接，无应用层数据

SYN = 1, ACK = 1, seq = y (random), ack = x + 1

> round3: 客户端为该TCP连接分配缓存和变量，并向服务器端返回确认的确认，可以携带数据。

SYN = 0, ACK = 1, seq = X + 1, ack = y + 1;


#### TCP的连接释放
参与一条TCP连接的两个进程中的任何一个都能终止该连接，连接结束后，主机中的资源将被释放。
> 客户端发送连接释放报文段，停止发送数据，主动关闭TCP连接。

FIN = 1, seq = u

> 服务器端会送一个确认报文段，客户到服务器这个方向的连接就释放了 -- 半关闭状态

ACK = 1, seq = v, ack = u + 1

> round3: 服务器端发完数据，界发出连接释放报文段，主动关闭TCP连接。

FIN = 1, ACK = 1, seq = w, ack = u + 1

> round4: 客户端会送一个确认报文段，再等到时间等待计时器设置的2MSL（最长报文段寿命）后，连接彻底关闭。

AKC = 1, seq = u + 1, ack = w + 1

### TCP可靠传输
可靠： 保证接收方进程从缓存区独处的字节流与发送方发出的字节流是完全一样的。

TCP实现可靠传输的机制：
1. 校验
2. 序号
3. 确认
4. 重传

TCP采用自适应算法，动态改变重传时间。

#### TCP流量控制
TCP利用滑动窗口机制来实现流量控制。

#### TCP拥塞控制
可用资源不足
> 网络中有许多资源同事呈现供应不足 --> 网络性能变坏 --> 网络吞吐量将随着输入负荷增大而下降

**拥塞控制** 防止过多的数据注入到网络中

##### 拥塞控制四种算法
1. 慢开始
2. 拥塞避免
3. 快重传
4. 快恢复


### 应用层
应用层对应用层的通信提供服务

#### DNS(Domain Name System),域名解析系统

Steps:
1. type in yahoo.com
2. find in computer's cache memory
3. send the query to resolver server, resolver server will check its own cache memory
4. send the query to root server, root server will direct to TLD (top-level domain server)
5. send the query to Authoritative name server, it is responsivle for knowing everything about the domain  

#### DDoS Distributed Denial of Service分布式拒绝服务攻击
A cyber attack on a specific server or network.
An intended purpose of disrupting normal operation.