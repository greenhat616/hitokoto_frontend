export const state = () => ({
  id: 0,
  player: {
    isAutoPlay: 0
  }
})

export const mutations = {
  setPlayerAutoPlay(state, h) {
    state.player.isAutoPlay = h
  }
}
