import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    featuredProducts: [],
    newArrivals: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setFeaturedProducts(state, products) {
      state.featuredProducts = products
    },
    setNewArrivals(state, products) {
      state.newArrivals = products
    },
    addToCart(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id)

      if (!existingItem) {
        state.cart.push({
          ...product,
          quantity: 1
        })
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
    loadProducts({ commit }) {
      // In a real application, you would fetch data from an API
      const mockProducts = [
        {
          id: 1,
          name: 'DJI Mavic Air 2',
          image: 'https://ext.same-assets.com/604956388/1502647946.jpeg',
          originalPrice: 180000,
          currentPrice: 160000,
          description: 'A midrange drone with flagship features, the DJI Mavic Air 2 combines a foldable and portable frame with a high-end camera system.',
          onSale: true
        },
        {
          id: 2,
          name: 'DJI Mini 4 Pro Drone Fly More Combo Plus with RC 2 Controller',
          image: 'https://ext.same-assets.com/604956388/931316050.jpeg',
          originalPrice: 315000,
          currentPrice: 300000,
          description: 'Fly safer and farther than ever before with the Mini 4 Pro Drone with RC 2 Controller from DJI.',
          onSale: true
        },
        {
          id: 3,
          name: 'DJI Avata FPV Drone (Drone Only)',
          image: 'https://ext.same-assets.com/604956388/1528709640.jpeg',
          originalPrice: 215000,
          currentPrice: 185000,
          description: 'Safely film steady, ultra-wide 4K stabilized video indoors or outside, in and around objects, with the DJI Avata FPV Drone.',
          onSale: true
        },
        {
          id: 4,
          name: 'Battery For DJI Mavic Pro Intelligent Replacement Internal FL-BT1',
          image: 'https://ext.same-assets.com/604956388/3286461539.jpeg',
          originalPrice: 50000,
          currentPrice: 50000,
          description: 'Smart Battery for DJI Mavic: FL-BT1 High Capacity and Extended Flight Time',
          onSale: false
        },
        {
          id: 5,
          name: 'DJI 65W Portable USB Charger for Mavic 3',
          image: 'https://ext.same-assets.com/604956388/2011481371.jpeg',
          originalPrice: 52500,
          currentPrice: 52500,
          description: 'Introducing the DJI 65W Portable USB Charger for Mavic 3, ensuring rapid and convenient charging for your drone batteries.',
          onSale: false
        },
        {
          id: 6,
          name: 'DJI Avata Pro View Combo with Goggles 2',
          image: 'https://ext.same-assets.com/604956388/2794872701.jpeg',
          originalPrice: 375000,
          currentPrice: 330000,
          description: 'Safely film steady, ultra-wide 4K stabilized video indoors or outside, in and around objects, with the DJI Avata Pro View Combo.',
          onSale: true
        }
      ]

      commit('setProducts', mockProducts)

      // Set featured products (top rated)
      commit('setFeaturedProducts', mockProducts.slice(0, 3))

      // Set new arrivals
      commit('setNewArrivals', mockProducts.slice(3, 6))
    }
  },
  getters: {
    allProducts: state => state.products,
    cartItems: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + (item.currentPrice * item.quantity), 0)
    },
    cartItemCount: state => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === parseInt(id))
    },
    featuredProducts: state => state.featuredProducts,
    newArrivals: state => state.newArrivals
  }
})
