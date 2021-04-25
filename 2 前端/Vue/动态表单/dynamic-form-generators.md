## dynamic-form-generators

- [vue中template的作用及使用](https://blog.csdn.net/weixin_39658726/article/details/111109085)
- fields
  - dynamic-form-group
- groups
  - dynamic-form-group
- 组件修改
  - 曾思仲新增extend属性
  - 曾思仲label支持多语言
  - 曾思仲 `<form>` 外包括一层 `<div>`
  - 谢红燕：使用 `<v-if>` 代替 `<v-show>`
  - 江雪艳：新增validate()
  - 谢红燕：分组标题添加svg图标
  - 江雪艳：新增resetForm()
  - 谢红燕：svg图标新协show属性
  - 江雪艳：新增fieldValidate() //单项验证
  - 李晨：group.enable改为isEnable(group)

## dynamic-form-group

- [minxin](https://cn.vuejs.org/v2/guide/mixins.html)
- `<component :is="getFieldType(field)" v-on="$listeners">`
  - [动态组件 component 的 is 到底可以是啥？](https://www.cnblogs.com/jyk/p/14607676.html)。
  - [Vue- `$attrs`与`$listeners`的详解](https://www.jianshu.com/p/a388d38f8c69)
- `import fieldComponents from "./fields-loader.js";`
- `import dynamicFormgroupmixin from "./dynamic-form-group-mixin.js";`
- [lodash](https://www.lodashjs.com)
- 组件修改
  - computed: val //曾思仲新增
  - 曾思仲新增extend属性 
  - 江雪艳把`<div>`改为`<Row>`
  - 江雪艳新增v-on属性
  - `<Row>` 李晨新增width样式
  - 谢红燕新增`<Col>`
  - `<Col>` 谢红燕新增 `span="24"` 属性。

## fields-loader.js（引入后未改动过）

- [使用require.context实现前端工程自动化](https://www.jianshu.com/p/c894ea00dfec)

## dynamic-form-group-minxin.js（引入后未改动过）

- handleDatePicker(obj, key, val) 

- getFieldRowClasses(field)

- fieldErrors(field)

- fieldDisabled(field)

- fieldReadonly(field)

- fieldFeatured(field)

- fieldRequired(field)

## field-button

- `mixins: [abstractField]`

## abstract-field.js

- updateModelValue()
- setModelByPath()
- formatValueToField()
- formatValueToModel()
- 组件修改
  - clearValidate() //李晨新增
  - getOptions() // 1、曾思仲新增  2、李晨添加async、WaitUntil



结束