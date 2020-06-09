# Asynchronous JavaScript

通过WEB APIs实现
比如setTimeOut, 储存在web api中, 到时后, callback function返回 message queue, 之后由**event loop**放到execution stack中执行



## 使用异步的场景

- 定时任务
- 网络请求
- 事件绑定




#### setTimeout
setTimeout(callback, delaytime);
他的意思是过了**delaytime ms**后执行callback


通过chain setTimeout函数, 来实现依次执行


### Promise
object
- keep track about whether a certain event has happened already or not
- determine what happens next

promise分为: produce promise, consume promise



#### states
- pending
- settled / resolved
- fulfilled / rejected

`new Promise(executor)`
- Promise的参数是一个executor function, 在promise创建的时候就会执行



- executor function接受两个参数, 分别是resolve和reject两个回调函数
```javascript
const pro = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve([1, 2, 5, 6]);
    }, 1500);
});

//此处定义resolve callback function
pro
.then((IDs) => {
    console.log(IDs);
})
.then()
.carch();
```

produce阶段
设置好各个then函数中使用的函数


consume阶段:
then函数中调用之前的函数, 返回一个新的promise



### Async / Await

produce好promise之后

在consume阶段

```javascript
async function yourFunc() {
    const xxx = await func1();
    xxx.........await xxxxxxxx;

}

yourFunc();
```



### AJAX
asynchronous javascript and xml 