# CSS三栏布局



## 浮动实现

- 左, 右: 设置`float`, `width`和`height`

- 中: 设置`margin-left`和`margin-right`

- 清除浮动(防止容器塌陷)



## position实现

- 容器: 设置`position: relative`
- 左, 中, 右: 设置`position: absolute`
  - 同时设置距离容器左右边界的距离`left`和`right`



## flex实现

- 容器: `display: flex`
- 左, 右: `width: 300px`
- 中: `width: 100%`
  - `word-break: break-all`