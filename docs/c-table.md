# c-table

表格，基于`grid`的简单实现，可简单代替`table`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-table.js';
</script>
<!-- 使用 -->
<c-table thead="Name,Age,Address">
    <c-tr>
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>
```

内部仅仅根据`grid`布局实现，如果不满足需求或者差异太大，也可以直接使用`table`标签。

## 表头`thead`

`thead`用来规定表头的数据，格式形如`Name,Age,Address`

`<c-tr></c-tr>`、`<c-td></c-td>`分别对应原生`<tr></tr>`、`<td></td>`，结构用法如下

<c-table thead="Name,Age,Address">
    <c-tr>
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>

```html
<c-table thead="Name,Age,Address">
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>
```

## 表格分配`grid-template-columns`

默认情况下，表格是均等分配。这里采用了`grid`布局，可实现通过`css`来控制表格分配，默认均等分配如下

```css
c-table{
    grid-template-columns: repeat(3,1fr); /* 1fr 1fr 1fr */
}
```

如需改成跟随内容自适应，可进行如下修改

<c-table thead="Name,Age,Address" style="grid-template-columns: auto 1fr 1fr;">
    <c-tr>
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>

```css
c-table{
    grid-template-columns: auto 1fr 1fr; 
    /* 第一列自适应，剩余两项均等分配 */
}
```

也可改为具体数值，如下

<c-table thead="Name,Age,Address" style="grid-template-columns: 100px auto 1fr;">
    <c-tr>
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>

```css
c-table{
    grid-template-columns: 100px auto 1fr;
     /* 第一列100px，第二列自适应，剩余两项均等分配 */
}
```

> 以上所有规则均为`grid`布局规范

## 加载中`loading`

可以给表格设置`loading`属性，表示加载中，一般用于数据渲染

<c-table thead="Name,Age,Address" style="grid-template-columns: auto auto 1fr; margin-bottom:20px;" loading>
    <c-tr>
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>
<c-switch checked onchange="this.previousElementSibling.loading = this.checked;"></c-switch>

```html
<c-table loading>
    ...
</c-table>
```

JavaScript操作`get`、`set`

```js
table.loading;
table.loading = false;
table.loading = true;
//原生属性操作
table.getAttribute('loading');
table.setAttribute('loading','');
table.removeAttribute('loading');
```

## 可选择`select`

可以设置`select`属性来实现一个常见的表格选择效果。

通过`value`可以获取到当前选中的元素的`id`（如果没有设置`id`，这返回序列）。

<c-table thead="Name,Age,Address" select style="margin-bottom:20px">
    <c-tr id="00001">
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr id="00002">
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr id="00003">
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr id="00004">
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>
<c-button type="primary" onclick="XyMessage.info(this.previousElementSibling.value)">获取当前选中表格</c-button>

```html
<c-table thead="Name,Age,Address" select>
    <c-tr id="00001">
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr id="00002">
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr id="00003">
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr id="00004">
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>
```

JavaScript操作`get`

```js
table.value;
//[id1,id2,id3]
```

## 其他

默认情况下，`c-th`居中显示，`c-td`为默认对齐方式，可通过`justify-content:center`修改对齐方式

```css
c-td{
    justify-content:center;
}
```

<style>
.table-demo c-td{
    justify-content:center;
}
</style>
<c-table thead="Name,Age,Address" class="table-demo">
    <c-tr>
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>

可以通过`grid-gap`来修改表格间隙，实现内边框的效果

```css
c-table{
    grid-gap:1px;
}
```

<c-table thead="Name,Age,Address" style="grid-gap:1px;">
    <c-tr>
        <c-td>John Brown</c-td>
        <c-td>32</c-td>
        <c-td>New York No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
    <c-tr>
        <c-td>Jim Green</c-td>
        <c-td>42</c-td>
        <c-td>London No. 1 Lake Park</c-td>
    </c-tr>
</c-table>