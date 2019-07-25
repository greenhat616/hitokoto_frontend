<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>我的工单</h1>
    <a-row>
      <a-col :md="16" :lg="14">
        <a-list
          class="ticket-list"
          item-layout="vertical"
          :data-source="ticketList"
          :pagination="pagination"
        >
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta>
              <div slot="title">
                <span class="ticket-list-id">#{{ item.id }}</span>
                <a class="ticket-list-title" :href="item.target">{{ item.title }}</a>
              </div>
            </a-list-item-meta>
            <div class="ticket-list-status">
              <span>工单状态: 待回复</span>
            </div>
            <div class="ticket-list-categroy">
              <span>工单分类: 一言审核</span>
            </div>
            <div class="ticket-list-created-time">
              <span>提交时间: 2019-07-24 19:21</span>
            </div>
            <div class="ticket-list-updated-time">
              <span>最近更新: 2019-07-24 19:21</span>
            </div>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>

<style lang="less">
  .ticket-list-title {
    font-size: 1.3em;
  }
  .ticket-list {
    .ant-list-item-meta {
      margin-bottom: 0;
    }
    margin-bottom: 1em;
  }
</style>

<script>
import dashboardLayout from '~/components/dashboardLayout.vue'
export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: ['ticket-list'],
      menuOpened: ['ticket'],
      pagination: {
        onChange: (page) => {
          window.console.log(page)
        },
        pageSize: 10
      },
      ticketList: [
        {
          id: 1,
          title: '测试工单 1',
          target: ''
        },
        {
          id: 2,
          title: '测试工单 2',
          target: ''
        },
        {
          id: 3,
          title: '测试工单 3',
          target: ''
        },
        {
          id: 4,
          title: '测试工单 4',
          target: ''
        }
      ]
    }
  }
}
</script>
