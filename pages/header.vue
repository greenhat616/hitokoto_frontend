<template>
  <Header>
    <div>
      <a-row>
        <a-col :span="4">gugu</a-col>
        <a-col :span="4">2</a-col>
        <a-col :span="4">3</a-col>
        <a-col :span="4">4</a-col>
      </a-row>
    </div>
  </Header>
</template>
<style>
@media only screen and (max-width:768px) {
  .background {
    background-image: url("https://piccdn.freejishu.com/images/2018/03/11/qf3cu.jpg");
  }
}
</style>
<script>

export default {
  data() {
    return {
      current: ['gu']
    }
  }
}
</script>
