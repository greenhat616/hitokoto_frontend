<template>
  <div class="hitokoto-home">
    <div class="inner">
      <div :class="exhibitionClass">
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
      exhibitionClass: ['exhibition']
    }
  },
  mounted: function () {
    process.nextTick(() => this.exhibitionClass.unshift('hitokoto-active'))
  },
  head() {
    return {
      title: 'Hitokoto'
    }
  }
}
</script>

<style lang="less">
.hitokoto-home {
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  flex: 1;

  & > .inner {
    position: relative;
    pointer-events: all;
  }

  .exhibition {
    padding: 10px 20px;
    height: 0;
    transition: 0.8s;
    visibility: 0;
    opacity: 0;
    margin-bottom: -3em;
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
  .hitokoto-active {
    opacity: 1;
    visibility: 1;
    height: auto;
    margin-bottom: 0;
  }
}
</style>
