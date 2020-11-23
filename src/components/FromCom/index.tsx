import {
  defineComponent, reactive, ref
} from 'vue'

export default defineComponent({
  setup() {
    const ruleForm = ref<any>(null)
    const form = reactive({
      name: '111'
      // region: undefined,
      // date1: undefined,
      // delivery: false,
      // type: [],
      // resource: '',
      // desc: ''
    })
    const rules = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        {
          min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'
        }
      ]
      // region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      // date1: [
      //   {
      //     required: true, message: 'Please pick a date', trigger: 'change', type: 'object'
      //   }
      // ],
      // type: [
      //   {
      //     type: 'array',
      //     required: true,
      //     message: 'Please select at least one activity type',
      //     trigger: 'change'
      //   }
      // ],
      // resource: [
      //   { required: true, message: 'Please select activity resource', trigger: 'change' }
      // ],
      // desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
    }
    const onSubmit = function (e: MouseEvent) {
      console.log('onSubmit=', [e.target])
    //   ruleForm.value
    //     .validate()
    //     .then(() => {
    //       console.log('values', form)
    //     })
    //     .catch((error: any) => {
    //       console.log('error', error)
    //     })
    }
    const resetForm = function () {
      ruleForm.value.resetFields()
    }
    return () => (
      <div>
        <a-form
          ref={ruleForm}
          model={form}
          rules={rules}
         >
          <a-form-item label="Activity name" name="name">
            <a-input v-model={[form.name, 'value']}/>
          </a-form-item>
          <a-button type="primary" onClick={onSubmit}>
            Create
          </a-button>
          <a-button style="margin-left: 10px;" onClick={resetForm}>
            Reset
          </a-button>
        </a-form>
      </div>
    )
  }
})
