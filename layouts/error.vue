<template>
  <div class="flex">
    <div class="background"></div>
      <a-row style="width:100%">
        <a-col :xxl="{span:6, offset:3}">
          <h1 v-if="error.statusCode === 404" class="error-title">404 - Not Found</h1>
          <h1 v-else class="error-title">未知错误</h1>
          <p class="error-describe">页面似乎被年兽吃掉了，去首页逛逛吧</p>
          <p class="error-redirect">
              <nuxt-link to="/"> 返回首页 </nuxt-link>
          </p>
        </a-col>
      </a-row>
    </div>
</template>
<style>
   .flex {
      display: -ms-flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
  }

  .background {
    background-image: url("https://piccdn.freejishu.com/images/2016/07/08/073f18d621c29b8f98f169bed49f8b1f.jpg");
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: center center;
      background-attachment: scroll;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;
      -o-background-size: cover;
  }

  .background::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .footer {
    position: fixed;
    bottom: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    background: none !important;
    color: #fff;
    display: block;
    width: 100%;
  }

  .footer>p {
    text-align: center;
  }

  .error-title {
    color: #fff;
    margin-top: -2em;
    margin-bottom: 0.5em;
    font-size: 3em;
    text-shadow: 2px 2px 2px #666;
    text-align: center;
  }

  .error-describe {
    text-align: center;
    color: #fff;
    font-size: 1.5em;
    text-shadow: 2px 2px 2px #666;
    margin-bottom: 2em;
  }

  .error-redirect {
    text-align: center;
    color: #fff;
  }

  .error-redirect>a {
    color: #fff;
    font-size: 1em;
    border: 1px solid #fff;
    padding: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-radius: 0.3em;
    font-style: normal;
  }

  .error-redirect>a:hover {
    background: rgba(101, 227, 227, 0.4);
    color: #fff;
  }

  @media  only screen and (max-width:768px) {
    .background {
      background-image: url("https://piccdn.freejishu.com/images/2016/08/29/1b0d6cd87a29b31badb0700577f1fc27.jpg");
    }
  }
</style>
<script>
export default {
  props: ['error'], // 你可以为错误页面指定自定义的布局
  head() {
    return {
      title: this.error.statusCode === 404 ? '页面不存在' : '未知错误'
    }
  }
}
</script>
