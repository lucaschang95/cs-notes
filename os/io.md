# I/O

**操作系统在计算机I/O方面的作用是管理和控制I/O操作和I/O设备**

#### Unix I/O 设计思想

- 统一性
- 使用前需打开
- Byte-oriented



#### I/O系统改善计算机效率的方法

- **I/O操作调度**
- **缓冲**
- **高速缓存**
- **假脱机**



## I/O 请求的过程

**设计到多个层: 用户程序, 内核程序, 设备驱动器, 设备控制器, 设备硬件**

- 从 **用户程序** 下沉到 **设备硬件**, 再从 **设备硬件** 上升到 **用户程序**
- 使用了 **系统调用**
- 上升阶段使用了 **中断** 和 **从系统调用中返回**









## 中断请求线

**分类**

- 非屏蔽中断
- 可屏蔽中断
  - CPU在执行关键的不可中断的指令序列前加以屏蔽



## I/O调度

**定义: 调度I/O就是确定合适的顺序来执行这些请求**

- 通过对**每个设备维护一个请求队列**来实现调度









## 直接内存访问 (DMA)

**direct-memory access**



**为什么会有DMA?**

- 一般来说, CPU通过 **programmed I/O** 来控制I/O过程
- 对于数据大量传输的设备, PIO 会大大增加CPU负担
- 因此, 将任务下放到 **DMA控制器**



**目前, 一个简单的DMA控制器已经是PC的标准部件**



**CPU只需在开始时候提供原位置, 目标位置和数据长度**





## 设备驱动程序

**从不同的I/O设备中抽象出一些通用类型, 每个通用类型都可以通过一组标准接口来访问**











## 非阻塞/异步

**非阻塞**

- 调用后马上返回, 所读数据可以小于所要求的的数据



**异步**

- 要求完整的执行, 但是执行可以在将来的某个特定时间







## 假脱机 (spooling)

**假脱机技术是低速输入输出设备与计算机交换信息的技术**



#### 输入输出井

- 磁盘上开辟的两大存储区域, 分别模拟**脱机输入/脱机输出的磁盘**



#### 特点

**1. 提高了输入输出速度**

- 可使得输入进程, 用户进程和输出进程同时工作

**2. 将独占设备改造为共享设备**

**3. 实现了虚拟设备的功能**

- 使得每个进程以为自己是独占这个输入输出设备的



## 缓冲

**缓冲区是用来保存两个设备之间所传输数据的内存区域**



#### 特点

**1. 缓冲数据流生产者和消费者的速度差异**

**2. 协调传输数据大小不一致的两个设备**

- 比如网络中, 一条信息分成若干个网络包



## 高速缓存

**可以保留数据副本的高速存储器**







## I/O保护

**方法**

- 定义所有I/O操作为内核模式指令
  - 请求操作系统代表用户程序执行I/O操作
- 内存映射和I/O端口内存位置都受到保护





## 转换成硬件操作

**unix将文件名映射为一个inode号, 响应inode包含了空间分配信息**





## 改善I/O效率

- 减少**上下文切换的次数**
- 减少**数据复制次数**
- 通过使用**轮询**减少中断频率
- 通过**使用DMA等减轻CPU负担**
- **平衡**CPU, 内存子系统, 总线和I/O的**性能**
  - 任何一处过载都会使得其他部分空闲