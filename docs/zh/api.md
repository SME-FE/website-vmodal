
# API

```js
const modal = Modal(options)
```

## options

Attribute | Description | Type | Accepted values	 | Default
----|------|----|----|----
title | modal title | String | -- | --
content | modal content | String, JSX, SFC | -- | --
theme | theme color | String | rgb, Hex | #a3a7e4
animation | {type: animationType, duration: milisecond} | Object | -- | {type: 'shutter', duration: 300}
footer | modal footer | Boolean | -- | true
confirmText | confirm button text | String | -- | confirm
cancelText | cancel button text | String | -- | cancel
className | modal class name | String | -- | --
closeBtn | modal close icon on the right top | Boolean | -- | true
closeOnEsc | close modal on `Esc` press | Boolean | -- | true
confirmOnEnter | confirm modal on `Enter` press | Boolean | -- | false
mask | whether display the mask | Boolean | -- | true
maskClosable | modal close on mask click | Boolean | -- | true
maskStyle | mask style | Object | vue style object | --
modalStyle | modal style | Object | vue style object | --

## methods

methods of modal instance

### modal.show

show the modal and return promise

### modal.hide

hide the modal

### modal.destroy

destroy the modal

## Event

`smv-modal` listening three events that pass from the content component.

Event Name | Description | example
----|------|----
confirmModal | hide and confirm the modal | this.$emit('confirmModal', { type: 'custom', data: data })
cancelModal | hide and cancel the modal | this.$emit('confirmModal', { type: 'customCancel', data: data })
setCloseable | wether the modal can be closed | this.$emit('setCloseable', false)

- example in [ModalContent.vue file](/sfc.html#fully-replace-modal-with-sfc)
