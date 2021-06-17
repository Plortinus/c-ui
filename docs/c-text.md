# c-text

文本，集成了常见的几种状态。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-text.js';
</script>
<!-- 使用 -->
<c-text>text</c-text>
```

内部仅仅集成了部分`css`样式，可随意嵌套，如果不满足完全可以通过`css`自定义。

## 类型`type`

内置不同类型的文本，也就是颜色的区别。

<c-text>normal</c-text>

<c-text type="warning">warning</c-text>

<c-text type="error">error</c-text>

<c-text type="success">success</c-text>

```html
<c-text>normal</c-text>
<c-text type="warning">warning</c-text>
<c-text type="error">error</c-text>
<c-text type="success">success</c-text>
```

## 行数`rows`

可以设置行数`rows`，超出部分会出现省略号。

<c-slider type="number" min="1" max="10" defaultvalue="3" showtips oninput="this.nextElementSibling.rows=this.value"></c-slider>
<c-text rows="3">wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.wbc-ui is a front end cross-framework ui library based on web-components.</c-text>


```html
<c-text rows="3">a front end cross-framework ui library based on web-components.</c-text>
```

JavaScript操作`get`、`set`

```js
text.rows;//获取
text.rows = 5;
//原生属性操作
text.getAttribute('rows');
text.setAttribute('rows',5);
```

另外，当出现省略号时，`c-text`会自动添加上`truncated`属性。

```css
c-text+button::before{
    content:'收起'
}
c-text[truncated]+button::before{
    content:'展开'
}
```

## 拖拽`draggable`

添加`draggable`属性可以将文本拖拽至指定容器，比如输入框，可用`drop`接收，同原生`drag`。

```js
dropbox.addEventListener('drop',(event)=>{
    event.dataTransfer.getData('text')
})
```

<c-text draggable>13299999999</c-text>

<c-input placeholder="drop in here"></c-input>

```html
<c-text draggable>13299999999</c-text>
```

## 其他

其他还内置了`mark`、`code`属性。

<c-text mark>mark</c-text>

<c-text code>code</c-text>

```html
<c-text mark>mark</c-text>
<c-text code>code</c-text>
```

<c-text><c-text mark>跨框架</c-text>。无论是<c-text code>react</c-text>、<c-text code>vue</c-text>还是原生项目均可使用。</c-text>

<c-text><c-text mark>组件化</c-text>。<c-text code>shadow dom</c-text>真正意义上实现了样式和功能的组件化。</c-text>

```html
<c-text>
    <c-text mark>跨框架</c-text>。无论是<c-text code>react</c-text>、<c-text code>vue</c-text>还是原生项目均可使用。
</c-text>
<c-text>
    <c-text mark>组件化</c-text>。<c-text code>shadow dom</c-text>真正意义上实现了样式和功能的组件化。
</c-text>
```
