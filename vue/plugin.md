## 插件（plugin）

**插件通常来为Vue添加全局功能**

- 通过全局方法`Vue.use(Plugin)`来调用
  - 实际上是调用了`Plugin.install(vue)`方法