## React.Fragment

**作用: 使得一个类能返回多个子元素**

**`<React.Fragment>`唯一接受的参数是`key`**





## 用法

#### 普通

```react
<React.Fragment>
	<ChildA />
    <ChildB />
</React.Fragment>
```

- 这样使用后, 在实际DOM中, 将不会有`<React.Fragment>`这个元素



#### 简短表示

```react
<>
	<ChildA />
    <ChildB />
</>

```

