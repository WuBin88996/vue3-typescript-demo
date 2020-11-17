<template>
  <div class="my-nav">
    <router-link
    class="nav-link"
    active-class="active"
    v-for="item in routes"
    :to="item.path"
    :key="item.path">
      {{item.name}}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import routes from '@/router/routes'

export default defineComponent({
  setup() {
    return {
      routes: ref(routes.filter((item) => item.path !== '/' && item.path !== '/*'))
    }
  }
})
</script>

<style lang="scss" scoped>
.my-nav{
  margin-top: 30px;
  .nav-link{
    display: inline-block;
    width: 200px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    background-color: rgb(30, 80, 109);
    &.active{
      background-color: rgb(20, 168, 64);
    }
  }
}
</style>
