<template>
  <div class="hitokoto-home">
    <div class="inner">
      <div class="exhibition">
        <p class="hitokoto">
          忘记一个人，并非不再想起，而是偶尔想起，心中却不再有波澜。
        </p>
        <p class="from">
          <i>——</i> 九ちのセカィ
        </p>
      </div>
      <div class="action-box">
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
    }
  },
  beforeCreate: function () {
    this.$store.commit('menuSelected/updateCurrent', 'home')
  }
}
</script>

<style lang="less" scoped>
.hitokoto-home {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > .inner {
    position: relative;
    pointer-events: all;
  }

  .exhibition {
    padding: 10px 20px;

    & > * {
      font-family: "Microsoft JhengHei", "Source Han Serif SC", "Source Han Serif", 'source-han-serif-sc', '宋体', 'SimSun', '华文细黑', 'STXihei', serif;
    }

    .hitokoto {
      display: block;
      color: black;
      font-size: 2.3em;
      line-height: 2;
      font-weight: 600;
    }

    .from {
      display: block;
      text-align: right;
      font-size: 1.4em;
    }
  }
}
</style>
