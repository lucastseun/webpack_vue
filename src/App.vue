<template>
    <div>
        {{msg}}
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import rsaEncrypt from './common/rsa'
const httpOk = inject('httpOk')
const msg = ref('hello vue3')

const username = rsaEncrypt("Lily")
const password = rsaEncrypt("qjh@609")
httpOk({
    url: 'LOGIN',
    data: {
        username,
        password
    }
})
</script>

<style lang="less">
    
</style>