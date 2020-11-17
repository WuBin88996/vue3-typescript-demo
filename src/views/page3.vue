<template>
  <div>this is page3</div>
  <div>{{userInfoStore.userName}}</div>
  <button @click="changeUserInfo">change userinfo</button>
  <div><component-1 @on-emit="componentEmit"></component-1></div>
  <div>watchData: {{watchData1}}</div>
  <div>computedData: {{computedData}}</div>
   <button @click="changeWatch1">change watchdata1</button>
</template>

<script>
import {
  inject, reactive, toRefs, watch, watchEffect, computed
} from 'vue'
// import { useRoute } from 'vue-router'
import Component1 from '@/components/component1.vue'

export default {
  components: {
    Component1
  },
  setup() {
    const state = reactive({
      userInfoStore: inject('store').userInfoStore,
      // ...inject('store')
      watchData1: 0,
      computedData: computed(() => state.watchData1 + 1)
    })
    console.log('userInfo', state.userInfoStore)
    watch(() => state.watchData1, (val, oldVal) => {
      console.log('watch====', val, oldVal)
    })
    watchEffect((onInvalidate) => {
      console.log('watchEffect====', state.watchData1)
      onInvalidate(() => {
        console.log('onInvalidate', state.watchData1)
      })
    })
    const methods = {
      changeUserInfo() {
        state.userInfoStore.userName += 'o'
      },
      componentEmit(params) {
        console.log('componentEmit', params)
      },
      changeWatch1() {
        state.watchData1 += 1
      }
    }
    return {
      ...toRefs(state),
      ...methods
    }
  }
}
</script>
