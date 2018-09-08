<template>
  <el-menu default-active="1"
           class="menu-header text-white"
           mode="horizontal"
           text-color="#fff"
           router
           background-color="#2E2E2E"
           active-text-color="#ffd04b"
  >
    <el-submenu index="/" vue-router tag="el-menu-item" class="text-white">
      <template slot="title">
        <div class="header-menu" v-on:mouseover="mouseOver" v-on:mouseout="mouseOver">
          <button class="hamburger hamburger--collapse" type="button" v-bind:class="{ 'is-active': active }">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          </button>
          {{ $t("app.title") }}
        </div>
      </template>

      <el-menu-item-group>
      <el-menu-item index="/">{{$t('menu.item.welcome')}}</el-menu-item>
      <el-menu-item index="/results">{{$t('menu.item.go_to_results')}}</el-menu-item>
      <el-menu-item index="/share">{{$t('menu.item.share_app')}}</el-menu-item>
      <el-menu-item index="/share">{{$t('menu.item.share_results')}}</el-menu-item>
      <el-menu-item index="/questions">{{$t('menu.item.see_all_questions')}}</el-menu-item>
      <el-menu-item index="/">{{$t('menu.item.start_from_scratch')}}</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group class="text-white">
        <el-menu-item><a href="http://www.wecitizens.be/about">{{$t('menu.item.about_app')}}</a></el-menu-item>
        <el-menu-item><a href="http://www.wecitizens.be/about">{{$t('menu.item.about_association')}}</a></el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2" class="nav-lang">
      <template slot="title">{{ $i18n.locale }}</template>
      <el-menu-item v-for="(locale) in $i18n.locales" :index="locale.code" :key="locale.code"
                    v-on:click="$i18n.locale = locale.code">{{
        locale.name }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'headerBar',
  data () {
    return {
      active: false
    }
  },
  methods: {
    mouseOver: function (index) {
      console.log('Data', index)
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss">
  .nav-lang {
    float: right !important;
    display: block;
    text-transform: uppercase;
  }
  .hamburger {
    padding: 0;
    margin-top: -10px;
  }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    background-color: #ffffff !important;
  }
  .header-menu{
    font-size: 28px;
  }
</style>
