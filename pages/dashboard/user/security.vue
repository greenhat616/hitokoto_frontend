<template>
  <dashboard-layout v-show="loaded" :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>账户安全</h1>
    <a-row>
      <a-col>
        <a-col :md="14" :lg="12">
          <div v-if="!checkVerification()" class="user-security-verification">
            <a-form
              layout="inline"
              :form="verificationForm"
              @submit="handleVerificationFormSubmit"
            >
              <a-form-item
                :validate-status="passwordError() ? 'error' : ''"
                :help="passwordError() || ''"
              >
                <a-input
                  v-decorator="[
                    'password',
                    {rules: [{ required: true, message: '密码不能为空' }]}
                  ]"
                  type="password"
                  placeholder="请输入密码以验证权限..."
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color:rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  :disabled="hasErrors(verificationForm.getFieldsError())"
                  :loading="verificationLoading"
                >
                  验证密码
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'

function hasErrors(fieldsError) {
  if (process.client) {
    window.console.log(this.verificationForm.getFieldsError())
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }
  return true
}

export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: ['user-security'],
      menuOpened: ['user'],
      verificationForm: this.$form.createForm(this),
      verificationLoading: false,
      isNotifacation: false,
      hasErrors
    }
  },
  computed: {
    vertificationTS() {
      return this.$store.state.localStorage.verificationTS
    },
    loaded() {
      return this.$store.state.localStorage.status
    }
  },
  methods: {
    checkVerification() {
      const now = Date.now()
      const verificationTS = this.verificationTS
      const result = !!((now - verificationTS) < 1000 * 60 * 20) // 20 分钟内有效
      if (!result && verificationTS !== 0 && !this.isNotifacation) {
        this.isNotifacation = true
        if (process.client) {
          this.$notification.open({
            message: '需要重新验证权限',
            description: '距离上一次验证已经超过 20 分钟了。 为了保障您的账户安全， 您需要重新验证权限。',
            icon: <a-icon type="smile" style="color: #108ee9" />
          })
        }
      }
      return result
    },
    passwordError() {
      const { getFieldError, isFieldTouched } = this.verificationForm
      return isFieldTouched('password') && getFieldError('password')
    },
    handleVerificationFormSubmit(e) {
      e.preventDefault()
      this.verificationForm.validateFields((err, values) => {
        if (!err) {
          window.console.log('Received values of form: ', values)
          this.vverificationLoading = true
          const _this = this
          setTimeout(() => {
            _this.verificationLoading = false
            _this.$store.commit('localStorage/commitVerificationTS')
          }, 1000)
        }
      })
    }
  },
  head() {
    return {
      title: '账户安全'
    }
  }
}
</script>
