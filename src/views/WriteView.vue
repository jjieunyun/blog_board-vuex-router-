<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
      <textarea v-model="memo" name="" id="" cols="30" rows="10">

      </textarea>
      <button @click="addMemoMu">완료</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memo : '',
    }
  },
  methods : {
    addMemo () {
      //완료버튼을 누르면 memo값을 board에 추가하는 일
      const id = this.$store.state.board.length
      this.$store.state.board.push({id: id , memo: this.memo})
    },
    addMemoMu () {
      this.$store.commit('addMemo',this.memo);
      this.$router.push('/');
    }
  }
}
</script>