# c-tab

标签页。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-tab.js';
</script>
<!-- 使用 -->
<c-tab>
    <c-tab-content label="tab1">tab1</c-tab-content>
    <c-tab-content label="tab2">tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>
```

`c-tab`需和`c-tab-content`组合使用。

## 名称`label`

每个`c-tab-content`需要指定一个名称`label`，用于显示标签头。

<c-tab>
    <c-tab-content label="tab1">tab1</c-tab-content>
    <c-tab-content label="tab2">tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>

```html
<c-tab>
    <c-tab-content label="tab1">tab1</c-tab-content>
    <c-tab-content label="tab2">tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>
```

JavaScript操作`get`、`set`

> 作用于`c-tab-content`

```js
//c-tab-content
content.label;
content.label = 'tab';
//原生属性操作
content.getAttribute('label');
content.setAttribute('label','tab');
```

## 禁用`disabled`

每个`c-tab-content`可以指定`disabled`属性，用来禁用该标签页。

<c-tab>
    <c-tab-content label="tab1">tab1</c-tab-content>
    <c-tab-content id="tab-content-disabled" label="tab2" disabled>tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>
<c-switch checked onchange="document.getElementById('tab-content-disabled').disabled = this.checked;"></c-switch>

```html
<c-tab>
    <c-tab-content label="tab1">tab1</c-tab-content>
    <c-tab-content label="tab2" disabled>tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>
```

JavaScript操作`get`、`set`

> 作用于`c-tab-content`

```js
//c-tab-content
content.disabled;
content.disabled = true;
content.disabled = false;
//原生属性操作
content.getAttribute('disabled');
content.setAttribute('disabled','');
content.removeAttribute('disabled');
```

## 标识`key`、`activekey`

每个`c-tab-content`需要指定一个标识`key`，没有会默认以序列号为`key`，

`activekey`作用在`c-tab`上，可以指定切换到具体标签页，也可以指定初始值。

<c-tab activekey="B">
    <c-tab-content label="tab1" key="A">tab1</c-tab-content>
    <c-tab-content label="tab2" key="B">tab2</c-tab-content>
    <c-tab-content label="tab3" key="C">tab3</c-tab-content>
</c-tab>
<c-button type="primary" onclick="this.previousElementSibling.activekey='C'">跳转tab3</c-button>

```html
<c-tab activekey="B">
    <c-tab-content label="tab1" key="A">tab1</c-tab-content>
    <c-tab-content label="tab2" key="B">tab2</c-tab-content>
    <c-tab-content label="tab3" key="C">tab3</c-tab-content>
</c-tab>
<c-button type="primary" onclick="this.previousElementSibling.activekey='C'">跳转tab3</c-button>
```

JavaScript操作`get`、`set`

```js
tab.activekey;
tab.activekey = 'key';
//原生属性操作
tab.getAttribute('activekey');
tab.setAttribute('activekey','key');
```

## 图标`icon`

每个`c-tab-content`可以指定`icon`，配合`label`实现图标加文字的效果。

<c-tab>
    <c-tab-content label="home" icon="home">tab1</c-tab-content>
    <c-tab-content label="message" icon="message">tab2</c-tab-content>
    <c-tab-content label="user" icon="user">tab3</c-tab-content>
</c-tab>

```html
<c-tab>
    <c-tab-content label="home" icon="home">tab1</c-tab-content>
    <c-tab-content label="message" icon="message">tab2</c-tab-content>
    <c-tab-content label="user" icon="user">tab3</c-tab-content>
</c-tab>
```

也可以单独指定`icon`，不使用`label`。

<c-tab>
    <c-tab-content icon="home">tab1</c-tab-content>
    <c-tab-content icon="message">tab2</c-tab-content>
    <c-tab-content icon="user">tab3</c-tab-content>
</c-tab>

```html
<c-tab>
    <c-tab-content icon="home">tab1</c-tab-content>
    <c-tab-content icon="message">tab2</c-tab-content>
    <c-tab-content icon="user">tab3</c-tab-content>
</c-tab>
```

JavaScript操作`get`、`set`

> 作用于`c-tab-content`

```js
//c-tab-content
content.icon;
content.icon = 'name';
//原生属性操作
content.getAttribute('icon');
content.setAttribute('icon','name');
```

## 风格`type`

可选择标签页风格，`flat`、`card`，默认为`flat`

* `card`卡片式风格，通常适用于有背景的卡片中
* `line`线框式风格

<c-radio-group onchange="this.nextElementSibling.type=this.value" defaultvalue="flat">
    <c-radio value="flat">flat</c-radio>
    <c-radio value="card">card</c-radio>
    <c-radio value="line">line</c-radio>
</c-radio-group>
<c-tab type="flat" style="padding:.8em;">
    <c-tab-content label="home" icon="home">tab1</c-tab-content>
    <c-tab-content label="message" icon="message">tab2</c-tab-content>
    <c-tab-content label="user" icon="user">tab3</c-tab-content>
</c-tab>
<style>
c-tab[type="card"]{
    background:#f1f1f1;
}
</style>

```css
c-tab[type="card"]{
    padding:.8em; 
    background:#f1f1f1;
}
```
```html
<c-tab type="card">
    ...
</c-tab>
```

> 纯`CSS`修改(属性选择器)，当设置成`card`或者`line`风格时，容器不再有滚动动画


## 对齐`align`

设置标签头的对齐方式，默认为`start`(居左)，可设置`center`(居中)、`end`（居右）

<c-radio-group onchange="this.nextElementSibling.align=this.value" defaultvalue="start">
    <c-radio value="start">start</c-radio>
    <c-radio value="center">center</c-radio>
    <c-radio value="end">end</c-radio>
</c-radio-group>
<c-tab type="card" style="padding:.8em; background:#f1f1f1">
    <c-tab-content label="home" icon="home">tab1</c-tab-content>
    <c-tab-content label="message" icon="message">tab2</c-tab-content>
    <c-tab-content label="user" icon="user">tab3</c-tab-content>
</c-tab>

```html
<c-tab type="card" align="center">
    ...
</c-tab>
```

JavaScript操作`get`、`set`

> 作用于`c-tab`

```js
//c-tab
tab.align;
tab.align = 'center';
//原生属性操作
tab.getAttribute('align');
tab.setAttribute('align','center');
```

## 事件`event`

### onchange

`c-tab`切换完成时触发。

<c-tab onchange="XyMessage.info(event.detail.label)">
    <c-tab-content label="tab1">tab1</c-tab-content>
    <c-tab-content label="tab2">tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>

```html
<c-tab onchange="XyMessage.info(event.detail.label)">
    <c-tab-content label="tab1">tab1</c-tab-content>
    <c-tab-content label="tab2">tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>
```


```js
tab.onchange = function(ev){
    //获取key、index和label的几种方式
    /*
    event:{
        detail:{
            key,
            index,
            label,
        }
    }
    */
    const { key, index, label } = ev.detail;
    console.log(key, index, label);
}

tab.addEventListener('change',function(ev){
    const { key, index, label } = ev.detail;
    console.log(key, index, label);
})
```

## 其他

当`tab`比较多时，超出范围，会自动滚动。

<c-tab>
    <c-tab-content label="tab11111111111111">tab1</c-tab-content>
    <c-tab-content label="tab2222222222222">tab2</c-tab-content>
    <c-tab-content label="tab333333333">tab3</c-tab-content>
    <c-tab-content label="tab4">tab4</c-tab-content>
    <c-tab-content label="tab5">tab5</c-tab-content>
    <c-tab-content label="tab64444444444">tab6</c-tab-content>
    <c-tab-content label="tab7">tab7</c-tab-content>
    <c-tab-content label="tab855555555">tab8</c-tab-content>
    <c-tab-content label="tab9">tab9</c-tab-content>
    <c-tab-content label="tab106666666666">tab10</c-tab-content>
</c-tab>

各个组件相互独立，可以随意嵌套，如下。

<c-tab>
    <c-tab-content label="tab1">
        <c-tab>
            <c-tab-content label="1-tab1">1-tab1</c-tab-content>
            <c-tab-content label="1-tab2">1-tab2</c-tab-content>
            <c-tab-content label="1-tab3">1-tab3</c-tab-content>
        </c-tab>
    </c-tab-content>
    <c-tab-content label="tab2">tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>

```html
<c-tab>
    <c-tab-content label="tab1">
        <c-tab>
            <c-tab-content label="1-tab1">1-tab1</c-tab-content>
            <c-tab-content label="1-tab2">1-tab2</c-tab-content>
            <c-tab-content label="1-tab3">1-tab3</c-tab-content>
        </c-tab>
    </c-tab-content>
    <c-tab-content label="tab2">tab2</c-tab-content>
    <c-tab-content label="tab3">tab3</c-tab-content>
</c-tab>
```

