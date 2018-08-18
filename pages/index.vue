<template>
  <div class="bg-moving">
    <el-main>
      <h1>{{ $t("home.title") }}</h1>
      <router-link v-bind:to="localePath('municipality')" tag="el-button" class="btn-start">{{ $t("home.cta") }}</router-link>
      <div class="infos">{{ $t("home.description", {"userCount": usersCount}) }}</div>
    </el-main>
  </div>
</template>

<script>
/**
 * Homepage
 *
 * @see https://docs.google.com/presentation/d/1HHyLIrG4UWJDeHzn8R9A4pw__goKRRoVMrGq8ptkvk8/edit#slide=id.g3d7e4c1f85_0_0
 */
import Steps from '@/components/steps'

export default {
  components: {
    Steps
  },
  data () {
    return {
      usersCount: 20345 // @todo
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    margin-top: 30px;
    text-align: center;
    font-size: 48px;
  }

  .btn-start {
    display: block;
    margin: 50px auto 50px;
    width: 200px;
    color: #FFF;

    &:hover{
      opacity: 0.8;
    }

    background: linear-gradient(206deg, #f0f50d, #f56b0d, #f5230d);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 8s ease infinite;
    -moz-animation: AnimationName 8s ease infinite;
    animation: AnimationName 8s ease infinite;

    @-webkit-keyframes AnimationName {
      0%{background-position:91% 0%}
      50%{background-position:10% 100%}
      100%{background-position:91% 0%}
    }
    @-moz-keyframes AnimationName {
      0%{background-position:91% 0%}
      50%{background-position:10% 100%}
      100%{background-position:91% 0%}
    }
    @keyframes AnimationName {
      0%{background-position:91% 0%}
      50%{background-position:10% 100%}
      100%{background-position:91% 0%}
    }
  }

  .infos {
    margin-top: -30px;
    text-align: center;
  }
</style>
