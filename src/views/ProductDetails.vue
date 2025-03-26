<template>
  <div class="product-details py-5" v-if="product">
    <div class="container">
      <div class="row">
        <!-- Product Images -->
        <div class="col-md-6 mb-4">
          <div class="product-image-main text-center">
            <img :src="product.image" :alt="product.name" class="img-fluid">
          </div>
        </div>

        <!-- Product Info -->
        <div class="col-md-6">
          <h1 class="product-title mb-3">{{ product.name }}</h1>

          <div class="product-price mb-3">
            <span v-if="product.originalPrice !== product.currentPrice" class="original-price">Rs{{ formatPrice(product.originalPrice) }}</span>
            <span class="current-price">Rs{{ formatPrice(product.currentPrice) }}</span>
          </div>

          <div class="product-description mb-4">
            <p>{{ product.description }}</p>
          </div>

          <div class="product-actions">
            <div class="quantity mb-3">
              <div class="input-group" style="width: 130px;">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary" type="button" @click="decreaseQuantity">-</button>
                </div>
                <input type="text" class="form-control text-center" v-model="quantity">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="increaseQuantity">+</button>
                </div>
              </div>
              <button @click="addToCartWithQuantity" style="height: 60px;margin-top: 10px;" class="btn btn-primary btn-lg mb-3">Add to cart</button>
            </div>

            <div class="product-meta">
              <p><strong>Category:</strong> Drones</p>
              <p><strong>Tags:</strong> DJI, Drone, Technology</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Tabs -->
      <div class="product-tabs mt-5">
        <ul class="nav nav-tabs" id="productTabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab">Description</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="specifications-tab" data-toggle="tab" href="#specifications" role="tab">Specifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab">Reviews</a>
          </li>
        </ul>

        <div class="tab-content p-4 border border-top-0" id="productTabsContent">
          <div class="tab-pane fade show active" id="description" role="tabpanel">
            <p>{{ product.description }}</p>
            <p>This high-performance drone offers exceptional flight capabilities and advanced camera features to capture stunning aerial footage.</p>
          </div>

          <div class="tab-pane fade" id="specifications" role="tabpanel">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Weight</th>
                  <td>570g</td>
                </tr>
                <tr>
                  <th>Dimensions</th>
                  <td>180 × 97 × 84 mm</td>
                </tr>
                <tr>
                  <th>Max Flight Time</th>
                  <td>34 minutes</td>
                </tr>
                <tr>
                  <th>Max Speed</th>
                  <td>68.4 kph</td>
                </tr>
                <tr>
                  <th>Camera</th>
                  <td>1/2" CMOS, 48MP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="tab-pane fade" id="reviews" role="tabpanel">
            <p>No reviews yet.</p>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="related-products mt-5">
        <h2 class="section-title mb-4">Related Products</h2>

        <div class="row">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="col-md-3 col-sm-6 mb-4">
            <ProductCard :product="relatedProduct" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container py-5 text-center">
    <p>Loading product details...</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ProductCard from '@/components/product/ProductCard.vue'

export default {
  name: 'ProductDetails',
  components: {
    ProductCard
  },
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    ...mapGetters(['getProductById', 'allProducts']),
    product() {
      return this.getProductById(this.$route.params.id)
    },
    relatedProducts() {
      // Simple logic to get related products (excluding current product)
      return this.allProducts
        .filter(p => p.id !== this.product.id)
        .slice(0, 4)
    }
  },
  methods: {
    ...mapMutations(['addToCart']),
    ...mapActions(['loadProducts']),
    formatPrice(price) {
      return price.toLocaleString();
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCartWithQuantity() {
      for (let i = 0; i < this.quantity; i++) {
        this.addToCart(this.product);
      }
    }
  },
  created() {
    this.loadProducts()
  }
}
</script>

<style scoped>
.product-title {
  font-size: 28px;
  font-weight: 700;
}

.product-price {
  display: flex;
  align-items: center;
}

.original-price {
  color: var(--light-gray);
  text-decoration: line-through;
  margin-right: 10px;
  font-size: 20px;
}

.current-price {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 24px;
}

.product-meta {
  margin-left: 30px;
}

.product-image-main {
  border: 1px solid var(--border-color);
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.nav-tabs .nav-link {
  color: var(--primary-color);
}

.nav-tabs .nav-link.active {
  font-weight: 600;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color);
}
</style>
