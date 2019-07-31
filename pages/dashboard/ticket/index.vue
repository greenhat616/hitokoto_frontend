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
                <nuxt-link class="ticket-list-title" :to="'/dashboard/ticket/view/' + item.id">
                  {{ item.title }}
                </nuxt-link>
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
  .ticket-list-id {
    color: #7b7b7b;
  }
  .ticket-list-title {
    color: rgba(0, 0, 0, 0.85)
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
  head() {
    return {
      title: '我的工单'
    }
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
          title: '测试工单 1'
        },
        {
          id: 2,
          title: '测试工单 2'
        },
        {
          id: 3,
          title: '测试工单 3'
        },
        {
          id: 4,
          title: '测试工单 4'
        }
      ]
    }
  }
}
</script>
