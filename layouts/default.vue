<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-main>
            <nuxt/>
        </el-main>
    </el-container>
</template>

<script>
import Header from '@/components/header'
import steps from '@/components/steps'

export default {
  components: {
    Header,
    steps
  }
}
</script>
