<template>
    <div>
        <div class="bg"></div>
        <main class="main text-white mt-5">
            <h1 class="mb-5">{{ $t("home.title") }}</h1>
            <router-link style="margin: auto !important;" to="/municipality" tag="el-button" class="btn-start m-5">{{ $t("home.cta") }}</router-link>
            <div class="infos mt-3">{{ $t("home.description", {"userCount": campaignTotalParticipants}) }}</div>
        </main>
        <footer class="footer container-fluid">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <div class="mb-2">{{ $t("home.with_help_from") }}</div>
                    <img src="/img/partner-metro.png" height="30" class="h-10" alt="">
                    <img src="/img/partner-sudpress.png" height="30" class="ml-5 h-10" alt="">
                </div>
            </div>
            <div class="row" style="background: #444;margin:10px -15px -10px;padding: 0.5em;">
                <div class="col">
                    {{ $t("home.powered_by") }} WeCitizens, ©2018
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

  import {mapActions, mapGetters} from 'vuex';
  import Steps from '../components/Steps';
  import Aos from 'aos';

  export default {
    name: 'home',
    components: {
      Steps
    },
    created() {
      this.$store.dispatch('getQuestions');
      Aos.init();
    },
    methods: {
      ...mapActions(['getQuestions']),
    },
    computed: {
      ...mapGetters([
          'questions', 
          'currentQuestionKey', 
          'campaignTotalParticipants']),
    },
    data: () => {
      return {
        usersCount: 23122
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

    body, html {
        height: 100%;
    }

    .bg {
        background-image: url("/img/bg-home.jpg");
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }

    .footer {
        bottom: 0;
        color: #fff;
        position: fixed;
        width: 100%;
        padding: 0.5em;
        margin: 0;
    }

    h1 {
        margin-top: 30px;
        text-align: center;
        font-size: 48px;
    }

    .btn-start {
        display: block;
        margin: 50px auto 50px !important;
        width: 200px;
        color: #FFF;

        &:hover {
            opacity: 0.8;
            color: #FFFFFF;
        }

        background: linear-gradient(209deg, #2e1c1a, #781518, #ad1e24, #de7229, #e1b121, #63b642, #1d3e81, #492771, #9f1c84, #34332e);
        background-size: 2000% 2000%;

        -webkit-animation: wecitizens 39s ease infinite;
        -moz-animation: wecitizens 39s ease infinite;
        -o-animation: wecitizens 39s ease infinite;
        animation: wecitizens 39s ease infinite;

        @-webkit-keyframes wecitizens {
            0%{background-position:93% 0%}
            50%{background-position:0% 100%}
            100%{background-position:93% 0%}
        }
        @-moz-keyframes wecitizens {
            0%{background-position:93% 0%}
            50%{background-position:0% 100%}
            100%{background-position:93% 0%}
        }
        @-o-keyframes wecitizens {
            0%{background-position:93% 0%}
            50%{background-position:0% 100%}
            100%{background-position:93% 0%}
        }
        @keyframes wecitizens {
            0%{background-position:93% 0%}
            50%{background-position:0% 100%}
            100%{background-position:93% 0%}
        }
    }
</style>