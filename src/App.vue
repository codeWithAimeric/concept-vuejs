<template>
  <div v-if="state === 'error'">
    <p>
      Impossible de charger le quiz
    </p>
  </div>
  <div :aria-busy="state === 'loading'">
    <Quiz :quiz="quiz"  v-if="state === 'ready'" />
  </div>
</template>

<script setup>
  import {onMounted, ref} from 'vue'
  import Quiz from './components/Quiz.vue';

  const quiz = ref(null)
  const state = ref('loading')

  onMounted(() => {
    fetch('/quiz.json')
    .then(r => {
      if(r.ok){
        return r.json()
      }
      throw new Error('Impossible de récupérer le json')
    })
    .then(data => {
      quiz.value = data
      state.value = 'ready'
    })
    .catch(e => {
      state.value = 'Impossible de charger le quiz'
      state.value = 'error'
    })
  })
</script>

<style>

</style>