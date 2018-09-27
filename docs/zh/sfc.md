
# SFC

SFC（Single File Component），也就是 `.vue` 文件，可以直接作为 modal 的 content。

```js
import ModalContent from './ModalContent.vue';

const modal = Modal({
  content: ModalContent
});
```

- [在线例子](https://sme-fe.github.io/smv-modal/#/)

## HTML String

也可以通过这种方式来插入 HTML 字串。在 SFC 里使用 v-html 即可。

- ModalContent.vue
```html
<template>
<h2 class="modal-content" v-html="htmlContent"></h2>
</template>
<script>
export default {
  data() {
    return { 
      htmlContent: '<b>Hi</b>'
    };
  }
};
</script>
```

- main.js
```js
import ModalContent from './ModalContent.vue';

const modal = Modal({
  content: ModalContent
});
```

## Form

SFC 里也可以直接置入表单，表单里填入的数据会被 modal 获取。当点击 modal 的确认按钮时，会获取到子组件的 `form` 字段。所以，只需将需要的字段放到 `form` 属性下即可。

- ModalContent.vue
```html
<template>
<input v-bind='form.name' placeholder='enter your name'/>
</template>
<script>
export default {
  data() {
    return { 
      form: {
        name: ''
      }
    };
  },
};
</script>
```

- main.js
```js
import ModalContent from './ModalContent.vue';

const modal = Modal({
  content: ModalContent
});

modal.show().then(result => {
  console.log(result);
  // if user input name 'myname' and click confirm
  // will console { type: 'confirm',  form: { name: 'myname' }, trigger: 'confirm' }
});
```

## 自定义表单

如果上面的方案不能满足你的需求，比方说需要验证表单。可以将 modal 的 footer 设置为 `false`，自定义`取消`和`确认`按钮。

通过 `$emit` 发布 `cancelModal` 和 `confirmModal` 即可。

- ModalContent.vue
```html
<template>
<h2>Hallo</h2>
<button @click="handleCancel">cancel</button>
<button @click="handleConfirm">confirm</button>
</template>
<script>
export default {
  methods: {
    handleCancel() {
      this.$emit('cancelModal', { type: 'cancel', mes: 'mes' });
    },
    handleConfirm() {
      this.$emit('confirmModal', { type: 'confirm', data: 'data' });
    },
  }
};
</script>
```

通过这种方式，来控制 modal 的 cancel/confirm 流程，也就是说，点击确认按钮时，你可以先进行表单验证，改变表单值，等操作，再发起 `confirmModal` 的事件。