<template>
  <div>
    <p>Test paragraph</p>
    <p v-for="elem in getArray" :key="elem.id">{{ elem }}</p>
    <p>{{ getArrayLen }}</p>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/notfound">Not found</router-link>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TestStateComponent',
  computed: {
    ...mapGetters(['getTestState', 'getTestStateLength']),
    getArray () {
      return this.getTestState
    },
    getArrayLen () {
      return this.getTestStateLength
    }
  }
}
</script>

<style scoped lang="scss">

</style>
