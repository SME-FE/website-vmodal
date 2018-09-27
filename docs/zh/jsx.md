
# JSX

`smv-modal` 不仅支持 SFC 同时还支持 JSX。在 vue app 里使用 JSX 只需要简单的配置。

## 配置 JSX

我们需要先安装 [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx)，来将 JSX 的语法转换成 createElment 的形式，从而可以在 vue app 使用 JSX 语法。

在 `.babelrc` 里添加下面配置

```js
{
  "plugins": ["transform-vue-jsx"]
}
```

配置完成后，一般来说已经可以正常使用 JSX。如果使用场景比较特殊，比方说 SSR，Weex 等，可能需要额外的配置。可以查阅
[babel-plugin-transform-vue-jsx doc](https://github.com/vuejs/babel-plugin-transform-vue-jsx) 和 [babel doc](https://babeljs.io/docs/en) 获取更多信息。

设置完成后，就可以使用 JSX 作为 content：

```js
// ...
created() {
  this.modal = Modal({
    title: 'JSX',
    content: <h2 class="modal-content">let's try jsx.</h2>,
  });
},
// ...
```

- [在线例子](https://sme-fe.github.io/smv-modal/#/)

## 限制

跟 React 不同，在 vue 里使用 JSX 会有一些限制。在 React 中，任何使用 JSX 的地方都需要显式 import React，因为最终 JSX 会转换成 React.createElement 的形式。如果不 import React，就会抛出 React is not defined 的错误。

而在 vue 中，`createElement` 方法没有直接暴露出来。故而不能像 React 般，通过 import React 在任何地方都可以使用 JSX。

可以简单理解为在 `.vue` 文件中可以正常使用 JSX，而类似 `utils.js` 这种纯 js 文件无法直接使用 JSX。

Evan You, 在这个 [issue](https://github.com/vuejs/vue/issues/4126) 有提及到这块。

> 1.The createElement passed to render functions are bound to the instance being rendered. This is required for Vue vnodes to have correct render context.    
> 2.If exposed on global Vue, you'd need to do import Vue from 'vue' in every component, which is in fact more verbose.

所以在 `.vue` 文件可以正常使用 JSX ，而类似于 vuex action 无法获取到上下文的地方无法直接使用 JSX，会抛出 `h` function is not defined 这样的错误。