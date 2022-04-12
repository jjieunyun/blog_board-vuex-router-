import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board : [
      {id : 1, memo : "1st 작성된 내용입니다"},
      {id : 2, memo : "2nd 작성된 내용입니다"},
      {id : 3, memo : "3rd 작성된 내용입니다"},
      {id : 4, memo : "4th 작성된 내용입니다"},
      {id : 5, memo : "5th 작성된 내용입니다"},
      {id : 6, memo : "6th 작성된 내용입니다"},
      {id : 7, memo : "7th 작성된 내용입니다"},
    ]
  },
  getters: {
    getMemo(state) {
      return state.this.$store.$state.board[this.$route.params.id-1].memo
    }
  },
  mutations: {
    addMemo (state, memo) {
      //완료버튼을 누르면 memo값을 board에 추가하는 일
      //memo값은 store에서 추가할 수없기 때문에 받아와야한다
      const id = state.board.length +1;
      state.board.push({id: id , memo: memo})
    },
  },
  actions: {
  },
  modules: {
  }
})
