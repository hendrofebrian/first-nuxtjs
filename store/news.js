import axios from "axios";
export const state = () => ({
    isLoading: true,
    data: []
})

export const actions = {
    async getNews({commit}) {
        const data = await axios.get(
          "https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-09&sortBy=publishedAt&apiKey=b757618966584c1ca5605a5498f9a179"
        );
        commit("setNews", data.data.articles);
        commit("setLoadState", false);
      }
}

export const getters = {
    data(state, getters){
        return state.data;
    },
    isLoading(state, getters){
        return state.isLoading;
    }
}

export const mutations = {
    setNews(state, data){
        state.data = data
    },
    setLoadState(state, data){
        state.isLoading = data
    }
}