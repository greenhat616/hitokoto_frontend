<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>
      添加工单
    </h1>
    <a-row>
      <a-col :md="14" :lg="12">
        <a-form
          id="ticket-create-form"
          layout="vertical"
          :form="form"
          :hide-required-mark="true"
          @submit="handleSubmit"
        >
          <a-form-item
            label="工单标题"
          >
            <a-input
              v-decorator="[
                'title',
                {
                  rules: [{
                    min: 10, message: '标题必须大于 10 个字！',
                  }, {
                    required: true, message: '标题不能为空!',
                  }]
                }
              ]"
              placeholder="请输入工单标题..."
            />
          </a-form-item>
          <a-form-item
            label="工单分类"
          >
            <a-select
              v-decorator="[
                'categroy',
                {
                  rules: [{
                    required: true, message: '分类不能为空!',
                  }],
                  initialValue: ticketCategroy[0].key
                }
              ]"
              style="width: 8em"
            >
              <a-select-option v-for="item in ticketCategroy" :key="item.key">
                {{ item.name }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="问题描述"
          >
            <a-upload
              action="/api/upload"
              list-type="text"
              :default-file-list="fileList"
            >
              <a-button>
                <a-icon type="upload" /> 上传附件
              </a-button>
            </a-upload>

            <br>
            <a-textarea
              v-decorator="[
                'content',
                {
                  rules: [
                    {
                      required: true, message: '工单内容不能为空!'
                    },
                    {
                      min: 15, message: '工单内容最少 15 个字'
                    }
                  ]
                }
              ]"
              placeholder="请输入问题细节...支持 Markdown 语法， 支持拖拽上传"
              :rows="8"
              @paste="handleTicketDescPaste"
            />
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
            >
              提交
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'
export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: ['ticket-append'],
      menuOpened: ['ticket'],
      fileList: [],
      ticketCategroy: [
        {
          name: '一言举报',
          key: 'hitokoto-flag'
        },
        {
          name: '一言审核',
          key: 'hitokoto-review'
        },
        {
          name: '站点问题',
          key: 'website-issue'
        },
        {
          name: '功能建议',
          key: 'feature-proposal'
        },
        {
          name: '其他',
          key: 'other'
        }
      ]
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
          window.console.log('Received values of form: ', values)
        }
      })
    },
    handleTicketDescPaste(e) {
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
  },
  head() {
    return {
      title: '添加工单'
    }
  }
}
</script>
