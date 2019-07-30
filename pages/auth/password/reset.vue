<template>
  <div style="margin-top:10em;">
    <a-row>
      <a-col :md="{span: 10, offset: 7}" :lg="{span: 8, offset: 8}" :xl="{span: 6, offset: 9}">
        <a-card title="重置密码">
          <a-form id="hitokoto-reset-password" :form="form" class="login-form" @submit="handleSubmit">
            <a-form-item style="margin-bottom: 0.9em">
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      { required: true, message: '请输入邮箱地址!' },
                      {type: 'email', message: '请输入正确的邮箱地址！'}
                    ]
                  }
                ]"
                placeholder="邮箱"
              >
                <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item style="margin-bottom: 0.5em;">
              <a-button type="primary" html-type="submit" block>
                发送重置链接
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  head() {
    return {
      title: '重置密码'
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          window.console.log('Received values of form: ')
          window.console.log(values)
        }
      })
    },
    msgBox(msg, decp, type = 'info') {
      this.$notification[type]({
        message: msg,
        description: decp
      })
    }
  }
}
</script>
