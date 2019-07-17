<template>
  <div class="login-avatar">
    <img :src="avatar" />
  </div>
</template>
<script>
export default {
  // components: loginAvatar,
  props: {
    'avatar': [String]
  }
}
</script>
