<template>
  <div class="app-index">
    <my-mav></my-mav>
    <router-view></router-view>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyMav from '@/components/nav.vue'

export default defineComponent({
  name: 'App',
  components: {
    MyMav
  }
})
</script>

<style lang="scss">

</style>
