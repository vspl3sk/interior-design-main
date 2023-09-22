<template>
  <div class="banner">
    <div class="banner-content">
      <div class="banner-content-img-wrapper">
        <img class="banner-content-img" :src=imgBanner alt="" srcset="">
        <div v-if="textLabel" class="banner-content-label">
          <div class="banner-content-label__header">{{ textLabel }}</div>
          <div class="banner-content-label__crumbs">{{ crumbs }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBannerComponent',
  props: ['imgBanner', 'textLabel', 'crumbs']
}
</script>

<style scoped lang="scss">
.banner {
  margin-bottom: 100px;

  &-content {
    position: relative;

    &-img {
      width: 100%;
      height: 100%;

      &-wrapper {
        display: flex;
        justify-content: center;
      }
    }

    &-label {
      position: absolute;
      bottom: 0;
      border-radius: 37px 37px 0px 0px;
      background: #FFF;
      display: flex;
      padding: 41px 78px;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      &__header {
        color: #292F36;
        font-family: DM Serif Display, sans-serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 62.5px */
      }

      &__crumbs {
        color: #4D5053;
        font-family: Jost, sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
      }
    }
  }
}
</style>
