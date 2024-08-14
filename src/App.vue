<template>
  <Layout>
    <template v-slot:header>
      En tête
    </template>
    <template v-slot:aside>
      Sidebar
    </template>
    <template v-slot:main>
      Main
    </template>
    <template v-slot:footer>
      Footer
    </template>
  </Layout>
  <p>Compteur : {{ count }}</p>
  <button @click="increment">Incrémenter</button>
  <div v-if="count >= 5">Bravo vous avez cliqué plus de 5 fois !!</div>
  <button @click="sortMovie">Réorganiser</button>
  <form @submit="addMovie">
    <input type="text" placeholder="Nouveau film"
      v-model="movieName"
    >
    <button>Ajouter</button>
  </form>
  <ul>
    <li v-for="movie in movies" :key="movie">
     {{ movie }} <button @click="deleteMovie(movie)">Supprimer</button>
    </li>
  </ul>
  <div>*************************************</div>
  <h1>ToDo List</h1>
  <p v-if="todos.length == 0">Aucune tâche jusqu'à maintenant !</p>
    <ul v-for="todo in sortTodos()" :key="todo.date">
      <li :class="{ 'completed': todo.completed }">{{ todo.title }}</li>
      <li :class="{ 'completed': todo.completed }">{{ todo.completed }}</li>
      <li :class="{ 'completed': todo.completed }">{{ todo.date }}</li>
      <li><button @click="setTodoDone(todo)">Marquer comme fait</button></li>
    </ul>
  <input type="checkbox" v-model="hideCompleted" >
  Masquer les tâches effectués
  <form @submit="addTodo">
    <input type="text" placeholder="Ajouter tâche" v-model="todoName">
    <button>Ajouter</button>
  </form>
  <hr>
  <Checkbox label="event child to parent" 
    @check="console.log('check')"
    @uncheck="console.log('uncheck')"
  />
</template>

<script setup>
  import {ref} from 'vue'
  import Checkbox from './Checkbox.vue'
  import Layout from './Layout.vue';
  const count = ref(0)
  const movieName = ref('')
  const todoName = ref('')
  const hideCompleted = ref(false)
  const todos = ref([])
  const increment = () => {
    count.value++
  }
  const movies = ref([
    'Matrix',
    'Lilo & Stitch',
    'Titanic'
  ])

  const deleteMovie = (movie) => {
    movies.value = movies.value.filter(m => m !== movie)
  }
  const sortMovie = () => {
    movies.value.sort((a, b) => a > b ? 1 : -1)
  }
  const addMovie = (e) => {
    e.preventDefault()
    movies.value.push(movieName.value)
    movieName.value = ''
  }
  const addTodo = (e) => {
    e.preventDefault()
    todos.value.push({
      title : todoName.value,
      completed: false,
      date: Date.now()
    })
    sortTodos()
    todoName.value = ''
  }
  const setTodoDone = (todo) => {
    todo.completed = true;
    sortTodos()
  }
  const sortTodos = () => {
    const sortedTodos = todos.value.toSorted((a, b) => a.completed > b.completed ? 1 : -1)
    if(hideCompleted.value === true){
      return sortedTodos.filter(t => t.completed == false)
    }
    return sortedTodos
  }
  const hideTodo = (todo) => {
    
  }
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>