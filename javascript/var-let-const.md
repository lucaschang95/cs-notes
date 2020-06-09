# 变量



## 三类变量

- `var`: Declares a variable, optionally initializing it to a value.
- `let`: Declares a block-scoped, local variable, optionally initializing it to a value.
- `const`: Declares a block-scoped, read-onlu named constant.





## Difference

**三方面**

- **作用域**: `let`, `const`存在块级作用域
- **变量提升**:
  - `var`: 变量提升, 在赋值前访问为`undefined`
  - `let`和`const`: 也有变量提升, 但会处于temporal dead zone, 访问会造成ReferenceError

- **重复声明**:
  - `var`: 可以
  - `let`和`const`: 不可以

