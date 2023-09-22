<template>
  <div class="articles center">
    <div class="articles-content">
      <div class="articles-info">
        <p class="articles-info__header">
          Articles & News
        </p>
        <p class="articles-info__text">
          It is a long established fact that a reader will be distracted by the of readable
          content of a page when lookings at its layouts the points of using.
        </p>
      </div>
      <div class="articles-content-cards">
        <ArticleComponent
          v-for="(article, idx) in articles"
          :key="idx"
          :article="article"
          :direction="direction" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleComponent from '@/components/blog/ArticleComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ArticlesComponent',
  data () {
    return {
      articles: [],
      direction: 'column'
    }
  },
  computed: {
    ...mapGetters(['getThreePosts'])
  },
  mounted () {
    this.articles = this.getThreePosts
  },
  components: { ArticleComponent }
}
</script>

<style scoped lang="scss">
.articles {

  &-info {
    margin-top: 96px;
    margin-bottom: 52px;
    max-width: 811px;

    &__header {
      color: #292F36;
      text-align: center;
      font-family: DM Serif Display, sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
      margin-bottom: 12px;
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

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-content-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 27px;

    &-badge {
      border-radius: 8px 8px 8px 0px;
      background: #FFF;
      position: absolute;
      left: 31px;
      bottom: 31px;
      padding: 4px 5px 8px 11px;

      &__text {
        color: #4D5053;
        font-family: Jost, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }
    }

    &-img {
      border-top-right-radius: 62px;
      border-top-left-radius: 62px;
      width: 100%;

      &-wrapper {
        position: relative;
        padding-bottom: 21px;
      }
    }

    &-wrapper {
      width: 30%;
      padding: 21px;
      border-radius: 62px;
      border: 1px solid #E7E7E7;
      box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);

      &:nth-child(2n) {
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        background: #F4F0EC;
        box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
      }

      &:nth-child(2n) .articles-content-cards-footer__button svg circle{
        fill: white ;
      }
    }

    &-text {
      padding-bottom: 30px;

      &__head {
        color: #292F36;
        font-family: DM Serif Display, sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
      }
    }

    &-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 31px;

      &__date {
        color: #4D5053;
        font-family: Jost, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
