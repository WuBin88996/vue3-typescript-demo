import { defineComponent } from 'vue'

interface ItemProps {
  msg: string
  onOnShow: (msg: string) => void
}

export default defineComponent({
  name: 'listItem',
  // props: {
  //   msg: String
  // },
  setup(props: ItemProps, { emit, attrs }) {
    const onEmit = function () {
      emit('onShow', attrs.msg)
    }
    return () => (
      <div>
        {attrs.msg}
        <aButton onClick={onEmit}>emit event</aButton>
      </div>
    )
  }
})
