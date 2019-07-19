<script>
import MD from 'mobile-detect'
export default {
  data() {
    return {
      audio: [],
      isActived: false,
      auto: false
    }
  },
  watch: {
    audio: function (v) {
      if (v.length > 0 && !this.isActived && !window.player) {
        window.player = new window.APlayer({
          lrcType: 1,
          fixed: true,
          autoplay: this.auto,
          preload: 'metadata',
          audio: this.audio
        })
        this.isActived = false
      } else if (window.player && !this.isActived) {
        this.isActived = true
      } else { // 只是简单匹配， 后期要检测内容
        window.player.list.clear()
        window.player.list.add(this.audio)
      }
    }
  },
  render() {
    return (
      <div></div>
    )
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
        this.auto = false
        this.initAplayer()
          .catch(function (err) {
            window.console.error(err)
            _this.notificationBox('激活音乐播放器失败', `错误信息: ${err.message}`, 'error')
          })
      } else {
        this.auto = true
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
