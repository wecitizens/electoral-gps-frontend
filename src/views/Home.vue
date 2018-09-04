<template>
    <div class="home">
        <img alt="Vue logo" src="/img/logo.png">
        {{ questions }}
    </div>
</template>

<script>

  import {mapActions, mapState, mapGetters} from 'vuex'


  export default {
    name: 'home',
    components: {

    },
    created: () => {
      this.getQuestions()
    },
    methods: {
      ...mapActions(['getQuestions']),
    },
    computed: {
      ...mapGetters(['questions']),
    }
  }
</script>
