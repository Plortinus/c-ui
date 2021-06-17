# c-select

下拉选择器。用于替代原生`select`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-select.js';
</script>
<!-- 使用 -->
<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

> `c-select`配合`c-option`才能渲染到下拉菜单中，其他标签不会渲染。

## 风格`type`

跟随`c-button`。

<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-select type="flat">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-select type="primary">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-select type="dashed">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-select type="flat">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-select type="primary">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-select type="dashed">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

## 块状`block`

跟随`c-button`，宽度充满父级。

<c-select block>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<c-select block>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

## 初始值`defaultvalue`

设置或返回下拉选择器的默认值，如果不设置，则默认选中第一项。

<c-select defaultvalue="2">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<c-select defaultvalue="2">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

## 占位`placeholder`

当没有设置初始值`defaultvalue`时，可设置默认提示，默认为`请选择`。

<c-select placeholder="请选择一项">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<c-select placeholder="请选择一项">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

## 禁用`disabled`

通过`disabled`可以禁用下拉选择器。

<c-select disabled>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-select disabled>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

JavaScript操作`get`、`set`

```js
select.disabled; //获取
select.disabled = false;
select.disabled = true;
//原生属性操作
select.setAttribute('disabled','');
select.removeAttribute('disabled');
```

如果设置在`c-option`可单独禁用某一项

<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2" disabled>Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2" disabled>Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

## 值`value`、文本`text`

设置或返回下拉选择器的当前`value`属性值。

返回下拉选择器的`text`。

`value`指定在`c-option`上，`text`指`c-option`的`textContent`。

每个`c-option`必须指定一个不重复的`value`。

该属性值在`c-select`标签上不可见。

<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-button type="primary" onclick="this.previousElementSibling.value='3'">选中Option3</c-button>
<c-button type="primary" onclick="XyMessage.info('当前选中: '+this.previousElementSibling.previousElementSibling.text)">获取当前选中textContent</c-button>

JavaScript操作`get`、`set`

```js
select.value; //获取
select.text; //获取textContent(没有set方法)
select.value = 50;
//原生属性操作
select.setAttribute('value',50);
select.getAttribute('value');
```

## 分组`c-optgroup`

可以通过`c-optgroup`进行分组，名称为`label`。

<c-select>
    <c-optgroup label="group1">
        <c-option value="1">Option1</c-option>
        <c-option value="2">Option2</c-option>
        <c-option value="3">Option3</c-option>
    </c-optgroup>
    <c-optgroup label="group2">
        <c-option value="4">Option4</c-option>
        <c-option value="5">Option5</c-option>
    </c-optgroup>
    <c-option value="6">Option6</c-option>
</c-select>

```html
<c-select>
    <c-optgroup label="group1">
        <c-option value="1">Option1</c-option>
        <c-option value="2">Option2</c-option>
        <c-option value="3">Option3</c-option>
    </c-optgroup>
    <c-optgroup label="group2">
        <c-option value="4">Option4</c-option>
        <c-option value="5">Option5</c-option>
    </c-optgroup>
    <c-option value="6">Option6</c-option>
</c-select>
```


## 搜索`search`

添加`search`可对选项进行搜索。

过滤的条件是`c-option`中的`key`属性（不区分大小写）。

<c-select search>
    <c-option value="wuhan" key="wuhan-武汉-wh">武汉</c-option>
    <c-option value="beijing" key="beijing-北京-bj">北京</c-option>
    <c-option value="shnaghai" key="shnaghai-上海-sh">上海</c-option>
    <c-option value="shenzhen" key="shenzhen-深圳-sz">深圳</c-option>
    <c-option value="chongqing" key="chongqing-重庆-cq">重庆</c-option>
    <c-option value="hangzhou" key="hangzhou-杭州-hz">杭州</c-option>
    <c-option value="guangzhou" key="guangzhou-广州-gz">广州</c-option>
    <c-option value="hongkong" key="hongkong-香港-hk">香港</c-option>
</c-select>

```html
<c-select search>
    <c-option value="wuhan" key="wuhan-武汉-wh">武汉</c-option>
    <c-option value="beijing" key="beijing-北京-bj">北京</c-option>
    <c-option value="shnaghai" key="shnaghai-上海-sh">上海</c-option>
    <c-option value="shenzhen" key="shenzhen-深圳-sz">深圳</c-option>
    <c-option value="chongqing" key="chongqing-重庆-cq">重庆</c-option>
    <c-option value="hangzhou" key="hangzhou-杭州-hz">杭州</c-option>
    <c-option value="guangzhou" key="guangzhou-广州-gz">广州</c-option>
    <c-option value="hongkong" key="hongkong-香港-hk">香港</c-option>
</c-select>
```

> 内部通过属性选择器`c-option:not([key*="${value}" i])`简单实现，设置`search`后，`type`风格失效

## 必填项`required`

表单验证属性，表示必填

<c-select required>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

<c-select type="flat" required>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

<c-select type="primary" required>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

<c-select type="dashed" required>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<c-select required>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

> 默认提示信息为`请选择一项`，可通过`errortips`自定义提示。

## 合法性`validity`

可以通过属性`validity`来获取下拉框的合法性。

<c-select required>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-button type="primary" onclick="XyMessage.info('合法性:'+this.previousElementSibling.validity)">合法性</c-button>

JavaScript操作`get`

```js
select.validity;//获取
```

## 自定义尺寸

默认情况下，`c-select`尺寸跟随`c-button`，可以自定义宽高

<style>
.c-select-custom{
    width:120px;
    height:30px;
}
</style>
<c-select class="c-select-custom">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<style>
.c-select-custom{
    width:120px;
    height:30px;
}
</style>
<c-select class="c-select-custom">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

## 事件`event`

### onchange

在下拉选中完成时触发。

<c-select onchange="XyMessage.info('当前选中value:'+this.value)">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>

```html
<c-select onchange="XyMessage.info('当前选中value:'+this.value)">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
```

```js
select.onchange = function(ev){
    //获取value和text的几种方式
    /*
    event:{
        detail:{
            value,
            text,
        }
    }
    */
    console.log(this.value);
    console.log(this.text);
    console.log(ev.target.value);
    console.log(ev.target.text);
    console.log(ev.detail.value);
    console.log(ev.detail.text);
}

select.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.text);
    console.log(ev.target.value);
    console.log(ev.target.text);
    console.log(ev.detail.value);
    console.log(ev.detail.text);
})
```

### onfocus

`focus`后的回调事件。

与[`c-button`](c-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，支持方向键。

<c-select onfocus="XyMessage.info('focus')" onblur="XyMessage.info('blur')" onchange="XyMessage.info('当前选中value:'+this.value)">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</c-button>

```js
select.focus();
```

### reset

复原选项，回到默认值。

<c-select defaultvalue="2">
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-button type="primary" onclick="this.previousElementSibling.reset()">reset</c-button>

```js
select.reset();
```

当然，直接操作也是可行的

```js
this.value = this.defaultvalue;
```

### checkValidity

用于主动校验，弹出提示信息。

<c-select required>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
</c-select>
<c-button type="primary" onclick="this.previousElementSibling.checkValidity()">主动校验</c-button>

```js
select.checkValidity();
```

## 其他

`c-select`除了包裹`c-option`以外，还能包裹其他标签，比如`a`链接

<style>
.c-link{
    display:block;
    padding:0 .8em;
}
</style>
<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
    <a class="c-link" href="#">link</a>
</c-select>

```html
<c-select>
    <c-option value="1">Option1</c-option>
    <c-option value="2">Option2</c-option>
    <c-option value="3">Option3</c-option>
    <a class="c-link" href="#">link</a>
</c-select>
```