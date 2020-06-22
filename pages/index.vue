<template>
  <div class="container">
    <div style="display: block">
      <button @click="increment">{{counter}}</button>
    </div>


    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script>
  import { mapMutations,mapState } from 'vuex'
  export default {
    computed:mapState({
      counter:state=>state.counter,
      todos:state=>state.list
    }),
    data(){
      return{


      }
    },
    mounted(){
      console.log(this.counter)
    },
    methods: {
      addTodo(e) {
        this.$store.commit('add_list', e.target.value)
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'toggle_list',
        increment:'increment'
      })
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height:calc(100vh - 106px - 122px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
