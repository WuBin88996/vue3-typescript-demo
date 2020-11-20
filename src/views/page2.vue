<template>
  <div>
    <div>this is page2</div>
    <button @click='routerBack'>click router back</button>
    <button @click='toPage3'>click to Page3</button>
    <babel-plugin-jsx></babel-plugin-jsx>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BabelPluginJsx from '@/components/BabelPluginVueJsx'

export default defineComponent({
  components: {
    BabelPluginJsx
  },
  setup() {
    const route = useRoute()
    console.log(route.query)
    const router = useRouter()
    const methods = {
      routerBack() {
        router.back()
      },
      toPage3() {
        router.push({
          name: 'page3',
          params: {
            fff: 'page2'
          }
        })
      }
    }
    return {
      ...methods
    }
  }
})
</script>
