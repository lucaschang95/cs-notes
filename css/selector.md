# CSS选择器

**CSS Selectors**



## 选择器类型

#### id选择器 (ID Selector)

- #youIdName { color: white }




#### 类选择器 Class Selector

- `.yourClassName { color: white }`
- 多个class selector可以chaining with no space, 代表所有的class满足的才会添加相应CSS规则



#### 属性选择器Attribute Selector

- attr existing `a[title] {}`
- attr strict equal `a[href="https://example.com"] {}`
- attr containing `a[attr~="xxx"]`
- attr begin with, - after `a[attr|="xxx"]`



#### 伪类选择器 (Pseudo-Class Selector)

选中的是元素，相当于给某些元素加上了类别

- `button:hover { color: white }`
- `:first-child :last-child :only-child :invalid :hover :focus :nth-child() :first-chil :last-child :nth-of-type()`



#### 元素选择器 (Element Selector)

- `p { color: white }`



#### 伪元素选择器 (Pseudo-Element Selector)

选中的不是元素，相当于创造了一些新的元素

**style certain part of element**

- `p::first-line { color: white}`

- `::first-line ::before ::after`



#### Universal Selector

- 对于优先级无贡献









## 组合

#### 后代组合 

（Descendant Combinator）

- **空格**
- 只需要是后代，不需要是子类（direct children）

- `li em{ color: white}`  



#### 子类组合

（Child Combinator）

- **大于号**
- 需要是子类

-  `article > p { color: white }` 



#### 相邻兄弟组合器

Adjacent Sibling Combinator

- **加号**

- 相同层级（兄弟），且相邻

- `li + p{ color: white }` same level, right after



#### 同级组合器

（General Sibling Combinator）

- **约等于号**
- 同级，但是必须在后面

- `h1 ~ p`



#### 多个选择器

- **逗号**
- 命中多个规则



## Specificity 优先级

#### 基本原则

1. universal selector和combinator不影响优先级大小
2. 如有直接命中的, 则不会从父类继承
3. 优先级加和后进行比较



#### 优先级

**优先级为1**: 元素选择器, 伪元素选择器

**优先级为10**: 类选择器, 属性选择器, 伪类选择器

**优先级为100**: id选择器

**优先级为1000**: inline-style

**优先级为10000**: !important



#### Ref

https://specifishity.com/



## CSS Sprite

**CSS精灵图/雪碧图**



#### 优点

1. 减少图片的字节
2. 减少HTTP请求, 提高了性能



#### 缺点

1. 维护时比较麻烦



#### 使用方法

- `background-image`决定使用哪张大图片
- `width`, `height`决定小图片大小
- `background-position`: 决定小图片在大图片中的位置