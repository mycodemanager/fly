<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
      <div v-if="product.onSale" class="sale-badge">ON SALE</div>
      <div class="product-actions">
        <a href="#" @click.prevent="addToCart(product)">
          <i class="fas fa-shopping-cart"></i>
        </a>
        <router-link :to="'/product/' + product.id">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">
        <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
      </h3>
      <div class="product-price">
        <span v-if="product.originalPrice !== product.currentPrice" class="original-price">Rs{{ formatPrice(product.originalPrice) }}</span>
        <span class="current-price">Rs{{ formatPrice(product.currentPrice) }}</span>
      </div>
      <button @click="addToCart(product)" class="add-to-cart-btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['addToCart']),
    formatPrice(price) {
      return price.toLocaleString();
    },
  }
}
</script>

<style scoped>
/* Additional styles specific to product card, if needed */
</style>
