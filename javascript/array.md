# Array数组



## 创建数组

#### 字面量

- `[element0, element1...]`

#### Array object

- `new Array(element0, element1...)`
- `Array(arrayLength)`
- `Array.of(element0, element1...)`



## 判断是否是数组

- `Array.isArray()`



## 方法

#### `Array.prototype.push()`

- 原数组改变
- 返回被push的元素



#### `Array.prototype.pop()`

- 原数组改变
- 返回被pop的元素



#### `Array.prototype.shift()`

- 原数组改变
- 返回被shift出去的元素



#### `Array.prototype.unshift()`

- 原数组改变
- 返回unshift进来的元素



#### `Array.prototype.concat()`

**拼接并返回一个新数组**

- 不改变原数组
- shallow copy



#### `Array.prototype.fill()`

- syntax: `arr.fill(value, start, end)` (可以不提供start和end index)



####  `Array.prototype.filter()`

- `arr.prototype.filter(callback(element, index, array))`
  -  如果返回false, 那么这个element就会被过滤掉
  - 不改变原数组



#### `Array.prototype.includes()`

- `arr.includes(valueToFind[, fromIndex])`
- `fromIndex`: 可正可负



#### Array.prototype.reduce()

- `arr.reduce(reducer[, initialValue])`
- reducer接受4个参数
  - acc
  - cur
  - idx
  - src



#### `Array.prototype.slice()`

- `arr.slice([begin[, end]])`
- 不会改变原数组
- 返回shallow copy



#### `Array.prototype.indexOf()`

- `arr.indexOf(searchElement[, fromIndex])`

- 没找到返回 -1;



#### Array.prototype.splice()

- `arr.splice(start[, deleteCount[, item1...]])`
- 删除一些, 加入一些



#### Array.prototype.map()

- syntax：`newArray = arr.map(function callback(currentValue[, index[, array]]) { return element for new_array}, this arg)`



#### Sort

- `array.sort(compareFunction)`, 
- `comparefunction(a, b)`
  - return less than 0, 那么a的 index靠前. 
  - greater than 0, 那么b的index靠前
  - 0, remained










### Destructuring assignment
unpack value from arrays, or objects, into distinct variables.
```javascript
// destructure array
let [name, age] = ['John', 26];

// destructure object
// 对object进行结构 需要前面加上let, const
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;


//下图这个函数是对传入的obj进行解构
function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

let {[key]: foo} = {z: 'bar'};
```

1. 赋值时解构
2. 命名函数是进行解构


通过function返回array, 在通过destructuring, 可以使得返回值使用更加灵活.

- 选择性解构赋值





### Array.prototype.sort()

`sort([compare func(a, b)])`
- if `compare func` return
  - less than 0, a index < b index
  - greater than 0, a index < b index
  - 
- AESC order





## 遍历Iteration



#### `Array.prototype.forEach()`

- syntax: `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`
- 遍历顺序: ASC, 升序
- sparse array中不会遍历到





#### map method

- syntax: `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`
- 不同点: callback function里面要有return statement, 返回single value