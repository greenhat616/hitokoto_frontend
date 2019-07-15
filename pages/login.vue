<template>
  <div style="margin-top:10em;">
    <a-row>
      <a-col :md="{span: 10, offset: 7}" :lg="{span: 8, offset: 8}" :xl="{span: 6, offset: 9}" >
        <a-card>
          <login-avatar
            :avatar="avatar"
          />
          <a-form id="hitokoto-login" :form="form" class="login-form" @submit="handleSubmit">
            <a-form-item style="margin-bottom: 0.9em">
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [{ required: true, message: '请输入邮箱地址!' }]
                  }
                ]"
                placeholder="邮箱"
                @change="mailOnChange"
              >
                <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
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
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item style="margin-bottom: 1em;">
              <a-checkbox
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  }
                ]"
              >保存登录状态</a-checkbox>
              <a class="login-form-forgot" href>重置密码</a>
              <a-button type="primary" html-type="submit" class="login-form-button" block>登录</a-button>
              <a-button block>注册</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import md5 from 'js-md5'
import loginAvatar from '~/components/loginAvatar.vue'

export default {
  components: {
    loginAvatar
  },
  data() {
    return {
      avatar: 'https://cdn.v2ex.com/gravatar/d41d8cd98f00b204e9800998ecf8427e?d=mp&f=y&s=500'
    }
  },
  head() {
    return {
      title: '账户登录'
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
    mailOnChange(e) {
      // this.avatar = `https://cdn.v2ex.com/gravatar/${md5(val)}?d=mp&s=500&ts=${Date.now()}`
      const email = (this.form.getFieldValue('email') || '') + e.data

      this.avatar = `https://cdn.v2ex.com/gravatar/${md5(email)}?d=mp&s=500&ts=${Date.now()}`
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
