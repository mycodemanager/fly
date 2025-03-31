<template>
  <div class="shop">
    <div class="shop-header py-4">
      <div class="container">
        <h1 class="mb-4">Shop</h1>

        <div class="shop-toolbar d-flex flex-wrap justify-content-between align-items-center">
          <div class="results-count">
            Showing 1-{{ products.length }} of {{ products.length }} results
          </div>
        </div>
      </div>
    </div>

    <div class="shop-content py-4">
      <div class="container">
        <div class="row">
          <div
            v-for="product in products"
            :key="product.id"
            class="col-md-4 col-sm-6 mb-4">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/product/ProductCard.vue'

export default {
  name: 'Shop',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters({
      products: 'allProducts'
    })
  },
  methods: {
    ...mapActions(['loadProducts'])
  },
  created() {
    this.loadProducts()
  }
}
</script>

<style scoped>
.shop-header {
  background-color: var(--secondary-color);
}

.shop-toolbar {
  padding: 15px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.pagination .page-link {
  color: var(--primary-color);
}

.pagination .page-item.active .page-link {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}
</style>
