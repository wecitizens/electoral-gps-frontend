<template>
    <el-steps :active="active" finish-status="success">
        <el-step title="Commune"></el-step>
        <el-step title="Questions"></el-step>
        <el-step title="Stats"></el-step>
        <el-step title="Résultats"></el-step>
    </el-steps>
</template>

<script>
export default {
  name: 'steps',
  props: [
    'active'
  ]
}
</script>

<style scoped>

</style>
