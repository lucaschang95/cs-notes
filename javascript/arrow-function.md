# 箭头函数 (arrow function)

- **arrow operator**:  `=>` 
- `this` keyword: 绑定在外层函数的this上

```javascript
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
```





## 箭头函数与普通函数区别

- 不能作为构造函数
- 无arguments对象
- 捕获上下文的this作为自己的this
- 无原型属性