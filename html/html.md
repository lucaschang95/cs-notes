# HTML





## 对WEB标准的理解?

一个网页由三部分组成: 结构层, 表现层, 行为层. WEB标准也分为三方面:

- 结构化标准语言
- 表现层标准语言
- 行为标准



## 对W3C的认识

W3C对web标准提出了规范化的要求, 也是实际编程的一些代码规范

#### 对于结构的要求

1. 标签字母小写
2. 标签要闭合
3. 标签不能随意嵌套

#### 对于css和js的要求

1. 尽量使用外部css和js (external)
2. 标签的class和id要合理命名



## WEB语义化

1. HTML语义化标签
2. css的id, class合理命名



#### 语义化的好处

- 代码可读性
- 可维护性
- 搜索引擎优化
- 提升无障碍性





## HTML5新内容

1. 新的语义标签: section, article, nav, aside
2. 增强型表单
   1. `<input>`类型增多
3. 视频和音频
4. `<canvas>`绘图
5. drag事件
6. webworker
7. webstorage
8. websocket



## meta标签

**元数据 **



#### meta使用

3个属性 `name`, `http-equiv`, `content`



#### name + content

**作者, 关键词, 描述, 版权信息**

- `keywords`, `description`, `robot`, `author`, `generator`, `COPYRIGHT`





#### http-equiv + content

- `charset` 编码格式



#### 作用

- 搜索引擎 (SEO) 优化
- 定义页面使用语言
- 控制页面缓存





## !DOCTYPE

#### 作用

**声明文档的DTD (document type definition), 告知浏览器应该用哪种规范来解析文档**

- HTML5: <!DOCTYPE html>
  - HTML5不基于SGML, 因此不需要对DTD进行引用, 
  - 但是需要doctype来规范浏览器行为("严格模式")





## `href`和`src`的区别

- `href`: 超文本链接 (hypertext reference)
  - 关联页面的指向的资源
  - 不会阻塞
- `src`: 源 (source)
  - 表示替换资源, 相当于一个变量
  - 一般会阻塞

