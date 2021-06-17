# c-textarea

多行输入框。用于替代原生`textarea`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/c-ui/components/c-input.js';
</script>
<!-- 使用 -->
<c-textarea></c-textarea>
```

继承自`c-input.js`。大部分属性通用，不支持`pattern`校验。

<c-textarea required  placeholder="required"></c-textarea>

```html
<c-textarea required  placeholder="required"></c-textarea>
```

<c-textarea label="info" placeholder="info" ></c-textarea>

```html
<c-textarea label="info" placeholder="info" ></c-textarea>
```

<c-textarea icon="location" placeholder="location" ></c-textarea>

```html
<c-textarea icon="location" placeholder="location" ></c-textarea>
```

## 行数`rows`

可以通过`rows`指定`c-textarea`最大显示行数。

<c-textarea placeholder="rows" rows="5" ></c-textarea>

```html
<c-textarea placeholder="rows" rows="5" ></c-textarea>
```