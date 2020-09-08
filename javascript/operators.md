# 运算符 （operator）

Comparison operators
`==` `!=` `===` `!==` `>` `<` `>=` `<=`

- 算数运算符
  `+` Addition `-` Subtraction `*` Multiplication `/` Division `**` 
  power

- 比较运算符
- 逻辑运算符

#### 位运算符 （bitwise）

**按位与**：&

**按位或**： |

**按位异或**：^

**按位取反**：～

**左移**：<<

**右移**：>>

**无符号右移**：>>>



Logical operators `&&` `||` `!`

Assignment operators
`x = y` `x += y` `x -= y` `x *= y` `x /= y` 
`x %= y` `x **= y` `x <<= y` `x >>= y` `x >>>= y`
`x &= y` `x ^= y` `x |= y`

Conditional (ternary) operator `let greeting = (condition) ? run this code : run this code instead;`



## Strict and loose Equality

**strict:**

1. 不是相同类型, 不相等.
2. 都是null或者都是undefined, 相等.
3. 都是boolean的true或者false, 相等.
4. 其中有一个是NaN, 不相等.
5. 都是数值类型, 数值相等, 相等.
6. array, object: 指向相同对象, 相等. 指向不同对象, 不等.



**loose:**

- 相比strict多了type conversion



## Operator precedence
[Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operator_precedence)

arithmetic > realtional > logical > assignment


## Others
- `delete` 关键词
delete an object, an object's property, or an element at a specified index in an array
- `typeof` typeof operand
- `void`
- `in` in operator returns `true` if the specified property is in the specified object
- `instanceof` The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
- `...` spread operators



### Spread Operators

to expand arguments in func call, array literal, object literal

`...` 千万要记住前面是有点的
1. function call
```javascript
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction(...args);
```

2. array literals
```javascript
const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 
```

3. object literals
```javascript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
```

4. nodeList literal
将多个querySelector得到的nodeList合并





## 优先级

括号，member access，function call，new



函数调用等 > 算数运算符 > 关系运算符 > 逻辑运算符 >  赋值运算符