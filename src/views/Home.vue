<template>
    <div>
        <div class="bg"></div>
        <main class="main text-white mt-5">
            <h1>{{ $t("home.title") }}</h1>
            <router-link to="/municipality" tag="el-button" class="btn-start">{{ $t("home.cta") }}</router-link>
            <div class="infos mt-3">{{ $t("home.description", {"userCount": usersCount}) }}</div>
        </main>
        <footer class="footer container-fluid">
            <div class="row">
                <div class="col-6 text-left">
                    <div class="mb-2">{{ $t("home.powered_by") }}</div>
                    <img src="/img/logo-wecitizens.jpeg" height="50" class="h-10" alt="">
                </div>
                <div class="col-6 text-right">
                    <div class="mb-2">{{ $t("home.with_help_from") }}</div>
                    <img src="/img/partner-metro.png" height="50" class="h-10" alt="">
                    <img src="/img/partner-sudpress.png" height="50" class="ml-5 h-10" alt="">
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

  import {mapActions, mapGetters} from 'vuex';
  import Steps from '../components/Steps';

  export default {
    name: 'home',
    components: {
      Steps
    },
    created() {
      this.$store.dispatch('getQuestions');
    },
    methods: {
      ...mapActions(['getQuestions']),
    },
    computed: {
      ...mapGetters(['questions']),
    },
    data: () => {
      return {
        usersCount: 23122
      }
    }
  }
</script>

<style lang="scss">

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
        margin: 50px auto 50px;
        width: 200px;
        color: #FFF;

        &:hover {
            opacity: 0.8;
        }

        background: linear-gradient(206deg, #f0f50d, #f56b0d, #f5230d);
        background-size: 600% 600%;

        -webkit-animation: AnimationName 8s ease infinite;
        -moz-animation: AnimationName 8s ease infinite;
        animation: AnimationName 8s ease infinite;

        @-webkit-keyframes AnimationName {
            0% {
                background-position: 91% 0%
            }
            50% {
                background-position: 10% 100%
            }
            100% {
                background-position: 91% 0%
            }
        }
        @-moz-keyframes AnimationName {
            0% {
                background-position: 91% 0%
            }
            50% {
                background-position: 10% 100%
            }
            100% {
                background-position: 91% 0%
            }
        }
        @keyframes AnimationName {
            0% {
                background-position: 91% 0%
            }
            50% {
                background-position: 10% 100%
            }
            100% {
                background-position: 91% 0%
            }
        }
    }
</style>