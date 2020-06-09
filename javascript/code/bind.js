// 关键: 获取到函数(this), 需要绑定的this, 剩余参数
// 使用apply方法实现

Function.prototype.bind = function() {
  // bind function only return a function
  let self = this, // this代指原函数
    constext = Array.prototype.shift.call(argumetns); // 保存this上下文
    args = Array.prototype.slice.call(arguments); // 剩余参数

  return function() {
    self.apply(context, Array.prototype.concat.call(args, Arr.prototype.slice.call(arguments)));
  };
};