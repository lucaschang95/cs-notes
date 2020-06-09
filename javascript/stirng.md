# String

### 1. Create a string

- string literal
  - "string text", 'string text'
- String(param)
  - param: Anything to be converted to a string
- template literals 
  - `hello ${who}`
    - 使用back-tick (``)
    - place holders ${expression} (将表达式放入dollar sign)
    - multi-line

excape: backslash `\`
concatenate: `+` `+=`

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