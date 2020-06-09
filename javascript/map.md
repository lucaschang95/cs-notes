# Map

Map.prototype



## Properties

`Map.prototype.size()`;



## Methods

`Map.prototype.clear()`

`Map.prototype.delete(key)`

`Map.prototype.get(key)`

`Map.prototype.has(key)`

`Map.prototype.set(key, value)`

C.R.U.D
C: new Map();
   map.set();

R: map.get(key);

U: map.set();

D: map.delete();



## iterating

1. `for...of...`



2. forEach

- syntax: `map.forEach(callback(value, key))`



2. `Map.prototype.entry()`

- return a ***Iterator Object***

- Iterator having a `next()` method return an object with two properties: `value`, `done`(true for done)



`map.forEach()`

for...of
```javascript
for (let [key, value] of map.entries())
```

`map.entries()` 返回一个iterator对象, 调用其next方法会返回如下解构
{
  value: [key, value],
  done: true/false
}