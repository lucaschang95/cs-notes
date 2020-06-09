# React



## JSX

**rendering logic is inherently coupled with other UI logic** 



#### 语法糖

- **`React.createElement(componenet, props, ...children)`**



## 虚拟DOM

#### `ReactDOM.render()`

**当我们调用这个方法时, `React.createElement()`也被调用, 形成了虚拟DOM**



#### 构建过程

- `type`是普通HTML标签, 创建标签
- `type`是function或class, 递归调用
- `props`有`children`属性, 对于每个child重复以上过程



## diff算法

- `attribute`改变, 只需通过DOM API改变属性
- `type`直接替换, 原有组件启动`componentWillUnmount`
- `children`发生变化, 通过`key`来识别, 还存在的尽量通过移动实现









## 组件 (Component)

**类似JavaScript函数, 接受props (类似参数), 返回React element**

**split the UI into independent, reusable pieces**

- 首字母大写: 否则React会把他认为是一个DOM tag

- 分类: functional component, class-based componenet



#### 两种组件的区别

- 生命周期函数 (lifecycle method)
- 事件响应函数?
- 是否能使用`React.createRef()`



#### props

**当解析时候, React看到一个componenet, 它就把JSX的attribute作为合并为props传入**

- props是只读的

**All React components must act like pure functions with respect to their props.**

(必须是pure的, 不能改变props)



#### Props vs State

| **Props**                               | **State**                                |
| --------------------------------------- | ---------------------------------------- |
| An object                               | An object                                |
| Can be used when rendering              | Can be used when rendering               |
| Changes (*from above*) cause re-renders | Changes (*from itself*) cause re-renders |
| Comes from above                        | Defined in component itself              |
| Can't be changed by comonent            | Can be changed by component itself       |



#### list处理

- 只需要返回JSX的数组即可, 可以正常render
- 每一个list-item都需要携带一个`key`属性, 



#### `this.setState()`





## 事件绑定 (method binding)

1. Bind in line

   - onClick={this.handleRemoveAll.bind(this)`
   - inefficient

2. Bind in constructor

   ```javascript
   constructor(props) {
     super(props);
     this.handleRemoveAll = this.handleRemoveAll.bind(this);
   }
   ```





## 表单 (Forms)

**controlled components**

- 在HTML中, 表单自己就会维护一个internal state

**包括**: `<input />, <textarea></textarea>, <select></select>`



#### 实现

- `<input type="text" value={this.state.value} onChange={this.handleChange} />`
  - value属性: 数据驱动视图
  - onChange属性: 视图更新驱动数据





## Portals

- syntax: `ReactDOM.createProtal(componenet, DOMnode)`
  - 把一个`component`放置在其它的一个DOM出

- Portal的事件冒泡中, 事件是按`React Tree`的形式冒泡, 虽然在实际DOM中可能不是这样的父子结构



## react优化

#### `shouldComponenetUpdate`

**`React.Component`中, `shouldComponentUpdate`是在进行deep-comparison, 可我们一般进行shallow-comparision就可以**

- 方法: 使用`React.PureComponent`
- 自己进行判断, 填充`shouldComponentUpdate`



- 对于list, 添加`key`值
- 不跨层操作DOM
- 保持稳定的DOM结构