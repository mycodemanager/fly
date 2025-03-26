<template>
  <div class="contact-us">
    <div class="page-header py-5" style="background-color: #f8f8f8;">
      <div class="container">
        <h1 class="display-4">Contact Us</h1>
        <p class="lead">We'd love to hear from you</p>
      </div>
    </div>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
            <h2 class="mb-4">Get in Touch</h2>
            <p>Have questions about our products, delivery, or need technical support? Our team is here to help. Fill out the form and we'll get back to you as soon as possible.</p>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="form-control"
                  required>
              </div>

              <div class="form-group">
                <label for="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  required>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  class="form-control"
                  required>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  rows="5"
                  required></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
            </form>
          </div>

          <div class="col-md-6">
            <div class="contact-info-card p-4 bg-light rounded shadow-sm mb-4">
              <h3 class="mb-4">Contact Information</h3>

              <div class="contact-item d-flex mb-3">
                <div class="icon mr-3">
                  <i class="fas fa-map-marker-alt fa-fw text-primary"></i>
                </div>
                <div class="text">
                  <h5 class="mb-1">Our Location</h5>
                  <p>123 Drone Street, Lahore, Pakistan</p>
                </div>
              </div>

              <div class="contact-item d-flex mb-3">
                <div class="icon mr-3">
                  <i class="fas fa-phone-alt fa-fw text-primary"></i>
                </div>
                <div class="text">
                  <h5 class="mb-1">Phone Number</h5>
                  <p>+92 320 9972624</p>
                </div>
              </div>

              <div class="contact-item d-flex mb-3">
                <div class="icon mr-3">
                  <i class="fas fa-envelope fa-fw text-primary"></i>
                </div>
                <div class="text">
                  <h5 class="mb-1">Email Address</h5>
                  <p>inspireinnosmc@gmail.com</p>
                </div>
              </div>

              <div class="contact-item d-flex">
                <div class="icon mr-3">
                  <i class="fas fa-clock fa-fw text-primary"></i>
                </div>
                <div class="text">
                  <h5 class="mb-1">Working Hours</h5>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div class="social-media text-center mb-4">
              <h4 class="mb-3">Follow Us</h4>
              <div class="social-icons">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div class="map-container rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817841632!2d74.05419809659455!3d31.483220877415166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1617292750920!5m2!1sen!2sus"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary text-white text-center">
      <div class="container">
        <h2 class="mb-4">Join Our Newsletter</h2>
        <p class="lead mb-4">Stay updated with our latest products and promotions</p>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Your email address">
              <div class="input-group-append">
                <button class="btn btn-light" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // This would typically send the form data to a server
      alert('Thank you for your message. We will get back to you soon!');
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-info-card {
  height: 100%;
}

.contact-item .icon i {
  font-size: 24px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--accent-color);
  transform: translateY(-3px);
}

.contact-form .form-control {
  padding: 12px;
  border-radius: 0;
  height: auto;
}

.map-container {
  height: 300px;
}
</style>
