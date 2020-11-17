<template>
  <div>this is page1</div>
  <div v-for="item in list" :key="item.id" ref='itemRefs'>{{item.name}}</div>
  <button @click='toPage2'>to page2</button>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    // console.log('page1 setup======',useRoute())
    // 获取路由器实例
    const router = useRouter()
    // route是响应式对象,可监控器变化
    const route = useRoute()
    console.log('router===', router)
    console.log('route===', route)
    const itemRefs = ref([])
    const list = []
    for (let i = 0; i < 10; i += 1) {
      list.push({
        id: i,
        name: `列表${i}`
      })
    }
    onMounted(() => {
      console.log('onMounted', itemRefs)
    })
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
      list: ref(list),
      itemRefs,
      ...methods
    }
  }
}
</script>
