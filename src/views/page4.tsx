import {
  defineComponent, ref, inject, computed, ComputedRef
} from 'vue'
import { userInfoDefault } from '@/default/index'

interface IndectStore {
  userInfoStore: API.UserInfo
}

interface Styles {
  [key: string]: string | number
}
const deom1Class: Styles = {
  marginTop: '30px'
}
const deom1 = (<div style={deom1Class}> my name is page4</div>)
const deom2 = (<div> my from tsx</div>)
const dataList: number[] = []

for (let i = 0; i < 10; i += 1) {
  dataList.push(i)
}
const listItemClick = function (d: number) {
  console.log('listItemClick', d)
}

export default defineComponent({
  setup() {
    const refData1 = ref<number>(0)
    const computedData = ref<ComputedRef<number>>(computed((): number => refData1.value + 1))
    const refData1Plus = function () {
      refData1.value += 1
    }
    const { userInfoStore } = inject<IndectStore>(
      'store',
      {
        userInfoStore: { ...userInfoDefault }
      }
    )
    const userNamePlus = function () {
      userInfoStore.userName += '+'
    }
    const resetUserName = function () {
      userInfoStore.userName = userInfoDefault.userName
    }

    return () => (
      <div style='font-size:30px;color:red;'>
        {deom1}
        {deom2}
        <div>ref data1 : {refData1.value}</div>
        <div>ref data1 +1 = {computedData.value}</div>
        <aButton onClick={refData1Plus}> change this refData1 ++ </aButton>
        <div>user name : {userInfoStore.userName}</div>
        <aButton onClick={userNamePlus}>change this user name ++</aButton>
        <aButton style='margin-left:30px;' onClick={resetUserName}>reset user name</aButton>
        <div>
          {
            dataList.map((item) => (
              <div><aButton onClick={listItemClick.bind(this, item)}>{item}</aButton></div>
            ))
          }
        </div>
      </div>
    )
  }
})
