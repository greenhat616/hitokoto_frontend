<template>
  <div style="margin-top:10em;">
    <a-modal
      title="一言网用户及版权保护协定"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      cancelText="拒绝"
      okText="同意协定"
    >
      <div v-html="ModalHTML"></div>
    </a-modal>
    <a-row>
      <a-col :md="{span: 10, offset: 7}" :lg="{span: 8, offset: 8}" :xl="{span: 6, offset: 9}" >
        <a-card title="注册">
          <a-form id="hitokoto-register" :form="form" class="login-form" @submit="handleSubmit">
          <a-form-item style="margin-bottom: 0.9em">
              <a-input
                v-decorator="[
                  'username',
                  {
                    rules: [
                      { required: true, message: '请输入昵称!' },
                      { max: 10, message: '昵称最长为 10 位！'}
                    ]
                  }
                ]"
                placeholder="昵称"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
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
            <a-form-item style="margin-bottom:0.9em">
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      { required: true, message: '请输入密码!' },
                      { min: 6, message: '密码长度应不小于 6 位'}
                    ]
                  }
                ]"
                type="password"
                placeholder="密码"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item style="margin-bottom:0.8em">
              <a-input
                v-decorator="[
                  'passwordConfirm',
                  {
                    rules: [
                      { required: true, message: '请确认密码!' },
                      { validator: checkPasswordConfirm, message: '两次输入的密码不一致！'}
                    ]
                  }
                ]"
                type="password"
                placeholder="确认密码"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item style="margin-bottom: 0.5em;">
              <a-checkbox
                v-decorator="[
                  'agreement',
                  {
                    valuePropName: 'checked',
                    initialValue: false,
                  }
                ]"
                @change="handleAgreementChange"
              >接受 <a id="hitokoto-rule">《一言网用户及版权保护协定》</a></a-checkbox>
              <a-button type="primary" html-type="submit" block>注册</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false,
      ModalHTML: '<p><b>正在获取协议内容...</b></p>',
      agreementUpdated: false,
      agreementMarkDown: `# 测试文本`
    }
  },
  head() {
    return {
      title: '注册账户'
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
    },
    checkPasswordConfirm(rule, value, callback) {
      const password = this.form.getFieldValue('password')
      if (password !== value) {
        callback(new Error('两次输入的密码不一致！'))
      } else {
        callback()
      }
    },
    updateAgreementText() {
      if (!this.agreementUpdated) {
        const text = marked(this.agreementMarkDown)
        const _this = this
        setTimeout(function () {
          _this.ModalHTML = text
          _this.agreementUpdated = true
        }, 1000)
      }
    },
    handleAgreementChange(e) {
      if (e.target.checked) {
        this.updateAgreementText()
        this.showModal()
      }
    },
    handleCancel(e) {
      this.form.setFieldsValue({ 'agreement': false })
      this.visible = false
    },
    handleOk(e) {
      this.visible = false
    },
    showModal() {
      this.visible = true
    }
  }
}
</script>
