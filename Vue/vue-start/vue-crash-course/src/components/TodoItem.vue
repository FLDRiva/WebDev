<template>
    <li>
       <span :class="{done: todo.completed}">
            <input type="checkbox" 
                v-on:change="todo.completed = !todo.completed">
            <strong>{{ index + 1 }}</strong>
            {{ todo.title }}
       </span>

       <!-- Сообщаем родительскому эллементу, что что-то произошло, через функцию $emit('произвольное название события', передаем нужные данные) -->
       <button class="rm" 
                @click="$emit('remove-todo', todo.id)"
        >&times;</button> 
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number,
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;        
    }

    .rm {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    input {
        margin-right: 2rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>