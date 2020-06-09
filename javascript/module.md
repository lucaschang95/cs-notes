# Module

- 一个复杂程序, 依照一定规则, 封装成几个块(文件), 并组合在一起.
- 每个块向外部暴露一些接口(方法), 用于模块之间的通信



## Export

- 定义变量和函数时export

  - `export const  name  = 'lucas'`

- 单独使用一行代码来export

  - `export {name, age,  ...}`

- ```javascript
  export {
  	func1 as newFunciton
  	func2 as anotherFucntion
  };
  ```

- default export

  - 导出时, 使用 export { xxx, xxx, func as default }
  - `export default function() {}`
  - `export default funcName`



## Import

- named exports
  - `import { square, add } from './utils.js'` 
- default export
  - `import yourFunc from './utils.js' 会自动将default export function命名为`yourFunc`并导入

- mixed
  - `import defaultFunc, {func1, func2} from './xxx.js'`

## IIFE (Immediately Invoked Function Expression)

```javascript
let result = (function () {
    return xxx;
})();
```
- design pattern 设计模式
- 原理是闭包(closure)
- grouping operator 防止访问内部变量
- invoked function expression立即调用该匿名函数
- 通过return的object来实现通信



## 前端模块化的理解

#### 优势

- 可维护性
- 命名空间
- 可复用性



#### 模块化的实现

- 原始: 匿名函数自调用
  - 返回一个对象, 对象中包含希望暴露的方法等 (闭包)

- ES6解决方案
- Common JS



## Common JS