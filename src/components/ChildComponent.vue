<template>
  <h1 class="is-size-3">Inject + Provide in Vuejs</h1>
  <div v-for="topic in topics" :key="topic.id" :title="topic.title" :description="topic.description">
    <h3>{{ topic.title }}</h3>
    <p>{{ topic.description }}</p>
    <br/>
  </div>

</template>

<script>
export default {
  inject: ['topics'],
}
</script>
