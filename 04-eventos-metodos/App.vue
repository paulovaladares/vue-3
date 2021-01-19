<template>
    <div>
        <h1>Minha lista de tarefas</h1>
        <input 
            type="text" 
            v-focus 
            v-model="currentTask"
            @keyup.enter="addTask"
        >
        <ul v-if="showList">
            <li
                v-for="(task, index) in tasks" 
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
    data: () => ({
        currentTask: '',
        showList: false,
        tasks: [
            {id: 1, name: 'fazer o curso', isDone: false},
            {id: 2, name: 'Revisar o curso', isDone: false},
        ]
    }),
    methods: {
        remove (task) {
            console.log(task);
            this.tasks = this.tasks.filter(item => item.id != task.id);
        },
        complete (task) {
            this.tasks = this.tasks.map(item => {
                if (item.id === task.id) {
                    return { ...item, isDone: !item.isDone };
                }
                return { ...item };
            })
        },
        showHideList () {
            this.showList = !this.showList;
        },
        addTask () {
            this.tasks.push({
                id: Math.random() * 100,
                name: this.currentTask,
                isDone: false,
            })
            this.currentTask = '';
        },
    },
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