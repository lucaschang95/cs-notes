# JavaScript JIT

**just in time**





## 为什么会有jit

#### 解释器, 编译器

- 解释器: 一边翻译, 一边解释
  - 启动快
  - 遇到循环效率低下
- 编译器: 
  - 启动慢
  - 可以对代码进行优化



**JIT的出现就是融合了两者**





## Just-in-time

- 在JavaScript引擎中增加监视器
- 代码运行多次, 会被标注'warm' 'hot', 那么JIT就把他送去编译



## 语法检查和词法分析