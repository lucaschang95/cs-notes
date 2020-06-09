# React生命周期

**组件生命周期分为三部分: Mounting, Updating, Unmounting** 

**每个阶段中, 又分为三个小阶段: render phase, pre-commit phase, commit phase**

- **Render phase**: Pure and has no side effects. Maybe paused aborted or restarted by React
- **Pre-commit phase**: can read the DOM
- **Commit phase**: Can work with DOM,  run side effects, schedule updates



## Mounting阶段

- `constructor`
  - 设置初始状态, bind method
- `static getDirivedStateFromProps`
- `render`
- `componentDidMount`
  - 和DOM有关的状态设置应该放到这里



## Updating阶段

- `getDirivedStateFromProps`
- `shouldComponenetUpdate(nextProps, nextState)`
- `render`
- `getSnapshotBeforeUpdate(prevProps, prevState)`
- `componenetDidUpdate(prevProps, prevState, snapshot)`



## 组件销毁阶段

- `componentWillUnmount`



![生命周期](https://img30.360buyimg.com/mobilecms/jfs/t25060/6/729070636/343874/e9e02b6/5b7959b2N998e1ea8.jpg)





## 额外

**static getDerivedStateFromError()**



**componentDidCatch()**

可以做一些异步操作, 比如汇报错误详情, 以便进行错误监控



## 用途

- 注册事件监听事件 (`componentDidMount`), 取消事件监听事件 (`componentWillUnMount`)





## Ref

https://zhuanlan.zhihu.com/p/38030418

