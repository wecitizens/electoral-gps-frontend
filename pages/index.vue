<template lang="pug">
  section.container
    div
      h1.title Nuxt Boilerplate
      p.subtitle With ES6, ESLint, Element UI, Custom CSS, Axios, Pug, and cool store helpers
      el-row
        el-button.primary Brought
        el-button.secondary to
        el-button.success you
        el-button.info by
        el-button.warning Seraphin's
        el-button.alert Team
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $font-headings;
  /* font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */ */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-family: $font-main;
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
