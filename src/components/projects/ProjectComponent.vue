<template>
  <div class="wrapper">
    <router-link :to="{ name: 'project', params: { id: project.id }}">
    <div class="container">
      <div
        class="imgwrapper"
        :class="this.radius"
        :style="{ background: `url(${project.imgProject}) no-repeat`,
         height: `${this.imgHeight}px`,
          width: `${this.imgWidth}px` }"
      />
      <div class="footer">
        <div class="info">
          <p class="info__header">
            {{ project.header }}
          </p>
          <p class="info__crumbs">
            {{ project.crumbs }}
          </p>
        </div>
        <div class="project-footer__button">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'ProjectComponent',
  props: ['project', 'location', 'idx'],
  data () {
    return {
      imgHeight: 0,
      imgWidth: 0,
      radius: ''
    }
  },
  mounted () {
    const img = new Image()
    img.src = this.project.imgProject
    this.imgHeight = img.height
    this.imgWidth = img.width
    if (this.location === 'home') {
      switch (this.idx + 1) {
        case 1:
          this.radius = 'top__right'
          break
        case 2:
          this.radius = 'bottom__right'
          break
        case 3:
          this.radius = 'top__left'
          break
        case 4:
          this.radius = 'bottom__left'
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.img {
  width: 100%;
  opacity: 0;
}
.container {
  &:hover .imgwrapper {
    opacity: 1;
  }
}
.imgwrapper {
  background-size: 100% 100%;
  opacity: 0.5;
}
.top__left {
  border-top-left-radius: 65px;
}
.top__right {
  border-top-right-radius: 65px;
}
.bottom__left {
  border-bottom-left-radius: 65px;
}
.bottom__right {
  border-bottom-right-radius: 65px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 25px;
  break-inside: avoid-column;
  cursor: pointer;
}
.info__header {
  color: #292F36;
  font-family: DM Serif Display,sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
  text-align: left;
}
.info__crumbs {
  color: #4D5053;
  font-family: Jost,sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  text-align: left;
}
.footer {
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
}
</style>
