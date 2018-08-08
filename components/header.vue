<template>
    <el-menu
            class="menu-header"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <router-link index="1" v-bind:to="localePath('/')" tag="el-menu-item">
            <i class="el-icon-menu"></i> {{ $t("GPS ELECTORAL") }}
        </router-link>
        <el-submenu index="2" class="nav-lang">
            <template slot="title">{{ $i18n.locale }}</template>
            <el-menu-item v-for="locale in $i18n.locales" :key="locale.code" v-on:click="$i18n.locale = locale.code">{{
                locale.name }}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss">
    .nav-lang{
        float: right !important;
        display: block;
        text-transform: uppercase;
    }
</style>
