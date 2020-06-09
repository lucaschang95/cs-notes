# 条件渲染



**指令**

v-if

v-else-if

v-else





**v-show指令**

`v-show="isShowed"`

有条件的显示, 隐藏时候，设置`display: none`属性



**v-if**切换开销更加大

**v-show**初始渲染开销是更大的





**条件渲染时候，可能会涉及DOM复用的问题**

- 需要加上**key**值来唯一标识一个DOM组件