# c-form

表单。基于HTML5规范的表单验证交互组件。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-form.js';
</script>
<!-- 使用 -->
<c-form action="/login" method="post">
    <c-form-item legend="user">
        <c-input name="user" required placeholder="user"></c-input>
    </c-form-item>
    <c-form-item>
        <c-button type="primary" htmltype="submit">submit</c-button>
        <c-button htmltype="reset">reset</c-button>
    </c-form-item>
</c-form>
```

需配合表单组件，比如`c-input`、`c-checkbox`等等。

> 表单元素通过`name`属性作为标识，存在`name`属性则被认定为表单元素，所有的校验均依赖于此。

## 表单域`c-form-item`

`c-form-item`可以实现表单两栏布局，`legend`属性规定了左侧文本域。

如果内部有表单元素有`required`属性，那么文本域会出现`*`符号。

<c-form>
    <c-form-item legend="user">
        <c-input name="user" placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password"></c-input>
    </c-form-item>
</c-form>

```html
<c-form>
    <c-form-item legend="user">
        <c-input name="user" placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password"></c-input>
    </c-form-item>
</c-form>
```

该组件仅仅是对常用表单布局的简单封装，如果不满足布局要求，可以采用普通的布局，比如`Flex`、`Grid`，更加灵活。

## 表单风格`type`

可以设置表单的风格样式，可选`normal`（默认）、`full`、`none`

* `normal` 默认风格，配合`c-form-item`可实现两栏布局
* `full` 通栏风格，配合`c-form-item`可实现通栏布局
* `none` 无风格，需自定义布局

<c-radio-group onchange="this.nextElementSibling.type=this.value" defaultvalue="normal">
    <c-radio value="normal">normal</c-radio>
    <c-radio value="full">full</c-radio>
    <c-radio value="none">none</c-radio>
</c-radio-group>
<c-form>
    <c-form-item legend="user">
        <c-input name="user" placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password"></c-input>
    </c-form-item>
    <c-form-item>
        <c-button type="primary" htmltype="submit">login</c-button>
        <c-button htmltype="reset">reset</c-button>
    </c-form-item>
</c-form>


```html
<c-form type="full">
    ...
</c-form>
```

> 纯`CSS`修改(属性选择器)

## 表单默认行为

`c-form`内置了以下属性，基于`html5`规范。

这里的默认行为指的是，点击`submit`按钮或者回车，表单首先对表单元素进行格式校验，如果有误则会将有误的地方标识出来，全部正确后才能进行提交。

### 属性

* 表单地址`action`

值为`URL`，规定向何处发送表单数据。

回车键会触发表单。

* 请求方式`method`

规定请求方式，默认为`get`,可选`post`。

* 验证`novalidate`

如果使用该属性，则提交表单时不进行验证。

<c-form action="/login" method="post" novalidate>
    <c-form-item legend="user">
        <c-input name="user" placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password"></c-input>
    </c-form-item>
</c-form>

```html
<c-form action="/login" method="post" novalidate>
    <c-form-item legend="user">
        <c-input name="user" placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password"></c-input>
    </c-form-item>
</c-form>
```
> 该状态下即使格式有误仍然可以提交，可用`form.validity`获取验证合法性。

### 方法

* 提交`submit`

当表单内包含`htmltype="submit"`的按钮时，点击该按钮可以触发表单提交。

可通过`form.submit()`主动触发。

* 清空`reset`

当表单内包含`htmltype="reset"`的按钮时，点击该按钮可以清空表单。

可通过`form.reset()`主动触发。

<c-form action="/login" method="post">
    <c-form-item legend="user">
        <c-input name="user" required placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password" minlength="6"></c-input>
    </c-form-item>
    <c-form-item>
        <c-button type="primary" htmltype="submit">submit</c-button>
        <c-button htmltype="reset">reset</c-button>
    </c-form-item>
</c-form>

```html
<c-form action="/login" method="post">
    <c-form-item legend="user">
        <c-input name="user" required placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password" minlength="6"></c-input>
    </c-form-item>
    <c-form-item>
        <c-button type="primary" htmltype="submit">login</c-button>
        <c-button htmltype="reset">reset</c-button>
    </c-form-item>
</c-form>
```

可在控制台查看提交的表单数据，格式为`formData`，可转换`json`。

当表单提交完成，如果返回数据格式为`application/json`，可触发`submit`回调

```js
form.onsubmit = function(data){
    console.log(data)
    //后端返回的数据
}
form.addEventListener('submit',function(data){
    console.log(data)
    //后端返回的数据
})
```

## 自定义表单

### 自定义表单提交

当表单带有`action`属性时，回车键可以触发表单提交，如果包含`htmltype="submit"`的按钮时，点击该按钮可以触发表单提交。

如果想手动通过`ajax`提交，可以去除`action`属性，这样就不会触发默认表单提交效果了。

可通过`form.formdata`获取表单的值。

```html
<c-form>
    ...
</c-form>
```

```js
sumbitBtn.onclick = function(){
    //form.formdata（默认为formdata格式数据）
    //form.formdata.json（json格式数据）
    fetch('/login', {
        method: 'POST',
        body: form.formdata,
        
    })
    .then(function(data){
        //
    })
}
```

### 自定义表单验证

默认情况下，如果验证失败，表单则不会提交。

可以通过表单的`form.checkValidity()`方法手动校验所有表单元素，也可通过`form.validity`获取验证合法性。

<c-form id="form-check">
    <c-form-item legend="user">
        <c-input name="user" required placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" required type="password" placeholder="password" minlength="6"></c-input>
    </c-form-item>
    <c-form-item>
        <c-button type="primary" onclick="checkform()">login</c-button>
    </c-form-item>
</c-form>

```js
sumbitBtn.onclick = function(){
    if(form.checkValidity()){
        //全部验证通过
        CDialog.success({
            title:"全部验证通过",
            content:JSON.stringify(form.formdata.json)
        })
    }
}
```

## 交互实例

下面表单采用组件默认验证交互，即点击`submit`按钮后开启即时验证，所有有误内容标红，但是提示`tips`只会出现在第1个表单上。

<c-form action="/login" method="post" id="form-submit">
    <c-form-item legend="user">
        <c-input name="user" required placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" id="pwd" required type="password" placeholder="password" minlength="6"></c-input>
    </c-form-item>
    <c-form-item legend="password again">
        <c-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm"></c-input>
    </c-form-item>
    <c-form-item legend="city">
        <c-select name="city" required>
            <c-option value="wuhan">wuhan</c-option>
            <c-option value="beijin">beijin</c-option>
            <c-option value="shanghai">shanghai</c-option>
        </c-select>
    </c-form-item>
    <c-form-item legend="books">
        <c-checkbox-group name="books" required min="2" max="3" defaultvalue="React,Angular">
            <c-checkbox>React</c-checkbox>
            <c-checkbox>Vue</c-checkbox>
            <c-checkbox>Angular</c-checkbox>
            <c-checkbox>Flutter</c-checkbox>
            <c-checkbox>Swift</c-checkbox>
        </c-checkbox-group>
    </c-form-item>
    <c-form-item legend="lang">
        <c-radio-group name="lan" required>
            <c-radio>Html</c-radio>
            <c-radio>Css</c-radio>
            <c-radio>Javascript</c-radio>
            <c-radio>Php</c-radio>
            <c-radio>Dart</c-radio>
        </c-radio-group>
    </c-form-item>
    <c-form-item>
        <c-checkbox name="read" required value="read">I have read this book</c-checkbox>
    </c-form-item>
    <c-form-item>
        <c-button type="primary" htmltype="submit" onclick="formSubmit()">submit</c-button>
        <c-button htmltype="reset">reset</c-button>
    </c-form-item>
</c-form>

```html
<c-form action="/login" method="post" id="form-submit">
    <c-form-item legend="user">
        <c-input name="user" required placeholder="user"></c-input>
    </c-form-item>
    <c-form-item legend="password">
        <c-input name="password" id="pwd" required type="password" placeholder="password" minlength="6"></c-input>
    </c-form-item>
    <c-form-item legend="password again">
        <c-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm"></c-input>
    </c-form-item>
    <c-form-item legend="city">
        <c-select name="city" required>
            <c-option value="wuhan">wuhan</c-option>
            <c-option value="beijin">beijin</c-option>
            <c-option value="shanghai">shanghai</c-option>
        </c-select>
    </c-form-item>
    <c-form-item legend="books">
        <c-checkbox-group name="books" required min="2" max="3" defaultvalue="React,Angular">
            <c-checkbox>React</c-checkbox>
            <c-checkbox>Vue</c-checkbox>
            <c-checkbox>Angular</c-checkbox>
            <c-checkbox>Flutter</c-checkbox>
            <c-checkbox>Swift</c-checkbox>
        </c-checkbox-group>
    </c-form-item>
    <c-form-item legend="lang">
        <c-radio-group name="lan" required>
            <c-radio>Html</c-radio>
            <c-radio>Css</c-radio>
            <c-radio>Javascript</c-radio>
            <c-radio>Php</c-radio>
            <c-radio>Dart</c-radio>
        </c-radio-group>
    </c-form-item>
    <c-form-item>
        <c-checkbox name="read" required value="read">I have read this book</c-checkbox>
    </c-form-item>
    <c-form-item>
        <c-button type="primary" htmltype="submit" onclick="formSubmit()">submit</c-button>
        <c-button htmltype="reset">reset</c-button>
    </c-form-item>
</c-form>
```

针对确认密码的校验

```js
document.getElementById('pwdAgain').customValidity = {
    method:(el)=>{
        return el.value == document.getElementById('pwd').value;
    },
    tips:'前后密码不一致'
}
```