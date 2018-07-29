<template>
<div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.body" />
    </div>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      post: async function () {
        return app.$content('/')
          .query()
          .getAll()[0]
      }
    }
  }
}
</script>
