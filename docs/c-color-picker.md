# c-color-picker

颜色选择器。

![c-color-picker](../screenshot/color-picker.png)

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-color-picker.js';
</script>
<!-- 使用 -->
<c-color-picker></c-color-picker>
```

## 默认值`defaultvalue`

可以给颜色选择器指定一个初始颜色值`defaultvalue`，取值为合法的颜色值。

|类型|示例|web支持|
|---|---|---|
|关键字|`red`、`blue`|支持|
|hex(a)|`#42b983`、`#42B983BA`|支持|
|rgb(a)|`rgb(66, 185, 131)`、`rgba(66, 185, 131, 0.73)`|支持|
|hls(a)|`hsl(153, 47%, 49%)`、`hsla(153, 47%, 49%, 0.73)`|支持|
|hsv(a)|`hsv(153, 47%, 49%)`、`hsva(153, 47%, 49%, 0.73)`|不支持|
|cmyk|`cmyk(20%, 35%, 74%, 53%)`|不支持|

> 其中，web支持颜色关键字、`hex(a)`、`rgb(a)`、`hls(a)`四种方式。

<c-color-picker defaultvalue="rgb(66, 185, 131)"></c-color-picker>

```html
<c-color-picker defaultvalue="rgb(66, 185, 131)"></c-color-picker>
```

## 值`value`、颜色`color`

设置或返回颜色选择器的`value`属性值。值为合法的颜色值。默认返回当前格式下的颜色值。

返回颜色的详细信息`color`，可以将值转换成任意格式的颜色值。

```js
//color
{
    h: 16.23529411764704
    s: 66.42857142857143
    v: 71.71875
    a: 1
    toCMYK: f,
    toHEXA: f,
    toHSLA: f,
    toHSVA:f,
    toRGBA: f,
}

color.toRGBA().toString()//返回RGBA的颜色值
```

该属性值在`c-color-picker`标签上不可见。

<c-color-picker defaultvalue="rgb(66, 185, 131)" id="color-picker-value"></c-color-picker>

<c-button type="primary" onclick="document.getElementById('color-picker-value').value='orangered'">设置value为orangered</c-button>
<c-button type="primary" onclick="XyMessage.info('当前value: '+document.getElementById('color-picker-value').value)">显示当前value</c-button>

JavaScript操作`get`、`set`

```js
color.value; //获取
color.color; //获取
color.value = 'orangered';
//原生属性操作
color.getAttribute('value');
color.getAttribute('color');
color.setAttribute('value','orangered');
```

## 禁用`disabled`

通过`disabled`可以禁用，禁用后无法打开颜色选择面板。

<c-color-picker disabled defaultvalue="rgb(66, 185, 131)"></c-color-picker>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-color-picker disabled defaultvalue="rgb(66, 185, 131)"></c-color-picker>
```

JavaScript操作`get`、`set`

```js
color.disabled;//获取
color.disabled = false;
color.disabled = true;
//原生属性操作
color.getAttribute('disabled');
color.setAttribute('disabled','');
color.removeAttribute('disabled');
```

## 方向`dir`

通过`dir`可以设置颜色悬浮层方向，默认为`bottomleft`，可以取值`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。同[`c-popover`](c-popover.md)。

<c-color-picker defaultvalue="rgb(66, 185, 131)" dir="topleft"></c-color-picker>

```html
<c-color-picker defaultvalue="rgb(66, 185, 131)" dir="topleft"></c-color-picker>
```

JavaScript操作`get`、`set`

```js
color.dir;
color.dir = 'right';
//原生属性操作
color.getAttribute('dir');
color.setAttribute('dir','right');
```

## 自定义尺寸

默认情况下，`c-color-picker`是一个圆角正方形，可以设置宽高

<style>
.color-picker-custom{
    width:100px;
    height:30px;
}
</style>
<c-color-picker class="color-picker-custom" defaultvalue="rgb(66, 185, 131)"></c-color-picker>

```html
<style>
.color-picker-custom{
    width:100px;
    height:30px;
}
</style>
<c-color-picker class="color-picker-custom" defaultvalue="rgb(66, 185, 131)"></c-color-picker>
```

## 事件`event`

该组件暴露了常见的回调事件

### onchange

当选好颜色后，按确定按钮可以触发`change`回调。

<c-color-picker defaultvalue="rgb(66, 185, 131)" onchange="XyMessage.info('当前value: '+this.value)"></c-color-picker>

```html
<c-color-picker defaultvalue="rgb(66, 185, 131)" onchange="XyMessage.info('当前value: '+this.value)"></c-color-picker>
```

其他触发方式

```js
color.onchange = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
            color:{
                h: 16.23529411764704
                s: 66.42857142857143
                v: 71.71875
                a: 1
                toCMYK: f,
                toHEXA: f,
                toHSLA: f,
                toHSVA:f,
                toRGBA: f,
            }
        }
    }
    */
    console.log(this.value);
    console.log(this.color);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    this.color.toRGBA().toString() //rgba(255,255,255,1)
}

color.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.color);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    this.color.toRGBA().toString() //rgba(255,255,255,1)
})
```



## 其他

`c-color-picker`内部基于`c-popover`和`c-color-pane`实现。

```html
<c-popover >
    <c-button class="color-btn"></c-button>
    <c-popcon>
        <c-color-pane id="color-pane"></c-color-pane>
        <div class="pop-footer">
            <c-button id="btn-cancel">取消</c-button>
            <c-button type="primary" id="btn-submit">确认</c-button>
        </div>
    </c-popcon>
</c-popover>
```

其中，`c-color-pane`为颜色选择面板，可独立使用。

<c-color-pane defaultvalue="rgb(66, 185, 131)"></c-color-pane>

```html
<c-color-pane defaultvalue="rgb(66, 185, 131)"></c-color-pane>
```

事件和属性与`c-color-picker`一致。

```js
colorPane.value = 'orangered';
colorPane.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.color);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    this.color.toRGBA().toString() //rgba(255,255,255,1)
})
```