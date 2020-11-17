<template>
  <button @click="onEmit">组件抛出emit</button>
</template>

<script>
export default {
  setup(props, { emit }) {
    const onEmit = () => {
      emit('on-emit', { aaa: 111 })
    }
    return {
      onEmit
    }
  }
}
</script>
