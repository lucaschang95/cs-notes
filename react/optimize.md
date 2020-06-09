# React优化



## Production Build



## Webpack打包





## Profiling Components



## 防止Reconciliation

- `shouldComponenetUpdate`
- `React.pureComponent`
  - 做的是shallow comarison
  - 它`prototype`里`isPureComponenet`设置为了true
- Not mutating data
  - 使用`object.assign()`