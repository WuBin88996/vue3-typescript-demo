<template>
  <div>this is page3</div>
  <div>{{ userInfoStore.userName }}</div>
  <button @click="changeUserInfo">change userinfo</button>
  <div><component-1 @on-emit="componentEmit"></component-1></div>
  <div>watchData: {{ watchData1 }}</div>
  <div>computedData: {{ computedData }}</div>
  <button @click="changeWatch1">change watchdata1</button>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  reactive,
  toRefs,
  watch,
  watchEffect,
  computed,
  ComputedRef
} from 'vue'
// import { useRoute } from 'vue-router'
import Component1 from '@/components/component1.vue'
import { userInfoDefault } from '@/default/index'

interface IndectStore {
  userInfoStore: API.UserInfo
}

interface StateData {
  watchData1: number
  computedData: ComputedRef<number>
}

export default defineComponent({
  components: {
    Component1
  },
  setup() {
    const myResult: API.Result<boolean> = {
      code: 0,
      msg: '123',
      data: false
    }
    console.log('myResult', myResult)

    const state = reactive<StateData>({
      watchData1: 0,
      computedData: computed((): number => state.watchData1 + 1)
    })
    const { userInfoStore } = inject<IndectStore>(
      'store',
      reactive<IndectStore>({
        userInfoStore: { ...userInfoDefault }
      })
    )
    watch(
      () => state.watchData1,
      (val, oldVal) => {
        console.log('watch====', val, oldVal)
      }
    )
    watchEffect((onInvalidate) => {
      console.log('watchEffect====', state.watchData1)
      onInvalidate(() => {
        console.log('onInvalidate', state.watchData1)
      })
    })
    const methods = {
      changeUserInfo() {
        userInfoStore.userName += '+'
      },
      componentEmit(params: { [key: string]: any }) {
        console.log('componentEmit', params)
      },
      changeWatch1() {
        state.watchData1 += 1
      }
    }
    return {
      ...toRefs(state),
      userInfoStore,
      ...methods
    }
  }
})
</script>
