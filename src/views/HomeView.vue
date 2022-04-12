<template>
  <div class="home">

    <a 
      :key="board.id"
      v-for="board in $store.state.board">
      <router-link :to="`/board/${board.id}`">
        {{board.id}}  |  
      </router-link>
    </a>
    
    <div
    :key="board.id"
    v-for="board in $store.state.board">
      <p>{{board.id}}</p>
      <p>{{board.memo}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>
