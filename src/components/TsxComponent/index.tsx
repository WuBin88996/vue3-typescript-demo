import {
  defineComponent, reactive, computed, ComputedRef, ref
} from 'vue'
import './index.scss'
import ListItem from './ListIten'

interface StateData {
  count: number
  computedData: ComputedRef<number>
  domList: string[]
  className: 'red' | 'blue'
}

export default defineComponent({
  // components: {
  //   ListItem
  // },
  setup() {
    const state = reactive<StateData>({
      count: 0,
      computedData: computed((): number => state.count + 1),
      domList: ['1', '2', '3', '4', '5', '6'],
      className: 'red'
    })
    const refDom = ref<null>(null)
    const handleCount = function () {
      state.count += 1
    }
    const log = function (logObj: any) {
      console.log('log===', logObj)
    }
    const changeClassName = function () {
      state.className = state.className === 'red' ? 'blue' : 'red'
    }
    const onItemEmit = function (msg: string) {
      console.log('onItemEmit', msg)
    }
    // const itemClickEvent = function (){
    //   console.log('itemClickEvent====')
    // }
    return () => (
      <div class='tsx-demo'>
        <div class={state.className}>
          this class name = {state.className}
          <aButton onClick={changeClassName}>changge class Name</aButton>
        </div>
        <aButton type='primary' onClick={handleCount}>count ++ : {state.count}</aButton>
        <div>count + 1 = {state.computedData}</div>
        <div ref={refDom}>this is ref Dom</div>
        <aButton type='danger' onClick={log.bind(this, refDom)}>console log ref Dom</aButton>
        {
          state.domList.map((item) => (
            item !== '1' ? <ListItem msg={item} onOnShow={onItemEmit}></ListItem> : null
          ))
        }
      </div>
    )
  }
})
