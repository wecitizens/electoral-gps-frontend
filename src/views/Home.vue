<template>
    <div class="home">
        <steps></steps>

        {{ questions }}
    </div>
</template>

<script>

  import {mapActions, mapGetters} from 'vuex';
  import Steps from '@/components/Steps';

  export default {
    name: 'home',
    components: {
      Steps
    },
    created(){
      this.$store.dispatch('getQuestions');
    },
    methods: {
      ...mapActions(['getQuestions']),
    },
    computed: {
      ...mapGetters(['questions']),
    }
  }
</script>
