
# 基础用法

`smv-modal` 支持异步调用，提供了一个将 modal 交互嵌入到业务代码的解决方案。比如，删除一条数据时需要弹出确认框，询问是否确认删除。
点击确认后，发起删除的请求。

一般，我们需要在 view 写
一个 modal。当点击删除按钮时会有一个标识来控制 modal 的显示。modal 显示后，再将用户的操作反馈回来。如果点击确认则，发起删除的 action。

**这本来是一个简单的业务流程，但因为跟 view 层有耦合，业务代码被拆得零散。**

而使用 `smv-modal` ，就可以将 modal 嵌入到 action 层，通过 `await confirmModal.show()` 调用即可。

跟 ant-design 的 Modal.confirm 有异曲同工，不过 `smv-modal` 直接支持 async/await，且可以将 `.vue` 文件作为内容。简单的用法如下：

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
    async deleteItem (context) {
      const resp = await confirmModal.show();
      if (resp.type === 'confirm') {
        mockGet(`/shop/delete/${context.id}`);
      } else {
        console.log('cancel delete')
      }
    }
  }
})
```

## 简写

`smv-modal` 提供了简写的语法。如果只需要使用 content，title 两个选项时，可以简写如下

```js
const modal = Modal`I'am content`;
modal.show();
```

简写语法也支持 SFC，更多例子如下：

```js
import ModalContent from './ModalContent.vue';

const modalWithSFC = Modal`${ModalContent}`;
const modalWithTitle = Modal`${'title here'} ${'content here'}`;
const modalWithTitle2 = Modal`${'title here'} ${ModalContent}`;
```