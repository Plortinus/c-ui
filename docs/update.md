# update
* ## 1.10.1
    * disconnectedCallback移除document事件监听
* ## 1.10.0
    * 新增[`c-datalist`](c-datalist.md)数据列表组件
    * 重新独立`c-option`
    * `c-checkbox`、`c-raido`键盘触发事件优化
* ## 1.9.6
    * `c-tab`现支持方向键切换
    * `c-pagination`支持链接访问
    * 修复`c-input`、`c-dialog`视觉性问题
* ## 1.9.5
    * 修复`c-popover`关于`title`属性失效的问题
    * 重新整理`c-tips`关于[`dir`](c-tips.md?id=方向dir)方向的展示，更直观
    * 优化`确定`、`取消`按钮的大小，并增加了空格，更和谐
* ## 1.9.4
    * 移除`Edge`密码输入框的默认切换按钮
* ## 1.9.3
    * 新增[`c-input-group`](c-input.md?id=组合c-input-group)组件
    * `c-icon`新增`spin`属性
    * 修复`input[type=number]`的`onchange`回调
    * 修复`c-color-picker`色相选择回调
* ## 1.9.2
    * `c-view`新增`coord`坐标
    * 所有表单元素只有在实际触发（比如点击、键盘`Enter`）时才会触发`change`回调，通过直接修改`value`不会触发（与原生保持一致）
* ## 1.9.1
    * [`c-view`](c-view.md)新增`draggable`、`allowdrop`、`resizable`等特性
    * 新增[`c-button-group`](c-button-group.md?id=按钮组c-button-group)组件
* ## 1.9.0
    * `c-form-item`布局采用`grid`实现，去除`legendwidth`属性
    * `c-text`新增`draggable`属性
    * 表单元素的`reset`方法现定义为"重置"，即还原成默认值
    * `c-select`新增分组`c-optgroup`
    * 新增`c-view`组件（实验性），扩展常见功能，如`drag`等（进行中）
* ## 1.8.8
    *  所有表单元素在表单校验失败时会添加`invalid`属性
    * `c-tab`在切换时会自适应高度
* ## 1.8.7
    * `c-slider`新增鼠标滚轮操作
    * `c-select`新增`placeholder`,`required`属性，支持表单验证
    * `c-select`搜索条件改为根据`key`查找
    * `c-popover`现支持点击内部属性带有`autoclose`的元素自动关闭
    * `c-input`在表单校验失败是会添加`invalid`属性
    * 其他功能优化
* ## 1.8.6
    * [`c-select`](c-select.md?id=搜索search)新增`search`属性
    * `c-input`新增`readonly`属性
    * `c-tab`新增`line`风格
* ## 1.8.5
    * `c-tab`新增`card`风格
    * `c-dialog`新增`prompt`方法
    * `c-select`现在在不打开的情况下也可以用键盘上下键快速选中
    * `c-slider`更改`vertical`属性下的`tips`方向
    * `c-text`在出现省略时会添加`truncated`属性标识
    * 修复`c-select`、`c-color-picker`、`c-date-picker`在`disabled`状态下打开的问题
* ## 1.8.4
    * `c-slider`在`vertical`属性下支持动态样式修改
* ## 1.8.3
    * `c-slider`新增`vertical`、`prefix`属性
* ## 1.8.2
    * [`c-layout`](c-layout.md?id=栅格row、col)新增`grid`栅格布局
    * `c-button`新增`danger`类型
    * 修复`c-slider`在火狐上的`input`触发问题
    * 其他`bug`修复
* ## 1.8.1
    * 新增[`c-text`](c-text.md)组件
* ## 1.8.0
    * 新增[`c-table`](c-table.md)组件
    * `c-checkbox`新增`indeterminate`状态
    * 修复`c-date-picker`在`1`月份选取去年`12`月份的`bug`
    * 修复`c-color-pane`在空白处触发`change`的`bug`
* ## 1.7.1
    * [`c-date-picker`](c-date-picke.md)新增[`range`](c-date-picke.md?id=范围选择range)属性

    ![c-date-range-picker](../screenshot/c-date-range-picker.png)

    * 优化`c-color-picker`和`c-date-picker`初始化逻辑
    * 其他`bug`修复
* ## 1.7.0
    * 新增[`c-date-picker`](c-date-picke.md)组件

    ![c-date-picker](../screenshot/c-date-picker.png)

    * 优化`c-icon`的图标加载方式，不会再阻塞页面渲染了~
    * 主题配置新增`--themeBackground`
    * 其他`bug`修复
* ## 1.6.1
    * 优化`c-button`的`Enter`键逻辑
    * 优化`c-icon`的图标加载方式
    * 替换部分组件内置图标为`svg`方式，减少`c-icon`依赖
* ## 1.6.0
    * 新增[`c-pagination`](c-pagination.md)分页组件

    ![c-pagination](../screenshot/c-pagination.png)

    * 修复`c-form`下`c-select`回车键触发`submit`问题
    * 更改组件尺寸为`em`相对尺寸，部分组件除外
    * `c-color-pane`现在在鼠标抬起时才触发`change`回调
    * 其他`bug`修复
* ## 1.5.2
    * 修改属性`lable`为`legend`，`lablewidth`为`legendwidth`
    * `c-radio-group`、`c-checkbox-group`新增`disabled`属性
    * 优化`c-form`和`c-form-item`的`lablewidth`属性
    * `c-popover`优化关闭按钮样式
    * `c-color-picker`新增内置颜色
    * `c-form`表单校验不会对`disabled`属性表单元素进行校验
* ## 1.5.1
    * 优化`c-radio-group`和`c-checkbox-group`的`hover`层级问题
    * `c-form`新增演示动画

    ![c-form](../screenshot/c-form.png)
    
* ## 1.5.0
    * 新增[`c-form`](c-form.md)表单组件，集成表单验证功能
    * 新增`c-radio-group`和`c-checkbox-group`组件
    * `c-img`新增加载动画
    * 主题颜色管理，`fontColor`、`errorColor`、`successColor`、`warningColor`、`borderColor`等
    * 其他`bug`修复
* ## 1.4.2
    * 重构[`c-icon`](c-icon.md)的引用方式，不用再设置`iconUrl`和`basePath`了~
    * 支持`cdn`引入，采用[unpkg](https://unpkg.com/)
    * 新增`react`项目使用方式[demo](https://codepen.io/xbocan/pen/mNKWaN)
* ## 1.4.0
    * 新增`c-color-picker`颜色选择器、`c-color-pane`颜色面板

    ![c-color-picker](../screenshot/color-picker.png)

    * 优化[c-popover](c-popover.md)空白处点击处关闭逻辑
    * 修复[c-select](c-select.md)`hover`层级问题
* ## 1.3.4
    * [c-button](c-button.md?id=状态切换toggle)新增`toggle`属性
    * 修复[c-select](c-select.md)样式问题
    * 修复[c-switch](c-switch.md)、[c-checkbox](c-checkbox.md)点击重复触发`focus`的问题
    * 修复[c-radio](c-radio.md)在自定义组件内单选问题
* ## 1.3.3
    * 重构[c-select](c-select.md)，基于`c-popover`，逻辑更清晰
    * 修复[c-popover](c-popover.md)、[c-select](c-select.md)空白处点击处关闭的问题
* ## 1.3.2
    * 修复[c-popover](c-popover.md?id=触发trigger)在火狐上的触发（`hover`、`focus`）问题
    * 新增[c-popover](c-popover.md?id=示例)示例
* ## 1.3.1
    * [c-popover](c-popover.md?id=触发trigger)新增`trigger`属性
* ## 1.3.0
    * 新增[c-popover](c-popover.md)悬浮操作组件
    * [c-tips](c-tips.md?id=方向dir)的`dir`新增`8`个方向
    * [c-button](c-button.md?id=链接href)新增`href`属性
    * [c-input](c-input.md?id=oninput)新增`debounce`属性
    * 优化[c-select](c-select.md)逻辑
* ## 1.2.0
    * 修复`c-img`关闭画廊时的定位问题
    * 精简所有`focus`、`blur`事件
    * 新增[c-rate](c-rate.md)组件
* ## 1.1.0
    * 重构`c-button`组件结构，更易于自定义
    * 新增[c-img](c-img.md)组件
* ## 1.0.2
    * 修复已知bug
    * `c-slider` 新增`suffix`属性
* ## 1.0.0
    * 完成基本组件
    - [x] [c-button](c-button.md)
    - [x] [c-icon](c-icon.md)
    - [x] [c-slider](c-slider.md)
    - [x] [c-select](c-select.md)
    - [x] [c-loading](c-loading.md)
    - [x] [c-tab](c-tab.md)
    - [x] [c-switch](c-switch.md)
    - [x] [c-checkbox](c-checkbox.md)
    - [x] [c-radio](c-radio.md)
    - [x] [c-tips](c-tips.md)
    - [x] [c-layout](c-layout.md)
    - [x] [c-dialog](c-dialog.md)
    - [x] [c-input](c-input.md)
    - [x] [c-textarea](c-textarea.md)
