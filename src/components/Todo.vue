<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItems v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)" />
        </div> 
    </div>   
</template>

<script>
import TodoItems from './TodoItems.vue'

export default {
    name: 'Todo',
    components: {
        TodoItems
    },
    props:["todos"]
}
</script>

<style scoped>

</style>