/* eslint-disable */

<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'BlogPage',
  data () {
    return {
      imgBanner: 'img/our-projects.png',
      textLabel: 'Articles & News',
      crumbs: 'Home / Blog',
      tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
    }
  }
}
</script>

<style scoped lang="scss">

</style>
