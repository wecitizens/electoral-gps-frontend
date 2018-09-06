<template>
    <nav class="header-nav navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#/"><img src="/img/logo.png" height="20px" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ $t("app.title") }}
                    </a>

                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/">{{$t('menu.item.welcome')}}</router-link>
                        <router-link class="dropdown-item" to="/results">{{$t('menu.item.go_to_results')}}
                        </router-link>
                        <a class="dropdown-item" @click="handleShare">{{$t('menu.item.share_app',
                            {'app_title' :
                            $t('app.title')}) }}
                        </a>
                        <router-link class="dropdown-item" to="/questions">{{$t('menu.item.see_all_questions')}}
                        </router-link>
                        <router-link class="dropdown-item" to="/">{{$t('menu.item.start_from_scratch')}}
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" @click="() => showDonate = true">{{$t('menu.item.donate',
                            {app_title:$t('app.title')})}}</a>
                        <a class="dropdown-item"
                           :href="$t('about.gps_link')">{{$t('menu.item.about_app',
                            {app_title:$t('app.title')})}}</a>
                        <a class="dropdown-item"
                           :href="$t('about.wecitizens_link')">{{$t('menu.item.about_association',
                            {association_name:$t('association.name')})}}</a>
                    </div>
                </li>
            </ul>
        </div>

        <ul class="nav nav-lang">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarLang" data-toggle="dropdown" href="#" role="button"
                   aria-haspopup="true" aria-expanded="false">{{ $i18n.locale() }}</a>
                <div class="dropdown-menu" aria-labelledby="navbarLang">
                    <a class="dropdown-item" v-for="(locale, key) in $i18n.locales()" :key="key"
                       v-if="locale !== $i18n.locale()" @click="() => setLocale(locale)">{{ locale }}</a>
                </div>
            </li>
        </ul>
        <el-dialog
                :visible.sync="showShare"
                width="30%">
            <h1>{{ $t("share.title") }}</h1>
            <br>
            <div class="addthis_toolbox addthis_inline_share_toolbox"></div>
        </el-dialog>
        <el-dialog
                :visible.sync="showDonate"
                width="30%"
        >
            <h3>{{ $t("donate.title") }}</h3>
            <p>{{ $t("donate.content") }}</p>
            <p>{{ $t("donate.account") }}</p>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="C7836NSGCC2X6">
                <input type="image" src="https://www.paypalobjects.com/fr_FR/BE/i/btn/btn_donate_SM.gif" border="0"
                       name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne">
                <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">
            </form>

        </el-dialog>
    </nav>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'header-nav',
    methods: {
      setLocale: (local) => {
        console.log('-> Switch lang', local);
        Vue.i18n.set(local);
      },
      handleShare(){
        //this.showShare = true;
        window.$('#share-modal').modal('show');
      }
    },
    data: () => {
      return {
        'showShare': false,
        'showDonate': false
      }
    }
  }
</script>

<style lang="scss" scoped>
    .nav-lang {
        a{
            &:hover{
                color: #FFFFFF;
            }
        }
    }
</style>
