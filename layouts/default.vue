<template>
    <el-container>
        <el-header>
            <HeaderBar />
        </el-header>
        <el-main>
            <nuxt/>
        </el-main>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/headerBar'
import steps from '@/components/steps'

export default {
  components: {
    HeaderBar,
    steps
  }
}
</script>
