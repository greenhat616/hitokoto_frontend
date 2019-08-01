<template>
  <dashboard-layout v-show="loaded" :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>账户安全</h1>
    <a-row>
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
        <div class="user-setting">
          <a-card>
            <a-form
              layout="vertical"
            >
              <a-form-item
                label="性别"
              >
                <a-radio-group name="sexGroup" :default-value="3">
                  <a-radio :value="1">
                    男
                  </a-radio>
                  <a-radio :value="2">
                    女
                  </a-radio>
                  <a-radio :value="3">
                    未知
                  </a-radio>
                </a-radio-group>
              </a-form-item>
              <a-row :gutter="{ xs: 0, sm: 0, md: 24}">
                <a-col :md="12">
                  <a-form-item
                    label="学历"
                  >
                    <a-select default-value="本科">
                      <a-select-option value="高中及以下">
                        高中及以下
                      </a-select-option>
                      <a-select-option value="大专">
                        大专
                      </a-select-option>
                      <a-select-option value="本科">
                        本科
                      </a-select-option>
                      <a-select-option value="硕士及以上">
                        硕士及以上
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="12">
                  <a-form-item
                    label="学校"
                  >
                    <a-select
                      default-value="湖南大学"
                    >
                      <a-select-option v-for="v in collegeListShow" :key="v" :value="v">
                        {{ v }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="{ xs: 0, sm: 0, md: 24}">
                <a-col :md="12">
                  <a-form-item
                    label="公司"
                  >
                    <a-input />
                  </a-form-item>
                </a-col>
                <a-col :md="12">
                  <a-form-item
                    label="职位"
                  >
                    <a-select
                      default-value="开发"
                    >
                      <a-select-option v-for="v in positionList" :key="v" :value="v">
                        {{ v }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-form-item
                label="个性标签"
              >
                <a-select mode="tags" :token-separators="[',', '，']">
                  <a-select-option v-for="v in userTags" :key="v">
                    {{ v }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                label="个性签名"
              >
                <a-textarea :row="5" />
              </a-form-item>
              <a-form-item style="margin-bottom: 0">
                <a-button
                  type="primary"
                  html-type="submit"
                >
                  提交
                </a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </div>
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
  .user-setting {
    margin-top: 2em;
    margin-bottom: 4em;
  }
</style>

<script>
// TODO: 将账户安全修改为账户设置
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
      },
      settingForm: this.$form.createForm(this),
      collegeList: [],
      collegeListShow: [],
      positionList: [
        '开发',
        '产品',
        '设计',
        '运维',
        '运营',
        '打杂',
        '测试',
        '市场',
        '管理'
      ],
      userTags: ['C', 'Java', '.net', 'PHP', 'Go', 'Python', 'Ruby', 'Perl', 'Mac', 'Linux', 'Javascript', 'Node.js', 'iOS', 'Android', 'Hadoop', 'MySQL', 'NoSQL', '大数据研究生', '云计算追随者', 'Mac逼神', 'Swift先锋', '自由人', '苹果粉', '苹果黑', '技术宅', '数据库大神', '专注前端一百年', '编程小白', 'Bug神', '专长挑Bug', '极客', '技术风向标', 'APP之父', '游戏狂痴', '码农', '设计师', '码士', '全栈攻城狮', '吐槽帝', '硬件玩家', '处女座', '追求逼格产品', '万年乙方', 'Ｃ++', 'Lua', '全干工程师', '学生党', '程序员鼓励师', 'Lisp', '二次元', '代码家', 'Coding迷', '云端开发模式先行者', 'Google党', 'StackOverFlow狂热者', 'Fedora党', 'Ubuntu党', 'Arch党', 'openSUSE党', 'VR爱好者', '数据控', '创业者', '白帽子', 'Hacker', '人工智能', '社交达人', '健身达人', '吃货', 'Bug制造者', 'Bug终结者', 'CTO', '首席用户体验师', 'WebIDE忠实用户', 'Git布道者', '自由职业者']
    }
  },
  computed: {
    loaded() {
      return this.$store.state.localStorage.status
    }
  },
  mounted() {
    const _this = this
    this.$axios.get('/chineseCollege.json') // TODO: 大学列表搜索更新
      .then(function (response) {
        return response.data
      })
      .then(function (data) {
        _this.collegeList = data
        _this.collegeListShow = data.slice(0, 10)
      })
      .catch(function (err) {
        window.console.error(err)
        this.$notification.error({
          message: '无法获取学校名单',
          description: '此时你无法更新用户资料。 这很可能是网络问题。'
        })
      })
  },
  methods: {
    md5,
    filterOption(input, option) {
      window.console.log(option.componentOptions.children)
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  },
  head() {
    return {
      title: '账户安全'
    }
  }
}
</script>
