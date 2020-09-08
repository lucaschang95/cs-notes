# 数据类型 (data type)

Date对象单独拉出去说

## 判断数据类型

1. typeof

   - 返回值：string，number，boolean，undefined，object，symbol

2. instanceof

   

3. Object.prototype.toString.call(obj)
   1. [object String]，[object ]



## 弱相等 (`==`)

#### 基本类型

- 两个类型相同, 直接比较 (===)
- 类型不同, 转换为number比较



#### 基本类型与引用类型

- 引用类型降为基本类型 (`ToPrimitive()`)
- string不需要变为number, 但是boolean需要



#### 引用类型

- 直接使用强等 (===)

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





#### 弱等（==）和全等（===）

弱等先进行隐式类型转换，在进行全等比较

- 弱等下，undefined == null。全等下，undefined 不等于null
- 弱等时候，同类型直接比较
- 弱等时候，两个都是基本类型，会变为number类型
- 弱等时候，基本类型和引用类型比较，将引用类型变为基本类型，基本类型如果不是number和string，转为number





## 类型转换

js中有4种隐式类型转换，转为string，number，boolean，primitive（转为基本类型）



#### 转为number

- undefined：变为NaN
- null：变为+0
- boolean：变为1和0
- string：尝试转换，失败变为NaN

#### 转为string

- undefined和null：'undefined'和'null'
- true和false：'true'和'false'
- number：转为相应的string

#### 转为boolean

- falsy value：null，undefined，0，NaN，空字符串



#### 转为primitive

- valueOf()和toString()



#### 加号涉及到的类型转换

取决于加号两边的数据类型

- 有字符串，另一边转成字符串
- 有数字，且另一边不是字符串



#### 转为Number的场景

算数运算符，自增自减

string使用算数运算符进行比较，会把它们变为unicode进行比较



## 参考文献

- js隐式类型转换： https://juejin.im/post/6844903880015216653

