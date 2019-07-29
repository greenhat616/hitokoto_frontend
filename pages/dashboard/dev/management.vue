<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>
      授权管理
    </h1>
    <a-row>
      <a-col :md="20" :lg="29">
        <a-alert type="warning" banner>
          <div slot="message">
            <b>请注意：</b> 如果你不知道这个是做什么的， 请离开本页面。 该页面仅推荐开发者使用。<br>
            <i>在当前版本中， 面板尚未实现严格的权限控制功能。</i><br>
            这意味着： 任何令牌都具有所有的开发者接口访问权限， 请保管好你的令牌。 如果泄露， 请立即重置令牌！
          </div>
        </a-alert>
        <div class="access-manager-outer">
          <div class="access-manager-table-outer">
            <a-table :columns="columns" :data-source="accessData">
              <span slot="sites" slot-scope="sites">
                <a-tag v-for="site in sites" :key="site" color="blue">
                  {{ site }}
                </a-tag>
              </span>
            </a-table>
          </div>
        </div>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>
<style lang="less">
  .access-manager-outer {
    margin-top: 2em;
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
      menuSelected: ['accss-management'],
      menuOpened: ['dev'],
      columns: [
        {
          title: '标识',
          dataIndex: 'name',
          width: '20%',
          key: 'name'
        },
        {
          title: 'access_id',
          dataIndex: 'accessId',
          width: '10%',
          key: 'accessId'
        },
        {
          title: 'access_secret',
          dataIndex: 'accessSecret',
          width: '20%',
          key: 'accessSecret'
        },
        {
          title: '授权站点',
          dataIndex: 'grantSite',
          width: '30%',
          key: 'grantSite',
          scopedSlots: { customRender: 'sites' }
        },
        {
          title: '备注',
          dataIndex: 'mark',
          width: '50%',
          key: 'mark'
        }
      ],
      accessData: [
        {
          key: '0',
          name: '咕咕咕',
          accessId: 'XXXX_XXXXX',
          accessSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
          grantSite: [
            'hitokoto.cn',
            'a632079.me'
          ],
          mark: '咕咕咕咕咕咕咕咕咕咕咕'
        }
      ]
    }
  }
}
</script>
