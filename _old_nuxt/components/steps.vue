<template>
    <el-steps :active="active" finish-status="success">
        <el-step :index="1" v-bind:title="$t('menu.item.municipality')"></el-step>
        <el-step :index="2" v-bind:title="$t('menu.item.questions')"></el-step>
        <el-step :index="3" v-bind:title="$t('menu.item.stats')"></el-step>
        <el-step :index="4" v-bind:title="$t('menu.item.results')"></el-step>
    </el-steps>
</template>

<script>
export default {
  name: 'steps',
  props: {
    active: Number
  }
}
</script>

<style scoped>

</style>
