# Animation



### Animation property

[src](https://www.youtube.com/watch?v=zHUpx90NerM)

animation + @keyframes

```css
.box {
    animation-name: myanimation;
    animation-duration: 4s;
    animation-iteration-count: infinate;
    animation-fill-mode: forwards;
}


```



## keyframe来定义关键帧

```css
@keyframe myanimation {
    0% {your style here}
    25% {your style here}
    50% {your style here}
    100  % {your style here}
}
```



## 使用animation

- syntax: `animation: name duration timing-function delay iteration-count direction fill-mode`

#### `animation-direction`

**每次播放的顺序**



#### `animation-fill-mode`

#### 不播放动画时物体的样式



## 与transform一起使用



## css动画与js动画区别

#### css动画

- 浏览器在背后会对动画进行优化
- 强制使用GPU加速



#### JS动画

- 控制能力非常强
- 没有兼容性问题
- 缺点: javascript是单线程, 会阻塞其他运行, 或者被阻塞