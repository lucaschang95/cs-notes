# Event Loop



## 为什么JavaScript是单线程

- 浏览器脚本语言, 多线程会带来问题



## 事件循环 (Event Loop)

#### 机制

- 浏览器环境只能有一个事件循环
- 事件循环可以有多个任务队列



#### 循环过程

1. 浏览器执行一个macro-task

2. 浏览器取出micro-task的的所有任务
3. 重复1, 2
4. 最终所有队列清空, 代码执行完毕.



**注意**: 第一次执行`<script>`也算是从macro-task中取出一个macro-task.

#### execution stack

**取出的, 正在执行的任务处于execution stack中**



#### macro-task

- 包括: script, `setTimeout`, `setInterval`, `setImmediate`, I/O, UI rendering



#### micro-task

- 包括: `Promise`



