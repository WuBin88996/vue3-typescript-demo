import { defineComponent } from 'vue'

export default defineComponent({
  name: 'listItem',
  props: {
    msg: String
  },
  setup(props, { emit }) {
    const onEmit = function () {
      console.log('onEmit', props.msg)
      emit('on-emit', props.msg)
    }
    return () => (
      <div>
        {props.msg}
        <aButton onClick={onEmit}>emit event</aButton>
      </div>
    )
  }
})
