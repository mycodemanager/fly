<template>
  <footer class="footer mt-auto">
    <div class="container">
      <div class="row">
        <!-- Contact Info -->
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="footer-contact">
            <h4 class="footer-title">Got questions? Call us 24/7!</h4>
            <p class="contact-email">
              <i class="fas fa-envelope mr-2"></i>gizmoshopper@gmail.com
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/about-us">About Us</router-link></li>
            <li><router-link to="/contact-us">Contact Us</router-link></li>
          </ul>
        </div>

        <!-- Useful Links -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h4 class="footer-title">Payment methods</h4>
          <div class="payment-methods">
              <img src="@/assets/img/easypaisa.png" alt="EasyPaisa">
              <img src="@/assets/img/jazzcash.png" alt="EasyPaisa">
            </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright © 2025 | Powered by Data Network Solutions (SMC-Private) Limited</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
.contact-phone,
.contact-email {
  font-size: 18px;
  margin-bottom: 10px;
}

.payment-methods {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;
}

.payment-methods img {
  height: 50px;
  border-radius: 6px;
}

.footer {
  margin-top: 50px;
}
</style>
