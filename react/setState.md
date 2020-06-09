# setState

**`Component.prototype.setState = function(partialState, callback) {...}**

- `setState`是一个绑定在`Component`类上的一个原型方法
- 他会调用`this.updater.enqueueSetState()`, 把状态改变这个行动存入队列中 







- **`setState`实现中, 会根据一个变量`isBatchingUpdates`来判断直接更新还是放入队列中**

- **React在调用事件处理函数会调用`batchedUpdates()`, 这个函数把`isBatchingUpdates`修改为了`true`, 使得不会同步更新state**

- 



## 注意事项

- 不要直接操作`this.state`对象
- `setState()`可能是异步的 (可能为了性能, 将多次操作合并到一次DOM操作中)
- 你提供的state被merge到原有的`this.state`对象中

- 批处理 (默认批处理), 比如一个事件处理程序只进行一个渲染





![setState](https://upload-images.jianshu.io/upload_images/2578907-8fd43dae7e0d4236.png?imageMogr2/auto-orient/strip|imageView2/2/w/621/format/webp)