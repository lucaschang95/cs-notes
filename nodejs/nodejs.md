# Node.js



#### 与JavaScript的区别

- 基于异步I/O的相关接口
- 基于node_modules和require的模块依赖
- 提供C++ addon API与系统交互



#### Node.js可以干什么?

- Web服务端: Web Server, 爬虫
- CLI命令行脚本: webpack
- GUI客户端软件
- ...



#### 模块

- 内置模块:编译进Node中, 例如 http fs net process path
  - 直接使用`require`  
- 文件模块: 原生模块之外的模块, 和文件夹一一对应



#### 模块路径查找

- 绝对
- 相对
- 模块/文件夹



#### js模块解析

- 通过`fs.readFileSync`同步拿到文件内容
- 内容包装
- 通过`vm.runInThisContext`
- 获取`module`对象的值作为返回值



#### 模块缓存