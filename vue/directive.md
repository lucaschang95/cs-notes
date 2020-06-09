# v指令

**Vue.directive(id, [definition])**

- 定义这个指令后，使用这个自定义的指令就可以完成完成一段代码

```vue
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})
```









## 钩子函数参数

- el：指令所绑定的元素
- binding：一个对象
  - name: 指令名
  - value: 指令的绑定值
  - oldValue：指令绑定的前一个值
  - modifiers包含的修饰符对象

**总之钩子函数能拿到所有的指令参数**