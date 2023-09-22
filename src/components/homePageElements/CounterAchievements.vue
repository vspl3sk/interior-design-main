<template>
  <div class="counter center">
    <div class="counter-content">
      <div class="counter-card">
        <p class="counter-card__head">12</p>
        <p class="counter-card__text">Years Of Experiance</p>
      </div>
      <div class="counter-card">
        <p class="counter-card__head">85</p>
        <p class="counter-card__text">Success Project</p>
      </div>
      <div class="counter-card">
        <p class="counter-card__head">15</p>
        <p class="counter-card__text">Active Project</p>
      </div>
      <div class="counter-card">
        <p class="counter-card__head">95</p>
        <p class="counter-card__text">Happy Customers</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterAchievements'
}
</script>

<style scoped lang="scss">
.counter {
  background-color: #F4F0EC;

  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 151px 65px;
  }

  &-card {

    width: 25%;
    position: relative;

    &:not(:last-child)::before {
      position: absolute;
      content: url("../img/Line.jpg");
      top: 4px;
      right: 0;
    }

    &__head {
      color: #CDA274;
      font-family: DM Serif Display, sans-serif;
      font-size: 85px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 106.25px */
      letter-spacing: 1.7px;
      text-align: center;
    }

    &__text {
      color: #4D5053;
      font-family: Jost, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      text-align: center;
    }
  }
}
</style>
