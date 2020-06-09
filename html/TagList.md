# TagList

<a></a> anchor
<h1></h1> heading, also for(h2, h3, h4, h5, h6)
<p></p> paragraph
<abbr></abbr> abbreviation (title: 显示全称)

<ul></ul> unordered lists(ul是无顺序)
<ol></ol> ordered lists(ol是有顺序)
<li></li> list items

<em></em> stress emphasis
<strong></strong> importance, seriousness, or urgency

<i></i> italic
<b></b> bold
<u></u> underline

<header></header> section: header
<nav></nav> section: navigation bar
<main></main> section: main content
    <article></article>
    <section></section>
    <div></div>
    <aside></aside>
<footer></footer> seciton: footer

Structure: no semantic meaning 
<div></div> block level
<span></span> inline style

和换行有关
<br> line break 换行
<hr> horizontal rules 横线

Multimedia
<img>
<figure></figure>
    <figcaption></figcaption>
<video></video>
<audio></audio>
<iframe></iframe>

Table
<table>
    <tr> table row
        <td></td> table data
    </tr>
</table>
外加<th></th> table header
attribute: colspan, rowspan
还可以在table后面添加这个
  <colgroup>
    <col>
    <col style="background-color: yellow">
  </colgroup>

<html></html> root element
<head></head>
    <meta>
    <title></title> title(1. browser tab 2. bookmark)
<body></body>




### Text
Anchor
`<a>`
- href
- title(appear when mouse hover)
- target(在新窗口/当前页面 打开)


Quotations
- `<blockquote></blockquote>`block quotation
- `<q></q>` inline quotation

Cite
- `<cite>book name</cite>` 是用来标注书名, 网页名等的

Abbreviations
- `<abbr></abbr>` 内容是其缩写
attribute: title: 属性值是全称

Contact Detail
- `<address></address>` 然后将所有联系内容放到里面

Subscript superscript
- `<sub></sub>` 下角标
- `<sup></sup>` 上角标



### List

1. unordered list
```html
<ul>
    <li>list term1</li>
    <li>list term2</li>
    <li>list term3</li>
</ul>
```

2. ordered list
```html
<ol>
    <li>list term1</li>
    <li>list term2</li>
    <li>list term3</li>
</ol>
```

3. description list
```html
<dl>
    <dt>term1</dt>
    <dd>term1 - description1</dd>
    <dd>term1 - description2</dd>
    <dt>term2</dt>
    <dd>term2 - description1</dd>
</dl>
```






   




### Computer Code




### Datas and times
`<time></time>`



### <input>
- type



### meta
`<meta charset="utf-8">`
还可以添加 author, description, 其中description搜索时可以看到
`<meta name="description" content="xxxx">`


### 添加icon
`<link rel="icon" href="favicon.ico" type="image/x-icon">`


将img放到a元素中间可以得到图片的hyperlink