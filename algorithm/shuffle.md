# 洗牌 (shuffle)





## knuth shuffle

- 复杂度: linear



#### 方法

- In iteration `i`, pick integer r between 0 and i uniformly at random
- Swap a[i] and a[r]

**简而言之, 在第i轮循环, 调换0-i张牌和第i张牌**