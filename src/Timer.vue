<template>
    <div>
        Temps : {{ time }}
    </div>
</template>

<script setup>
import {onMounted, ref, onUnmounted} from 'vue'

const time = ref(0)

let timer
onMounted(() => {
    timer = setInterval(() => {
        time.value++
    }, 1000)
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>