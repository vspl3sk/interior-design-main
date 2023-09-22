<template>
  <div class="wrapper center">
    <ArticleComponent
      :article="article"
      :direction="directionLast" />
<!--    {{ $store.state.testArticles[$route.params.id] }}-->
  </div>
</template>

<script>
import ArticleComponent from '@/components/blog/ArticleComponent.vue'

export default {
  name: 'TestRouterChild',
  components: { ArticleComponent },
  data () {
    return {
      directionLast: 'row',
      article: {}
    }
  },
  mounted () {
    this.article = this.$store.state.testArticles[this.$route.params.id - 1]
  }
}
</script>

<style scoped lang="scss">

</style>
