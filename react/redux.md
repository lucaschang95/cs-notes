# Redux

- A predictable state container for JS app (状态容器)
- predictable, centralized, debuggable
- 解决组件间的通讯问题



# Concepts

1. store

   - `const store = createStore(mainReducer)`, 创建是需要指定一个Reducer

   - `store.getState()`获得当前状态
   - `store.subscribe(func)`参数是一个函数, 每次state变化时, 该函数都会被执行一次

2. state

   - JavaScript object 

3. action

   - JavaScript object, describes what happened
   - action must have a `type` property

4. reducer

   - 函数, 指明prevState和action时, state应该如何变化

   - function(prevState, action)  {return newState};



## 工作流程

- fa

![工作流程](http://m.qpic.cn/psc?/V13mdl0c1ilKRz/w47sCHZ1vIeYe.9hWkknXUaM9jzEVntUwHyCr4038LkIBXPv5Wqkwt0JdT3qDVQGehHB75HGkUaT1XZ9Wf4b*w!!/b&bo=mgIbApoCGwIDCSw!&rf=viewer_4)





## Steps

1. Create store, define reducer
2. Dispatch action when needed



## mapStateToProps

 



## mapDispatchToProps