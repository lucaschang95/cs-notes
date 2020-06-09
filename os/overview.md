# 概述 (Overview)



## 操作系统概念

- 应用程序与硬件之间的中间层, 
- 管理软硬件资源, 并提供高效利用 

**裁判, 魔术师, 胶水**

- **裁判**    资源分配, 资源隔离, 资源共享, 进程通信
- **魔术师**    为应用软件提供硬件资源的抽象 (abstraction), 隐藏实现的细节

- **胶水**    提供通用的服务, 网络, io等







## 用户态切换到内核态

**中断, 异常, 系统调用**

- 中断: 异步





## 计算机中的各种周期

#### 时钟周期

大概是**晶振频率的倒数**



#### 机器周期

- 定义: 计算机执行一个基本操作的时间
- 一次基本操作需要多个时钟周期, 也就是说: **一个机器周期包含多个时钟周期**



#### 指令周期

- 定义: 计算机执行一条指令的时间
- 一条指令包含多个基本操作, 也就是说: **一个指令周期包含多个机器周期**

- **指令周期包含**:
  - **fetch**: 取出 **程序计数器 (program counter)**  中的指令
  - **decode**: 对指令解码
  - **execute**: 执行指令 (可能会用到寄存器)
  - **保存结果到寄存器**'
  - 程序计数器寄存器指向的内存地址自增  



## 定时器

必须确保控制系统能维持对CPU的控制, 防止用户程序陷入死循环



**使用定时器, 在给定时间后中断计算机**

**修改定时器的操作是特权指令**







![](http://m.qpic.cn/psc?/V13mdl0c1ilKRz/w47sCHZ1vIeYe.9hWkknXexSNp*9ETBSzY7Ds7ABJ6GVFXZy2RSGUjJ32uXn1q7He4RBVVPZgbqM7zDDQ2v3xw!!/b&bo=KwQhAysEIQMDCSw!&rf=viewer_4)