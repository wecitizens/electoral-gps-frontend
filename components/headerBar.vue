<template>
  <el-menu default-active="1"
           class="menu-header"
           mode="horizontal"
           text-color="#fff"
           background-color="#2E2E2E"
           active-text-color="#ffd04b"
  >
    <el-submenu index="/" vue-router tag="el-menu-item">
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
      <el-menu-item index="1-1">Sauter aux résultats</el-menu-item>
      <el-menu-item index="1-2">Partager le {{ $t("app.title") }}</el-menu-item>
      <el-menu-item index="1-3">Partager mes résultats</el-menu-item>
      <el-menu-item index="1-4">Voir toutes les questions</el-menu-item>
      <el-menu-item index="1-5">Recommencer à zéro</el-menu-item>
      <hr>
      <el-menu-item index="1-6">A propos du GPS éléctoral</el-menu-item>
      <el-menu-item index="1-7">A propos de WeCitizens</el-menu-item>
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
