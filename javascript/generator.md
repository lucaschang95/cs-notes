# 生成器 (generator)

**ES6, 看上去像一个函数, 但可以返回多次**



## 思路

- 使用`function* test(arguments)`
- 调用后不是执行函数, 而是产生了一个generator对象



#### 之后

- 调用next()方法
  - 返回`value`和`done`组成的object
- for...of





## 可以干什么

函数自增