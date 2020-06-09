/*
step:
1. 创建新对象 create new obj
2. 设置原型对象 handle prototype
3. 用apply方法执行 run constructor, this point to new obj
4. 检测是否返回了一个对象, 并返回 return new obj
*/

function myNew() {
  let obj = new Object();
  let constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  let ans = constructor.apply(obj, arguments);
  return (typeof ans === 'object') ? ans : obj;
};