<template>
  <div class="slider" @click="changeImg">
    <div class="img-wrapper">
      <img :class="{ visible: image.id === currentImg }" v-for="image in images" :key="image.id" :src=image.src alt="img">
    </div>
    <div class="pagination">
      <div class="pagination-element" @click="clickPagination(i)" v-for="i in images.length" :key="i.id" :class="{ black: i === currentImg }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  props: ['images'],
  data () {
    return {
      currentImg: 1,
      timerFlag: true,
      newTimer: 1
    }
  },
  mounted () {
    const maxIds = this.images.length
    const newTimer = setInterval(() => {
      if (this.timerFlag) {
        if (this.currentImg === maxIds) {
          this.currentImg = 1
        } else {
          this.currentImg++
        }
      } else {
        clearInterval(newTimer)
      }
    }, 5000)
  },
  methods: {
    changeImg () {
      // this.timerFlag = !this.timerFlag
      // clearInterval(this.newTimer)
    },
    clickPagination (id) {
      this.currentImg = id
      clearInterval(this.newTimer)
    }
  }
}
</script>

<style scoped lang="scss">
img {
  display: none;
  border-radius: 60px;
}

.visible {
  display: unset;
}

.black {
  background: #292F36;
  color: #E7E7E7;
}

.slider {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  &-element {
    cursor: pointer;
    border: 1px solid #292F36;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1em;
    width: 1em;
    border-radius: 50%;
  }
}

//.slider::after {
//  margin-left: -300px;
//  content:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='5' width='300' height='150'><path d='m 30 55 l -20 20 l 20 20' /><path d='m 270 55 l 20 20 l -20 20' /></svg>");
//}
</style>
