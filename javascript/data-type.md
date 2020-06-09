# 数据类型 (data type)


## typeof的返回值

- `boolean`, `number`, `string`, `undefined`, `object`, `function`, **Symbol**
- **注意:** null和object都会返回object





#### `Object.prototype.tostring.call(obj)`返回

- `[object String]`, `[object Array]` 等



## 数字 (number)

**数字有多种表示方法: 字面量, 十进制 (decimal), 二进制 (binary), 八进制 (octal), 十六进制 (hexadecimal), 还支持指数表示法 (exponentiation)**

- **二进制:** `0b` or `0B` 开头
- **八进制:** `0o` 开头
- **十六进制:** `0x` `0X` 开头
- **指数表示法**: 使用e或者E

3 symbolic values: `+Infinity`, `-Infinity`, `NaN`



#### 类型转换: 数字

- `parseInt()` 转为整形
- `parseFloat()` 转为浮点数



### 2. number object
Properties
- Number.MAX_VALUE
- Number.MIN_VALUE
- Number.NaN












## Boolean
true false
anything can be converted to boolean value:

- false: 0, NaN, null, undefined, empty string('')
- true: object
也可以使用Boolean(param)显式变换

#### falsy value

- string: 空字符串
- number: 0 和 NaN
- object: null
- 以及undefined

**注意: 空数组变为boolean是true的**






## Date Object
get the current date









## 弱相等 (`==`)

#### 基本类型

- 两个类型相同, 直接比较 (===)
- 类型不同, 转换为number比较



#### 基本类型与引用类型

- 引用类型降为基本类型 (`ToPrimitive()`)
- string不需要变为number, 但是boolean需要



#### 引用类型

- 直接使用强等 (===)





- 
- 
- 基本类型, 转换为数字
- 一个操作数是对象, 调用`ToPrimitive()`方法
- `undefined == null` 返回true (三个等号的时候返回false)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness





## 符号 (symbol)

#### **用作object的标识符**

- 不支持new操作符

#### 用处

- 用作object的属性, 标识一个永远不会重复的属性值
  - 比如多个库对一个对象添加一个id, 可以考虑使用symbol添加
- 用作object的某一个属性值 (举例react), 标识一个独一无二的属性值 
  - react使用一个symbol来标识一个真正的react element



#### 创建symbol

**`Symbol([description])`**

**Symbol.for(key)**

- 如果key不存在, 创建新的符号
- 如果key已经存在, 使用已有的符号
- 可用`Symbol.keyFor(sym)`查找





## 判断对象类型

#### typeof



#### instanceof



