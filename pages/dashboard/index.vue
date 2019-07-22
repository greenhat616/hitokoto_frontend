<template>
  <div class="dashboard">
    <a-row>
      <a-col :sm="24" :md="{span: 12}">
        <div class="welcome-message">
          <h1>
            <b>早上好， a632079。</b>
          </h1>
          <p>今日，2019年7月22日，天气晴朗，气温高，注意防暑，欢迎回到一言控制面板。</p>
        </div>
      </a-col>
      <a-col :xm="{span: 0}" :sm="{span: 0}" :md="{span:12}">
        <div class="welcome-status">
          <div class="welcome-status-child">
            <a-row>
              <a-col :md="10">
                <div class="welcome-status-child-icon-outer">
                  <a-icon
                    class="welcome-status-child-icon"
                    type="heart"
                    theme="filled"
                    style="color: hotpink"
                  />
                </div>
              </a-col>
              <a-col :md="14">
                <div class="welcome-status-child-text">
                  <span class="welcome-status-child-text-number">0</span>
                  <span class="welcome-status-child-text-desc">已收藏句子</span>
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="welcome-status-child">
            <a-row>
              <a-col :md="10">
                <div class="welcome-status-child-icon-outer">
                  <a-icon
                    class="welcome-status-child-icon"
                    type="read"
                    theme="filled"
                    style="color: cornflowerblue"
                  />
                </div>
              </a-col>
              <a-col :md="14">
                <div class="welcome-status-child-text">
                  <span class="welcome-status-child-text-number">0</span>
                  <span class="welcome-status-child-text-desc">待处理句子</span>
                </div>
              </a-col>
            </a-row>
          </div>
          <div class="welcome-status-child">
            <a-row>
              <a-col :md="10">
                <div class="welcome-status-child-icon-outer">
                  <a-icon
                    class="welcome-status-child-icon"
                    type="profile"
                    theme="filled"
                    style="color: orange"
                  />
                </div>
              </a-col>
              <a-col :md="14">
                <div class="welcome-status-child-text">
                  <span class="welcome-status-child-text-number">0</span>
                  <span class="welcome-status-child-text-desc">待处理工单</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
    </a-row>
    <div class="dashboard-content">
      <a-row :gutter="{xm: 0, sm: 0, md: 24}">
        <a-col :xm="{span: 24}" :sm="{span: 24}" :md="{span: 18}">
          <a-card title="用户数据" class="user-data">
            <a-card-grid style="width: 50%;">
              <h3>
                <b>一言</b>
              </h3>
            </a-card-grid>
            <a-card-grid style="width: 50%;">
              <h3>
                <b>工单</b>
              </h3>
            </a-card-grid>
          </a-card>
        </a-col>
        <a-col :xm="{span: 0}" :sm="{span: 0}" :md="{span: 6 }">
          <a-card class="sponsor-card">
            <img v-lazy="'https://piccdn.freejishu.com/images/2019/07/21/PnY445.png'">
          </a-card>
          <a-card
            hoverable
          >
            <img
              slot="cover"
              alt="theme"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            >
            <template slot="actions" class="ant-card-actions">
              <a-icon type="setting" />
              <a-icon type="edit" />
              <a-icon type="ellipsis" />
            </template>
            <a-card-meta title="a632079" description="满招损，谦受益">
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<style lang="less">
.hitokoto-header {
  max-width: 100%;
}
@media screen and (min-width: 768){
  .logo {
    padding-left: 1em;
  }
}
.dashboard {
  margin-left: 3em;
  margin-right: 3em;
}
.welcome-message {
  margin-top: 1.75em;
}
.welcome-status {
  margin-top: 1em;
  display: flex;
  justify-content: right;
  -webkit-box-align: center;
  align-items: center;
  height: 8em;
}
.welcome-status-child {
  width: 8.5em;
  margin-left: 2em;
}
.welcome-status-child-text {
  display: inline;
}
.welcome-status-child-icon {
  font-size: 22px;
  color: #555;
}
.welcome-status-child-icon-outer {
  border: 1px solid #dedede;
  border-radius: 50%;
  height: 3.5em;
  width: 3.5em;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin-right: 0.75em;
}
.welcome-status-child-text-number {
  display: block;
  text-align: center;
  font-size: 1.5em;
}
.welcome-status-child-text-desc {
  display: block;
  text-align: center;
  font-size: 0.8em;
}
.user-data .ant-card-head-title {
  font-weight: bold;
}
.user-data .ant-card-head {
  padding-left: 24px;
}
.sponsor-card {
  margin-bottom: 2em;
}
.sponsor-card img {
  width: 100%;
}
</style>

<script>
export default {
  head() {
    return {
      title: '面板首页'
    }
  },
  mounted() {
    this.$store.commit('menuSelected/clearCurrent')
  }
}
</script>
