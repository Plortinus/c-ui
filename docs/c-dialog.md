# c-dialog

对话框。用于代替原生`dialog`、`alert`、`comfirm`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import CDialog from './node_modules/wbc-ui/components/c-dialog.js';
    //使用
    CDialog.alert('alert');
</script>
<!-- 使用 -->
<c-dialog>
    <div>dialog</div>
</c-dialog>
```
!> `<script type="module"></script>`中的变量是局部变量，如果需要`CDialog`在全局范围内使用，可以执行`window.CDialog = CDialog;`。

> 如果是全部引用则没有这个问题，已经默认挂载在`window`对象上了

## CDialog[level]

与`c-message`类似，`CDialog`也提供了几个静态`API`方法。

* `CDialog.alert(config)`

* `CDialog.success(config)`

* `CDialog.error(config)`

* `CDialog.warning(config)`

* `CDialog.confirm(config)`

* `CDialog.prompt(config)`

所有方法返回均为`<c-dialog></c-dialog>`对象。

`config`支持两种类型的参数。

```js
CDialog.alert(title, ok);
//object传入
CDialog.alert({
    title:'title',//标题
    oktext:'ok',//确定键文本
    canceltext:'cancel',//取消键文本
    ok:function(){
        //按确定键的操作
    },
    content:'content',//内容
});

```

<c-button type="primary" onclick="CDialog.alert('alert')">alert</c-button>
<c-button type="primary" onclick="CDialog.info('info')">info</c-button>
<c-button type="primary" onclick="CDialog.success({title:'成功',content:'success',oktext:'send'})">success</c-button>
<c-button type="primary" onclick="CDialog.error('error')">error</c-button>
<c-button type="primary" onclick="CDialog.warning('warning')">warning</c-button>

`CDialog.confirm`有两个按钮，确定键和取消键

```js
CDialog.confirm(title, ok, cancel);
//object传入
CDialog.confirm({
    title:'title',//标题
    oktext:'ok',//确定键文本
    canceltext:'cancel',//取消键文本
    type:'error',//类型，可选择以上几类
    ok:function(){
        //按确定键的操作
    },
    cancel:function(){
        //按取消键的操作
    },
    content:'content',//内容
});
```
<c-button type="primary" onclick="CDialog.confirm('this is a question',()=>{CMessage.info('ok')},()=>{CMessage.info('cancel')})">confirm</c-button>
<c-button type="primary" onclick="CDialog.confirm({type:'error',content:'this is a danger confirm'})">danger confirm</c-button>

`CDialog.prompt`用于显示可提示用户进行输入的对话框。

```js
CDialog.prompt(title, ok, cancel);
//object传入
CDialog.prompt({
    title:'title',//标题
    oktext:'ok',//确定键文本
    ok:function(value){
        console.log(value);
        //返回输入内容
        //按确定键的操作
    },
    cancel:function(){
        //按取消键的操作
    },
    content:'content',//内容描述
});
```

<c-button type="primary" onclick="CDialog.prompt('',(value)=>{CMessage.info(value)},()=>{CMessage.info('cancel')})">prompt</c-button>
<c-button type="primary" onclick="CDialog.prompt({content:'please input your name',ok:(value)=>{CMessage.info(value)}})">prompt with content</c-button>

## 显示`open`

当`CDialog`内容比较复杂时，可以直接写在页面`body`上，通过`open`属性来控制显示。

<c-dialog id="dialog01" title="自定义弹窗内容" oktext="确 定">
    <c-tab>
        <c-tab-content label="tab1">tab1</c-tab-content>
        <c-tab-content label="tab2">tab2</c-tab-content>
        <c-tab-content label="tab3">tab3</c-tab-content>
    </c-tab>
</c-dialog>
<c-button type="primary" onclick="document.getElementById('dialog01').open = true;">open dialog</c-button>

```html
<body>
    <c-button type="primary" onclick="document.getElementById('dialog01').open = true;">open dialog</c-button>
    <c-dialog id="dialog01" title="自定义弹窗内容" oktext="确 定">
        <c-tab>
            <c-tab-content label="tab1">tab1</c-tab-content>
            <c-tab-content label="tab2">tab2</c-tab-content>
            <c-tab-content label="tab3">tab3</c-tab-content>
        </c-tab>
    </c-dialog>
</body>
```

JavaScript操作`set`

```js
dialog.open = false;
dialog.open = true;
//原生属性操作
dialog.setAttribute('open',true);
```

设置`type="confirm"`可出现两个按钮，用法同上。

## 加载`loading`

实际业务中可能会出现异步关闭的情况，可以在`onsubmit`回调中添加`loading`属性，在异步操作结束后主动关闭弹窗。

<c-dialog id="dialog02" title="标题" oktext="确 定" canceltext="取消" >
    这是一个异步关闭的弹窗
</c-dialog>
<c-button type="primary" onclick="window.dialog02 = document.getElementById('dialog02');window.dialog02.open = true;window.dialog02.onsubmit = function(){this.loading = true;setTimeout(()=>{this.open = false;}, 1000);}">open dialog</c-button>

```js
dialog.onsubmit = function(){
    this.loading = true;//添加loading属性后可以阻止关闭
    setTimeout(()=>{
        this.open = false;
    }, 1000);
}
```

JavaScript操作`set`

```js
dialog.loading = false;
dialog.loading = true;
//原生属性操作
dialog.setAttribute('loading',true);
```

## 事件`event`

### onsubmit

在点击确认操作时执行。

### oncancel

在点击取消操作时执行。

<c-button type="primary" onclick="CDialog.confirm('confirm',()=>{CMessage.info('submit')},()=>{CMessage.info('cancel')})">confirm</c-button>

```js
dialog.onsubmit = function(){
    //
}
dialog.addEventListener('submit',function(){
    //
})
dialog.oncancel = function(){
    //
}
dialog.addEventListener('cancel',function(){
    //
})
```


