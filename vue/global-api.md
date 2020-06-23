# 全局API





### Vue.extend

- **Vue.extend(options)**
- option是对象，包含data，props，template等参数（如同Vue实例和组件）
- 返回一个Vue的一个子类，有点类似于mixin







### Vue.component

- 注册或获取全局组件
- 注册是会自动使用**Vue.extend**进行包裹





import { $bridge } from '@common/lib/bridge/index';

this.$bridge