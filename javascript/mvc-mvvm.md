# MVC, MVVM





## 为什么会有MVC

- 互联网前端业务逻辑的日趋复杂
- 将开发重心从DOM操作, 转移到数据操作, 将DOM操作与程序逻辑解耦

- 三个层次分开, 解耦. 适于后期维护等



## 为什么会有MVVM

双向绑定之后, 不用再把精力放在DOM上





## MVC

- 三部分:
  - model, 数据
  - view, 视图层
  - controller, 用户交互层



#### model

- 存放数据对象.



#### view



#### controller

**控制器是model, view的纽带**



- 





## 为什么由mvc转向mvvm





## 双向数据绑定

**指的是view和viewmodel之间的数据绑定**



#### View到ViewModel

**使用onChange事件**

- **View**的onChange事件触发时, 修改**ViewModel**



#### ViewModel到View

- `innerText`, `innerHTML`