# 函数



## 函数

### 1. Function Declaration
#### 函数声明 (function declaration)

- `function foo() { ... }`

#### 函数表达式 (function expression)

- `let foo = function() { ... }

#### 区别

- 函数声明会有function hoisting, 而函数表达式不会





### 2. Parameter

### default parameter


### rest parameter

- represent an indefinite number of arguments as an array
- 将无穷多的实参, 以array的形式储存在了rest param这个形参中




### 3. arguments object
arguments of a function are maintained in an array-like object.
通过arguments[index]来访问各个位置的参数, 也能通过arguments.length来确定参数的长度
```javascript
arguments[i]
arguments.length
```




```javascript
var foo = function bar() {
   // statements go here
}
```
在上面这个函数内, 下面三个表达式其实是等价的:
1. bar()
2. arguments.callee()
3. foo()


#### function return function
函数的返回值可以还是一个函数, (everything is object)
利用generic function返回specific function.



### Immediately Invoked Function Expression
会直接运行这个函数
```javascript
(function () {
  // function code here
})();
```


## call apply bind method
function is also a special object, build from **function constructor**.
**call(), apply(), bind()都是用来重定义this指向对象的**
- 第一个参数是this指向的对象
- call(), apply()是直接执行. bind()返回一个新的函数, 后面必须两个括号才会被执行.
- call(), bind()的其余参数以comma形式分隔, apply()的参数以数组形式放入第二个param的位置上.


1. call (method borrowing)
call方法可以指定this关键词指向的对象
`yourFunc.call(object1, other param...)`
第0个参数指向object1, `yourFunc`里参数依次推后.

2. apply

3. bind
```javascript
let func1 = yourFunc.bind(object1, preset param...)
func1(other param...);
```

大小写的问题: 一般构造函数开头用大写





## function和object的关系

- function其实也是一个对象

- 对于function使用 **typeof** 会返回 **'function'**, 而不是 **'object'**



**Function instanceof Object**

**Object instanceof Function**

- 这两个都返回 **true**

**原因**

- **Function** 是 **Object** 的一个实例好理解
  - **JavaScript对于函数的定义就是如此**
- **Object** 其实也是一个构造函数, 所以也是函数的一个实例