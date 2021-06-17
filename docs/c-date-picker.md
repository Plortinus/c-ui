# c-date-picker

日期选择器。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-date-picker.js';
</script>
<!-- 使用 -->
<c-date-picker></c-date-picker>
```

## 默认值`defaultvalue`

可以给日期选择器指定一个初始日期`defaultvalue`，取值为合法的时间戳字符串`DataString`，默认为当前日期。

支持形如以下的字符串，可参考[Date.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)

```js
"2019-2-28"
"2019-02-28"
"2019/2/28"
"2019,2,28"
"2019 2 28"
"Feb 28 2019"
//...其他日期格式
//以上均表示2019年2月28日。
```

<c-date-picker defaultvalue="2019-2-28"></c-date-picker>

```html
<c-date-picker defaultvalue="2019-2-28"></c-date-picker>
```

## 类型`type`

支持设置日期选择类型，可选择`date`（默认）、`month`、`year`，分别实现日期选择器、月选择器、年选择器。

<c-date-picker></c-date-picker>
<c-date-picker type="month"></c-date-picker>
<c-date-picker type="year"></c-date-picker>

```html
<c-date-picker></c-date-picker>
<c-date-picker type="month"></c-date-picker>
<c-date-picker type="year"></c-date-picker>
```

## 值`value`、日期`date`

设置或返回日期选择器的`value`属性值。值为当前类型下的日期，格式形如`2019-10-10`。

返回日期的标准格式`date`，可以将值转换成任意格式的日期。。

```js
//value
"2019-08-31"
//date
"Sat Aug 31 2019 14:54:05 GMT+0800 (中国标准时间)"
```

该属性值在`c-date-picker`标签上不可见。

<c-date-picker id="date-picker-value"></c-date-picker>

<c-button type="primary" onclick="document.getElementById('date-picker-value').value='2019-10-10'">设置日期为2019-10-10</c-button>
<c-button type="primary" onclick="XyMessage.info('当前日期: '+document.getElementById('date-picker-value').value)">显示当前日期</c-button>

JavaScript操作`get`、`set`

```js
date.value; //获取
date.date; //获取
date.value = '2019-10-10';
//原生属性操作
date.getAttribute('value');
date.getAttribute('date');
date.setAttribute('value','2019-10-10');
```

## 最小值`min`、最大值`max`

设置日期选择范围，超出范围之外的不可选中，格式同`defaultvalue`。

<c-date-picker min="2019-8-20" max="2019-12-21"></c-date-picker>
<c-date-picker type="month" min="2019-5" max="2019-12"></c-date-picker>
<c-date-picker type="year" min="2018" max="2050"></c-date-picker>

```html
<c-date-picker min="2019-8-20" max="2019-12-21"></c-date-picker>
<c-date-picker type="month" min="2019-5" max="2019-12"></c-date-picker>
<c-date-picker type="year" min="2018" max="2050"></c-date-picker>
```

## 禁用`disabled`

通过`disabled`可以禁用，禁用后无法打开日期选择器。

<c-date-picker disabled></c-date-picker>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-date-picker disabled></c-date-picker>
```

JavaScript操作`get`、`set`

```js
date.disabled;//获取
date.disabled = false;
date.disabled = true;
//原生属性操作
date.getAttribute('disabled');
date.setAttribute('disabled','');
date.removeAttribute('disabled');
```

## 方向`dir`

通过`dir`可以设置日期选择器方向，默认为`bottomleft`，可以取值`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。同[`c-popover`](c-popover.md)。

<c-date-picker dir="righttop"></c-date-picker>

```html
<c-date-picker dir="righttop"></c-date-picker>
```

JavaScript操作`get`、`set`

```js
date.dir;
date.dir = 'right';
//原生属性操作
date.getAttribute('dir');
date.setAttribute('dir','right');
```

## 范围选择`range`

添加`range`属性可以实现日期范围选择。

<c-date-picker range></c-date-picker>

```html
<c-date-picker range></c-date-picker>
```

可以指定一个默认范围`defaultvalue`，格式形如`2019-10-10~2019-12-31`，用`~`链接。默认为当前日期。

<c-date-picker range defaultvalue="2019-10-10~2019-12-31"></c-date-picker>

```html
<c-date-picker range defaultvalue="2019-10-10~2019-12-31"></c-date-picker>
```

范围选择模式下的`value`和`date`均为数组

```js
//value
["2019-05-15", "2019-12-26"]
//date
["Wed May 15 2019 08:00:00 GMT+0800 (中国标准时间)", "Thu Dec 26 2019 08:00:00 GMT+0800 (中国标准时间)"]
```

其他属性均可叠加，比如`type`

<c-date-picker range></c-date-picker>
<c-date-picker range type="month"></c-date-picker>
<c-date-picker range type="year" dir="bottom"></c-date-picker>

```html
<c-date-picker range></c-date-picker>
<c-date-picker range type="month"></c-date-picker>
<c-date-picker range type="year" dir="bottom"></c-date-picker>
```

## 自定义尺寸

默认情况下，`c-date-picker`尺寸跟随`c-button`，可以自定义宽高，同[`c-select`](c-select.md)

<style>
.date-custom{
    width:150px;
    height:40px;
}
</style>
<c-date-picker class="date-custom"></c-date-picker>

```html
<style>
.date-custom{
    width:100px;
    height:30px;
}
</style>
<c-date-picker class="date-custom"></c-date-picker>
```

也可以通过设置`font-size`来改变尺寸

<style>
.date-custom2{
    font-size:20px;
}
</style>
<c-date-picker class="date-custom2"></c-date-picker>

```html
<style>
.date-custom2{
    font-size:20px;
}
</style>
<c-date-picker class="date-custom2"></c-date-picker>
```

## 事件`event`

该组件暴露了常见的回调事件

### onchange

当选好日期后，按确定按钮可以触发`change`回调。

<c-date-picker onchange="XyMessage.info('当前选择日期: '+this.value)"></c-date-picker>

```html
<c-date-picker onchange="XyMessage.info('当前选择日期: '+this.value)"></c-date-picker>
```

其他触发方式

```js
date.onchange = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
            date
        }
    }
    */
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
}

date.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
})
```

## 其他

`c-date-picker`内部基于`c-popover`和`c-date-pane`实现。

```html
<c-popover >
    <c-button class="date-btn"></c-button>
    <c-popcon>
        <c-date-pane id="color-pane"></c-date-pane>
        <div class="pop-footer">
            <c-button id="btn-cancel">取消</c-button>
            <c-button type="primary" id="btn-submit">确认</c-button>
        </div>
    </c-popcon>
</c-popover>
```

其中，`c-date-pane`为日期选择面板，可独立使用。

<c-date-pane></c-date-pane>

```html
<c-date-pane></c-date-pane>
```

事件和属性与`c-date-picker`一致。

```js
datePane.value = '2019-10-10';
datePane.onchange = function(ev){
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
}
datePane.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(this.date);
    console.log(ev.target.value);
    console.log(ev.detail.value);
    console.log(ev.detail.date);
})
```