<template>
  <div class="wrapper">
    <TopBannerComponent :imgBanner="imgBanner" />
    <div class="project-info-wrapper center">
      <div class="project-info">
        <div class="project-info__header">
          <p>
            {{ this.project.header + ' # ' + this.project.id }}
          </p>
        </div>
        <div class="project-info__text">
          <p>
            {{ this.project.text }}
          </p>
        </div>
      </div>
    </div>
    <slider-component :images="images" />
  </div>
</template>

<script>
import SliderComponent from '@/components/slider/SliderComponent.vue'
import TopBannerComponent from '@/components/banner/TopBannerComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectDetails',
  data () {
    return {
      imgBanner: 'img/project-details-top-banner.png',
      project: {},
      images: []
    }
  },
  computed: {
    ...mapGetters(['getProjectById'])
  },
  created () {
    this.project = this.getProjectById(this.$route.params.id)
    this.images = this.project.images
  },
  components: { TopBannerComponent, SliderComponent }
}
</script>

<style scoped lang="scss">
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.project-info {
  &-wrapper {
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }
  &__header {
    text-align: left;
    max-width: 658px;
    color: #292F36;
    font-family: DM Serif Display,sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__text {
    text-align: left;
    max-width: 658px;
    color: #4D5053;
    font-family: Jost,sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>
