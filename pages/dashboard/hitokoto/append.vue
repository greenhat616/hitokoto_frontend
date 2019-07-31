<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <a-row type="flex" align="top">
      <a-col span="16">
        <a-form :form="form">
          <h2>提交新一言</h2>
          <a-form-item label="一言" :wrapper-col="{ span: 10 }" :label-col="{ span: 3 }">
            <a-textarea
              v-decorator="[
                'hitokoto',
                {rules: [{ required: true, message: '请输入一言' }]}
              ]"
              :rows="3"
              placeholder="一言(30字左右最佳,建议不要超过50字)"
            />
          </a-form-item>
          <a-form-item label="来源" :wrapper-col="{ span: 10 }" :label-col="{ span: 3 }">
            <a-input
              v-decorator="[
                'hitokoto',
                {rules: [{ required: false, message: '请输入一言' }]}
              ]"
              placeholder="来源(不要带有角色名、书名号等符号,无来源请填写分类名)"
            />
          </a-form-item>
          <a-form-item
            label="分类"
            :wrapper-col="{ span: 10 }"
            :label-col="{ span: 3 }"
          >
            <a-radio-group v-decorator="['radio-button']">
              <a-radio-button value="a">
                动画
              </a-radio-button>
              <a-radio-button value="c">
                漫画
              </a-radio-button>
              <a-radio-button value="g">
                游戏
              </a-radio-button>
              <a-radio-button value="n">
                小说
              </a-radio-button>
              <a-radio-button value="m">
                原创
              </a-radio-button>
              <a-radio-button value="i">
                来自网络
              </a-radio-button>
              <a-radio-button value="o">
                其他
              </a-radio-button>
            </a-radio-group>
            <a-form-item
              :wrapper-col="{ span: 12, offset: 6 }"
            >
              <a-button
                type="primary"
                html-type="submit"
              >
                提交
              </a-button>
            </a-form-item>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>
<style type="less">
h2 {
  font-weight: 400;
  font-size: 2.4em;
  line-height: 2.5em;
}

.ant-form-item-label label{
  font-size: 1.2em;
}
</style>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'
export default {
  components: {
    dashboardLayout
  },
  head() {
    return {
      title: '添加一言'
    }
  },
  data() {
    return {
      menuSelected: ['sentence-append'],
      menuOpened: ['sentence'],
      form: this.$form.createForm(this)
    }
  }
}
</script>
