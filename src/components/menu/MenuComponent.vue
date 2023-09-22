<template>
  <div class="menu" :class="{ column: isColumn, row: !isColumn }">
    <div v-if="this.header" class="menu-header">
      <p class="menu-header__text">
        {{ this.header }}
      </p>
    </div>
    <div v-for="(element, index) in menu" :key="index" class="menu__element">
      <router-link :to="element.href" class="menu__text">{{ element.name }} </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: ['menu', 'direction', 'header'],
  computed: {
    isColumn () {
      return this.direction === 'column'
    }
  }
}
</script>

<style scoped lang="scss">
.column {
  flex-direction: column;
  align-items: flex-start;
}

.row {
  flex-direction: row;
  align-items: center;
}

.menu {
  display: flex;
  gap: 30px;

  &__element {
  }
  &__text {
    color: #292F36;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 25px */
  }

  &-header {
    display: flex;
    gap: 30px;

    &__text {
      color: #292F36;
      font-family: DM Serif Display, sans-serif;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
    }
  }
}
</style>
