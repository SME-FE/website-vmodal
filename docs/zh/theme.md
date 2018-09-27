
# 主题和动画

## Modal and Mask Style

可以通过 `modalStyle` 和 `maskStyle` 来改变 modal 和 modal mask 层的样式，比方说 z-index。

```js
const modal = Modal({
  title: 'Style',
  content: 'test',
  modalStyle: {
    width: '500px',
    minHeight: '360px'
  },
  maskStyle: {
    zIndex: '999'
  }
});
```

## 覆盖样式

如果 `modalStyle` 和 `maskStyle` 无法满足你的需求，你可以直接覆盖 modal 的样式。`smv-modal` 提供了 .override 类来进行样式覆盖。只需要按下面的结构进行覆盖即可。

注意：下面例子使用了 scss 或 less 的语法。

```css
.smv-modal.override {
  // your code
  .smv-modal-mask {
    // your code
  }
  .smv-modal-container {
    .smv-header {
      // your code
    }
    .smv-content {
      // your code
    }
    .smv-footer {
      // your code
    }
  }
}
```

PS. 也可以通过 `className` 来达到类似的效果。结构也是类似的。

```js
const modal = Modal({
  title: 'hi',
  content: 'all',
  className: 'red-modal'
})
```

然后

```css
.smv-modal.red-modal {
  // your code
}
```

## 动画

`smv-modal` 内置了几种常用的动画。为了节省体积，除了 shutter 动画，其他动画都是单独打包成一份 css，使用的时候 import 即可。

内置动画类型:

- `shutter`
- `zoom`
- `slideLeft`
- `slideRight`
- `slideTop`
- `slideBottom`

```js
import Modal from 'smv-modal';

import 'smv-modal/dist/zoom.css'; // import it if you need
// import 'smv-modal/dist/slideLeft.css';
// import 'smv-modal/dist/slideRight.css';
// import 'smv-modal/dist/slideTop.css';
// import 'smv-modal/dist/slideBottom.css';

const modal = Modal({
  content: 'animation',
  animation: {
    type: 'zoom',
    duration: 500 // mili second
  }
})
```

## 自定义动画

你也可以自定义动画，写法也是相当简单，通过 type 关键字即可，比方说下面自定义的动画，type 为 `customType`

```js
const modal = Modal({
  content: 'animation',
  animation: {
    type: 'customType',
    duration: 500 // mili second
  }
})
```

- css file

```css
.smv-modal-customType-enter {
  from {
    // your code here
  }
}
.smv-modal-customType-enter-active {
  // your @keyframes
}
.smv-modal-customType-leave {
  to {
    // your code here
  }
}
.smv-modal-customType-leave-active {
  // your @keyframes
}
```

PS. [animate.css](https://daneden.github.io/animate.css/) 是个不错的动画库，你可以在其中找到不少有用的动画效果。