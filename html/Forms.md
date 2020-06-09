# Forms
Web forms -- collecting data from users

Standard
```
<form action="/my-handling-form-page" method="post">

</form>
```
standard practice是定义 action 和 method 两个参数
action: URL the form should be sent to
method: HTTP method


<form>
 <ul>
  <li>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">
  </li>
  <li>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_mail">
  </li>
  <li>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>
 </ul>
</form>


- 每一个 input 配备一个 label, 同时 label 的 for 属性值 == input 的 id 值 (还可以使用nesting来显示的绑定)
- 使用<li></li>元素来structure, 也可以用<p></p>来sturcture




### Input
<input>: 只有opening tag (empty element/ void element)

Attribute:

type: 决定输入类型, 是single-line text, 还是 checkbox, 还是其他的...

value: default value

placeholder: 提示性信息

id: 作用 1. 绑定相同 for 值的<label>
        2. CSS, JavaScript进行选择

name: 提交信息是附带的变量名字



### Input Type

text

password

hidden: --> timestamp

checkbox

radio button
Several radio buttons can be **tied** together


HTML5
email, search, tel, url, number, range, color



### Button
`<button type="submit">Send your message</button>`
Attribute:
type: 'submit' (submit your form), 'reset' (reset to default value), 'button' (custom)

button的替代方法是使用一个type='submit'的<input>元素, 
但是 button内部可以插入其他HTML代码
     而input里只能是plaintext




### Fieldset, legend
<fieldset>
    <legend></legend>
    里面是<label><input>
</fieldset>

fieldset 和 legend 是将输入分为几类, 便于管理




### Example
(example)[https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html]