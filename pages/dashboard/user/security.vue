<template>
  <dashboard-layout v-show="loaded" :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>账户安全</h1>
    <a-row>
      <a-col>
        <a-col :md="19" :lg="18">
          <a-card class="user-security-content">
            <a-row>
              <a-col :span="5" class="user-security-profile-avatar">
                <img v-lazy="`https://cdn.v2ex.com/gravatar/${md5(user.email)}?&ts=${Date.now()}&s=500`" draggable="false">
              </a-col>
              <a-col :span="19">
                <div class="profile-row">
                  <span>昵称：{{ user.name }}</span>
                  <span class="profile-row-operate">
                    <a href="javascript:;">修改昵称</a>
                  </span>
                </div>
                <div class="profile-row">
                  <span>邮箱：{{ user.email }}</span>
                  <span class="profile-row-operate">
                    <a href="javascript:;">修改邮箱</a>
                  </span>
                </div>
                <div class="profile-row">
                  <span>手机：{{ user.phone }}</span>
                  <span class="profile-row-operate">
                    <a href="javascript:;">修改号码</a>
                  </span>
                </div>
                <div class="profile-row">
                  <span>密码：*********</span>
                  <span class="profile-row-operate">
                    <a href="javascript:;">修改密码</a>
                    <a-divider type="vertical" />
                    <a href="javascript:;">重置密码</a>
                  </span>
                </div>
                <a-divider />
                <div class="profile-row">
                  <span>Github：尚未绑定</span>
                  <span class="profile-row-operate">
                    <a href="javascript:;">立即绑定</a>
                  </span>
                </div>
                <div class="profile-row">
                  <span>QQ：尚未绑定</span>
                  <span class="profile-row-operate">
                    <a href="javascript:;">立即绑定</a>
                  </span>
                </div>
                <div class="profile-row-last">
                  <span>微博：尚未绑定</span>
                  <span class="profile-row-operate">
                    <a href="javascript:;">立即绑定</a>
                  </span>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>
<style lang="less">
  .profile-row {
    margin-bottom: 1em;
  }
  .profile-row-operate {
    float: right;
  }
  .user-security-profile-avatar {
    img {
      width: 75%;
      height: 75%;
      border-radius: 50%;
      margin-left: 1em;
    }
  }
  @media screen and (max-width: 768px) {
    .user-security-profile-avatar {
      img {
        margin-left: 0;
      }
    }
  }
</style>

<script>
import md5 from 'js-md5'
import dashboardLayout from '~/components/dashboardLayout.vue'

export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: ['user-security'],
      menuOpened: ['user'],
      securityProfileForm: this.$form.createForm(this),
      user: {
        name: 'a632079',
        email: 'a632079@qq.com',
        phone: '132*****000'
      }
    }
  },
  computed: {
    loaded() {
      return this.$store.state.localStorage.status
    }
  },
  methods: {
    md5
  },
  head() {
    return {
      title: '账户安全'
    }
  }
}
</script>
