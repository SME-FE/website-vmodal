
# Theme and Animation

## Modal and Mask Style

There are `modalStyle` and `maskStyle` in Modal options, so we can change modal and mask style using those options.

```
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

## Override Style

If the `modalStyle` and `maskStyle` can not satisfy the requirement, You can directly override the style. `smv-modal` provides a class `.override` for this. Here is the template(scss or less):

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

BTW. You can use `className` options.

```js
const modal = Modal({
  title: 'hi',
  content: 'all',
  className: 'red-modal'
})
```

and then

```
.smv-modal.red-modal {
  // your code
}
```

## Animation

There are few animation in `smv-modal`. But you need to import the css to use it except the `shutter` animation. It's in order to minify the package size for the people that do not need all the animation css.

animation type list:

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

## Custom Animation

Or you can custom animation by yourself, here is an simple example.

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

BTW. You may find some useful animation from [animate.css](https://daneden.github.io/animate.css/). Which is an awesome animate library.