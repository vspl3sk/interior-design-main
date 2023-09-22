<template>
  <div class="wrapper">
    <TopBannerComponent :imgBanner="imgBanner" :textLabel="textLabel" :crumbs="crumbs" />
    <div class="posts center">
      <div class="posts-content">
        <div class="posts-content-wrapper">
          <div class="posts-content-header">
            Latest Post
          </div>
          <ArticleComponent
            :article="lastPost"
            :direction="directionLast" />
        </div>
        <div class="posts-content-articles">
          <div class="posts-content-articles-header">
            <p class="posts-content-articles-header__text">
              Articles & News
            </p>
          </div>
          <div class="articles-content-cards">
            <ArticleComponent
              v-for="(article, idx) in curArray"
              :key="idx"
              :article="article"
              :direction="directionArticle" />
          </div>
        </div>
        <div class="pagination">
          <div class="pagination-element"
               @click="clickPagination(i)"
               v-for="i in getPaginationLen + 1"
               :key="i.id"
               :class="{ black: i === currentPage, arrow: i === getPaginationLen + 1 }"
          >
            {{ `${i === getPaginationLen + 1 ? '' : i}` }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleComponent from '@/components/blog/ArticleComponent.vue'
import { mapGetters } from 'vuex'
import TopBannerComponent from '@/components/banner/TopBannerComponent.vue'

export default {
  name: 'BlogComponent',
  components: { TopBannerComponent, ArticleComponent },
  data () {
    return {
      articles: [],
      directionLast: 'row',
      directionArticle: 'column',
      currentPage: 1,
      curArray: [],
      lastPost: {},
      imgBanner: 'img/articles-news.png',
      textLabel: 'Articles & News',
      crumbs: 'Home / Blog',
      tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
    }
  },

  computed: {
    ...mapGetters(['getAllArticles', 'getLastPost']),
    getPaginationLen () {
      return Math.ceil(this.articles.length / 6)
    }
  },

  methods: {
    clickPagination (start) {
      if (start < this.getPaginationLen + 1) {
        this.currentPage = start
        this.curArray = this.articles.slice(start * 6 - 6, start * 6)
      } else if (start === this.getPaginationLen + 1) {
        if (this.getPaginationLen > this.currentPage) {
          this.currentPage++
          this.curArray = this.articles.slice(this.currentPage * 6 - 6, this.currentPage * 6)
        }
      }
    }
  },
  mounted () {
    this.articles = this.getAllArticles
    this.lastPost = this.getLastPost
    this.curArray = this.articles.slice(this.currentPage * 6 - 6, this.currentPage * 6)
  }
}
</script>

<style scoped lang="scss">
.posts {

  &-content {
    margin-top: 50px;

    &-wrapper {
      margin-bottom: 150px;
    }

    &-articles-header {
      margin-bottom: 30px;

      &__text {
        text-align: left;
        color: #292F36;
        font-family: DM Serif Display, sans-serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
      }
    }

    &-header {
      text-align: left;
      color: #292F36;
      font-family: DM Serif Display, sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
      margin-bottom: 27px;
    }

    &-last-post {
      display: flex;
      padding: 22px;
      flex-direction: row;
      align-items: center;
      gap: 65px;

      border-radius: 62px;
      border: 1px solid #E7E7E7;
      box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);

      &-img {
        width: 100%;
        border-radius: 62px;

        &-wrapper {
          width: 50%;

        }
      }

      &-info {
        width: 50%;
      }

      &-text {
        margin-right: 65px;
        text-align: left;

        &__head {
          color: #292F36;
          font-family: DM Serif Display, sans-serif;
          font-size: 25px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%; /* 31.25px */
          letter-spacing: 0.5px;
          margin-bottom: 22px;
        }

        &__main {
          color: #4D5053;
          font-family: Jost, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 33px */
          letter-spacing: 0.22px;
          margin-bottom: 41px;
        }

      }

      &-footer {
        display: flex;
        justify-content: space-between;

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

        &__button {

        }
      }
    }
  }
}
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
      text-align: left;

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
.pagination {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 25px 0;
  &-element {
    cursor: pointer;
    border: 1px solid #CDA274;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    width: 3em;
    border-radius: 50%;
  }
}
.black {
  background: #F4F0EC;
  border-color: #F4F0EC;
}
.arrow {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='53' height='52' viewBox='0 0 53 52' fill='none'%3e%3cpath d='M23.5571 32L29.5 25.3143L23.5571 18.6286' stroke='%23292F36' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
  background-size:100% 100%;
}
</style>
