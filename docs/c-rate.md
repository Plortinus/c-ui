# c-rate

常见的评分组件。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-rate.js';
</script>
<!-- 使用 -->
<c-rate></c-rate>
```

## 默认值`defaultvalue`

可以给评分指定一个初始值`defaultvalue`，取值为`1~5`之间的整数。

<c-rate defaultvalue="2"></c-rate>

```html
<c-rate defaultvalue="2"></c-rate>
```

## 值`value`

设置或返回评分组件的`value`属性值。仅能设置为`1~5`之间的整数。

该属性值在`c-rate`标签上不可见。

<c-rate defaultvalue="2"></c-rate>
<c-button type="primary" onclick="this.previousElementSibling.value=3">设置value为3</c-button>
<c-button type="primary" onclick="CMessage.info('当前value: '+this.previousElementSibling.previousElementSibling.value)">显示当前value</c-button>

JavaScript操作`get`、`set`

```js
rate.value; //获取
rate.value = 2;
//原生属性操作
rate.getAttribute('value');
rate.setAttribute('value',2);
```

## 禁用`disabled`

通过`disabled`可以禁用，禁用后事件失效。

<c-rate disabled defaultvalue="2"></c-rate>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-rate disabled defaultvalue="2"></c-rate>
```

JavaScript操作`get`、`set`

```js
rate.disabled;//获取
rate.disabled = false;
rate.disabled = true;
//原生属性操作
rate.getAttribute('disabled');
rate.setAttribute('disabled','');
rate.removeAttribute('disabled');
```

## 图标`icon`

默认图标为`star-fill`，可选择其他图标。

关于`c-icon`的取值可以查看[`c-icon`](c-icon.md)

<c-rate defaultvalue="2" icon="star"></c-rate>

<c-rate defaultvalue="2" icon="like-fill"></c-rate>

<c-rate defaultvalue="2" icon="heart-fill"></c-rate>

<c-rate defaultvalue="2" icon="like"></c-rate>

<c-rate defaultvalue="2" icon="heart"></c-rate>

```html
<c-rate defaultvalue="2" icon="star"></c-rate>
<c-rate defaultvalue="2" icon="like-fill"></c-rate>
<c-rate defaultvalue="2" icon="heart-fill"></c-rate>
<c-rate defaultvalue="2" icon="like"></c-rate>
<c-rate defaultvalue="2" icon="heart"></c-rate>
```

## 尺寸`size`

通过`size`可以设置组件尺寸，默认为`font-size`大小（`20px`）。

<c-rate defaultvalue="2" size="20"></c-rate>

<c-rate defaultvalue="2" size="25"></c-rate>

<c-rate defaultvalue="2" size="30"></c-rate>

<c-rate defaultvalue="2" size="35"></c-rate>

```html
<c-rate defaultvalue="2" size="20"></c-rate>
<c-rate defaultvalue="2" size="25"></c-rate>
<c-rate defaultvalue="2" size="30"></c-rate>
<c-rate defaultvalue="2" size="35"></c-rate>
```

CSS操作（推荐）

```css
c-rate{
    font-size:30px;
}
```

JavaScript操作`get`、`set`

```js
rate.size;
rate.size = 30;
//原生属性操作
rate.getAttribute('size');
rate.setAttribute('size',30);
```

> CSS操作更灵活，可以写在样式中，属性值和JavaScript操作优先级更高

## 颜色`color`

通过`color`可以设置组件颜色，默认为主题颜色`themeColor`。

<c-rate defaultvalue="2" color="orangered"></c-rate>

<c-rate defaultvalue="2" color="#1E90FF"></c-rate>

<c-rate defaultvalue="2" color="#F44336"></c-rate>

<c-rate defaultvalue="2" color="#3F51B5"></c-rate>

```html
<c-rate defaultvalue="2" color="orangered"></c-rate>
<c-rate defaultvalue="2" color="#1E90FF"></c-rate>
<c-rate defaultvalue="2" color="#F44336"></c-rate>
<c-rate defaultvalue="2" color="#3F51B5"></c-rate>
```

JavaScript操作`get`、`set`

```js
rate.color;
rate.color = 'orangered';
//原生属性操作
rate.getAttribute('color');
rate.setAttribute('color','orangered');
```

可以通过`css`控制默认未选中颜色（默认为`#eee`）

<style>
.rate-color{
    color:yellow
}
</style>
<c-rate defaultvalue="2" color="#F44336" class="rate-color"></c-rate>

```html

<style>
.rate-color{
    color:yellow
}
</style>
<c-rate defaultvalue="2" color="#F44336" class="rate-color"></c-rate>
```

## 提示`tips`

可以给评分指定一个提示，用于鼠标`hover`显示状态信息，格式形如`tips1,tips2,tips3,tips4,tips5`

<c-rate defaultvalue="1" tips="terrible,bad,normal,good,wonderful"></c-rate>

```html
<c-rate defaultvalue="1" tips="terrible,bad,normal,good,wonderful"></c-rate>
```

## 事件`event`

该组件暴露了常见的回调事件

### onchange

评分组件在评分完成时触发，键盘左右操作同样触发。

<c-rate defaultvalue="1" onchange="CMessage.info('当前value: '+this.value)"></c-rate>

```html
<c-rate defaultvalue="1" onchange="CMessage.info('当前value: '+this.value)"></c-rate>
```

其他触发方式

```js
rate.onchange = function(ev){
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

rate.addEventListener('change',function(ev){
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

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，支持方向键。

<c-rate onfocus="CMessage.info('focus')" onblur="CMessage.info('blur')" onchange="CMessage.info(this.value)"></c-rate>
<c-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</c-button>

```js
rate.focus();
```