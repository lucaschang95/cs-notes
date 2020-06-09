# 类型



#### 布尔值

`let isDone: boolean = false;`



#### 数字

`let num: number = 5`



#### 字符串

`let str: string = 'Hello World!'`



**数组**

`let arr: number[] = [1, 2, 3];` 或者

`let arr: Array<number> = [1, 2, 3]`



**元组**

`let x: [string, number] = ['Hello World!', 5]`



**any**

表示可以返回任何数据，使用任何方法 （不进行类型检查）



**void**

没有任何类型（比如一个函数没有任何返回值）



**类型断言**

- ts规则：不能使用小类的属性和方法

- 除非进行类型断言

`(something as string)`

