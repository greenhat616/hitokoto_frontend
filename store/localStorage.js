export const state = () => ({
  id: 0,
  player: {
    isAutoPlay: 0,
    expire: 24 * 30 // 30 days
  },
  verificationTS: 0
})

export const mutations = {
  setPlayerAutoPlay(state, h) {
    state.player.isAutoPlay = h
  },
  commitVerificationTS(state) {
    state.verificationTS = Date.now()
  }
}
