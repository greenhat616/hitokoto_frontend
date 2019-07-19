export const state = () => ({
  current: []
})

export const mutations = {
  updateCurrent(state, h) {
    state.current = [h]
  },
  clearCurrent(state) {
    state.current = []
  }
}
