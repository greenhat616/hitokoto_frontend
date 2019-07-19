<template>
  <div></div>
</template>
<script>
import MD from 'mobile-detect'
export default {
  data() {
    return {
      audio: [],
      isActived: false,
      isMobile: false
    }
  },
  computed: {
    getPlayerAutoPlaySet: function () {
      return this.$store.state.localStorage.player.isAutoPlay
    }
  },
  watch: {
    audio: function (v) {
      if (v.length > 0 && !this.isActived && !window.player) {
        const audios = this.audio
        window.activePlayer = function (auto) {
          window.player = new window.APlayer({
            lrcType: 1,
            fixed: true,
            autoplay: auto,
            preload: 'metadata',
            audio: audios
          })
        }
        if (!this.isMobile) {
          if (this.getPlayerAutoPlaySet === 0) {
            const _this = this
            this.$confirm({
              title: '需要启用播放器的自动播放嘛？',
              content: '如果你没有切换歌单的话， 我们将默认为你播放我们的每月推荐歌单。',
              cancelText: '拒绝',
              okText: '好的',
              onOk: function () {
                _this.$store.commit('localStorage/setPlayerAutoPlay', 1)
                window.activePlayer(true)
              },
              onCancel: function () {
                _this.$store.commit('localStorage/setPlayerAutoPlay', 2)
                window.activePlayer(false)
              }
            })
          } else {
            window.activePlayer(this.getPlayerAutoPlaySet === 1)
          }
        }
        this.isActived = true
      } else if (window.player && !this.isActived) {
        this.isActived = true
      } else { // 只是简单匹配， 后期要检测内容
        window.player.list.clear()
        window.player.list.add(this.audio)
      }
    }
  },
  mounted: function () {
    this.initPlayer()
  },
  methods: {
    async fetch163Playlist(playlistId) {
      const data = await this.$axios.$get(`https://v1.hitokoto.cn/nm/playlist/${playlistId}?nocache=true`)
      const ids = []
      data.playlist.tracks.map(function (value) {
        ids.push(value.id)
      })
      return this.fetch163Songs(ids)
    },
    async fetch163Songs(IDS) {
      let ids
      switch (typeof IDS) {
        case 'number':
          ids = [IDS]
          break
        case 'object':
          if (!Array.isArray(IDS)) {
            throw new Error('Please enter array or number')
          }
          ids = IDS
          break
        default:
          throw new Error('Please enter array or number')
      }
      const data = await this.$axios.$get(`https://v1.hitokoto.cn/nm/summary/${ids.join(',')}?lyric=true&common=true&quick=true`)
      const songs = []
      data.songs.map(function (song) {
        songs.push({
          name: song.name,
          url: song.url,
          artist: song.artists.join('/'),
          album: song.album.name,
          pic: song.album.picture,
          lrc: song.lyric
        })
      })
      return songs
    },
    initPlayer() {
      const _this = this
      const m = new MD(window.navigator.userAgent)
      if (m.tablet() || m.phone()) { // is mobile device
        this.isMobile = true
        this.initAplayer()
          .catch(function (err) {
            window.console.error(err)
            _this.notificationBox('激活音乐播放器失败', `错误信息: ${err.message}`, 'error')
          })
      } else {
        this.isMobile = false
        this.initAplayer()
          .catch(function (err) {
            window.console.error(err)
            _this.notificationBox('激活音乐播放器失败', `错误信息: ${err.message}`, 'error')
          })
      }
    },
    async initAplayer() {
      const data = await this.fetch163Playlist(this.$store.state.playlist.id)
      const songs = []
      data.map(function (song) {
        songs.push({
          name: song.name,
          artist: song.artist,
          cover: song.pic,
          url: song.url,
          lrc: song.lrc.base
        })
      })
      this.audio = songs
    },
    notificationBox(message, descp, type = 'info') {
      this.$notification[type]({
        message: message,
        description: descp
      })
    }
  }
}
</script>
