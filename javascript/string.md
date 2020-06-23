# 字符串



## 创建

#### 字面量（literal）

- 使用**单引号/双引号**："string text", 'string text'



**构造函数**

- String(param)
  - param: Anything to be converted to a string





#### 模板字符串（es6）

- 字符串使用使用**反引号**包裹 (``)，支持多行（multi-line）

- 模板使用`${who}`包裹





character access

1. `str.charAt(index)`
2. `str[index]`

如何将object变为primitive?
Object.valueOf()返回的值就是string primitive

## Method

- str.split(' ') 以空格为标志, 分割成substring的array
- str.slice(beginIndex[, endIndex]) 得到substring, 左闭右开
- str.indexOf() 是否存在substring
- str.toLowerCase()
- str.toUpperCase()
- str.replace()
- str.concat()
- `str.include()`