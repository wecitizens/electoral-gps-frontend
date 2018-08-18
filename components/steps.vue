<template>
    <el-steps :active="active" finish-status="success">
        <el-step :index="1" title="Commune"></el-step>
        <el-step :index="2" title="Questions"></el-step>
        <el-step :index="3" title="Stats"></el-step>
        <el-step :index="4" title="Résultats"></el-step>
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
