<template>
  <div class="header center">
    <div class="header-content">
      <LogoComponent :logo="logo"/>
      <MenuComponent :menu="menu" :direction='direction' />
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/menu/MenuComponent.vue'
import LogoComponent from '@/components/header/LogoComponent.vue'
export default {
  name: 'HeaderComponent',
  methods: {
    chooseElement (nameMenu) {
      // this.activeElem = name
      this.$emit('MenuElement', nameMenu)
      console.log(`header ${nameMenu}`)
    }
  },
  data () {
    return {
      direction: 'row',
      menu: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Project',
          href: '/project'
        },
        {
          name: 'Blog',
          href: '/blog'
        }
      ],
      logo: {
        header: 'Interno',
        href: '#',
        img: 'data:image/jpeg;base64,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'
      }
    }
  },
  components: {
    LogoComponent,
    MenuComponent
  }
}
</script>

<style scoped lang="scss">

.header {
  margin: 53px 0;
  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

</style>
