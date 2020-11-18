import { ComputedRef } from 'vue'

export interface IndectStore {
  userInfoStore: API.UserInfo
}

export interface StateData {
 watchData1: number,
 computedData: ComputedRef<number>
}
