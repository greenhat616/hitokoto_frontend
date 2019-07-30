<template>
  <div>
    <a-row>
      <a-col :md="{span: 10, offset: 7}" :lg="{span: 8, offset: 8}" :xl="{span: 6, offset: 9}" style="margin-top: 10.5em">
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
                    rules: [
                      { required: true, message: '请输入邮箱地址!' },
                      {type: 'email', message: '请输入正确的邮箱地址！'}
                    ]
                  }
                ]"
                placeholder="邮箱"
                @blur="mailOnBlur"
              >
                <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item style="margin-bottom:0.8em">
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
            <a-form-item style="margin-bottom: 0.5em;">
              <a-checkbox
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  }
                ]"
              >
                保持登录状态
              </a-checkbox>
              <nuxt-link class="login-form-forgot" to="/auth/password/reset">
                重置密码
              </nuxt-link>
              <a-button type="primary" html-type="submit" class="login-form-button" block>
                登录
              </a-button>
              <a-button block @click="goRegister">
                注册
              </a-button>
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
    this.$store.commit('menuSelected/updateCurrent', 'login')
  },
  methods: {
    goRegister() {
      this.$router.push('/auth/register')
    },
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
    mailOnBlur() {
      // this.avatar = `https://cdn.v2ex.com/gravatar/${md5(val)}?d=mp&s=500&ts=${Date.now()}`
      const email = this.form.getFieldValue('email') || ''
      this.avatar = `https://cdn.v2ex.com/gravatar/${md5(email)}?d=mp&s=500&ts=${Date.now()}`
    }
  }
}
</script>
