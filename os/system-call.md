# 系统调用

**进程需要一个系统服务时, 如exit**



## 分类

系统调用大致可分为五大类: **进程控制, 文件管理, 设备管理, 信息维护, 通信**



**进程控制**

- 结束, 放弃
- 装入, 执行
- 创建执行, 终止进程
- 取得进程属性, 设置进程属性
- 等待时间, 唤醒事件
- 分配和释放内存

**文件管理**

- 创建文件, 删除文件
- 打开, 关闭
- 读, 写, 重定位
- 取得文件属性, 设置文件属性

**设备管理**

- 请求设备, 释放设备
- 读, 写, 重定位
- 取得设备属性, 设置设备属性

**信息维护**

**通信**





## 系统调用过程

#### 1. 保存现场



#### 2. 确定中断信息

传入的是系统调用号, 通过一个table进行查找, 跳转到相应的程序进行处理



#### 3. 处理中断



#### 4. 返回





## 系统调用表

entry table, 只希望用户调用table中的系统调用

