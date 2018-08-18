<template>
  <div>
    <header-bar></header-bar>
    <nuxt/>
  </div>
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
