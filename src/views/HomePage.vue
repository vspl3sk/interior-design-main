/* eslint-disable */

<template>
  <div class="wrapper">
    <TopComponent />
    <FollowProject />
    <CounterAchievements />
    <Articles />
  </div>
</template>

<script>
import TopComponent from '@/components/banner/TopComponent.vue'
import FollowProject from '@/components/homePageElements/FollowProject.vue'
import CounterAchievements from '@/components/homePageElements/CounterAchievements.vue'
import Articles from '@/components/homePageElements/ArticlesComponent.vue'

export default {
  name: 'HomePage',
  components: {
    Articles,
    CounterAchievements,
    FollowProject,
    TopComponent
  },
  data () {
    return {
      imgBanner: 'img/banner-blog.jpg'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
