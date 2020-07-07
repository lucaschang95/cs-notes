# 盒模型 (box model)



## 基本概念

#### 标准模型

- w3c定义的
- 宽高是**content**的宽高



#### IE模型

- ie自己使用的
- 宽高是border外部的宽高



## css设置

```css
// 标准模型
box-sizing: content-box;

// IE模型
box-sizing: border-box;
```





## 盒模型获取宽高

**offsetWidth/Height**

- **最常用的**, 兼容性最好的
- 包括content，padding，border，不包括margin



**clientHeight/Width**

**内高度**，包括：content，padding，不包括border和margin





**style.width/height**

- 不推荐使用：`style.width/height`只能获取到内联样式所设置的宽高



**scrollHeight，scrollTop**

**外高度**，包括：content，padding，margin

- scrollHeight：可滚动元素的高度
- scrollTop：可滚动元素距离父元素顶部的距离



src 下面会用yi x