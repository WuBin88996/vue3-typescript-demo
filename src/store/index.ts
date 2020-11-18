import { reactive } from 'vue'
import { userInfoDefault } from '@/default'

const userInfoStore = reactive<API.UserInfo>({
  ...userInfoDefault
})

export default {
  userInfoStore
}
