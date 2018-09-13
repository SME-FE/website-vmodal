# Basic

You now can use modal as an async request, and insert to your action.

```js
import Vuex from 'vuex';
import Modal from 'smv-modal';

const mockGet = () => {};
const confirmModal = Modal({
  title: 'Confirm',
  modalStyle: {
    width: '400px',
    height: '240px',
  },
  content: 'Do you really want to delete this item?',
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  actions: {
    async increment (context) {
      try {
        const resp = await = confirmModal.show();
        mockGet(`/shop/delete/${context.id}`);
      } catch(err) {
        console.log('cancel delete')
      }
    }
  }
})
```

## shorthand

Thanks for template literals, you can write something like

```js
const modal = Modal`I'am content`;
modal.show();
```

shorthand for `title` & `content`

```js
import ModalContent from './ModalContent.vue';

const modalWithSFC = Modal`${ModalContent}`;
const modalWithTitle = Modal`${'title here'} ${'content here'}`;
const modalWithTitle2 = Modal`${'title here'} ${ModalContent}`;
```