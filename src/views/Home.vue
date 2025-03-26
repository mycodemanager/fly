<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 hero-content">
            <h1>Sky Bound</h1>
            <p>Experience the sky like never before with cutting-edge drone technology!</p>
            <router-link to="/shop" class="hero-btn">Buy Now</router-link>
          </div>
          <div class="col-md-6 text-center">
            <img src="@/assets/img/drone-banner.png" alt="Drone" class="img-fluid hero-img">
          </div>
          <div class="hero-text text-center col-12 mt-4">
            <p class="text-white">be ready for a new experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-6 mb-4 mb-md-0">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-shipping-fast fa-2x text-primary"></i>
              </div>
              <h5 class="feature-title">Free Shipping</h5>
              <p class="feature-text">For all orders over Rs.200000</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mb-4 mb-md-0">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-percent fa-2x text-primary"></i>
              </div>
              <h5 class="feature-title">Daily Promotions</h5>
              <p class="feature-text">Discount up to 70%</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mb-4 mb-md-0">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-undo fa-2x text-primary"></i>
              </div>
              <h5 class="feature-title">Free returns</h5>
              <p class="feature-text">Return for up to 7 days</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4 mb-md-0">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-lock fa-2x text-primary"></i>
              </div>
              <h5 class="feature-title">Secure payments</h5>
              <p class="feature-text">Security guarantee</p>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-gift fa-2x text-primary"></i>
              </div>
              <h5 class="feature-title">Gifts for members</h5>
              <p class="feature-text">Bonuses for members</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommendation Section -->
    <section class="recommendation py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="section-title">
              <h6 class="text-uppercase small">Our recommendation</h6>
              <h2>New Arrival</h2>
              <p>Military Drone</p>
              <router-link to="/shop" class="btn btn-primary">Buy now</router-link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="section-title">
              <h2>Drone Vision</h2>
              <p>Elevate your perspective with precision and power!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Rated Products -->
    <section class="top-rated py-5">
      <div class="container">
        <div class="section-title text-center">
          <h2>Top rated products</h2>
          <p>Best choice</p>
        </div>

        <div class="row">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="col-md-4 col-sm-6">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>

    <!-- Banner Section -->
    <section class="banner py-5" style="background-color: #f5f5f5;">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="section-title">
              <h2>Feel the Sound</h2>
              <p>Category products</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div
                v-for="product in newArrivals.slice(0, 2)"
                :key="product.id"
                class="col-md-6 mb-4">
                <div class="card h-100">
                  <img :src="product.image" class="card-img-top" :alt="product.name">
                  <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">Rs{{ formatPrice(product.currentPrice) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Arrivals Section -->
    <section class="new-arrivals py-5">
      <div class="container">
        <div class="section-title text-center">
          <h2>Our newest products</h2>
          <p>Best choice</p>
        </div>

        <div class="row">
          <div
            v-for="product in newArrivals"
            :key="product.id"
            class="col-md-4 col-sm-6 mb-4">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <section class="why-us py-5" style="background-color: #f8f8f8;">
      <div class="container">
        <div class="text-center mb-5">
          <h6 class="text-muted">Why Us?</h6>
          <h2>Get Exciting <span class="text-primary">Products</span></h2>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <h5 class="card-title">Guarantee of originality</h5>
                <p class="card-text">100% Original Guarantee - authorized reseller of all brands</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <h5 class="card-title">Safe payments</h5>
                <p class="card-text">Fast, safe, authenticated transactions for worry-free shopping</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <h5 class="card-title">Secure products</h5>
                <p class="card-text">Quality assured products with warranties and secure handling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Betheme Section -->
    <section class="betheme py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Betheme offers you convenient shopping experience at any scale</h2>
        </div>

        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="p-4">
              <i class="fas fa-mobile-alt fa-3x mb-3 text-primary"></i>
              <h5>Mobile shopping</h5>
              <p>Mobile Friendly - for convenient anytime, anywhere with your smartphone.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="p-4">
              <i class="fas fa-shield-alt fa-3x mb-3 text-primary"></i>
              <h5>Secure payments</h5>
              <p>Secure Payments - Safe, encrypted transactions for worry-free shopping.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="p-4">
              <i class="fas fa-box fa-3x mb-3 text-primary"></i>
              <h5>Present packaging</h5>
              <p>Gift Wrap Options - Beautifully wrapped and ready to present!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/product/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(['featuredProducts', 'newArrivals'])
  },
  methods: {
    ...mapActions(['loadProducts']),
    formatPrice(price) {
      return price.toLocaleString();
    }
  },
  created() {
    this.loadProducts()
  }
}
</script>

<style scoped>
.hero {
  background-color: #23242c;
  position: relative;
}

.hero-img {
  max-height: 350px;
  object-fit: contain;
}

.recommendation {
  background-color: #fff;
}

.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.why-us .card,
.betheme .p-4 {
  transition: all 0.3s ease;
}

.why-us .card:hover,
.betheme .p-4:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
</style>
