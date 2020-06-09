# 从输入URL到页面加载完成期间经历了什么



## Step 1: 查看是否有强缓存



## Step 2: DNS解析

递归解析



## Step 3: TCP连接





## Step 4: 发起HTTP请求并接收响应



## Step 5: 断开TCP连接



## Step 6: 解析HTML代码

load DOMContentLoaded



#### 构建DOM树

bytes --> characters --> tokens --> nodes --> DOM



#### 构建CSSOM树

bytes --> characters --> tokens --> nodes --> DOM



#### 构建渲染树



#### 页面的重排和重绘



#### 遇到script标签

**普通** 阻塞下载解析完才继续html解析

**`async`** 下载不阻塞, 执行阻塞, 不保证`async`之间的执行顺序 (开启另一个线程)

**`defer`** 下载不阻塞, 执行是等DOM加载完才顺序执行