# ref

**什么时候需要使用ref**

- 处理一些`focus`, `text selection`等



**ref对象**

**`{current: null}`**





#### 创建ref

- **普通形式**

`const ref = React.createRef()`

- **钩子的形式**

`const ref = useRef(null)`

- **回调函数形式**
  
  - `<p ref={ele => {this.methodref = ele}}>`
  
  - 会把p实例绑定到`this.methodref`上



#### 绑定ref

**使用组件的ref属性进行绑定**

- 绑定ref的组件必须是**html组件**或者**类组件**





## forwardRef

**其实就是把ref当做普通变量传递给下面的组件**

```react
const class = React.forwardRef((props, ref) => (JSX))
```





**调用这个类**

- 同时要声明ref的值 (就是刚刚创建的那个ref)





**之后**

使用`ref.current`就可以访问到内部的那个元素