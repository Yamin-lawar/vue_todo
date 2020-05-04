<template>
    <div class="todoItem" v-bind:class="{'isComplete':todo.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click="$emit('del-todo', todo.id)" class="del">X</button>
        </p>
    </div>    
</template>

<script>
export default {
    name: "TodoItems",
    props: ["todo"],
    methods: {
        markComplete(){
            this.todo.completed = !this.todo.completed 
            console.log("this is mark complete function")
        }
    }
}
</script>

<style scoped>
    .isComplete{
        text-decoration: line-through;
    }
    .todoItem{
        background: #cfdfdf;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
        width: 50%;
        margin-left: 25%;
    }
    .del{
        margin-left: 0px;
    }
</style>