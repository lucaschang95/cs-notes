# JavaScript继承

**继承: 即我们希望一个对象能够访问另一个对象的属性, 同时能添加自己的属性和覆盖另一个对象的属性**



## 讲一讲JavaScript中的继承

- JavaScript是一门基于原型链的语言
- 当对象访问一个属性时, 会首先查找自有属性, 如果没有会在`[[proto]]`指向的原型属性中继续查找...如同攀爬一个原型链一般, 如果还没有找到会返回`undefined`



## 获得原型对象的方法

- 可以使用浏览器提供的`__proto__`属性
  - 其实是一个getter和setter, 
- `Object.getPrototypeOf()]]`





## Object.create()

- syntax: `newObj = Object.create(protoObj, propDescriptor)`
- 这种继承方式只是一次性的

#### 调用Object.create()发生了什么

1. 创建一个空对象, 并赋值给相应变量(newObj)
2. 设置该obj的隐式属性`[[proto]]`为`Object.create()`的第一个参数
3. 在该对象上调用`Object.defineProperties(obj, propDescriptor)`, 并将第二个参数传入





## 各个继承方式



#### 原型链继承

**子类型实例的__proto__指向父类一个实例**

- **`Student.prototype = new Person(), Student.prototype.constructor = Student`**
- 被作为子类实例的原型对象的那个父类实例, 所有属性和方法被被共享
- 注意修正constructor的指向



#### 构造函数继承

**子类型构造函数中借用父类构造函数**

- **`Person.call()`**
- 可以实现多继承
- 只能继承父类的实例属性和方法, 不能继承父类原型对象上的属性和方法



#### 组合继承

**结合了前两种方法**

- 调用了两次父类构造函数



#### 组合继承优化1

- **`Student.prototype = Person.prototype`**
- 无法分清楚对象是父类实例化还是子类实例化的



#### 组合继承优化2

- **`Student.prototype = Object.create(Person.prototype), Student.prototype.constructor = Student`**
- react中, **Component** 和 **PureComponent**之间就是使用的这种方法





## ref

https://segmentfault.com/a/1190000016708006