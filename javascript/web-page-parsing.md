# web page parsing

- Firefox使用**Gecko**,
- Safari和Chrome使用**Webkit**



## 基本工作流程

**基本工作流程分为4步**

- 解析HTML构建DOM树 (Parsing HTML to construct DOM tree)
- 构建渲染书 (Render tree construction)
- 渲染树布局 (Layout of  the render tree)
- 绘制渲染书 (Painting the render tree)



## 解析器解析过程

Document -- Lexical Analysis -- Syntax Analysis -- Parse Tree

(文档 -- 词法分析 -- 句法分析 -- 解析树)

- 词法分析: 把输入切分成合法序列
- 句法分析: 按照句法规则分析文档结构和构建句法树





## HTML解析

**字节数据 --> 字符串 --> Token --> Node --> DOM**

- 字符串到Token: 词法分析
- Token到DOM: 句法分析



## CSS解析

![解析过程](https://images2018.cnblogs.com/blog/1251691/201803/1251691-20180323131319295-1845023858.jpg)



## 建立渲染树

- WebKit中称为[renderers], Firefox中称为[frames]

- 对于每个DOM元素, 必须在每个rules里匹配 (从左向右匹配)





## Ref

- 似乎非常详细 http://taligarsiel.com/Projects/howbrowserswork1.htm