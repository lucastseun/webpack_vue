<template>
    <div>
        {{msg}}
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const httpOk = inject('httpOk')
const msg = ref('hello vue3')

httpOk({
    url: 'GET_USER_INFO',
    data: {
        id: 'F1001'
    }
}).then(res => {
    console.log(res)
})
</script>

<style lang="less">
    
</style>