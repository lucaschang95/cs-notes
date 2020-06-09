# Control Flow

1. if...else if...else
```javascript
if () {
  //code
} else if () {
  //code
} else {
  //code
}
```

2. for...
```javascript
for () {
  //code
}
```


3. while...do
```javascript
while (condition) {
  //code
}
```

4. do...while
```javascript
do {
  //code
} while (condition);
```

5. switch
```javascript
switch (expression) {
  case value1:
    statement1;
    [break;]
  case value2:
    statement2;
    [break;]
  default:
    statement;
    [break;]
}
```

6. for...in
得到所有的properties的名字
```javascript
for (variable in obj) {
  statement;
}
```

7. for...of
```javascript
for (variable of obj) {
  statement;
}
```

8. label
多重循环时,跳出指定的循环
```javascript
label :
   statement
```

9. forEach函数
callback函数中已经预先定义好前三个变量的意义, current: 当前item, index, array
myArr.forEach(function(current, index, array) {
  current.value = '';
});