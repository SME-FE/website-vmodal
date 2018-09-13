
# SFC

SFC is Single File Component, which you can simly regard as .vue file. We can insert `non-props` SFC as modal content, and it work pretty well.

```js
import ModalContent from './ModalContent.vue';

const modal = Modal({
  content: ModalContent
})
```

- [check the demo and code here](https://sme-fe.github.io/smv-modal/#/)

## HTML String

we can insert HTML String by using SFC, because modal will treat the string content as plain text.

simple code here

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
  },
};
</script>
```

- main.js
```js
import ModalContent from './ModalContent.vue';

const modal = Modal({
  content: ModalContent
})
```

## Form

If there are form in SFC, in our case is `ModalContent`, we want to get form fields value after clicking `confirm`. In that case, `smv-modal` will check the `form` property of your SFC data.

So you will get `form` data of `ModalContent` after clicking `confirm` of the modal.

Let's see the example below.

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

## Fully Replace Modal with SFC

In some cases, you may want to validate or other things. And It's hard to complete these things by just set a `form` property.

In such a case, we can set modal `footer` false, and implement the `cancel` and `confirm` action by ourself in `ModalContent` using [event](api_doc).

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

In this way, you can control the modal cancel/confirm action by youself and do somehting like validation or whatever you want before cancel/confirm action.