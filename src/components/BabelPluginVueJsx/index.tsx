import { defineComponent, ref } from 'vue'
import './index.scss'

export default defineComponent({
  setup() {
    const vText = ref<string>('this is v-text')
    const vShow = ref<boolean>(true)
    const vTextPlus = function () {
      vText.value += '+'
    }
    const handleVShow = function () {
      vShow.value = !vShow.value
    }
    return () => (
      <div class='babel-jsx-plugin-demo'>
        <div v-text={vText.value}></div>
        <button onClick={vTextPlus}> click v-text ++ </button>
        <div v-show={vShow.value}>this is show</div>
        <button onClick={handleVShow}> {vShow.value ? 'off' : 'on'} </button>
      </div>
    )
  }
})
