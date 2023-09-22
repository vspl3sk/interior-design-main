import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import OurProjects from '@/views/OurProjects.vue'
import BlogPage from '@/views/BlogPage.vue'
import BlogComponent from '@/components/blog/BlogComponent.vue'
import BlogDetailsComponent from '@/components/blog/BlogDetailsComponent.vue'
import ProjectsListComponent from '@/components/projects/ProjectsListComponent.vue'
import ProjectDetails from '@/components/projects/ProjectDetails.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/blog',
    component: BlogPage,
    children: [
      {
        path: '',
        name: 'blogs',
        component: BlogComponent
      },
      {
        path: 'blog/:id',
        name: 'blog',
        component: BlogDetailsComponent
      }
    ]
  },
  {
    path: '/project',
    component: OurProjects,
    children: [
      {
        path: '',
        name: 'projects',
        component: ProjectsListComponent
      },
      {
        path: 'project/:id',
        name: 'project',
        component: ProjectDetails
      }
    ]
  },
  {
    path: '*',
    name: 'notfound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
