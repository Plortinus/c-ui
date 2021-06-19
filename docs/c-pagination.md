# c-pagination

分页。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-pagination.js';
</script>
<!-- 使用 -->
<c-pagination pagesize="3" total="50"></c-pagination>
```

支持键盘左右键向前一页和向后一页。

## 数据总数`total`、每页条数`pagesize`

设置或返回分页组件的数据总数和每页条数。

<c-pagination pagesize="3" total="50"></c-pagination>
<c-button type="primary" onclick="this.previousElementSibling.pagesize=5">设置pagesize为5</c-button>

```html
<c-pagination pagesize="3" total="50">
```

JavaScript操作`get`、`set`

```js
pagination.pagesize; //获取
pagination.pagesize = 5;
pagination.total;
pagination.total = 100;
//原生属性操作
pagination.getAttribute('pagesize');
pagination.getAttribute('total');
pagination.setAttribute('pagesize',5);
pagination.setAttribute('total',100);
```

当页数较少时（不超过`10`页），则完整显示

<c-pagination pagesize="3" total="20"></c-pagination>

```html
<c-pagination pagesize="3" total="20"></c-pagination>
```

## 默认值`defaultcurrent`

可以给分页指定一个初始值`defaultcurrent`，默认为`1`。

<c-pagination defaultcurrent="7" pagesize="3" total="50"></c-pagination>

```html
<c-pagination defaultcurrent="7" pagesize="3" total="50"></c-pagination>
```

## 当前页`current`

设置或返回分页组件的当前页。

该属性值在`c-pagination`标签上不可见。

<c-pagination pagesize="3" total="50"></c-pagination>
<c-button type="primary" onclick="this.previousElementSibling.current=10">跳转到第10页</c-button>
<c-button type="primary" onclick="CMessage.info('当前value: '+this.previousElementSibling.previousElementSibling.current)">显示当前页数</c-button>

JavaScript操作`get`、`set`

```js
pagination.current; //获取
pagination.current = 2;
//原生属性操作
pagination.getAttribute('current');
pagination.setAttribute('current',2);
```

> 如果设置的值超过最大页数，会取最大页数，比如上述最大页数是`17`，设置`pagination.current=100`，则实际会设置为`17`

## 简约模式`simple`

可以添加`simple`属性，只展示当前页和总页数。

<c-pagination simple pagesize="3" total="50"></c-pagination>

```html
<c-pagination simple pagesize="3" total="50"></c-pagination>
```

## 链接`href`

支持`href`链接模式，可以实现分页通过`a`链接跳转

跳转规则为

```
当前地址 + href + 当前页码
```

比如设置`href=?page`，则实际跳转为

```
list.html?page=1
```

<c-pagination href="?page" pagesize="3" total="50"></c-pagination>

```html
<c-pagination href="?page" pagesize="3" total="50"></c-pagination>
```

> 一般传统项目可能会用到，如果不满足，也可以通过`onchange`实现跳转，更加灵活

## 自定义尺寸

内部采用`em`相对尺寸，可通过`font-size`来控制大小。

<style>
.pagination-custom{
    font-size:20px;
}
</style>
<c-pagination class="pagination-custom" pagesize="3" total="50"></c-pagination>

```html
<style>
.pagination-custom{
    font-size:20px;
}
</style>
<c-pagination class="pagination-custom" pagesize="3" total="50"></c-pagination>
```

## 事件`event`

该组件暴露了常见的回调事件

### onchange

页码改变的回调。

<c-pagination  onchange="CMessage.info('当前页: '+this.current)" pagesize="3" total="50"></c-pagination>

```html
<c-pagination  onchange="CMessage.info('当前页: '+this.current)" pagesize="3" total="50"></c-pagination>
```

其他触发方式

```js
pagination.onchange = function(ev){
    //获取参数的几种方式
    /*
    event:{
        detail:{
            current,
            pagesize,
            total,
        }
    }
    */
    console.log(this.current);
    console.log(ev.target.current);
    console.log(ev.detail.current);
}

pagination.addEventListener('change',function(ev){
    console.log(this.current);
    console.log(ev.target.current);
    console.log(ev.detail.current);
})
```

## 实例

一个常见的完整分页组件，配合`c-select`和`c-input`实现。

<style>
.pagination-demo{
    display: flex;
    white-space: nowrap;
    align-items: center;
}
.pagination-demo>*{
    margin-bottom:0;
}
.pagination-demo>span{
    margin-right:10px;
}
.pagination-demo c-input{
    width:50px;
}
</style>

<div class="pagination-demo">
    <c-pagination id="pagination-demo" onchange="CMessage.info('当前页: '+this.current)" pagesize="10" total="200"></c-pagination>
    <c-select defaultvalue="10" onchange="this.previousElementSibling.pagesize=this.value">
        <c-option value="10">每页10条</c-option>
        <c-option value="15">每页15条</c-option>
        <c-option value="20">每页20条</c-option>
    </c-select>
    <span>跳转</span><c-input type="number" defaultvalue="1" min="1" onchange="document.getElementById('pagination-demo').current = this.value"></c-input><span>页</span>
</div>

```html
<style>
.pagination-demo{
    display: flex;
    white-space: nowrap;
    align-items: center;
}
.pagination-demo>*{
    margin-bottom:0;
}
.pagination-demo>span{
    margin-right:10px;
}
.pagination-demo c-input{
    width:50px;
}
</style>
<div class="pagination-demo">
    <c-pagination id="pagination-demo" onchange="CMessage.info('当前页: '+this.current)" pagesize="10" total="200"></c-pagination>
    <c-select defaultvalue="10" onchange="document.getElementById('pagination-demo').pagesize=this.value">
        <c-option value="10">每页10条</c-option>
        <c-option value="15">每页15条</c-option>
        <c-option value="20">每页20条</c-option>
    </c-select>
    <span>跳转</span><c-input type="number" defaultvalue="1" min="1" onchange="document.getElementById('pagination-demo').current = this.value"></c-input><span>页</span>
</div>
```