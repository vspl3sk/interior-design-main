<template>
  <div class="wrapper">
    <div class="block-wrapper">
      <div class="block-left">
        <p class="block-left__header">404</p>
        <p class="block-left__text">We are sorry, but the page
          you requested was not found</p>
        <button @click="goToHome" class="block-left__button">
          Back To Home
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="block-right">
        <img class="block-right__img" src="img/page-404.png">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',
  methods: {
    goToHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped lang="scss">
.block-wrapper {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding-left: calc(50% - 600px);
}
.block-left {
  max-width: 569px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  &__header {
    color: #CDA274;
    font-family: DM Serif Display,sans-serif;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 312.5px */
    text-align: left;
  }
  &__text {
    color: #292F36;
    font-family: DM Serif Display,sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 52.5px */
    letter-spacing: 0.35px;
    text-align: left;
  }
  &__button {
    display: flex;
    padding: 26px 54px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
    color: #FFF;
    text-align: center;
    font-family: Jost,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }
}
.block-right {
  &__img {
    border-radius: 0 0 0 353px;
    width: 100%;
  }
}
</style>
