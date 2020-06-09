# async/ await

**`await`一般在`async`函数中**

**`async`不会造成阻塞, 它内部的阻塞都被放到`await`中异步执行**



## async

**`async`返回一个promise对象**

- 使用`Promise.resolve()`包装
  - 没有返回值, 他会返回`Promise.resolve(undefined)`



## await

**await等待一个结果**

- 如果结果不是promise对象, 那`await`表达式结果就是他等到的东西
- 如果结果是promise对象, 他会阻塞后面的代码, 等着promise对象resolve, resolve的值作为await的运算结果