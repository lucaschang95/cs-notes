# Date日期数据格式

## 创建日期

- `let today = new Date()`
- `let date = new Date(1995, 11, 25, 0, 0, 0)`
  - 参数是年, 月, 日, 小时, 分钟, 秒

**最常使用的是new Date()**





## Getter

- `Date.prototype.getTime()`
  - 得到自unix epoch 以来的**毫秒数**
- `Date.prototype.getFullYear()`
- `...getMonth()`
- `...getDate()`
- `...getDay()`
- `...getHours()`
- `...getMinutes()`
- `...getSeounds()`

**最常使用的是new Date()**





#### 获取当前时间的时间戳

**Date.now()**

**new Date().getTime()**