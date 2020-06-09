# 拷贝





## 浅拷贝

#### `Object.assign()`

- 直接返回一个浅拷贝的对象



#### 展开运算符

- syntax: `let b = {...a}`

**注意**: 以上两种方法完全等价





## 深拷贝

#### JSON方法

- syntax: `let b = JSON.parse(JSON.stringify(a))`

- 在遇到函数、 undefined 或者 symbol 的时候，该对象也不能正常的序列化