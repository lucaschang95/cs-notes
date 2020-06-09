**这三个方法都是用来重定义this对象的**

## call()

- 第一个参数是this对象, 其余参数依次是原函数的参数
- 立即执行



## apply()

- 第一个参数是this对象, 其余参数以数组形式传入
- 立即执行



## bind()

- 返回bind后的新函数, 不会立即执行



## bind的手动实现(apply)

```javascript
Function.prototype.bind = function() {
    let self = [].shift.call(arguments);
    let context = this;
    let args = [].slice.call(arguments);
    return function() {
        self.apply(context, [].concat.call(args, [].slice.call.arguments));
    }
}
```

