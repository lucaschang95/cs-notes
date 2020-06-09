# Spread Operator

- allow iterable expression to be expanded



## Syntax

1. function calls
2. array literals or strings
3. object literals







## Array Literals

1. Concatenation 拼接
   - 之前可以用`Array.prototype.concat()`
   - 现在, `arr1 = [...arr1, ...arr2];`



2. unshift 首部拼接
   - `arr1 = [..arr2, ...arr1];`







# Rest Parameter

- `...`出现在定义函数形参的地方, 称为*rest parameter*
- 作用: 当多个实参占据形参的位置时, 将多个实参以array的形式传入函数中