<template>
  <div>this is page1</div>
  <button @click="toPage2">to page2</button>
  <tsx-component></tsx-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import TsxComponent from '@/components/TsxComponent'

export default defineComponent({
  components: {
    TsxComponent
  },
  setup() {
    console.log('this?===', this)
    // console.log('page1 setup======',useRoute())
    // 获取路由器实例
    const router = useRouter()
    // route是响应式对象,可监控器变化
    const route = useRoute()
    console.log('router===', router)
    console.log('route===', route)

    const methods = {
      toPage2() {
        router.push({
          path: '/page2',
          query: {
            fff: 'page1'
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
