# MVVM





## MVVM在React中的对应关系

#### Model

对应组件的方法或生命周期函数中实现的业务逻辑和`this.state`的数据



#### ViewModel

对应组件中的JSX, 它实际上是Virtual DOM的语法糖

React负责维护Virtual DOM以及对其diff运算, 

React-dom会渲染V-DOM



#### View

真实DOM和CSS



#### 绑定

JSX中的命令





## MVVM单绑和双绑的区别

- 一般: 只有表单控件需要进行双向绑定, 其他控件只需要单向绑定
- 单向数据绑定: Model自动更新到ViewModel, 但ViewModel的变化需要手动更新
- 双向数据绑定: 单向数据绑定 + 事件监听



## 组件化的理解

#### 组件的封装

- 视图的封装
- 数据的封装
- 变化的封装(数据驱动视图变化, setState)



#### 组件的复用

- prop来传递uuju
- 组件的复用





## JSX

- JSX是语法糖, 使用`React.createElement`来创建节点
- 独立的标准
- 