<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>状态概览</h1>
    <a-list
      itemLayout="horizontal"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-row class="full_width">
          <a-col span="2">#{{ item.id }}</a-col>
          <a-col span="10" offset="2">{{ item.hitokoto }}</a-col>
          <a-col span="4" offset="5">
            <div v-if="item.status == 0" class="review">审核中</div>
            <div v-if="item.status == 1" class="wait_review">待审核</div>
            <div v-if="item.status == 2" class="reject">被驳回</div>
          </a-col>
        </a-row>
      </a-list-item>
    </a-list>
  </dashboard-layout>
</template>
<style>
.full_width {
  width: 100%
}

.wait_review {
  color: blue
}

.review {
  color: green
}

.reject {
  color: red;
}
</style>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'

const data = [{
  id: '1234',
  hitokoto: '你要不会唠嗑能不能别硬唠',
  status: 0
}, {
  id: '1234',
  hitokoto: '一天最大任务莫过于，好好睡觉，好好醒来',
  status: 1
}, {
  id: '1234',
  hitokoto: 'gugugug~~~~',
  status: 2
}]

export default {
  components: {
    dashboardLayout
  },
  head() {
    return {
      title: '状态概览'
    }
  },
  data() {
    return {
      menuSelected: ['sentence-overlook'],
      menuOpened: ['sentence'],
      form: this.$form.createForm(this),
      data
    }
  }
}
</script>
