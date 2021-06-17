# c-layout

布局，基于`flex`和`grid`的简单实现。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-layout.js';
</script>
<!-- 使用 -->
<c-layout row expand>
    <c-layout class="side"></c-layout>
    <c-layout expand center class="main">
        <c-layout center class="box">c-layout</c-layout>
    </c-layout>
    <c-layout class="side"></c-layout>
</c-layout>

<c-row gutter="10">
    <c-col span="4">col-4</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="4">col-4</c-col>
</c-row>
```

内部仅仅根据属性选择器实现，属性可叠加使用。

## 水平排列`row`

默认为垂直排列，`row`表示水平排列。

<c-layout row>
    <c-layout class="box">1</c-layout>
    <c-layout class="box box-o">2</c-layout>
</c-layout>

```html
<c-layout row>
    <c-layout class="box">1</c-layout>
    <c-layout class="box box-o">2</c-layout>
</c-layout>
```

## 填充`expand`

根据剩余空间填充（主轴方向）。

<c-layout row>
    <c-layout class="box" expand>1</c-layout>
    <c-layout class="box box-o">2</c-layout>
</c-layout>

```html
<c-layout row>
    <c-layout class="box" expand>1</c-layout>
    <c-layout class="box box-o">2</c-layout>
</c-layout>
```

如果有多个，则会等分剩余空间。

<c-layout row>
    <c-layout class="box">1</c-layout>
    <c-layout class="box box-o" expand>2</c-layout>
    <c-layout class="box" expand>3</c-layout>
</c-layout>

```html
<c-layout row>
    <c-layout class="box">1</c-layout>
    <c-layout class="box box-o" expand>2</c-layout>
    <c-layout class="box" expand>3</c-layout>
</c-layout>
```

## 居中`center`

默认水平垂直居中，可以指定某一方向居中，主轴`mainAxis`和交叉轴`crosAxis`。

<c-layout center style="height:200px">
    <c-layout class="box">1</c-layout>
</c-layout>

```html
<c-layout center style="height:200px">
    <c-layout class="box">1</c-layout>
</c-layout>
```

`center="crosAxis"`

<c-layout row center="crosAxis" style="height:200px">
    <c-layout class="box">1</c-layout>
</c-layout>

```html
<c-layout row center="crosAxis" style="height:200px">
    <c-layout class="box">1</c-layout>
</c-layout>
```

`center="mainAxis"`

<c-layout row center="mainAxis" style="height:200px">
    <c-layout class="box">1</c-layout>
</c-layout>

```html
<c-layout row center="mainAxis" style="height:200px">
    <c-layout class="box">1</c-layout>
</c-layout>
```

## 栅格`row`、`col`

现在支持栅格系统，基于`grid`布局

`24`栅格系统。把水平方向行`c-row`平均分为`24`份，然后指定每一列`c-col`的跨越范围`span`

<c-row gutter="10">
    <c-col span="12">col-12</c-col>
    <c-col span="12">col-12</c-col>
    <c-col span="4">col-4</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="4">col-4</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
</c-row>

```html
<c-row gutter="10">
    <c-col span="12">col-12</c-col>
    <c-col span="12">col-12</c-col>
    <c-col span="4">col-4</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="4">col-4</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
</c-row>
```

## 间隔`gutter`

通过`gutter`属性可以设置栅格间隔

<c-slider type="number" min="0" max="24" suffix="px" defaultvalue="10" showtips oninput="this.nextElementSibling.gutter=this.value"></c-slider>
<c-row gutter="10">
    <c-col span="4">col-4</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="8">col-8</c-col>
    <c-col span="4">col-4</c-col>
</c-row>

JavaScript操作`get`、`set`

```js
row.gutter;//获取
row.gutter = 10;
//原生属性操作
row.getAttribute('gutter');
row.setAttribute('gutter',10);
```

## 示例

下面是一个`c-layout`简单的示例。

<c-layout class="layout">
    <c-layout class="header">HEADER</c-layout>
    <c-layout row expand>
        <c-layout class="side"></c-layout>
        <c-layout expand center class="main">
            <c-layout center class="box">c-layout</c-layout>
        </c-layout>
        <c-layout class="side"></c-layout>
    </c-layout>
    <c-layout class="footer">FOOTER</c-layout>
</c-layout>

```html
<c-layout class="layout">
    <c-layout class="header">HEADER</c-layout>
    <c-layout row expand>
        <c-layout class="side"></c-layout>
        <c-layout expand center class="main">
            <c-layout center class="box">c-layout</c-layout>
        </c-layout>
        <c-layout class="side"></c-layout>
    </c-layout>
    <c-layout class="footer">FOOTER</c-layout>
</c-layout>
```