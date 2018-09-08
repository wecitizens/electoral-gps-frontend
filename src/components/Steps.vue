<template>
  <el-steps class="steps mt-20" align-center :active="active" finish-status="success">
    <el-step :index="1">
      <template slot="title">
        <router-link to="/municipality">{{ $t('menu.item.municipality') }}</router-link>
      </template>
    </el-step>
    <el-step :index="2">
      <template slot="title">
        <router-link to="/survey">{{ $t('menu.item.questions') }}</router-link>
      </template>
    </el-step>
    <el-step :index="3">
      <template slot="title">
        <router-link to="/stats">{{ $t('menu.item.stats') }}</router-link>
      </template>
    </el-step>
    <el-step :index="4">
      <template slot="title">
        <router-link to="/results">{{ $t('menu.item.results') }}</router-link>
      </template>
    </el-step>
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
  .steps{
    margin-top: 30px;
    padding: 0 1em;
  }
</style>
