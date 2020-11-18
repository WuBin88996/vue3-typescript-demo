<template>
  <my-mav></my-mav>
  <router-view></router-view>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
