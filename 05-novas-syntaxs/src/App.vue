<template>
    <div>
        <h1>Minha lista de tarefas</h1>
        <input 
            type="text" 
            v-focus 
            v-model="state.currentTask"
            @keyup.enter="addTask"
        >
        <ul v-if="state.showList">
            <li
                v-for="(task, index) in state.tasks" 
                @dblclick="complete(task)"
                :key="`${task} - ${index}`"
                :class="{
                    'line-through': task.isDone
                }"
                class="task-cursor"
            >
                <button 
                    @click="remove(task)" 
                >&times;</button> ({{ index+1 }}) {{ task.name }}
            </li>
        </ul>
        <p v-else>A lista está escondida!</p>
        <button @click="showHideList()">
            <span v-if="showList">Esconder lista</span>
            <span v-else>Mostrar lista</span>
        </button>
    </div>
</template>

<script>
import { reactive } from 'vue'

//criar uma diretiva customizada
const focus = {
    inserted: (e) => {
        e.focus()
    }
}

export default {
    directives: {
        focus // focus: focus ou focar: focus
    },
    setup () {
        const state = reactive({
            currentTask: '',
            showList: false,
            tasks: [
                {id: Date.now(), name: 'fazer o curso', isDone: false},
                {id: Date.now(), name: 'Revisar o curso', isDone: false},
            ]
        })
        function remove (task) {
            console.log(task);
            state.tasks = state.tasks.filter(item => item.id != task.id);
        }
        function complete (task) {
            state.tasks = state.tasks.map(item => {
                if (item.id === task.id) {
                    return { ...item, isDone: !item.isDone };
                }
                return { ...item };
            })
        }
        function showHideList () {
            state.showList = !state.showList;
        }
        function addTask () {
            state.tasks.push({
                id: Date.now(),
                name: state.currentTask,
                isDone: false,
            })
            state.currentTask = '';
        }
        return { 
            state,
            remove,
            complete,
            showHideList,
            addTask
        }
    }
}
</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}
.task-cursor {
    cursor: pointer;
}
</style>