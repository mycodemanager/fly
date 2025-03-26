<template>
  <div class="about-us">
    <div class="page-header py-5" style="background-color: #f8f8f8;">
      <div class="container">
        <h1 class="display-4">About Us</h1>
        <p class="lead">Your trusted partner for high-quality drone technology</p>
      </div>
    </div>

    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <h2 class="mb-4">Our Story</h2>
            <p>FlyZone Store was established in 2020 with a simple mission: to provide drone enthusiasts and professionals with access to cutting-edge technology and exceptional customer service.</p>
            <p>What began as a small passion project has grown into Pakistan's premier destination for drones and accessories, serving both hobbyists and commercial clients across the country.</p>
            <p>Our team consists of drone experts and technology enthusiasts who understand the needs of our customers and are dedicated to providing the best products and service in the industry.</p>
          </div>
          <div class="col-md-6">
            <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Our Team" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Why Choose Us</h2>
          <p class="lead">We're committed to excellence in everything we do</p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <i class="fas fa-check-circle fa-3x text-primary mb-3"></i>
                <h4>Authentic Products</h4>
                <p>We are authorized resellers for top drone brands, ensuring you receive genuine products with full warranties.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <i class="fas fa-truck fa-3x text-primary mb-3"></i>
                <h4>Fast Delivery</h4>
                <p>We ship within 24 hours of ordering, with free delivery on orders over Rs.200,000 anywhere in Pakistan.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <i class="fas fa-headset fa-3x text-primary mb-3"></i>
                <h4>Expert Support</h4>
                <p>Our knowledgeable team is available 24/7 to assist with product selection, troubleshooting, and technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Our Partners</h2>
          <p class="lead">We work with the best brands in the industry</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-6 col-md-3 text-center mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/DJI_Innovations_logo.svg/1200px-DJI_Innovations_logo.svg.png" alt="DJI" class="img-fluid partner-logo" style="max-width: 150px;">
          </div>
          <div class="col-6 col-md-3 text-center mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gopro_logo.svg/1200px-Gopro_logo.svg.png" alt="GoPro" class="img-fluid partner-logo" style="max-width: 150px;">
          </div>
          <div class="col-6 col-md-3 text-center mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Parrot_Logo.svg/2560px-Parrot_Logo.svg.png" alt="Parrot" class="img-fluid partner-logo" style="max-width: 150px;">
          </div>
          <div class="col-6 col-md-3 text-center mb-4">
            <img src="https://seeklogo.com/images/A/autel-robotics-logo-D5C711B05C-seeklogo.com.png" alt="Autel Robotics" class="img-fluid partner-logo" style="max-width: 150px;">
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary text-white text-center">
      <div class="container">
        <h2 class="mb-4">Ready to Experience the Sky?</h2>
        <p class="lead mb-4">Browse our collection of premium drones and accessories today</p>
        <router-link to="/shop" class="btn btn-light btn-lg">Shop Now</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.partner-logo {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0);
  opacity: 1;
}
</style>
