# c-tips

文字提示气泡框。类似于元素属性`title`。

通过`hover`和`focus`触发。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-tips.js';
</script>
<!-- 使用 -->
<c-tips tips="this is a tip">
    <c-button>button</c-button>
</c-tips>
```

## 提示`tips`

提示文字。如果不设置则不显示提示。

<c-tips tips="this is a tip">
    <c-button>button</c-button>
</c-tips>
<c-button type="primary" onclick="this.previousElementSibling.tips='this is a new tip!'">改变tips</c-button>

```html
<c-tips tips="this is a tip">
    <c-button>button</c-button>
</c-tips>
```

JavaScript操作`get`、`set`

```js
tips.tips;
tips.tips = 'some tips';
//原生属性操作
tips.getAttribute('tips');
tips.setAttribute('tips','some tips');
```

## 方向`dir`

通过`dir`可以设置气泡框方向，默认为`top`，可以取值`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。

<style>
c-row{
    position:relative;
    z-index:100;
}
c-col{
    background-color:transparent!important;
    padding:0;
}
c-col c-button,c-col c-tips{
    width:100%;
}
</style>
<c-row gutter="10" style="max-width:600px; margin:0 auto">
    <c-col span="4"></c-col>
    <c-col span="4"><c-tips tips="topleft topleft topleft topleft some tips" dir="topleft"><c-button>topleft</c-button></c-tips></c-col>
    <c-col span="4"><c-tips tips="some tips" dir="top"><c-button>top</c-button></c-tips></c-col>
    <c-col span="4"><c-tips tips="some tips" dir="topright"><c-button>topright</c-button></c-tips></c-col>
    <c-col span="8"></c-col>
    <c-col span="4"><c-tips dir="lefttop" tips="a a a a a a a a a lefttop lefttop lefttop lefttop lefttop some tips"><c-button>lefttop</c-button></c-tips></c-col>
    <c-col span="12"></c-col>
    <c-col span="4"><c-tips dir="righttop" tips="a a a a a a a a a lefttop lefttop lefttop lefttop lefttop lefttop some tips"><c-button>righttop</c-button></c-tips></c-col>
    <c-col span="4"></c-col>
    <c-col span="4"><c-tips dir="left" tips="some tips some tips some tips some tips some tips some tips some tips"><c-button>left</c-button></c-tips></c-col>
    <c-col span="12"></c-col>
    <c-col span="4"><c-tips dir="right" tips="some tips"><c-button>right</c-button></c-tips></c-col>
    <c-col span="4"></c-col>
    <c-col span="4"><c-tips dir="leftbottom" tips="a a a a a a a a a leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom some tips"><c-button>leftbottom</c-button></c-tips></c-col>
    <c-col span="12"></c-col>
    <c-col span="4"><c-tips dir="rightbottom" tips="a a a rightbottom rightbottom rightbottom rightbottom rightbottom some tips"><c-button>rightbottom</c-button></c-tips></c-col>
    <c-col span="4"></c-col>
    <c-col span="4"></c-col>
    <c-col span="4"><c-tips dir="bottomleft" tips="some tips"><c-button>bottomleft</c-button></c-tips></c-col>
    <c-col span="4"><c-tips dir="bottom" tips="some tips"><c-button>bottom</c-button></c-tips></c-col>
    <c-col span="4"><c-tips dir="bottomright" tips="some tips"><c-button>bottomright</c-button></x</c-col>
</c-row>

```html
<c-tips dir="top" tips="some tips"><c-button>top</c-button></c-tips>
<c-tips dir="right" tips="some tips"><c-button>right</c-button></c-tips>
<c-tips dir="bottom" tips="some tips"><c-button>bottom</c-button></c-tips>
<c-tips dir="left" tips="some tips"><c-button>left</c-button></c-tips>
<c-tips dir="topleft" tips="some tips"><c-button>topleft</c-button></c-tips>
<c-tips dir="topright" tips="some tips"><c-button>topright</c-button></c-tips>
<c-tips dir="righttop" tips="some tips"><c-button>righttop</c-button></c-tips>
<c-tips dir="rightbottom" tips="some tips"><c-button>rightbottom</c-button></c-tips>
<c-tips dir="bottomleft" tips="some tips"><c-button>bottomleft</c-button></c-tips>
<c-tips dir="bottomright" tips="some tips"><c-button>bottomright</c-button></c-tips>
<c-tips dir="lefttop" tips="some tips"><c-button>lefttop</c-button></c-tips>
<c-tips dir="leftbottom" tips="some tips"><c-button>leftbottom</c-button></c-tips>
```


JavaScript操作`get`、`set`

```js
tips.dir;
tips.dir = 'right';
//原生属性操作
tips.getAttribute('dir');
tips.setAttribute('dir','right');
```

除了上述四个方位外，还可以设置`auto`，可以自动根据位置来选择一个合适的方向（还不完善）。

```html
<c-tips tips="some tips" dir="auto"><c-button>auto</c-button></c-tips>
```

## 类型`type`

可以通过`type`设置提示框的颜色，有三种类型`success`、`error`、`warning`

<c-tips tips="success tips" type="success"><c-button>success</c-button></c-tips>
<c-tips tips="warning tips" type="warning"><c-button>warning</c-button></c-tips>
<c-tips tips="error tips" type="error"><c-button>error</c-button></c-tips>

```html
<c-tips tips="success tips" type="success"><c-button>success</c-button></c-tips>
<c-tips tips="warning tips" type="warning"><c-button>warning</c-button></c-tips>
<c-tips tips="error tips" type="error"><c-button>error</c-button></c-tips>
```

JavaScript操作`get`、`set`

```js
tips.type;
tips.type = 'success';
//原生属性操作
tips.getAttribute('type');
tips.setAttribute('type','success');
```

## 颜色`color`

通过`color`可以设置提示框为任意颜色，优先级高于`type`。

<c-tips tips="some tips" color="skyblue"><c-button>custom color</c-button></c-tips>

```html
<c-tips tips="some tips" color="skyblue"><c-button>custom color</c-button></c-tips>
```

JavaScript操作`get`、`set`

```js
tips.color;
tips.color = 'red';
//原生属性操作
tips.getAttribute('color');
tips.setAttribute('color','red');
```

## 显示`show`

添加`show`属性可以主动控制提示框的出现时机，不再与`hover`和`focus`关联，可以取值`true`和`false`。

适用于表单错误信息描述。

<c-tips tips="some tips" show="true"><c-button>tips is show</c-button></c-tips>
<c-switch checked onchange="this.previousElementSibling.show = this.checked;"></c-switch>

```html
<c-tips tips="some tips" show="true"><c-button>tips is show</c-button></c-tips>
```

JavaScript操作`set`

```js
tips.show = true;
tips.show = false;
//原生属性操作
tips.setAttribute('show',true);
```
