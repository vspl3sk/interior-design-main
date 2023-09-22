<template>
  <div class="wrapper">
    <TopBannerComponent :imgBanner="imgBanner" />
    <div class="blogs-list center">
      <div class="blogs-list-content">
        <div class="blogs-container">
          <ArticleComponent :article="article" :direction="direction" :details="details"/>
        </div>
        <div class="tags-container">
          <div class="tag" :class="{'tag-clicked': tag === filterItem}" v-for="tag in getTags" :key="tag.id" @click="clickTag(tag)">{{ tag }}</div>
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
  name: 'BlogDetailsComponent',
  components: {
    TopBannerComponent,
    ArticleComponent
  },
  data () {
    return {
      article: {},
      filterItem: '',
      filterId: '',
      showDetails: false,
      direction: 'column',
      details: true,
      imgBanner: 'img/banner-blog.jpg',
      textLabel: ''
    }
  },
  computed: {
    ...mapGetters(['getArticleById']),
    getTags () {
      // const tags = []
      // this.article.forEach((el) => {
      //   tags.push(...el.tags)
      // })
      // return new Set(tags)
      return this.article.tags
    }

    // filteredItems () {
    //   return this.blogs.filter((blog) => {
    //     if (this.filterItem === '') {
    //       return this.blogs
    //     } else {
    //       return blog.tags.includes(this.filterItem)
    //     }
    //   })
    // },

    // filteredBlog () {
    //   const blog = this.blogs.filter((blog) => {
    //     return blog.id === Number(this.filterId)
    //   })
    //
    //   return blog[0]
    // }
  },

  methods: {
    clickTag (tag) {
      if (this.filterItem === tag) {
        this.filterItem = ''
      } else {
        this.filterItem = tag
      }
    }
    //
    // showAll (id) {
    //   this.filterId === id ? this.filterId = '' : this.filterId = id
    //   this.showDetails = !this.showDetails
    // }
  },
  mounted () {
    this.article = this.getArticleById(this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">
.blogs-list {
  margin-top: 100px;

  &-content {
    padding: 25px;
    display: flex;
    gap: 52px;
    justify-content: space-between;
  }
}

.blogs-container {
  width: 67%;
}

.tag {
  padding: 9px 30px;
  border-radius: 10px;
  background: #F4F0EC;
  color: #292F36;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  cursor: pointer;

  &:hover {
    background: #292F36;
    color: #fff;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }

  &-clicked {
    background: #292F36;
    color: #fff;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }
}

.tags-container {
  width: 33%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
}
</style>
