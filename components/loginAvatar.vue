<template>
  <div class="login-avatar">
    <img v-lazy="avatar">
  </div>
</template>
<script>
export default {
  // components: loginAvatar,
  props: {
    avatar: {
      require: true,
      type: [String],
      default: 'https://static.a632079.me/assets/images/avatar.png'
    }
  },
  data() {
    return {
      avatarDefault: 'https://static.a632079.me/assets/images/avatar.png'
    }
  }
}
</script>
