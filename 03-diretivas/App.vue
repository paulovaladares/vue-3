<template>
    <div>
        <h1>Minha lista de tarefas</h1>
        <input type="text" v-focus>
        <ul v-if="showList">
            <li
                v-for="(task, index) in tasks" :key="`${task} - ${index}`"
            >
                ({{ index+1 }}) {{ task.name }}
            </li>
        </ul>
        <p v-else>A lista está escondida!</p>
        <button @click="() => showList = !showList">
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
        showList: false,
        tasks: [
            {name: 'fazer o curso', isDone: false},
            {name: 'Revisar o curso', isDone: false},
        ]
    })
}
</script>