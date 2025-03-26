<template>
  <div class="cart-page py-5">
    <div class="container">
      <h1 class="mb-4">Your Cart</h1>

      <div v-if="cartItems.length > 0">
        <div class="table-responsive mb-4">
          <table class="table table-bordered">
            <thead class="thead-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td>
                  <div class="d-flex align-items-center">
                    <img :src="item.image" :alt="item.name" class="cart-item-image mr-3">
                    <div>
                      <h5 class="mb-0">{{ item.name }}</h5>
                    </div>
                  </div>
                </td>
                <td>Rs{{ formatPrice(item.currentPrice) }}</td>
                <td>
                  <div class="quantity d-flex align-items-center">
                    <button
                      @click="updateQuantity(item.id, Math.max(1, item.quantity - 1))"
                      class="btn btn-sm btn-outline-secondary mr-2">
                      <i class="fas fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      min="1"
                      class="form-control form-control-sm text-center"
                      style="width: 60px;"
                      v-model.number="item.quantity">
                    <button
                      @click="updateQuantity(item.id, item.quantity + 1)"
                      class="btn btn-sm btn-outline-secondary ml-2">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td>Rs{{ formatPrice(item.currentPrice * item.quantity) }}</td>
                <td>
                  <button @click="removeItem(item.id)" class="btn btn-danger btn-sm">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Apply Coupon</h5>
              </div>
              <div class="card-body">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Coupon code">
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Cart Total</h5>
              </div>
              <div class="card-body">
                <table class="table mb-0">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>Rs{{ formatPrice(cartTotal) }}</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>Free shipping</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td><strong>Rs{{ formatPrice(cartTotal) }}</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary btn-block">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <i class="fas fa-shopping-cart fa-4x mb-3 text-muted"></i>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <router-link to="/shop" class="btn btn-primary mt-3">Continue Shopping</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapMutations(['removeFromCart', 'updateCartItemQuantity']),
    formatPrice(price) {
      return price?.toLocaleString();
    },
    removeItem(id) {
      if (confirm('Are you sure you want to remove this item from your cart?')) {
        this.removeFromCart(id);
      }
    },
    updateQuantity(id, quantity) {
      if (quantity > 0) {
        this.updateCartItemQuantity({ productId: id, quantity });
      }
    }
  }
}
</script>

<style scoped>
.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

table th, table td {
  vertical-align: middle;
}
</style>
