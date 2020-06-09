# 前端工程化

**规范化, 模块化, 组件化, 自动化**





##  为什么?

- 出现前端行业的代码日益复杂, 从最初的的动画效果等, 到现在要做出逻辑复杂的前端页面.
- 因此在项目开发中, 开发测试, 维护也越来越困难

- 如果没有工程化思想的指导, 效率就会急剧下降
- 就举个简单的例子, 这些mvc, mvvm框架, 就可以看作是前端工程化思想一种应用吧



## 用处

提高效率





## 怎么做?

- 初始化配置, 一个指令完成



- live-server, dev-server
- 自动打包上传





## 规范化

#### 版本管理, 开发流程规范

- git flow开发规范
  - master, hotfix, release, develop, feature分支

- 编写规范





## 模块化



#### CSS模块化

只需关注模块内逻辑的实现, 无需考虑变量污染等

**核心思想: 通过样式生效规则来避免冲突**



**方法**

- 添加独一无二的**属性名**
- 独一无二的**类名** (class name)
- css in js

- sass
- css module, 把css当做js引入
- bem风格命名, 同时自己管理



**CSS命名风格**

- BEM (block-element_modifier)
- block: 组件
- element: 组件中的某一个元素
- modifier: 组件中的不同状态和不同版本



#### JavaScript模块化

**import是es6的新内容, 而require在node中使用比较多**



**require**

**本质上是将导出的对象赋值给module.export这个对象**

- 值的拷贝 / (弱绑定)

- 运行时加载



**import**

- 值的引用 (强绑定)
- 编译时候输出接口



#### 区别

require只能传递一个对象

import/export 可以有default export和named export





#### es6的import和export

- export的时候分为default export和named export
- 引入的时候语法也不一样, (是否需要{})



## 组件化

react组件化的ui, 

**逻辑复用, ui复用, 解耦, 组件之间互不关联**





## 自动化

- 自动初始化
- 自动构建 (打包)
- 自动测试



使用jest之后, 每次用一个指令, 就能搞清楚测试用例通过情况