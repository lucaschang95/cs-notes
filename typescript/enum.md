# 枚举

**把有联系的一对数据绑定到一起，通过索引进行访问**

- 建立了双向连接

**使用enum**

- 支持数字的和机遇字符串的枚举







## 数字枚举

```typescript
enum Direction {
  Up = 1,
  Down = 0,
  Left,
  Right
}
```





## 字符串枚举

```typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = "RIGHT"
}
```

