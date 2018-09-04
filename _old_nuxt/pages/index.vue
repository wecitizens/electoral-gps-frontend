<template>
  <el-container class="bg bg-cover text-white">
    <el-main class="flex flex-col items-center">
      <h1>{{ $t("home.title") }}</h1>
      <router-link v-bind:to="localePath('municipality')" tag="el-button" class="btn-start">{{ $t("home.cta") }}</router-link>
      <div class="infos">{{ $t("home.description", {"userCount": usersCount}) }}</div>
    </el-main>
    <el-footer class="flex footer w-full mb-5">
      <div class="flex-1 flex-auto">
        <div class="mb-2">{{ $t("home.powered_by") }}</div>
        <img src="~/static/images/logo-wecitizens.jpeg" class="h-10" alt="">
      </div>
      <div class="flex-1 text-right">
        <div class="mb-2">{{ $t("home.with_help_from") }}</div>
        <img src="~/static/images/partner-metro.png" class="h-10" alt="">
        <img src="~/static/images/partner-sudpress.png" class="ml-5 h-10" alt="">
      </div>
    </el-footer>
  </el-container>
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
      usersCount: 20345 // @todo check logic behind that
    }
  }
}
</script>

<style lang="scss" scoped>

  html {
    background: url("/static/images/bg-home.jpg") no-repeat center center fixed !important;
    background-size: cover;
  }

  .bg{
    background-image: url("~/static/images/bg-home.jpg");
    height: 100vh;
  }

  .footer{
    bottom: 0;
    position: fixed;
    width: 100%;
  }

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
