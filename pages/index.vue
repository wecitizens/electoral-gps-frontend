<template>
    <div>
        <el-main>
            <steps active="0"></steps>
            <h1>{{ $t("Quels sont les candidats qui partagent mes convictions ?") }}</h1>
            <router-link v-bind:to="localePath('municipality')" tag="el-button" class="btn-start">Je commence</router-link>
            <div class="infos">Déjà {{ usersCount }} utilisateurs</div>
        </el-main>
    </div>
</template>

<script>
import Steps from '@/components/steps'

export default {
  components: {
    Steps
  },
  data () {
    return {
      usersCount: 20345
    }
  }
}
</script>

<style lang="scss" scoped>
    h1 {
        margin-top: 30px;
        text-align: center;
    }

    .btn-start {
        display: block;
        margin: 50px auto 50px;
        width: 200px;
    }

    .infos {
        margin-top: 100px;
        text-align: center;
    }
</style>
