<template>
  <div class="wrapper">
    <div class="tags-container">
      <div class="tag"
           :class="{'tag-clicked': tag === filterItem}"
           v-for="tag in tags"
           :key="tag.id"
           @click="clickTag(tag)"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagsComponent',
  props: ['tags'],
  data () {
    return {
      filterItem: ''
    }
  },
  methods: {
    clickTag (tag) {
      if (this.filterItem === tag) {
        this.filterItem = ''
        this.$emit('ClickTag', this.filterItem)
      } else {
        this.filterItem = tag
        this.$emit('ClickTag', this.filterItem)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
.tag {
  padding: 26px 66px;
  border-radius: 18px;
  color: #292F36;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  cursor: pointer;

  &:hover {
    background: #CDA274;
    color: #fff;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }

  &-clicked {
    background: #CDA274;
    color: #fff;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }
}

.tags-container {
  border-radius: 18px;
  border: 1px solid #CDA274;
  display: flex;
  flex-direction: row;
  width: fit-content;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-bottom: 30px;
}
</style>
