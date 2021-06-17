# c-switch

开关选择器。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/c-ui/components/c-switch.js';
</script>
<!-- 使用 -->
<c-switch></c-switch>
```

## 禁用`disabled`

通过`disabled`可以禁用开关。

<c-switch disabled></c-switch>
<c-button type="primary" onclick="this.previousElementSibling.disabled=!this.previousElementSibling.disabled">禁用切换</c-button>

```html
<c-switch disabled></c-switch>
```

JavaScript操作

```js
switch.disabled;//获取
switch.disabled = false;
switch.disabled = true;
//原生属性操作
switch.setAttribute('disabled','');
switch.removeAttribute('disabled');
```

## 选中`checked`

`checked`属性表示选中。

<c-switch checked></c-switch>
<c-button type="primary" onclick="this.previousElementSibling.checked=!this.previousElementSibling.checked">选中切换</c-button>

```html
<c-switch checked></c-switch>
```

JavaScript操作

```js
switch.checked;//获取
switch.checked = false;
switch.checked = true;
//原生属性操作
switch.setAttribute('checked','');
switch.removeAttribute('checked');
```

## 自定义尺寸

内部采用`em`相对尺寸，可通过`font-size`来控制大小。

<c-switch checked></c-switch>
<c-slider min="10" max="50" defaultvalue="16" suffix="px" showtips oninput="this.previousElementSibling.style.fontSize=this.value+'px'" ></c-slider>

```html
<style>
c-switch{
    font-size:20px;
}
</style>
<c-switch checked></c-switch>
```

## 事件`event`

### onchange

在切换完成时触发。

<c-switch onchange="XyMessage.info('当前状态checked:'+this.checked)"></c-switch>

```html
<c-switch onchange="XyMessage.info('当前状态checked:'+this.checked)"></c-switch>
```

```js
switch.onchange = function(ev){
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

switch.addEventListener('change',function(ev){
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
})
```

### onfocus、onblur

`focus`、`blur`后的回调事件。

与[`c-button`](c-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，`Enter`切换开关。

<c-switch onfocus="XyMessage.info('focus')" onchange="XyMessage.info('当前状态checked:'+this.checked)"></c-switch>
<c-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</c-button>

```js
switch.focus();
```