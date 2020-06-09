# 事件处理

使用**v-on指令**

`<button v-on:click="greet">Greet</button>`

- 这条指令的意思是把**greet方法**绑定到了**click事件**上面



**传递DOM事件**：使用特殊变量**$event**



#### 事件修饰符

**.stop**：阻止事件继续传播

**.prevent**：组织默认事件的发生

**.once**：点击事件只会触发一次





一般HTML元素的**value**就是**v-model**的值





**触发事件（以供父组件捕捉）**

`this.$emit(eventName, eventValue)`

- eventName是事件的名字
- eventValue是事件的属性，以供传值

**事件捕捉**

- 使用普通的`v-on`命令捕捉子组件的触发的事件
- eventValue使用$event来获取到