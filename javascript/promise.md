# Promise

**Promise对象表示异步操作的完成(或失败)以及结果值**

- promise的使用分为两部分: 
  - 创建: 一般由third-party API来提供
  - 使用: 我们一般是在使用promise



## promise状态转换

- 创建后: `pending`
- 任务完成: 转换为 `resolved`
- 任务失败: 转换为`reject`



## 原型方法

- `Promise.prototype.catch(onRejected)`
- `Promise.prototype.then(onFulfilled, onRejected)`
- `Promise.prototype.finally(onFinally)`



## 静态方法

#### `Promise.resolve(value)`

- 直接创建`resolve`状态的promise



#### `Promise.reject(reason)`

- 直接创建`reject`状态的promise



#### `Promise.all(iterable)`

- 接受promise实例数组, 并行处理
- 都通过 (或者没有promise) 会变为`resolve`, 这种情况下`then`中的函数接受的是`values`数组
- 有一个不通过会变为`reject`, 返回第一个`reject`的原因



#### `Promise.race(iterable)`

- 一旦迭代器中某个promise状态变为`resolve`或`reject`, `race`的结果也随之改变



## 创建promise

- `new Promise(function(resolve, reject) { ... })` 这个参数又称为**executor**
- executor通过此种方法传入promise中, promise负责调用该executor
- executor中的resolve和reject函数通过`then()`等方法添加
- 创建promise后, 便会直接开始运行executor函数



- 



## 手写promise

```javascript
new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
}). then((value) => {
    console.log(value);
})
```





#### 简易版promise

```javascript
const PENDING = 'panding', RESOLVED = 'resolved', REJECTED = 'rejected';

function MyPromise(fn) {
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];
    
    function resolve(value) {

    }
    
    function reject(value) {

    }
}
```

