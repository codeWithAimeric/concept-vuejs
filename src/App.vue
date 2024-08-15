<template>
  <input type="text" v-model="page.title">
  Temps écoulé : {{ time }}
  <button @click="reset">Reset</button>
</template>

<script setup>
  import {ref, watchEffect} from 'vue'
  import { useTimer } from './composable/useTimer'

  const {time, reset} = useTimer()
  const page = ref({
    title: ''
  })
  watchEffect(() => {
    document.title = page.value.title
  })
</script>

<style>

</style>