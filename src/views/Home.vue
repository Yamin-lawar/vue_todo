<template>
  <div id="app">    
    <AddTodo v-on:add-todo="storeTodo"/>
    <Todo v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todo from '../components/Todo.vue'
import AddTodo from '../components/AddTodo.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters(["todos","loader"]),
  components: {
    Todo,
    AddTodo
  },
  methods:{
    ...mapActions(['fetchTodos', 'storeTodos', 'deleteTodos']),
    deleteTodo(id){
      this.deleteTodos(id);
    },
    storeTodo(newObj){
      this.storeTodos(newObj.title)
      //this.todos = [...this.todos, newObj]
    }
   
  },
  created(){
      this.fetchTodos();
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 .btn{
         background-color: #000; /* Green */
  border: none;
  color: white;
  padding: 11px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 10px;
    }
 .tbox{
   height: 18px;
    width: 300px;
    padding: 9px;
      margin-right: 10px;

 }   
</style>
