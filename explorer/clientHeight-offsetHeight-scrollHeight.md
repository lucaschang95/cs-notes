# clientHeight, offsetHeight和scrollHeight



**clientHeight**: 包括padding但不包括border和margin，水平滚动条



**offsetHeight**: 包括padding，border，水平滚动条，不包括margin



**scrollHeight**

- **条件**：当本元素的子元素高于本元素，且`overflow=scroll`时
- 此时，**scrollHeight**代表子元素的高度



**scrollTop**: 当前元素滚动到上方的像素大小



**offsetTop**：当前元素距离父元素上方的offset