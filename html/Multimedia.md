# Multimedia

### Image
如果图片仅是装饰, 那么应该使用CSS来添加.

<img>

attribute:
src: source, 指向目标URL

alt: alternative text, 未成功加载图片时显示的文字

width, height: 宽和高, 一般用于未加载图片前预留相关位置

title: text when mouse hover




### Caption
```html
<figure>
    <img>
    <figcaption>your figcaption here</figcaption>
</figure>
```
同时, 第一个元素不一定需要是img

Summing up: if an image has meaning, in terms of your content, you should use an HTML image. If an image is purely decoration, you should use CSS background images.



### Video Audio
```html
<video src="" controls>
    <p>fallback content</p>
</video>
```

controls告诉浏览器我们要使用你的video控制界面

audio只需要把图中的video tag换成audio tag.




### SVG
to be continued




### Picture
使用picture来实现responsive
```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>
```