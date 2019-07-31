<template>
  <div class="login-avatar">
    <div class="inner">
      <template v-if="avatar.trim() !== ''">
        <img v-lazy="`${avatar.trim()}?&ts=${Date.now()}`" draggable="false">
      </template>
      <template v-else>
        <img :src="avatarDefault" draggable="false">
      </template>
    </div>
  </div>
</template>
<script>
export default {
  // components: loginAvatar,
  props: {
    avatar: {
      require: true,
      type: [String],
      default: ''
    }
  },
  data() {
    return {
      avatarDefault: 'data:image/png;base64,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'
    }
  }
}
</script>
