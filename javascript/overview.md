# Overview

### Execution
Our Code --> Parser --> (to Abstract Syntax Tree) --> Conversion to machine code

### Execution Context
执行上下文(Execution Context)是JavaScript最重要的概念, 它是其他很多重要概念的基础.
- Hoisting
- Scope Chaining
- Closure
- `this`, `argument`是如何赋值的
- ...

分为: 全局执行上下文(global), 局部执行上下文(local)

执行上下文的创建:
1. 创建阶段(Creation Phase)
2. 执行阶段(Execution Phase)

创建阶段:
1. Creation of the execution context Object
 - The `arguments` object is created, containing all the arguments that were passed into the function
 - scanned for **function declarations**: for each function, a property is created in the Variable Object, pointing to the function
 - scanned for **variable declarations**
2. Creation of the scope chain
3. Determine value of the `this` variable

执行阶段
engine开始**从上到下**一次执行

outer指向函数定义时outer, 而不是运行时的outer



### var const let
|var|let const|
|:---:|:---:|
|ES5|ES6|
|function-scoped|block-scoped|
|hoisted|hoisted but in 'tempral dead zone'|
|可多次声明|不可多次声明|


var:
- ES5

let, const:




### Hoisting
变量和函数的提升, 就是因为execution context在创建阶段会被存入环境对象中, 并且赋值为`undefined`. **这造成hoisting的假象**

they are available before execution phase

相比之下, `let`定义的变量会在execution context的创建阶段赋值为`unInitialized`, 此时引用会抛出`Reference Error`




### Closure
闭包的产生: 每次调用函数会生成一个新的局部环境对象


### arguments
arguments对象中包含传入的得所有参数, arguments这一属性会存入到当前环境对象中





### Scoping
where can we access a certain variable?
在JS中, 只有function creates a scope (if..else等block都不创建)

lexical scoping: a function that is lexically within another funciton gets acces to the scope of the outer function.

### Execution Stack
执行栈取决于函数间的调用关系 


### Same Origin Policy
同源策略: 脚本只能读取和所属文档来源相同的窗口和文档的属性


### modules

import时
- 直接import
- 使用as, 同时赋予一个新的名字
- 使用*和as, 这时传入的会是一个object


### MVC

model - view - controller 三层结构



## Destructuring

- array destructuring
- object destructuring
- default value
- assign new name {a: aa, b: bb} **renaming syntax**

