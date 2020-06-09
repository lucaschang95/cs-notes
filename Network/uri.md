# 统一资源标识符 （URI）

**Uniform Resorece Identifier**



组成: schema, user information, host, port, path, query, fragment

abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1

`https://tom:pass@localhost:8080/index.html`

**`scheme://username:password@host:port/path?query#fragment`**

## #

**`#`代表网页中的一个位置, 右边的字符就是该位置的标识符**

- 指定标识符有两种方法
  - `name`属性
  - `id`属性
- `#`的改变不会触发网页重载
- `#`的改变会改变浏览器访问历史
- `#`的改变会触发`onhashchange`