export const state = () => ({
  id: 0
})

export const mutations = {
  setPlaylist(state, h) {
    state.id = h
  }
}
