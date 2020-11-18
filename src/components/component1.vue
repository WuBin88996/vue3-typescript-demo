<template>
  <button @click="onEmit">组件抛出emit</button>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, { emit }) {
    const onEmit = () => {
      emit('on-emit', { aaa: 111 })
    }
    return {
      onEmit
    }
  }
})
</script>
