# 前端错误及监控



**错误类型**

- 代码错误
- 资源加载错误
  - 图片, CSS, JavaScript加载失败





## 错误捕获

**try...catch...finally**





**window.onerror**

- **syntax**: `window.onerror = function(message, source, lineno, colno, error ) {...}`
- 全局监听异常的功能
- 只能捕获运行时错误, 不能捕获资源加载错误





**sourceMap**

利用它来追踪出错的位置



## 捕获之后

**使用AJAX上传到后端等, 方便统计, 追踪**