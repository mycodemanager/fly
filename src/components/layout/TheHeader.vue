<template>
  <header>
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            We ship packages within 24 hours of ordering
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="main-header">
      <div class="container">
        <div class="row align-items-center">
          <!-- Logo -->
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="logo">
              <router-link to="/">
                <img src="@/assets/img/fly-zone-drone-logo.png" alt="Fly Zone Store">
              </router-link>
            </div>
          </div>

          <!-- Search -->
          <div class="col-md-6 mb-3 mb-md-0">
            <div class="search-form">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Enter your search...">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Header Icons -->
          <div class="col-md-3">
            <div class="d-flex justify-content-end header-icons">
              <router-link to="/cart" class="d-flex flex-column align-items-center ml-4">
                <i class="fas fa-shopping-cart"></i>
                <div class="small">
                  <div class="cart-count">{{ this.$store.state.cart?.length }}</div>
                  <div>Your cart</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="main-nav">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="d-flex flex-wrap">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/shop">Shop</router-link>
              </li>
              <li>
                <router-link to="/about-us">About Us</router-link>
              </li>
              <li>
                <router-link to="/contact-us">Contact Us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.search-form .form-control {
  border-radius: 30px 0 0 30px;
  border-right: none;
}

.search-form .btn {
  border-radius: 0 30px 30px 0;
  border-left: none;
}

.cart-count {
  font-weight: bold;
}

.header-icons i {
  font-size: 24px;
  margin-bottom: 5px;
}

.main-nav {
  background-color: var(--secondary-color);
  padding: 15px 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}
.logo{
  img{
    width: 150px;
  }
}
</style>
