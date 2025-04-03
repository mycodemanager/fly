<template>
  <div class="checkout-container">
    <div class="billing-section" v-if="!isSuccess">
      <h2>Billing details</h2>

      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First name <span class="required">*</span></label>
          <input type="text" id="firstName" v-model="billingDetails.firstName" placeholder="23" />
        </div>
        <div class="form-group">
          <label for="lastName">Last name <span class="required">*</span></label>
          <input type="text" id="lastName" v-model="billingDetails.lastName" placeholder="1234" />
        </div>
      </div>

      <div class="form-group">
        <label for="country">Country / Region <span class="required">*</span></label>
        <select id="country" v-model="billingDetails.country">
          <option value="Pakistan">Pakistan</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="streetAddress">Street address <span class="required">*</span></label>
        <input type="text" id="streetAddress" v-model="billingDetails.streetAddress" placeholder="123" />
        <input type="text" v-model="billingDetails.streetAddressLine2" placeholder="123" />
      </div>

      <div class="form-group">
        <label for="city">Town / City <span class="required">*</span></label>
        <input type="text" id="city" v-model="billingDetails.city" placeholder="123" />
      </div>

      <div class="form-group">
        <label for="state">State / County <span class="required">*</span></label>
        <select id="state" v-model="billingDetails.state">
          <option value="Azad Kashmir">Azad Kashmir</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="zip">Postcode / ZIP <span class="required">*</span></label>
        <input type="text" id="zip" v-model="billingDetails.zip" placeholder="12200" />
      </div>

      <div class="form-group">
        <label for="phone">Phone (optional)</label>
        <input type="tel" id="phone" v-model="billingDetails.phone" placeholder="1234" />
      </div>

      <div class="form-group">
        <label for="email">Email address <span class="required">*</span></label>
        <input type="email" id="email" v-model="billingDetails.email" placeholder="1234@qq.com" />
      </div>

      <h2>Additional information</h2>

      <div class="form-group">
        <label for="notes">Order notes (optional)</label>
        <textarea id="notes" v-model="billingDetails.notes"
          placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
      </div>
    </div>

    <div class="order-summary" v-if="!isSuccess">
      <h2>Your order</h2>

      <div class="order-table">
        <div class="order-header">
          <div class="product-col">Product</div>
          <div class="subtotal-col">Subtotal</div>
        </div>

        <div class="order-item" v-for="item in cartItems" :key="item.id">
          <img :src="item.image" :alt="item.name" class="cart-item-image">
          <div class="product-col">
            <div class="product-name">{{ item.name }}</div>
            <div class="product-quantity">× {{ item.quantity }}</div>
            <div class="subtotal-col">Rs{{ formatPrice(item.currentPrice * item.quantity) }}</div>
          </div>
        </div>

        <div class="order-subtotal">
          <div>Subtotal</div>
          <div>Rs {{ formatPrice(cartTotal) }}</div>
        </div>

        <div class="order-total">
          <div>Total</div>
          <div>Rs {{ formatPrice(cartTotal) }}</div>
        </div>
      </div>

      <div class="payment-methods">
        <div class="payment-method">
          <input type="radio" id="jazzcash-card" name="payment" value="jazzcash-card" />
          <label for="jazzcash-card">
            <img src="../assets/img/card.png" alt="JazzCash Logo" class="payment-logo" />
            JazzCash Debit/Credit Card
          </label>
        </div>

        <div class="payment-method selected">
          <input type="radio" id="jazzcash-mobile" name="payment" value="jazzcash-mobile" checked />
          <label for="jazzcash-mobile" class="payment-description">
            <img src="../assets/img/mobile.png" alt="JazzCash Mobile Logo" class="payment-logo" />
            JazzCash Mobile Account
            <p>JazzCash Mobile Account can be registered on any Jazz or Warid number</p>
            <p>Biometric-verified Jazz and Warid customers can self-register their Mobile Account simply by dialing
              <strong>*786#</strong>.
            </p>
            <p>Enter the confirmation code within <strong>30</strong> seconds to make a successful payment!</p>
            <p>You're almost done!</p>
            <p>To change or edit your order, go back. No changes will be allowed once you click "PLACE ORDER".</p>
          </label>
        </div>

        <div class="payment-method">
          <input type="radio" id="easypaisa" name="payment" value="easypaisa" />
          <label for="easypaisa">
            <img src="../assets/img/easy-pay-logo.png" alt="Easypaisa Logo" class="payment-logo" />
            Pay via Easypaisa
          </label>
        </div>
      </div>
      <button class="place-order-btn" @click="onPlaceOrder">Place order</button>
    </div>
    <div v-if="isSuccess" class="pay-success">
      <img src="../assets/success.jpg" alt="" style="width: 40px;height: 40px;">
      <h3>Payment Successful</h3>
      <p>Your order has been placed successfully.</p>
      <button class="back-btn" @click="onBackHome">Back to Home</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      billingDetails: {
        firstName: '',
        lastName: '',
        country: 'Pakistan',
        streetAddress: '',
        streetAddressLine2: '',
        city: '',
        state: 'Azad Kashmir',
        zip: '',
        phone: '',
        email: '',
        notes: ''
      },
      isSuccess: false,
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    formatPrice(price) {
      return price?.toLocaleString();
    },
    onPlaceOrder() {
      this.isSuccess = true;
      this.billingDetails = {
        firstName: '',
        lastName: '',
        country: 'Pakistan',
        streetAddress: '',
        streetAddressLine2: '',
        city: '',
        state: 'Azad Kashmir',
        zip: '',
        phone: '',
        email: '',
        notes: ''
      };
    },
    onBackHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

h2 {
  font-size: 24px;
  color: #1a202c;
  margin-bottom: 20px;
  font-weight: 600;
}

.billing-section {
  flex: 1;
  min-width: 500px;
}

.order-summary {
  flex: 0 0 400px;
  background-color: #f1f1f1;
  padding: 30px;
  border-radius: 4px;
}

.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.form-row .form-group {
  flex: 1;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.required {
  color: #e53e3e;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 16px;
}

select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  padding-right: 30px;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.order-table {
  margin-bottom: 20px;
}

.order-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
}

.product-col {
  flex: 2;
}

.subtotal-col {
  flex: 1;
  text-align: right;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  gap: 10px;
}

.product-name {
  margin-bottom: 5px;
  font-size: 14px;
}

.product-quantity {
  color: #666;
  font-size: 14px;
}

.order-subtotal,
.order-total {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.order-total {
  font-weight: 700;
  font-size: 18px;
  border-bottom: none;
}

.payment-methods {
  margin-bottom: 30px;
}

.payment-method {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
}

.payment-method.selected {
  border-color: #3182ce;
}

.payment-method input[type="radio"] {
  width: auto;
  margin-right: 10px;
  margin-top: 4px;
  cursor: pointer;
}

.payment-method label {
  cursor: pointer;
}

.payment-logo {
  height: 24px;
  margin-right: 10px;
  vertical-align: middle;
}

.payment-description {
  /* margin-top: 15px; */
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
}

.payment-description p {
  margin-bottom: 8px;
}

.payment-description p:last-child {
  margin-bottom: 0;
}

.place-order-btn {
  width: 100%;
  background-color: #4338ca;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.place-order-btn:hover {
  background-color: #3730a3;
}

@media (max-width: 992px) {
  .checkout-container {
    flex-direction: column;
  }

  .billing-section,
  .order-summary {
    flex: 1 1 100%;
    min-width: auto;
  }
}

@media (max-width: 576px) {
  .form-row {
    flex-direction: column;
  }
}

.cart-item-image {
  width: 80px;
  object-fit: contain;
}

.pay-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
