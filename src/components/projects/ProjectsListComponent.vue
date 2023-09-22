<template>
  <div class='wrapper'>
    <div class="top">
      <TopBannerComponent :imgBanner="imgBanner" :textLabel="textLabel" :crumbs="crumbs" />
      <TagsComponent @ClickTag="clickTag($event)" :tags="tags" class="center"/>
    </div>
    <div class="content center">
      <ProjectComponent v-for="project in curArray" :key="project.id" :project="project"/>
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
</template>

<script>
import ProjectComponent from '@/components/projects/ProjectComponent.vue'
import { mapGetters } from 'vuex'
import TagsComponent from '@/components/tags/TagsComponent.vue'
import TopBannerComponent from '@/components/banner/TopBannerComponent.vue'

export default {
  name: 'ProjectsListComponent',
  components: { TopBannerComponent, TagsComponent, ProjectComponent },
  data () {
    return {
      projects: [],
      curArray: [],
      currentPage: 1,
      imgBanner: 'img/our-projects.png',
      textLabel: 'Our Projects',
      crumbs: 'Home / Project',
      tags: []
    }
  },
  computed: {
    ...mapGetters(['getProjects', 'getProjectByTag', 'getProjectsTags']),
    getPaginationLen () {
      return Math.ceil(this.projects.length / 6)
    }
  },
  methods: {
    clickTag (tag) {
      this.projects = this.getProjectByTag(tag)
      this.clickPagination(1)
    },
    clickPagination (start) {
      if (start < this.getPaginationLen + 1) {
        this.currentPage = start
        this.curArray = this.projects.slice(start * 6 - 6, start * 6)
      } else if (start === this.getPaginationLen + 1) {
        if (this.getPaginationLen > this.currentPage) {
          this.currentPage++
          this.curArray = this.projects.slice(this.currentPage * 6 - 6, this.currentPage * 6)
        }
      }
    }
  },
  mounted () {
    this.tags = this.getProjectsTags
    this.projects = this.getProjects
    this.curArray = this.projects.slice(this.currentPage * 6 - 6, this.currentPage * 6)
  }
}
</script>

<style scoped lang="scss">
.content {
  columns: 2;
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
