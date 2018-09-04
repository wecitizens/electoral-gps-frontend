<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"><img src="/img/logo.png" height="20px" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            GPS Electoral
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" to="/">{{$t('menu.item.welcome')}}</router-link>
                            <router-link class="dropdown-item" to="/results">{{$t('menu.item.go_to_results')}}
                            </router-link>
                            <router-link class="dropdown-item" to="/share">{{$t('menu.item.share_app')}}</router-link>
                            <router-link class="dropdown-item" to="/share">{{$t('menu.item.share_results')}}
                            </router-link>
                            <router-link class="dropdown-item" to="/questions">{{$t('menu.item.see_all_questions')}}
                            </router-link>
                            <router-link class="dropdown-item" to="/">{{$t('menu.item.start_from_scratch')}}
                            </router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item"
                               href="http://www.wecitizens.be/about">{{$t('menu.item.about_app')}}</a>
                            <a class="dropdown-item" href="http://www.wecitizens.be/about">{{$t('menu.item.about_association')}}</a>
                        </div>
                    </li>
                </ul>
            </div>

            <ul class="nav nav-lang">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarLang" data-toggle="dropdown" href="#" role="button"
                       aria-haspopup="true" aria-expanded="false">{{ $i18n.locale() }}</a>
                    <div class="dropdown-menu" aria-labelledby="navbarLang">
                        <a class="dropdown-item" v-for="(locale, key) in $i18n.locales()" :key="key" v-if="locale !== $i18n.locale()" @click="(locale) => $i18n.set(locale)">{{ locale }}</a>
                    </div>
                </li>
            </ul>
        </nav>

        {{ $i18n.locales() }}
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>

  export default {
    created() {
      console.log('Oki');
    }
  }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .text-white {
        color: #ffffff;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .nav-lang {
        text-transform: uppercase;
        a {
            color: #ffffff;
        }
    }
</style>
