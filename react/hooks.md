# 钩子 (hooks)

**use state and other React features without writing a class**

使用了**闭包**



## 状态钩子 (state hooks)

- **syntax**: `const [count, setCount] = useState(0);`
  - 其中, `count`是状态变量, `setCount`类似于`this.setState()`
  - `useState()`必须引入, 而且是named export





## 效果钩子 (effect hooks)

- **syntax**: `useEffect(callback)`
  - 你可以把`callback`称为`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`





## 注意

- 只能在最高层使用钩子