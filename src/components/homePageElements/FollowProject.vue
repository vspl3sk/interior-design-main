<template>
  <div class="projects center">
    <div class="projects-content">
      <div class="projects-info">
        <p class="projects-info__header">
          Follow Our Projects
        </p>
        <p class="projects-info__text">
          It is a long established fact that a reader will
          be distracted by the of readable content of page  lookings at its layouts  points.
        </p>
      </div>
      <div class="projects-cards">
        <ProjectComponent v-for="(project, idx) in projects" :key="project.id" :project="project" :location="location" :idx="idx" style="{border-radius: 60px}" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectComponent from '@/components/projects/ProjectComponent.vue'

export default {
  name: 'FollowProject',
  components: { ProjectComponent },
  data () {
    return {
      projects: [],
      location: 'home'
    }
  },
  computed: {
    ...mapGetters(['getFourProjects'])
  },
  mounted () {
    this.projects = this.getFourProjects
  }
}
</script>

<style scoped lang="scss">
.projects {

  &-content {

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 93px;
  }

  &-info {
    margin-top: 53px;
    max-width: 737px;

    &__header {
      color: #292F36;
      text-align: center;
      font-family: DM Serif Display, sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }

    &__text {
      color: #4D5053;
      text-align: center;
      font-family: Jost, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }

  &-cards {
    //display: flex;
    //justify-content: space-between;
    //flex-wrap: wrap;
    //flex-direction: row;
    //gap: 30px;
    width: 100%;
    columns: 2;
  }

  &-card {
    display: flex;
    flex-direction: column;
    width: 48%;
    max-height: 450px;

    &-image {
      height: 100%;
      width: 100%;
    }

    &-description {
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
    }

    &-description__name {
      color: #292F36;
      font-family: DM Serif Display, sans-serif;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
      text-align: left;
    }

    &-description__crumb {
      color: #4D5053;
      font-family: Jost, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      text-align: left;
    }

    &__radius {

      &_top-left {
        border-top-left-radius: 80px;
      }

      &_top-right {
        border-top-right-radius: 80px;
      }

      &_bottom-left {
        border-bottom-left-radius: 80px;
      }

      &_bottom-right {
        border-bottom-right-radius: 80px;
      }
    }
  }
}
</style>
