# 正则表达式

**Regular Expression**

## 创建

**字面量**



**RegExp构造函数**





## 标志 (flags)

#### g (global)

- `don't return after first match`

#### m (multi line)

- 此时, `^`和`$`匹配 start/end of line

#### i (insensitive)

- 大小写不敏感





## 用法

#### `RegExp.prototype.test()`

- 输入: 接受字符串, 尝试类型转换, 失败会抛出`TypeError`
- 显示匹配成功还是失败



#### `RegExp.prototype.source`



#### `RegExp.prototype.flags`



#### `RegExp.prototype.exec()`

**显示匹配结果, 失败返回null** 

**等同于`String.prototype.match()`**: 由于其返回格式不固定, 因此用拎一个比较好



#### `RegExp.prototype.lastIndex`

**`lastIndex`指向最后一次匹配匹配成功的位置 +1**



#### 同时, String的`replace()`, `search()`, `split()`都可以使用正则表达式作为参数







## 正则符号

#### 常见 Common

**`[abc]`** abc中的任意一个字符

**`[^abc]`** 除了abc的任意一个字符

**`[a-z]`** 在a-z范围内任意一个字符\

**`.`**  匹配任意一个字符

**`\s`** 匹配空白字符



#### 量词 Quantifiers

**`?`**: 0次或1次

**`*`**: 0次或多次

**`+`**: 1次或多次

**`{n}`** 重复n次



## 

