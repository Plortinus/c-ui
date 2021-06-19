# c-message

全局展示操作反馈信息。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import CMessage from './node_modules/wbc-ui/components/c-message.js';
    window.CMessage = CMessage;
    //使用
    CMessage.info('info);
</script>
```
!> `<script type="module"></script>`中的变量是局部变量，如果需要`CMessage`在全局范围内使用，可以执行`window.CMessage = CMessage;`。

> 如果是全部引用则没有这个问题，已经默认挂载在`window`对象上了

## CMessage[level]

和一般组件不太一样的一个地方是，该组件更类似于一个`API`，这里提供了`CMessage`的几个静态方法。

* `CMessage.info(text, duration, onclose)`

* `CMessage.success(text, duration, onclose)`

* `CMessage.error(text, duration, onclose)`

* `CMessage.warning(text, duration, onclose)`

* `CMessage.loading(text, duration, onclose)`

所有方法返回均为`<c-message></c-message>`对象。

<c-button type="primary" onclick="CMessage.info('This a info message')">info</c-button>
<c-button type="primary" onclick="CMessage.success('This a success message')">success</c-button>
<c-button type="primary" onclick="CMessage.error('This a error message')">error</c-button>
<c-button type="primary" onclick="CMessage.warning('This a warning message')">warning</c-button>
<c-button type="primary" onclick="CMessage.loading('This a loading message')">loading</c-button>

|参数|说明|类型|默认值|
|---|---|---|---|
|`text`|提示内容|`string`|`''`|
|`duration`|自动关闭的延时，单位毫秒。设为 0 时不自动关闭。|`number`|`3`|
|`onclose`|关闭时触发的回调函数|`Function`|-|

其中，`CMessage.loading`默认`duration`为`0`，表示不自动关闭，如果需要手动关闭，可以设置属性`show=false`。

<c-button type="primary" onclick="this.loader = CMessage.loading('This a loading message')">show loading</c-button>
<c-button type="primary" onclick="this.previousElementSibling.loader.show = false">hide loading</c-button>

```js
const loader = CMessage.loading('This a loading message');
btn.onclick = function(){
    loader.show = false;
}
```

`onclose`还可以在外部指定，作用同上。

```js
const loader = CMessage.loading('This a loading message');
loader.onclose = function(){
    //
}
```

## CMessage.show

`CMessage.show`是一个更为通用的方法，可以自定义`icon`。

<c-button type="primary" onclick="CMessage.show({icon:'like',text:'I like it!'})">I like it!</c-button>

```js
CMessage.show({
    icon,//图标
    text,//提示内容
    duration,//延时，默认为3000
    onclose//回调函数
})
```