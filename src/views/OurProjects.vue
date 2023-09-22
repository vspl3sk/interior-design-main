<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'OurProjects',
  data () {
    return {
      imgBanner: 'img/our-projects.png',
      textLabel: 'Our Projects',
      crumbs: 'Home / Project',
      tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
    }
  }
}
</script>

<style scoped lang="scss">

</style>
