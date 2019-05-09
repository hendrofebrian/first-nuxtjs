export const state = () => ({
    isLoading: true,
    data: []
})

export const actions = {

}

export const mutations = {
    setNews(state, data){
        state.data = data
    },
    setLoadState(state, data){
        state.isLoading = data
    }
}