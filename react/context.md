# Context

#### 具体场景

- 全局变量, 如: **登录用户名**, **主题**, **首选语言**
- 避免向中间层级组件添加props







## 使用方法

#### 创建部分

1. 创建`context`变量 , 如`MyContext`(大写)
2. 使用`MyContext.Provide`, 定义一个`Provide`



#### 使用部分

1. **类组件**: `MyClass.contextType = MyContext`
   - 之后可以通过`this.context`来访问该`context`变量
2. **函数组件**: `MyContext.Consumer`
   - 接收一个函数作为子元素, 通过函数第一个参数注入context的值



## API

#### `React.createContext()`

- syntax: `React.createContext(defaultValue)` 接收的第一个参数是**默认值**



#### `Context.Provider()`

- syntax: `<myContext.Provide value={}>`



#### `Class.ContextType = Context`

- **用于类组件**
- 将某一类组件与某一`context`连接在一起
- 使用`this.context`来访问该`context`



#### `Context.consumer`

- syntax: 

```react
<Context.Consumer>
	{value => Component}
</Context.Consumer>
```

- 接收一个函数作为子元素, 函数参数为`context`的值, 返回一个react element
- react element中直接使用value访问`context`的值



## `Context.displayName`

- devTool中显示的名字