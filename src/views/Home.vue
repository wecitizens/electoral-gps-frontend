<template>
    <div>
        <main class="main text-white mt-5 clearfix">
            <h1>GPS<br>ELECTORAL</h1>
            <h2>{{ $t("home.title") }}</h2>
            <div class="infos">{{ $t("home.description", {"userCount": campaignTotalParticipants}) }}</div>

            <div class="cta-section">
                <div class="perso-left">
                    <img src="/img/perso-1.svg" alt="">
                </div>
                <router-link to="/municipality" tag="a" class="btn-start">
                    {{ $t("home.cta") }}
                </router-link>
                <div class="perso-right">
                    <img src="/img/perso-2.svg" alt="">
                </div>
            </div>
        </main>
        <footer class="footer container-fluid">
            <div class="row">
                <div class="col text-center">
                    <div class="mb-2">{{ $t("home.with_help_from") }}</div>
                    <img src="/img/partner-metro.png" height="20" class="ml-5 h-10" alt="">
                    <img src="/img/partner-sudpress.png" height="20" class="ml-5 h-10" alt="">
                    <img src="/img/partner-dh.png" height="20" class="ml-5 h-10" alt="">
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
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

    body, html {
        height: 100%;
    }

    .infos {
        font-family: IBMPlexSans-Italic;
        font-size: 14px;
        color: #000000;
        text-align: center;
    }

    .cta-section {
        background: #000000;
        margin-top: 200px;
        height: 140px;
        position: relative;
        padding-top: 20px;

        .perso-left {
            position: absolute;
            top: -100px;
            left: 50%;
            margin-left: -200px;
        }

        .btn-start {
            background: #EA3434;
            color: #ffffff;
            height: 110px;
            width: 110px;
            border: none;
            border-radius: 110px;
            text-align: center;
            text-transform: uppercase;
            margin: 0 auto !important;
            display: block;
            padding-top: 32px;
            font-weight: bold;

            &:hover {
                text-decoration: none;
                background: #F8E71C;
            }

            span {
                width: 100%;
                display: inline-block;
            }
        }

        .perso-right {
            position: absolute;
            top: -100px;
            right: 50%;
            margin-right: -200px;
        }
    }

    .footer {
        bottom: 0;
        color: #000;
        width: 100%;
        padding: 0.5em;
        margin: 0;
        text-align: center;
    }

    @media (min-width: 768px) {
        .footer {
            position: fixed;
        }
    }

    h1 {
        margin-top: 30px;
        text-align: center;
        font-size: 48px;
        color: #000000;
    }
</style>