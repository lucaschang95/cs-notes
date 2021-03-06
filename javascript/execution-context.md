# 执行上下文 (execution context)

执行上下文定义了一个**函数执行时的环境**



**执行上下文栈 (execution context stack)**

**在JavaScript代码开始执行时, 首先进入全局环境, 此时创建全局执行上下文, 并入栈, 之后调用函数时创建函数执行上下文并入栈. 当处于栈顶的代码执行完毕后, 出栈.**





## 执行上下文

**最重要的三个属性**

- 变量对象 (variable object, VO)
  - 包括: `arguments`, 函数声明, 变量声明

- 作用域链 (Scope chain, SC)
- "this" variable





## 创建阶段

#### 创建变量对象 (variable object)

1. 函数的形参 (如果是函数上下文)
   - 没有实参, 则赋值`undefined`
2. 函数声明
   - 如果变量对象已经存在相同名称的属性, 则完全替换这个属性
3. 变量声明
   - 名称和对应值(undefined)被创建
   - 如果已经和形参或者函数名称相同, 则变量声明不会干扰

**变量提升：函数声明优先级高于变量提升**



#### 创建作用域链 (scope chain)

- 在函数声明时, 函数的词法作用域确定的作用域链被保存到函数的`[[scope]]`属性中
- 执行函数时, 创建执行上下文, 赋值`[[scope]]`到执行上下文中
- 把变量对象压入作用域链的, 形成最终的作用域链



#### this

- 决定this的值
  - 是在函数被调用时候确定的
  - 箭头函数中, this是声明时候确定的





## 执行阶段

走一遍函数

