<template>
    <div>
        <h1>Life Cycle Hooks</h1>
    </div>
</template>
<script>
/* 
export default {
    mounted() {
        console.log(`Foi montado`);
    },
}
 */
import { onMounted } from 'vue';
export default {
    setup () {
        onMounted(() => {
            console.log(`Foi montado composition API`);
        });
    }
}
</script>