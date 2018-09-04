<template>
  <div class="results">
    <h1>Results</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'results',
  components: {
    HelloWorld
  }
}
</script>
