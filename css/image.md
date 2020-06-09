# 图片 (image)

**可替换元素**

- `max-width: 100%`, can be smaller when container is smaller
- `object-fit: cover/ contain/ fill`
  - `cover`: 图片覆盖父元素
  - `contain`: 父元素包括子元素
  - `fill`: 图片失真, 但大小和父元素完全吻合

> 
but can't be bigger(max width: 100% of intrinsic width)


> 
- cover: 图片覆盖parent element, may be cropped
- contain: parent element 将会显示img的全部, 但可能会留有空白
- fill: 不会保持aspect ration,