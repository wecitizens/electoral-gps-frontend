<template>
    <el-container class="bg bg-cover text-white">
        <el-main>
            <h1>{{ $t("home.title") }}</h1>
            <router-link to="/municipality" tag="el-button" class="btn-start">{{ $t("home.cta") }}</router-link>
            <div class="infos mt-3">{{ $t("home.description", {"userCount": usersCount}) }}</div>
        </el-main>
        <el-footer>
            <div class="row">
                <div class="col-6">
                    <div class="mb-2">{{ $t("home.powered_by") }}</div>
                    <img src="/img/logo-wecitizens.jpeg" height="50" class="h-10" alt="">
                </div>
                <div class="col-6">
                    <div class="mb-2">{{ $t("home.with_help_from") }}</div>
                    <img src="/img/partner-metro.png" height="50" class="h-10" alt="">
                    <img src="/img/partner-sudpress.png" height="50" class="ml-5 h-10" alt="">
                </div>
            </div>
        </el-footer>
    </el-container>
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

    html {
        background: url("/img/bg-home.jpg") no-repeat center center fixed !important;
        background-size: cover;
    }

    .bg {
        background-image: url("/img/bg-home.jpg");
        height: 100vh;
    }

    .footer {
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