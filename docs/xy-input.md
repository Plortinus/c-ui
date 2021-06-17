# c-input

输入框。用于替代原生`input`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/c-ui/components/c-input.js';
</script>
<!-- 使用 -->
<c-input></c-input>
```

## 初始值`defaultvalue`

设置或返回输入框的默认值。

<c-input defaultvalue="XboxYan"></c-input>

```html
<c-input defaultvalue="XboxYan"></c-input>
```

## 标签`label`

用来指定输入框的标记。

`label`属性提供了类似于`Metiral Design`的输入体验。

<c-input label="user"></c-input>


```html
<c-input label="user"></c-input>
```

## 占位`placeholder`

与原生`placeholder`一致。当有`label`属性时无效。

<c-input placeholder="user"></c-input>

```html
<c-input placeholder="user"></c-input>
```

## 图标`icon`

可以设置一个`icon`来表示标签标识，设置后`label`失效。

<c-input icon="user"></c-input>

```html
<c-input icon="user"></c-input>
```

## 禁用`disabled`

通过`disabled`可以禁用输入框，禁用后该按钮上的事件失效。

<c-input label="user" disabled></c-input>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-input label="user" disabled></c-input>
```

JavaScript操作`get`、`set`

```js
input.disabled;//获取
input.disabled = false;
input.disabled = true;
//原生属性操作
input.getAttribute('disabled');
input.setAttribute('disabled','');
input.removeAttribute('disabled');
```

## 只读`readonly`

通过`readonly`让输入框只读。

<c-input label="user" readonly defaultvalue="XboxYan"></c-input>
<c-switch checked onchange="this.previousElementSibling.readonly = this.checked;"></c-switch>

```html
<c-input label="user" readonly defaultvalue="XboxYan"></c-input>
```

JavaScript操作`get`、`set`

```js
input.readonly;//获取
input.readonly = false;
input.readonly = true;
//原生属性操作
input.getAttribute('readonly');
input.setAttribute('readonly','');
input.removeAttribute('readonly');
```

## 块状`block`

`block`属性将使按钮适合其父宽度。

<c-input label="user" block></c-input>

```html
<c-input label="user" block></c-input>
```

## 值`value`

设置或返回输入框的`value`属性值。
该属性值在`c-input`标签上不可见。

<c-input></c-input>
<c-button type="primary" onclick="this.previousElementSibling.value='XboxYan'">设置value为XboxYan</c-button>
<c-button type="primary" onclick="XyMessage.info('当前value: '+this.previousElementSibling.previousElementSibling.value)">显示当前value</c-button>

JavaScript操作`get`、`set`

```js
input.value; //获取
input.value = 'name';
//原生属性操作
input.getAttribute('value');
input.setAttribute('value','name');
```

## 类型`type`

目前支持`password`、`search`、`number`这几种类型，设置后会出现额外的`ui`控件。

### type=password

支持密码明文和密文切换。

<c-input icon="lock" type="password"></c-input>

```html
<c-input icon="lock" type="password"></c-input>
```

### type=search

右侧出现`search`图标，点击会执行`onsubmit`事件

<c-input type="search" onsubmit="XyMessage.info(this.value)"></c-input>

```html
<c-input type="search" onsubmit="XyMessage.info(this.value)"></c-input>
```

### type=number

数字输入框，类似于原生`input[type=number]`，支持`min`、`max`、`step`属性，支持键盘上下键切换数字。

<c-input icon="creditcard" type="number" min="-10" max="10" step="0.5" ></c-input>

```html
<c-input icon="creditcard" type="number" min="-10" max="10" step="0.5" ></c-input>
```

## 组合`c-input-group`

`<c-input-group>`可以将表单元素组合起来，包括`c-button`、`c-input`、`c-select`。

<c-input-group>
    <c-select defaultvalue="https://">
        <c-option value="http://">http://</c-option>
        <c-option value="https://">https://</c-option>
    </c-select>
    <c-input></c-input>
    <c-button type="primary">go</c-button>
</c-input-group>

```html
<c-input-group>
    <c-select defaultvalue="https://">
        <c-option value="http://">http://</c-option>
        <c-option value="https://">https://</c-option>
    </c-select>
    <c-input></c-input>
    <c-button type="primary">go</c-button>
</c-input-group>
```

<c-input-group>
    <c-select defaultvalue="wuhan">
        <c-option value="wuhan">武汉</c-option>
        <c-option value="shanghai">上海</c-option>
    </c-select>
    <c-select defaultvalue="hongsan">
        <c-option value="hongsan">洪山区</c-option>
        <c-option value="jiangxia">江夏区</c-option>
    </c-select>
    <c-select defaultvalue="AAA">
        <c-option value="AAA">AAA</c-option>
        <c-option value="BBB">BBB</c-option>
    </c-select>
</c-input-group>

```html
<c-input-group>
    <c-select defaultvalue="wuhan">
        <c-option value="wuhan">武汉</c-option>
        <c-option value="shanghai">上海</c-option>
    </c-select>
    <c-select defaultvalue="hongsan">
        <c-option value="hongsan">洪山区</c-option>
        <c-option value="jiangxia">江夏区</c-option>
    </c-select>
    <c-select defaultvalue="AAA">
        <c-option value="AAA">AAA</c-option>
        <c-option value="BBB">BBB</c-option>
    </c-select>
</c-input-group>
```

纯`CSS`布局实现。

## 验证`checkValidity`

支持正则校验，如果不满足要求，则会出现错误提示。

### 1.内置的表单验证

#### 必填项`required`

<c-input icon="user" required placeholder="required"></c-input>

```html
<c-input icon="user" required placeholder="required"></c-input>
```

#### 最小长度`minlength`、最大长度`minlength`

<c-input icon="user" placeholder="user" minlength="6" maxlength="10"></c-input>

```html
<c-input icon="user" placeholder="user" minlength="6" maxlength="10"></c-input>
```

#### 邮箱email

设置`type='email'`可以对邮箱格式进行校验。

<c-input icon="mail" type="email" placeholder="email"></c-input>

```html
<c-input icon="mail" type="email" placeholder="email"></c-input>
```

这是原生支持的类型，如果不满足可以采用下面更为通用的正则校验。

### 2.正则pattern

设置`pattern`属性，这是一个正则。

<c-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号"></c-input>

```html
<c-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号"></c-input>
```

默认提示信息可能不人性化，可以自定义提示信息`errortips`

<c-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号" errortips="手机号格式有误"></c-input>

```html
<c-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="请输入手机号" errortips="手机号格式有误"></c-input>
```

可以设置提示信息的位置，默认为`top`，参考[`c-tips`](c-tips.md)。

<c-input icon="mail" type="email" placeholder="email" errordir="right"></c-input>

```html
<c-input icon="mail" type="email" placeholder="email" errordir="right"></c-input>
```

### 3.自定义验证

上面的校验均针对输入格式，如果需要对值进行校验，可使用`customValidity`，比如校验重复密码

<c-form>
    <c-form-item legend="password">
        <c-input name="password" id="pwd" required type="password" placeholder="password" minlength="6"></c-input>
    </c-form-item>
    <c-form-item legend="password again">
        <c-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm"></c-input>
    </c-form-item>
<c-form>

```html
<c-form>
    <c-form-item legend="password">
        <c-input name="password" id="pwd" required type="password" placeholder="password" minlength="6"></c-input>
    </c-form-item>
    <c-form-item legend="password again">
        <c-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm"></c-input>
    </c-form-item>
<c-form>
```

自定义格式如下

```js
pwdAgain.customValidity = {
    method:(el)=>{
        return el.value == pwd.value;//校验规则
    },
    tips:'前后密码不一致'//错误提示
}
```

### 4.忽略验证`novalidate`

如果使用该属性，则输入时不进行验证。

<c-input icon="user" novalidate placeholder="user" minlength="6" maxlength="10"></c-input>

```html
<c-input icon="user" novalidate placeholder="user" minlength="6" maxlength="10"></c-input>
```

## 合法性`validity`

可以通过属性`validity`来获取输入框内容的合法性。

<c-input required placeholder="required"></c-input>
<c-button type="primary" onclick="XyMessage.info('合法性:'+this.previousElementSibling.validity)">合法性</c-button>

JavaScript操作`get`

```js
input.validity;//获取
```

## 事件`event`

该组件暴露了常见的回调事件。

### onchange

当输入框文本改变的时候触发（失焦后）。

<c-input onchange="XyMessage.info(this.value)"></c-input>

```html
<c-input onchange="fn(event)"></c-input>
```

```js
input.onchange = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
        }
    }
    */
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
}

input.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

### oninput

当输入框在输入时触发。

<c-input oninput="XyMessage.info(this.value)"></c-input>

```html
<c-input oninput="fn(event)"></c-input>
```

```js
input.oninput = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
        }
    }
    */
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
}

input.addEventListener('input',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

通常，配合`debounce`可以设置防抖，比如`debounce="300"`表示在`300ms`内无操作才会触发。

<c-input debounce="300" oninput="XyMessage.info(this.value)"></c-input>

```html
<c-input debounce="300" oninput="fn(event)"></c-input>
```

### onsubmit

当聚焦时，按回车键`Enter`触发。

<c-input onsubmit="XyMessage.info(this.value)" placeholder="Press Enter"></c-input>

```html
<c-input onsubmit="fn(event)"></c-input>
```

```js
input.onsubmit = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
        }
    }
    */
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
}

input.addEventListener('submit',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

### onfocus、onblur

`focus`、`blur`后的回调事件。

与[`c-button`](c-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

用于主动聚焦`focus`。

<c-input onfocus="XyMessage.info('focus')"></c-input>
<c-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</c-button>

```js
input.focus();
```

> 其他事件均与原生相同，比如`ondrop`、`onpaste`

### checkValidity

用于主动校验，弹出提示信息。

<c-input required placeholder="required"></c-input>
<c-button type="primary" onclick="this.previousElementSibling.checkValidity()">主动校验</c-button>

```js
input.checkValidity();
```