<template>
    <div>
        <h1>{{ name }}, Hi there!</h1>
        <input type="text" v-model="name">
    </div>
</template>
<script>
export default {
    data: () => ({
        name:`Paulo`
    })
}
</script>
<style lang="">
    
</style>