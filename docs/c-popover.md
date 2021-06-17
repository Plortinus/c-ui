# c-popover

悬浮提示（操作）框。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-popover.js';
</script>
<!-- 使用 -->

<!--简易模式-->
<c-popover content="提示"><c-button>pop confirm</c-button></c-popover>

<!--自定义模式-->
<c-popover>
    <c-button>pop confirm</c-button>
    <c-popcon>
        <!-- dom -->
        <div>
            <div>自定义删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
        </div>
    </c-popcon>
</c-popover>
```

有两种模式，简易模式和自定义模式，自定义模式通常配合嵌套`c-popcon`来实现自定义悬浮框。

## 类型`type`

当没有设置类型`type`时，`c-popover`没有任何交互样式，仅仅提供悬浮功能，可以自定义内容。

<c-popover content="提示111"><c-button>c-popover</c-button></c-popover>

可以设置`comfirm`和`pane`两种类型。

#### 确认提示框`comfirm`

当设置`type=comfirm`时，`c-popover`为一个确认提示层。

<c-popover type="confirm" onsubmit="XyMessage.success('next')" oncancel="XyMessage.warning('cancel')" title="确定删除吗?" content="删除后无法撤销">
    <c-button>pop confirm</c-button>
</c-popover>

```html
<c-popover type="confirm" title="确定删除吗?" content="删除后无法撤销" onsubmit="XyMessage.success('next')" oncancel="XyMessage.warning('cancel')" >
    <c-button>pop confirm</c-button>
</c-popover>
```

和`c-dialog`比较类似，提供了`title（标题）`、`content（内容）`属性来显示内容，同时支持`submit`、`cancel`事件回调。

```js
popover.onsubmit = function(){
    //
}
popover.addEventListener('submit',function(){
    //
})
popover.oncancel = function(){
    //
}
popover.addEventListener('cancel',function(){
    //
})
```

#### 普通提示框`pane`

当设置`type=pane`时，`c-popover`为一个普通提示层，没有交互确认取消按钮。

<c-popover type="pane" title="提示" content="这是提示信息提示信息">
    <c-button>pop pane</c-button>
</c-popover>

```html
<c-popover type="pane" title="提示" content="这是提示信息">
    <c-button>pop pane</c-button>
</c-popover>
```

#### 自定义

当内容需要自定义时，`content`可能无法满足需求，可以将`dom`节点直接嵌入`c-popcon`中。

!> 此时所有属性均定义在`c-popcon`上。

**自定义确认框**

<c-popover>
    <c-button>pop confirm</c-button>
    <c-popcon title="确定删除吗?" type="confirm" onsubmit="XyMessage.success('next')">
        <div>
            <div>自定义删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
        </div>
    </c-popcon>
</c-popover>

```html
<c-popover>
    <c-button>pop confirm</c-button>
    <c-popcon title="确定删除吗?" type="confirm" onsubmit="XyMessage.success('next')">
        <div>
            <div>自定义删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
            <div>删除后无法撤销</div>
        </div>
    </c-popcon>
</c-popover>
```

此时，事件监听绑定在`popcon`上。

```js
popcon.onsubmit = function(){
    //
}
popcon.addEventListener('submit',function(){
    //
})
popcon.oncancel = function(){
    //
}
popcon.addEventListener('cancel',function(){
    //
})
```

**自定义提示框**

<style>
.pop-tips{
    font-size:14px;
}
</style>
<c-popover>
    <c-tips tips="点击查看更多提示" style="margin:0"><c-icon size="16" name="question-circle"></c-icon></c-tips>
    <c-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
        </div>
    </c-popcon>
</c-popover>

```html
<c-popover>
    <c-tips tips="点击查看更多提示"><c-icon size="16" name="question-circle"></c-icon></c-tips>
    <c-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
            <div>这是一段提示</div>
            <div>这是一段提示示提</div>
        </div>
    </c-popcon>
</c-popover>
```


**自定义下拉框**

<style>
.pop-list a{
    display:block;
    padding:0 .8em;
    line-height: 36px;
}
.pop-list a:hover{
    background:#f1f1f1;
}
</style>
<c-popover>
    <c-button>pop list</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
        </div>
    </c-popcon>
</c-popover>

```html
<style>
.pop-list a{
    display:block;
    padding:0 .8em;
    line-height: 36px;
}
.pop-list a:hover{
    background:#f1f1f1;
}
</style>
<c-popover>
    <c-button>pop confirm</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
        </div>
    </c-popcon>
</c-popover>
```

## disabled

> 该属性仅作用在`c-popover`上

当设置`disabled`时，可以禁用悬浮层，对于`type=confirm`可以直接触发`submit`事件。

<c-popover disabled type="confirm" onsubmit="XyMessage.success('next')" oncancel="XyMessage.warning('cancel')" title="确定删除吗?" content="删除后无法撤销">
    <c-button>pop confirm</c-button>
</c-popover>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

<p></p>

<c-popover disabled>
    <c-button>pop list</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
        </div>
    </c-popcon>
</c-popover>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-popover disabled type="confirm" onsubmit="XyMessage.success('next')" oncancel="XyMessage.warning('cancel')" title="确定删除吗?" content="删除后无法撤销">
    <c-button>pop confirm</c-button>
</c-popover>

<c-popover disabled>
    <c-button>pop list</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
            <a href="#">链接一</a>
        </div>
    </c-popcon>
</c-popover>
```

JavaScript操作`get`、`set`

```js
popover.disabled;//获取
popover.disabled = false;
popover.disabled = true;
//原生属性操作
popover.getAttribute('disabled');
popover.setAttribute('disabled','');
popover.removeAttribute('disabled');
```

## 方向`dir`

> 该属性仅作用在`c-popover`上

通过`dir`可以设置悬浮层方向，默认为`bottomleft`，可以取值`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。同[`c-tips`](c-tips.md)。

<c-popover dir="top" type="confirm" onsubmit="XyMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><c-button>top</c-button></c-popover>

```html
<c-popover dir="top" type="confirm" onsubmit="XyMessage.success('next')" title="确定删除吗?" content="删除后无法撤销"><c-button>top</c-button></c-popover>

```

JavaScript操作`get`、`set`

```js
popover.dir;
popover.dir = 'right';
//原生属性操作
popover.getAttribute('dir');
popover.setAttribute('dir','right');
```


## 触发`trigger`

默认触发方式是`click`（鼠标单击），还可以选择`hover`、`focus`、`contextmenu`（鼠标右键）。

需要注意的是`hover`、`focus`需要使用自定义模式。

**hover触发**

<c-popover trigger="hover">
    <c-button>hover</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </c-popcon>
</c-popover>

```html
<c-popover trigger="hover">
    <c-button>hover</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </c-popcon>
</c-popover>
```

**focus触发**

<c-popover trigger="focus">
    <c-button>focus</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </c-popcon>
</c-popover>

```html
<c-popover trigger="focus">
    <c-button>focus</c-button>
    <c-popcon>
        <div class="pop-list">
            <a href="#">链接一</a>
            <a href="#">链接链接一</a>
            <a href="#">链接一</a>
        </div>
    </c-popcon>
</c-popover>
```

**contextmenu触发**

可以取代原生右键菜单，在该条件下，方向`dir`无效，位置跟随鼠标。

<c-popover class="pop-user" trigger="contextmenu">
    <c-img src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></c-img>
    <c-popcon>
        <div class="pop-list">
            <c-button block type="flat">重新加载</c-button>
            <c-button block type="flat">另存为</c-button>
            <c-button block type="flat">检查</c-button>
        </div>
    </c-popcon>
</c-popover>

```html
<c-popover trigger="contextmenu">
    <c-img src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></c-img>
    <c-popcon>
        <c-button block type="flat">重新加载</c-button>
        <c-button block type="flat">另存为</c-button>
        <c-button block type="flat">检查</c-button>
    </c-popcon>
</c-popover>
```

## 显示`open`

> 该属性仅作用在`c-popcon`上

默认情况下，关闭`c-popcon`可以通过点击关闭按钮和点击文档其他地方完成。

`c-popcon`还可以通过`open`属性主动控制显示。

<c-popover>
    <c-tips tips="点击查看提示" style="margin:0"><c-icon size="16" name="question-circle"></c-icon></c-tips>
    <c-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
        </div>
        <c-button style="margin:10px 0 0 0;" onclick="this.parentNode.open = false;">关闭</c-button>
    </c-popcon>
</c-popover>

```html
<c-popover>
    <c-tips tips="点击查看提示"><c-icon size="16" name="question-circle"></c-icon></c-tips>
    <c-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
        </div>
        <c-button onclick="this.parentNode.open = false;">关闭</c-button>
    </c-popcon>
</c-popover>
```

JavaScript操作`get`、`set`

```js
popcon.open;
popcon.open = true;
popcon.open = false;
//原生属性操作
popcon.getAttribute('open');
popcon.setAttribute('open',true);
```

也可以给需要关闭的元素添加`autoclose`属性，点击后自动关闭

<c-popover>
    <c-tips tips="点击查看提示" style="margin:0"><c-icon size="16" name="question-circle"></c-icon></c-tips>
    <c-popcon type="pane" title="提示">
        <div class="pop-tips">
            <div>这是一段提示提示提示提示提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
            <div>这是一段提示</div>
        </div>
        <c-button style="margin:10px 0 0 0;" autoclose>关闭</c-button>
    </c-popcon>
</c-popover>

```html
<c-popover>
    <c-tips tips="点击查看提示"><c-icon size="16" name="question-circle"></c-icon></c-tips>
    <c-popcon type="pane" title="提示">
        ...
        <c-button autoclose>关闭</c-button>
    </c-popcon>
</c-popover>
```

## 示例

这是一个很常见的下拉菜单。

<style>
.pop-user c-popcon c-button{
    margin:0;
    justify-content: flex-start;
}
</style>
<c-popover class="pop-user">
    <c-button type="flat" shape="circle" icon="user"></c-button>
    <c-popcon>
        <c-button block type="flat">xbocan</c-button>
        <c-button block type="flat">info</c-button>
        <c-button block type="flat">setting</c-button>
        <c-button block type="flat">login out</c-button>
    </c-popcon>
</c-popover>

```html
<style>
.pop-user c-popcon c-button{
    margin:0;
    justify-content: flex-start;
}
</style>
<c-popover class="pop-user">
    <c-button type="flat" shape="circle" icon="user"></c-button>
    <c-popcon>
        <c-button block type="flat">xbocan</c-button>
        <c-button block type="flat">info</c-button>
        <c-button block type="flat">setting</c-button>
        <c-button block type="flat">login out</c-button>
    </c-popcon>
</c-popover>
```

这是一个多级菜单，支持`hover`、`focus`、`click`触发。

<style>
.pop-menu c-button,.pop-menu c-popover{
    display:flex;
    margin:0;
    justify-content: flex-start;
}
.pop-menu c-popover:hover>c-button,.pop-menu c-popover:focus-within>c-button{
    color:var(--themeColor,#42b983);
} 
.pop-menu>c-popcon c-popcon{
    margin-left:-10px;
}
</style>
<c-popover class="pop-menu" trigger="hover" dir="righttop">
    <c-button>hover Menu</c-button>
    <c-popcon>
        <c-popover trigger="hover" dir="righttop">
            <c-button block type="flat">itemA<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-button block type="flat">subMenu1</c-button>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-popover trigger="hover" dir="righttop">
            <c-button block type="flat">itemB<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-popover trigger="hover" dir="righttop">
                    <c-button block type="flat">sub-itemB<c-icon name="right"></c-icon></c-button>
                    <c-popcon>
                        <c-button block type="flat">subMenu1</c-button>
                        <c-button block type="flat">subMenu2</c-button>
                        <c-button block type="flat">subMenu3</c-button>
                    </c-popcon>
                </c-popover>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-button block type="flat">itemC</c-button>
    </c-popcon>
</c-popover>

<c-popover class="pop-menu" trigger="focus" dir="righttop">
    <c-button>focus Menu</c-button>
    <c-popcon>
        <c-popover trigger="focus" dir="righttop">
            <c-button block type="flat">itemA<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-button block type="flat">subMenu1</c-button>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-popover trigger="focus" dir="righttop">
            <c-button block type="flat">itemB<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-popover trigger="focus" dir="righttop">
                    <c-button block type="flat">sub-itemB<c-icon name="right"></c-icon></c-button>
                    <c-popcon>
                        <c-button block type="flat">subMenu1</c-button>
                        <c-button block type="flat">subMenu2</c-button>
                        <c-button block type="flat">subMenu3</c-button>
                    </c-popcon>
                </c-popover>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-button block type="flat">itemC</c-button>
    </c-popcon>
</c-popover>

<c-popover class="pop-menu" dir="righttop">
    <c-button>click Menu</c-button>
    <c-popcon>
        <c-popover dir="righttop">
            <c-button block type="flat">itemA<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-button block type="flat">subMenu1</c-button>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-popover dir="righttop">
            <c-button block type="flat">itemB<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-popover dir="righttop">
                    <c-button block type="flat">sub-itemB<c-icon name="right"></c-icon></c-button>
                    <c-popcon>
                        <c-button block type="flat">subMenu1</c-button>
                        <c-button block type="flat">subMenu2</c-button>
                        <c-button block type="flat">subMenu3</c-button>
                    </c-popcon>
                </c-popover>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-button block type="flat">itemC</c-button>
    </c-popcon>
</c-popover>

```html
<c-popover class="pop-menu" trigger="hover" dir="righttop">
    <c-button>Menu</c-button>
    <c-popcon>
        <c-popover trigger="hover" dir="righttop">
            <c-button block type="flat">itemA<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-button block type="flat">subMenu1</c-button>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-popover trigger="hover" dir="righttop">
            <c-button block type="flat">itemB<c-icon name="right"></c-icon></c-button>
            <c-popcon>
                <c-popover trigger="hover" dir="righttop">
                    <c-button block type="flat">sub-itemB<c-icon name="right"></c-icon></c-button>
                    <c-popcon>
                        <c-button block type="flat">subMenu1</c-button>
                        <c-button block type="flat">subMenu2</c-button>
                        <c-button block type="flat">subMenu3</c-button>
                    </c-popcon>
                </c-popover>
                <c-button block type="flat">subMenu2</c-button>
                <c-button block type="flat">subMenu3</c-button>
                <c-button block type="flat">subMenu4</c-button>
            </c-popcon>
        </c-popover>
        <c-button block type="flat">itemC</c-button>
    </c-popcon>
</c-popover>
```
