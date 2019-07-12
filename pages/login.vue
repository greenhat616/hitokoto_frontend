<template>
  <div>
  <a-row>
  <a-col :md="{span: 12, offset: 6}">
  <login-avatar avatar="https://gravatar.loli.net/avatar/d41d8cd98f00b204e9800998ecf8427e?d=mp&f=y&s=500"/>
  <a-card>
  <a-form
    id="hitokoto-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          { rules: [{ required: true, message: '请输入邮箱地址!' }] }
        ]"
        placeholder="邮箱"
      >
        <a-icon
          slot="prefix"
          type="mail"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] }
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >
        保存登录状态
      </a-checkbox>
      <a
        class="login-form-forgot"
        href=""
      >
        重置密码
      </a>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
        block
      >
        登录
      </a-button>
      <a-button block>注册</a-button>
    </a-form-item>
  </a-form>
  </a-card>
  </a-col>
  </a-row>
  </div>
</template>

<script>
import loginAvatar from '~/components/loginAvatar.vue'
export default {
  components: {
    loginAvatar
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
    }
  }
}
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
