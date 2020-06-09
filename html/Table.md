# Table
<table>
    <caption></caption>
    <tr> table row
        <td></td> table data
    </tr>
</table>


### Table Header
将普通的table data <td> 元素替换为 table header <th> 元素即可

<th> 的 scope 属性 (scope是标明这个header是row header 还是 column header) 
属性值: row, col, rowgroup, colgroup

或者在<th> 上标注id, <td>上的header属性这时与之相关的id集合



### Caption
<caption>Your Caption Here!</caption> 放到opening tag: table 后面


### Semantic
将<tr>, <td>用含有语义的tag包括起来
<thead></thead>
<tbody></tbody>
<tfoot></tfoot>