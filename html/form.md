# 表单（form）


## form标签

**支持的属性**

- **method**: 可以选择**GET**和**POST**










## Input标签
#### 支持的属性

- **type**：决定输入类型, 是single-line text, 还是 checkbox, 还是其他的...

- **placeholder**：提示性信息

- **name**：提交表单数据的标识



value: default value



id: 作用 1. 绑定相同 for 值的<label>
        2. CSS, JavaScript进行选择





### Input Type

text

password

hidden: --> timestamp

checkbox

radio button
Several radio buttons can be **tied** together


HTML5
email, search, tel, url, number, range, color



## button

#### 支持的属性

- **type**：submit，reset（这两个是原生支持的）
  Attribute:
  type: 'submit' (submit your form), 'reset' (reset to default value), 'button' (custom)



**button的替代方法**：使用一个`type='submit'`的**input**元素, 

- **区别**：button内部可以插入其他HTML代码




### Fieldset, legend
<fieldset>
    <legend></legend>
    里面是<label><input>
</fieldset>

fieldset 和 legend 是将输入分为几类, 便于管理




### Example
(example)[https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html]