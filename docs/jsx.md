
# JSX

If you want to insert `non-state` component as modal content. It's ok to use SFC as content, but if we use jsx, we can simplify our code.

## Configure JSX

In order to write jsx in vue app, we should install [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx) first.

And add this configure to your `.babelrc` file.

```js
{
  "plugins": ["transform-vue-jsx"]
}
```

In most case, it work. If you are using vue in SSR, Weex or in other case, you can check the [babel-plugin-transform-vue-jsx doc](https://github.com/vuejs/babel-plugin-transform-vue-jsx) and [babel doc](https://babeljs.io/docs/en) for more configuration.

After setting up the `babel-transform-vue-jsx`, we can write something like:

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

## Limit

Unlike React, there are limitations using JSX in Vue. In React App, you should import React to everywhere you write JSX, cause the JSX code you write will transform into React.createElement form. So you React must be imported.

But in vue, the `createElement` function is not export globally.

Evan You, mentioned it in this [issue](https://github.com/vuejs/vue/issues/4126)

> 1.The createElement passed to render functions are bound to the instance being rendered. This is required for Vue vnodes to have correct render context.    
> 2.If exposed on global Vue, you'd need to do import Vue from 'vue' in every component, which is in fact more verbose.

So, if you are using JSX in `.vue` file, it is ok and everything should go well.

But if you want to write jsx in file like `vuex action`. It will throw an error that the `h` function is not defined.(Aliasing createElement to h is a common convention in Vue.)
