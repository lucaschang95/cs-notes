# Grid
two dimentional layout

> `display: grid` 
开启grid


Explicit grid
> `grid-template-columns: 200px 200px 200px`
- 设置有3列, 每列border-box大小都是200px
- accept length and percentages
- grid-template-rows同理


> `grid-template-columns: 1fr 1fr 1fr`
- 1 fraction
- 使用repeat function: repeat(3, 1fr)



> gaps `grid-gap: 20px;`
或者使用long-hand, grid-column-gap: 20px, grid-row-gap: 20px;


Implicit Grid
> `grid-auto-rows: minmax(100px, auto)`



> `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
This works because grid is creating as many 200 pixel columns as will fit into the container, then sharing whatever space is leftover between all of the columns


### Line-based placement
- line start at 1
- writing-mode related


specifying the start and end line.
> `grid-column(row)`
- grid-column: 1/ 3;
- grid-column(row)-start(end)


> `grid-template-areas: grid-area:`
配合使用