# c-radio

单项选择器。用于替代原生`input[type=radio]`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-radio.js';
</script>
<!-- 使用 -->
<c-radio>radio</c-radio>
```

## 禁用`disabled`

通过`disabled`可以禁用开关。

<c-radio disabled>radio</c-radio>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-radio disabled>radio</c-radio>
```

JavaScript操作`get`、`set`

```js
radio.disabled;//获取
radio.disabled = false;
radio.disabled = true;
//原生属性操作
radio.setAttribute('disabled','');
radio.removeAttribute('disabled');
```

## 值`value`

返回`value`。

通常`c-radio`会有一个`value`属性，类似于`id`，如果不存在则返回文本内容`textContent`。

<c-radio value="AAA">radio</c-radio>
<c-button type="primary" onclick="CMessage.info(this.previousElementSibling.value)">获取value</c-button>

```html
<c-radio value="AAA">radio</c-radio>
<c-button type="primary" onclick="CMessage.info(this.previousElementSibling.value)">获取value</c-button>
```

JavaScript操作`get`

```js
radio.value;//获取
//原生属性操作
radio.getAttribute('value');
```

## 选中`checked`

`checked`属性表示选中，通常不可取消。

<c-radio>radio</c-radio>
<c-button type="primary" onclick="this.previousElementSibling.checked = true;">选中</c-button>

```html
<c-radio checked>radio</c-radio>
```

通常多个出现，有一个相同的`name`，表示同一组，可以通过`name`来获取当前组的选中（通过`dom`获取即可）。

<c-radio name="lib" checked>React</c-radio>
<c-radio name="lib">Vue</c-radio>
<c-radio name="lib">Angular</c-radio>
<c-radio name="lib">Other</c-radio>
<c-button type="primary" onclick="CMessage.info(document.querySelector('c-radio[name=lib][checked]').value)">获取选中状态</c-button>

```html
<c-radio name="lib" checked>React</c-radio>
<c-radio name="lib">Vue</c-radio>
<c-radio name="lib">Angular</c-radio>
<c-radio name="lib">Other</c-radio>
<c-button type="primary" onclick="CMessage.info(document.querySelector('c-radio[name=lib][checked]').value)">获取选中状态</c-button>
```

JavaScript操作`get`、`set`

```js
radio.checked;//获取
radio.checked = false;
radio.checked = true;
//原生属性操作
radio.setAttribute('checked','');
radio.removeAttribute('checked');
```

现新增`c-radio-group`组件，表示同一组，

* `defaultvalue`设置初始选中项
* 设置和获取`disabled`
* 设置和获取`vaule`
* 支持`change`事件

<c-radio-group name="lan" disabled defaultvalue="Css">
    <c-radio>Html</c-radio>
    <c-radio>Css</c-radio>
    <c-radio>Javascript</c-radio>
    <c-radio>Php</c-radio>
    <c-radio>Dart</c-radio>
</c-radio-group>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>
<c-button type="primary" onclick="this.previousElementSibling.previousElementSibling.value='Php'">选中Php</c-button>

```html
<c-radio-group name="lan" disabled defaultvalue="Css">
    <c-radio>Html</c-radio>
    <c-radio>Css</c-radio>
    <c-radio>Javascript</c-radio>
    <c-radio>Php</c-radio>
    <c-radio>Dart</c-radio>
</c-radio-group>
```

JavaScript操作`get`、`set`

```js
radiogroup.value;//获取
radiogroup.value = 'Css';
//原生属性操作
radiogroup.getAttribute('value');
radiogroup.setAttribute('value','Css');
```

## 必填项`required`

表单验证属性，表示必填，作用于`c-radio-group`

配合[`checkValidity()`](c-radio.md?id=checkValidity)方法可以主动校验

## 事件`event`

### onchange

在切换完成时触发。

<c-radio onchange="CMessage.info('当前状态checked:'+this.checked)">radio</c-radio>

```html
<c-radio onchange="CMessage.info('当前状态checked:'+this.checked)">radio</c-radio>
```

```js
radio.onchange = function(ev){
    //获取checked的几种方式
    /*
    event:{
        detail:{
            checked,
        }
    }
    */
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
}

radio.addEventListener('change',function(ev){
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
})
```

`c-radio-group`支持`change`事件

<c-radio-group name="lan" defaultvalue="Javascript" onchange="CMessage.info(this.value)">
    <c-radio>Html</c-radio>
    <c-radio>Css</c-radio>
    <c-radio>Javascript</c-radio>
    <c-radio>Php</c-radio>
    <c-radio>Dart</c-radio>
</c-radio-group>

```js
radiogroup.onchange = function(ev){
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

radiogroup.addEventListener('change',function(ev){
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

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，`Enter`或者`Space`选中。

<c-radio onchange="CMessage.info('当前状态checked:'+this.checked)">radio</c-radio>
<c-button type="primary" onfocus="CMessage.info('focus')" onclick="this.previousElementSibling.focus()">主动聚焦</c-button>

```js
radio.focus();
```

### reset

复原选项，回到默认值。

<c-radio-group name="books" defaultvalue="React">
    <c-radio>React</c-radio>
    <c-radio>Vue</c-radio>
    <c-radio>Angular</c-radio>
    <c-radio>Flutter</c-radio>
    <c-radio>Swift</c-radio>
</c-radio-group>
<c-button type="primary" onclick="this.previousElementSibling.reset()">reset</c-button>

```js
radiogroup.reset();
```

### checkValidity

用于主动校验，弹出提示信息。

<c-radio-group required name="lan">
    <c-radio>Html</c-radio>
    <c-radio>Css</c-radio>
    <c-radio>Javascript</c-radio>
    <c-radio>Php</c-radio>
    <c-radio>Dart</c-radio>
</c-radio-group>
<c-button type="primary" onclick="this.previousElementSibling.checkValidity()">主动校验</c-button>

```js
radiogroup.checkValidity();
```