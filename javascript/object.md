# JavaScript对象

**对象有内部方法和隐式特征属性**



## 对象的内部方法

- `[[Put]]`
- `[[Set]]`
- `[[Delete]]`



## 对象的隐式特征属性

- `[[Extensible]]` 布尔值, 用来表示对象是否可以被修改
  - 与可扩展性对应的两个函数`Object.preventExtensions(obj)`和`Object.isExtensible(obj)`
- `[[proto]]` 



## 对象的属性

**属性有两种类别: 数据属性和访问器属性**



#### 属性的6个特征属性

所有对象属性都有如下特征属性

- `[[Enumerable]]`: 决定一个属性是否可以被遍历
  - `obj.propertyIsEnumerable('prop')`
- `[[Configurable]]`: 决定一个属性是否可以被配置
  - 可否使用`delete`来删除

只有数据属性有一下两个特征属性

- `[[Value]]`: 属性的值
- `[[Writable]]`: boolean, 决定该属性是否可以写入

只有访问器属性有以下两个属性:

- `[[Get]]`: getter函数内容
- `[[Set]]`: setter函数内容



#### 修改属性的特征属性

- `Object.defineProperty(obj, 'prop', descriptor)`
- `Object.defineProperties(obj, { propA: descripor, propB: descripor})`
- descriptor就是一个object, 描述enumerable等的值



#### 查看属性的特征属性

- `Object.getOwnPropertyDescriptor(obj, 'prop')`





#### 属性查找

- 查找属性 (不区分属性来源): `in`操作符
  - `'x' in obj`
- 查找私有属性:
  - `obj.hasOwnProperty('x')`



#### 属性的遍历

- `Object.keys()`
  - 自身可遍历属性名字的数组
- `for...in`
  - 还包括原型链上的属性
- `Object.getOwnPropertyNames()`
  - 自身所有属性名字的数组



## 属性分类: 按作用

- 数据属性
- 访问器属性







## 对象封印

#### 封印对象:

- 不能添加新属性
- 删除或改变属性类型
- 只能读写已有属性

#### 方法

- Object.seal()`
- `Object.isSealed()`



## 对象冻结

#### 冻结对象:

- 更进一步, 对象属性变为只读

#### 方法:

- `Object.freeze(obj)`
- `Objext.isFrozen(obj)`



## new一个对象的过程

#### 任务

- 新建一个新对象
- this指向这个对象
- 执行代码
- 返回this



#### 代码 (手动实现)

```javascript
function _new(constructor, param, ...) {
    let args = [].slice.call(arguments);
    let constructor = args.shift();
    let obj = Object.create(constructor.prototype);
    let ans = constructor.apply(obj, args);
    return typeOf ans === 'object' ? ans : obj;
}
```

- `Object.create()`等同于
  - 先创建一个空对象`new Object()`, `{}`
  - 直接定义`__proto__`属性, 完成原型对象的设置









## Object.assign

可枚举属性？

- 如果该参数不是对象，会先转换成对象



- 浅拷贝
  - 如果某个属性是对象，那拷贝得到的是引用
- 同名属性直接替换
- 数组当作对象来处理



#### 用处

- 添加属性
- 合并多个对象
- 为属性添加默认值