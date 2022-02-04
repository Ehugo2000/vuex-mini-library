import Vue from 'vue'
import Vuex from 'vuex'
import Books from '@/assets/books.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [...Books],
    readingList: []
  },
  mutations: {
    addToReadingList(state, book){
      state.readingList.push(book)
      console.log(state.readingList);
    }
  },
  actions: {
  },
  modules: {
  }
})
