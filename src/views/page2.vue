<template>
  <div>
    <div>this is page2</div>
    <button @click='routerBack'>click router back</button>
    <button @click='toPage3'>click to Page3</button>
  </div>
</template>
<script>
import { inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    console.log(route.query)
    const router = useRouter()
    const { userInfoStore } = inject('store')
    console.log('userInfoStore', userInfoStore)
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
}
</script>
