# c-loading

加载器，用于页面和区块的加载中状态。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-loading.js';
</script>
<!-- 使用 -->
<c-loading></c-loading>
```

## 尺寸`size`

通过`size`可以设置加载器尺寸，默认为`font-size`大小。

<c-loading></c-loading>
<c-loading size="30"></c-loading>
<c-loading size="40"></c-loading>
<c-loading size="50"></c-loading>

```html
<c-loading></c-loading>
<c-loading size="30"></c-loading>
<c-loading size="40"></c-loading>
<c-loading size="50"></c-loading>
```

CSS操作（推荐）

```css
c-loading{
    font-size:30px;
}
```

JavaScript操作`get`、`set`

```js
loading.size;
loading.size = 30;
//原生属性操作
loading.getAttribute('size');
loading.setAttribute('size',30);
```

> CSS操作更灵活，可以写在样式中，属性值和JavaScript操作优先级更高，下同

## 颜色`color`

通过`color`可以设置加载器颜色，默认为主题颜色`themeColor`。

<c-loading size="40"></c-loading>
<c-loading size="40" color="green"></c-loading>
<c-loading size="40" color="olivedrab"></c-loading>
<c-loading size="40" color="orange"></c-loading>

```html
<c-loading size="40"></c-loading>
<c-loading size="40" color="green"></c-loading>
<c-loading size="40" color="olivedrab"></c-loading>
<c-loading size="40" color="orange"></c-loading>
```

CSS操作（推荐）

```css
c-loading{
    color:orangered;
}
```

JavaScript操作`get`、`set`

```js
loading.color;
loading.color = 'orangered';
//原生属性操作
loading.getAttribute('color');
loading.setAttribute('color','orangered');
```

## 其他

可以直接嵌套文本作为加载提示语

<c-loading>loading...</c-loading>

```html
<c-loading>loading...</c-loading>
```

如果需要垂直排列，设置一下`css`就可以了

<c-loading style="flex-direction:column">loading...</c-loading>

```html
<style>
c-loading{
    flex-direction:column
}
</style>
<c-loading>loading...</c-loading>
```

如需其他图标的`loading`可参考[c-icon](c-icon?id=旋转spin)