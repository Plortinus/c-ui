# c-datalist

数据列表，可以用于各种常见的输入框下拉列表。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/c-ui/components/c-datalist.js';
</script>
<!-- 使用 -->
<c-input list="city"></c-input>
<c-datalist id="city">
    <c-option value="wuhan">武汉</c-option>
    <c-option value="beijin">北京</c-option>
    <c-option value="shanghai">上海</c-option>
</c-datalist>
```

同原生`datalist`使用方式相同。

## 一般使用

给`c-input`绑定`list`属性，`c-datalist`指定相同的`id`即可

可实现原生类似搜索匹配的功能

<c-input list="city"></c-input>
<c-datalist id="city">
    <c-option value="wuhan">武汉</c-option>
    <c-option value="beijin">北京</c-option>
    <c-option value="shanghai">上海</c-option>
</c-datalist>

```html
<c-input list="city"></c-input>
<c-datalist id="city">
    <c-option value="wuhan">武汉</c-option>
    <c-option value="beijin">北京</c-option>
    <c-option value="shanghai">上海</c-option>
</c-datalist>
```

> c-option 可指定`value`属性，作为匹配依据

## 动态补全

可通过给value设置`${value}`关键字符来实现动态补全的效果

<c-input list="email"></c-input>
<c-datalist id="email">
    <c-option value="${value}@live.com">@live.com</c-option>
    <c-option value="${value}@qq.com">@qq.com</c-option>
    <c-option value="${value}@yuewen.com">@yuewen.com</c-option>
</c-datalist>

```html
<c-input list="email"></c-input>
<c-datalist id="email">
    <c-option value="${value}@live.com">@live.com</c-option>
    <c-option value="${value}@qq.com">@qq.com</c-option>
    <c-option value="${value}@yuewen.com">@yuewen.com</c-option>
</c-datalist>
```