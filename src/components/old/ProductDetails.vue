<template>
  <div class="product">
    <p class="product-name"> {{ this.product.name }}</p>
    <p class="product-price"> {{ formattedPrice }}</p>
    <div class="product-counter">
      <button class="product-button" :disabled="downDisabled" @click="changeCount('-')">-</button>
      <input class="product-input" :disabled="inputDisabled" v-model.number="counter" @blur="checkInput" type="number">
      <button class="product-button" :disabled="upDisabled" @click="changeCount('+')">+</button>
    </div>
    <h2>Сумма заказа:</h2>
    <h2>{{ totalSum }}</h2>
    <h3 class="red" v-if="counter > this.product.quantity">Максимально возможно заказать не более {{ this.product.quantity }} единиц товара</h3>
    <h3 class="red" v-else-if="counter <= 0">Минимальное количество товаров к заказу = 1</h3>
    <h3 class="green" v-if="productDifference >= this.product.quantity * 0.3">Товара достаточно</h3>
    <h3 class="yellow" v-else-if="productDifference < this.product.quantity * 0.3 && productDifference > 1">Товара мало</h3>
    <h3 class="orange" v-else-if="productDifference === 1">Последний экземпляр</h3>
    <h3 class="red" v-else-if="productDifference === 0">Товар распродан</h3>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data () {
    return {
      counter: 1,
      product: {
        name: 'Airpods Pro',
        price: 250,
        quantity: 15
      }
    }
  },
  methods: {
    changeCount (operation) {
      operation === '+' ? this.counter++ : this.counter--
    },
    checkInput () {
      if (!this.counter || this.counter <= 0) {
        this.counter = 1
      } else if (this.counter > this.product.quantity) {
        this.counter = this.product.quantity
      }
    }
  },
  computed: {
    formattedPrice () {
      return `$${this.product.price}`
    },
    inputDisabled () {
      return this.counter > this.product.quantity || this.counter < 1
    },
    upDisabled () {
      return this.counter >= this.product.quantity
    },
    downDisabled () {
      return this.counter <= 1
    },
    productDifference () {
      return (this.product.quantity - this.counter)
    },
    totalSum () {
      return `$${this.counter * this.product.price}`
    }
  }
}
</script>

<style scoped lang="scss">

.product {
  border: 1px solid #ccc;
  width: fit-content;
  max-width: 350px;
  min-width: 280px;
  align-items: center;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 15px;
  background-color: #ccc;

  &-name {
    font-size: 25px;
    font-weight: bold;
  }

  &-price {
    font-size: 20px;
  }

  &-button {
    min-width: 50px;
    min-height: 25px;
    font-size: 20px;
    font-weight: bold;
  }

  &-counter {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &-input {
    max-width: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
}

.red {
  color: darkred;
}
.yellow {
  color: yellow;
}
.green {
  color: darkgreen;
}
.orange {
  color: orangered;
}
</style>
