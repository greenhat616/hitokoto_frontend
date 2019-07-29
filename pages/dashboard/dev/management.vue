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
          <div class="access-manager-table-operator">
            <a-button type="primary" @click="openDrawer">
              添加令牌
            </a-button>
            <a-button :disabled="!hasSelected">
              重置令牌
            </a-button>
            <a-button :disabled="!hasSelected" @click="onDelete(selectedRowKeys)">
              删除令牌
            </a-button>
          </div>
          <div class="access-manager-table-outer">
            <a-table :row-selection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns" :data-source="accessData">
              <span slot="sites" slot-scope="sites">
                <a-tag v-for="site in sites" :key="site" color="blue">
                  {{ site }}
                </a-tag>
              </span>
              <template slot="mark" slot-scope="text, record">
                <editable-cell :text="text" @change="onCellChange(record.key, 'mark', $event)" />
              </template>
            </a-table>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-drawer
      title="添加令牌"
      width="300"
      placement="right"
      :closable="true"
      :visible="visible"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-form-item label="标识">
          <a-input
            v-decorator="['name', {
              rules: [{ required: true, message: '请输入标识' }]
            }]"
            placeholder="令牌的名称"
          />
        </a-form-item>

        <a-form-item label="授权站点">
          <a-select
            mode="tags"
            style="width: 100%"
            placeholder="使用 , 分割。 留空则不限制。"
            :token-separators="[',', '，']"
            @change="handleGrantSiteSelectChange"
          />
        </a-form-item>
        <a-form-item label="备注">
          <a-input
            v-decorator="['name']"
            placeholder="备注一些东西..."
          />
        </a-form-item>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <a-button
          :style="{marginRight: '8px'}"
          @click="onClose"
        >
          取消
        </a-button>
        <a-button type="primary" @click="onClose">
          添加
        </a-button>
      </div>
    </a-drawer>
  </dashboard-layout>
</template>
<style lang="less">
  .access-manager-table-operator button {
    margin-right: 0.5em;
  }
  .access-manager-outer {
    margin-top: 2em;
  }
  .access-manager-table-outer {
    margin-top: 1em;
  }
  .ant-table td { white-space: nowrap; }
  .ant-table-content {
    overflow: auto;
  }
</style>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'
import editableCell from '~/components/editableCell.vue'

export default {
  components: {
    dashboardLayout,
    editableCell
  },
  data() {
    return {
      visible: false,
      form: this.$form.createForm(this),
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
          title: '权限标识',
          dataIndex: 'accessId',
          width: '10%',
          key: 'accessId'
        },
        {
          title: '权限密钥',
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
          key: 'mark',
          scopedSlots: { customRender: 'mark' }
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
      ],
      selectedRowKeys: []
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      window.console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    openDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    onDelete(keys) {
      for (const key of keys) {
        const accessData = [...this.accessData]
        this.accessData = accessData.filter(item => item.key !== key)
      }
    },
    onCellChange(key, dataIndex, value) {
      const accessData = [...this.accessData]
      const target = accessData.find(item => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.accessData = accessData
      }
    },
    handleGrantSiteSelectChange(value) {
      window.console.log(`selected ${value}`)
    }
  }
}
</script>
