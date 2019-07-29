<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>
      {{ '工单详情 #' + getTicketId }}
      <a-button size="small" class="rollback-button" @click="toRollback">
        <a-icon type="left" />返回列表
      </a-button>
    </h1>
    <a-row>
      <a-col :md="18" :lg="16">
        <div class="ticket-progress">
          <a-steps :current="1">
            <a-step title="已提交" />
            <a-step title="处理中" />
            <a-step title="待回复" />
            <a-step title="已完成" />
          </a-steps>
        </div>
        <div class="ticket-meta">
          <div class="ticket-meta-box">
            <span class="ticket-meta-box-inner-left">工单标题 :</span>
            <span class="ticket-meta-box-inner">测试工单</span>
          </div>
          <div class="ticket-meta-box">
            <a-row>
              <a-col :md="6">
                <div class="ticket-meta-box">
                  <span class="ticket-meta-box-inner-left">工单分类 :</span>
                  <span class="ticket-meta-box-inner">一言审核</span>
                </div>
              </a-col>
              <a-col :md="6">
                <div class="ticket-meta-box">
                  <span class="ticket-meta-box-inner-left">提交时间 :</span>
                  <span class="ticket-meta-box-inner">2019-07-24 19:21</span>
                </div>
              </a-col>
              <a-col :md="6">
                <div class="ticket-meta-box">
                  <span class="ticket-meta-box-inner-left">最后更新 :</span>
                  <span class="ticket-meta-box-inner">2019-07-24 19:21</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="ticket-content-body">
          <a-list :data-source="ticketData">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta>
                <div slot="description" v-html="MD2HTML(item.sourceText)" />
                <a slot="title">
                  {{ item.author }}
                </a>
                <a-avatar slot="avatar" :src="getGravatarURL(item.email)" />
              </a-list-item-meta>
              {{ formatTS(item.commitTS) }}
            </a-list-item>
            <div slot="header">
              沟通记录
            </div>
          </a-list>
        </div>
        <div class="ticket-feedback">
          <div class="ticket-comment">
            <a-form
              class="ticket-comment-form"
              layout="vertical"
              :form="form"
              @submit="handleSubmit"
            >
              <a-form-item style="margin-bottom: 1em;">
                <a-textarea
                  v-decorator="[
                    'content',
                    {
                      rules: [
                        {
                          required: true, message: '回复不能为空!'
                        },
                        {
                          min: 15, message: '回复内容最少 15 个字'
                        }
                      ]
                    }
                  ]"
                  placeholder="请输入回复内容...支持 Markdown 语法， 支持拖拽上传"
                  :rows="8"
                  @paste="handleTicketCommentBodyPaste"
                />
              </a-form-item>

              <a-upload
                action="/api/upload"
                style="display: inline-block;"
                :default-file-list="fileList"
              >
                <a-button shape="circle">
                  <a-icon type="upload" />
                </a-button>
              </a-upload>
              <a-button
                style="margin-left: 0.75em;"
                html-type="submit"
              >
                发表回复
              </a-button>
            </a-form>
          </div>
        </div>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>

<style lang="less">
.rollback-button {
  padding-left: 2px;
}
.rollback-button > span {
  margin-left: 0 !important;
}
.ticket-progress {
  .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title {
    color: #1890ff !important;
  }
  .ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-title {
    color: #1890ff !important;
  }
}
.ticket-meta {
  background-color: #eaedf1;
  margin-top: 1em;
  padding-top: 1.2em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  padding-bottom: 1.2em;
  font-size: 0.86em;
}
.ticket-meta-box-inner-left {
  color: #999 !important;
}

.ticket-meta-box-inner {
  color: #333333;
}

.ticket-feedback {
  margin-top: 2em;
}
</style>

<script>
/* eslint-disable vue/require-default-prop */
import escapeHTML from 'escape-html'
import md5 from 'js-md5'
import moment from 'moment'
import dashboardLayout from '~/components/dashboardLayout.vue'

export default {
  components: {
    dashboardLayout
  },
  validate({ params }) {
    // 必须是 number 类型
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      menuSelected: ['ticket-list'],
      menuOpened: ['ticket'],
      ticketData: [
        {
          author: 'a632079',
          email: 'a632079@qq.com',
          commitTS: Date.now(),
          sourceText: '咕咕咕咕咕咕咕咕咕咕咕咕咕咕'
        },
        {
          author: 'freejishu',
          email: 'i@freejishu.com',
          commitTS: Date.now(),
          sourceText: '咕咕咕咕咕咕咕咕咕咕咕咕咕咕'
        }
      ]
    }
  },
  computed: {
    getTicketId() {
      return this.$route.params.id
    }
  },
  head() {
    return {
      title: '工单详情 #' + this.getTicketId
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    toRollback() {
      this.$router.go(-1)
    },
    MD2HTML(text) {
      const securityText = escapeHTML(text)
      return this.marked(securityText)
    },
    getGravatarURL(email) {
      return `https://cdn.v2ex.com/gravatar/${md5(email)}?d=mp&s=50&ts=${Date.now()}`
    },
    formatTS(ts) {
      const m = moment(ts)
      return m.format('YYYY-MM-DD HH:mm')
    },
    handleTicketCommentBodyPaste(e) {
      const items = event.clipboardData && event.clipboardData.items
      let file
      if (items && items.length) {
        // 检索剪切板 items
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            file = items[i].getAsFile()
            break
          }
        }
      }
      if (!file) {
        window.console.info('工单描述[剪辑板粘贴事件]: 未获取到图片')
      } else {
        window.console.log(file)
        // 预留上传图片的坑
        window.console.info('工单描述[剪辑板粘贴事件]: 获取到图片， 开始尝试上传')
        const paste = '[AAAAAAAAAAAA]'
        e.target.value += paste
        e.preventDefault()
      }
    }
  }
}
</script>
