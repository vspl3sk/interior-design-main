<template>
  <div class="top center">
    <div class="top-content">
      <div class="top-info">
        <div class="top-info__head">Let Your Home Be Unique</div>
        <div class="top-info__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</div>
        <div class="top-info__buttons">
          <router-link to="/project">
          <button class="button">
            <span class="button__text">
                Get Started
            </span>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
          </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopComponent'
}
</script>

<style scoped lang="scss">
.top {
  &-content {
    margin-top: 53px;
    background: url(../img/top-background.jpg), lightgray 50% / cover no-repeat;
    border-radius: 60px;
    padding-top: 208px;
    padding-bottom: 208px;
  }

  &-info {

    max-width: 434px;
    margin-left: 52px;

    &__head {
      color: #292F36;
      font-family: DM Serif Display, sans-serif;
      font-size: 65px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 81.25px */
    }

    &__text {
      margin-top: 18px;
      color: #4D5053;
      font-family: Jost, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }

    &__buttons {
      display: flex;
      margin-top: 21px;
    }
  }
}

.button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 26px 48px;
  border-radius: 18px;
  background: #292F36;
  box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);

  &__text {
    color: #FFF;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }
}
</style>
