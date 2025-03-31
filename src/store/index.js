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
          name: 'DJI Mini 2 SE',
          image: 'https://dronelaunchacademy.com/wp-content/uploads/2024/07/dji-mini-2se-700x700.png',
          originalPrice: 42999,
          currentPrice: 38999,
          description: '超轻量级可折叠无人机，配备2.7K相机，31分钟飞行时间和10公里视频传输范围。完美适合初学者的249克以下重量级别。',
          onSale: true
        },
        {
          id: 2,
          name: 'Ryze Tello',
          image: 'https://m.media-amazon.com/images/I/71TyZaO1rvL.jpg',
          originalPrice: 12999,
          currentPrice: 10999,
          description: '由DJI技术支持的教育无人机，具有720p高清传输，13分钟飞行时间，为初学者和儿童提供可编程飞行控制。',
          onSale: true
        },
        {
          id: 3,
          name: 'Holy Stone HS720E',
          image: 'https://i.redd.it/bvq9wxojslbb1.jpg',
          originalPrice: 39999,
          currentPrice: 34999,
          description: '4K EIS无人机，配备超高清相机，GPS定位，无刷电机和智能功能，如自动返航和跟随模式。包括三块电池以延长飞行时间。',
          onSale: true
        },
        {
          id: 4,
          name: 'DJI Mini 3',
          image: 'https://www.thedroneu.com/wp-content/uploads/2024/03/DJI-Mini-3-e1711028505363.png',
          originalPrice: 49999,
          currentPrice: 45999,
          description: '紧凑可折叠无人机，配备4K/30fps HDR视频，38分钟飞行时间，垂直拍摄功能适合社交媒体内容。在许多地区无需注册的249克以下重量。',
          onSale: true
        },
        {
          id: 5,
          name: 'SJRC F11 Pro',
          image: 'https://i.ebayimg.com/images/g/mU0AAOSw5EFfoLRE/s-l1200.jpg',
          originalPrice: 29999,
          currentPrice: 25999,
          description: '4K相机无人机，配备2轴云台，GPS定位，5G WiFi FPV传输，无刷电机，28分钟飞行时间。具有跟随模式和兴趣点等智能功能。',
          onSale: true
        },
        {
          id: 6,
          name: 'Holy Stone HS600D',
          image: 'https://m.media-amazon.com/images/I/61JzqgaaSAL.jpg',
          originalPrice: 34999,
          currentPrice: 31999,
          description: 'GPS无人机配备4K相机，3轴云台稳定系统，无刷电机，提供25分钟飞行时间。具有跟随模式和航点飞行等高级功能。',
          onSale: true
        },
        {
          id: 7,
          name: 'Holy Stone HS720G',
          image: 'https://i5.walmartimages.com/seo/Holy-Stone-HS720G-2-Axis-Gimbal-Drones-4K-EIS-Camera-2-Batteries-52-Min-Flight-Time-Brushless-Motors-GPS-Auto-Return-Video-Transmission-Mini-Foldable_9652c3b9-ac8d-46fc-8c49-dea0b77d067b.b81f608714921587ea47f24bb1b2dfc8.jpeg',
          originalPrice: 32999,
          currentPrice: 29999,
          description: '2轴云台无人机，配备4K EIS相机，GPS定位，无刷电机和双电池共52分钟飞行时间。提供高级功能如自动返航和跟随功能。',
          onSale: true
        },
        {
          id: 8,
          name: 'SJRC F11S 4K Pro',
          image: 'https://m.media-amazon.com/images/I/61GEoEqLZ+L.jpg',
          originalPrice: 28999,
          currentPrice: 25999,
          description: '折叠式GPS无人机，配备4K相机，5G WiFi FPV传输，无刷电机和26分钟飞行时间。包括跟随模式和航点飞行等功能。',
          onSale: true
        },
        {
          id: 9,
          name: 'Holy Stone HS175D',
          image: 'https://i5.walmartimages.com/asr/bc6b1297-f4dc-4ab3-9ad7-5813e7c65001.5c84c7a07b673327bea9dcb930f97d5e.jpeg',
          originalPrice: 24999,
          currentPrice: 21999,
          description: '4K超高清相机无人机，配备GPS，5G传输，无刷电机和双电池共46分钟飞行时间。提供高级功能适合航空摄影。',
          onSale: true
        },
        {
          id: 10,
          name: 'Snaptain SP510',
          image: 'https://i.pcmag.com/imagery/articles/03H75rM3UVOqLMTurAwGTQY-14..v1715026905.png',
          originalPrice: 16999,
          currentPrice: 14599,
          description: 'GPS无人机，配备2.7K相机，5G WiFi FPV，30分钟飞行时间。具有跟随模式，航点飞行和环绕飞行，适合初学者和中级用户。',
          onSale: true
        },
        {
          id: 11,
          name: 'Potensic T25',
          image: 'https://i.pcmag.com/imagery/articles/03H75rM3UVOqLMTurAwGTQY-7.fit_lim.size_1050x.jpg',
          originalPrice: 15999,
          currentPrice: 13999,
          description: 'GPS无人机，配备1080p高清相机，FPV实时视频，双GPS定位和一键返航功能。易于控制和稳定悬停，适合初学者。',
          onSale: true
        },
        {
          id: 12,
          name: 'Holy Stone HS110G',
          image: 'https://m.media-amazon.com/images/I/71sLbABTOmL.jpg',
          originalPrice: 13999,
          currentPrice: 11999,
          description: '1080p无人机，配备轻触飞行，语音控制，手势控制和重力感应器。完美的入门级无人机，适合儿童和初学者。',
          onSale: true
        },
        {
          id: 13,
          name: 'Contixo F24 Pro',
          image: 'https://i.ebayimg.com/images/g/vzMAAOSwEdRguem7/s-l1200.jpg',
          originalPrice: 22999,
          currentPrice: 19999,
          description: '4K超高清相机无人机，配备GPS，5G WiFi实时视频，无刷电机和30分钟飞行时间。具有自动返航，跟随模式和轨道模式等功能。',
          onSale: true
        },
        {
          id: 14,
          name: 'Potensic D80',
          image: 'https://i.ebayimg.com/images/g/CfgAAOSwyytjihoN/s-l400.jpg',
          originalPrice: 27999,
          currentPrice: 24999,
          description: 'GPS无人机，配备2K相机，无刷电机，5G WiFi FPV传输和20分钟飞行时间。包括跟随模式，轨道模式和航点规划功能。',
          onSale: true
        },
        {
          id: 15,
          name: 'DEERC D10',
          image: 'https://s.alicdn.com/@sc04/kf/H2b5cbd3f611249f894aa7e78f8585604P.jpg_720x720q50.jpg',
          originalPrice: 14999,
          currentPrice: 12999,
          description: '可折叠无人机，配备720p高清相机，定高模式，无头模式和一键起飞/降落功能。使用2块电池可提供20分钟飞行时间的初学者无人机。',
          onSale: true
        },
        {
          id: 16,
          name: 'Hubsan Zino Pro',
          image: 'https://dronelaunchacademy.com/wp-content/uploads/2024/07/dji-mini-2se-1200x675.png',
          originalPrice: 47999,
          currentPrice: 43999,
          description: '可折叠无人机，配备4K超高清相机，3轴云台稳定系统，4公里FPV传输和23分钟飞行时间。具有全景和航点模式等功能。',
          onSale: true
        },
        {
          id: 17,
          name: 'Eachine EX4',
          image: 'https://imgix.bustle.com/uploads/image/2021/11/29/f7f5b1fc-d234-4861-8701-bc2a9375df93-aerial-photo-lede.jpg',
          originalPrice: 36999,
          currentPrice: 32999,
          description: '4K相机无人机，配备3轴云台，GPS定位，5G WiFi 3公里FPV传输和25分钟飞行时间。提供跟随模式，航点飞行和兴趣点功能。',
          onSale: true
        },
        {
          id: 18,
          name: 'Holy Stone HS165',
          image: 'https://www.flyeye.io/wp-content/uploads/2025/03/Small-Farms-Top-10-Budget-Drones-1028x628-1.jpg',
          originalPrice: 17999,
          currentPrice: 15999,
          description: '可折叠GPS无人机，配备2K相机，5G WiFi FPV传输，定高和返航功能。配备额外电池可提供26分钟飞行时间。',
          onSale: true
        },
        {
          id: 19,
          name: 'Contixo F30',
          image: 'https://www.firstquadcopter.com/wp-content/uploads/2023/11/drone_manuals.jpg',
          originalPrice: 29999,
          currentPrice: 27999,
          description: '4K超高清相机无人机，配备无刷电机，5G WiFi FPV传输和30分钟飞行时间。包括跟随模式和兴趣点功能等智能模式。',
          onSale: true
        },
        {
          id: 20,
          name: 'SJRC F22',
          image: 'https://i.ebayimg.com/images/g/YvYAAOSwZGNjihog/s-l1200.jpg',
          originalPrice: 34999,
          currentPrice: 29999,
          description: 'GPS无人机，配备4K相机，3轴云台，5G WiFi FPV传输，无刷电机和25分钟飞行时间。具有轨道模式和航点规划功能。',
          onSale: true
        },
        {
          id: 21,
          name: 'MJX Bugs 4W',
          image: 'https://cdn11.bigcommerce.com/s-ds1jas311e/images/stencil/1280x1280/products/672/4003/001__69168.1651719697.jpg',
          originalPrice: 22999,
          currentPrice: 19999,
          description: '可折叠无人机，配备2K相机，GPS定位，5G WiFi FPV传输，无刷电机和22分钟飞行时间。具有跟随模式和兴趣点功能。',
          onSale: true
        },
        {
          id: 22,
          name: 'Snaptain A15H',
          image: 'https://m.media-amazon.com/images/I/51Cgp9Mch3L._AC_UF894,1000_QL80_.jpg',
          originalPrice: 9999,
          currentPrice: 7999,
          description: '可折叠无人机，配备720p高清相机，语音控制，手势控制，轨迹飞行和无头模式等功能。适合初学者的16分钟飞行时间无人机。',
          onSale: true
        },
        {
          id: 23,
          name: 'Hubsan H501S X4',
          image: 'https://electropapa.com/media/86/09/00/1709093870/dfeee9b542f94574d734f4714d48fa9e.jpg',
          originalPrice: 28999,
          currentPrice: 25999,
          description: '无刷无人机，配备1080p相机，GPS定位，跟随模式和20分钟飞行时间。具有定高和无头模式，提供稳定飞行体验。',
          onSale: true
        },
        {
          id: 24,
          name: 'Potensic D68',
          image: 'https://i.ikman-st.com/drone-camera-wifi-5mp-hd-150m-working-distance-for-sale-colombo-3/62abaa09-e260-4544-8608-b8316535127d/142/107/cropped.webp',
          originalPrice: 19999,
          currentPrice: 17999,
          description: '4K相机无人机，配备GPS定位，5G WiFi FPV传输，无刷电机和25分钟飞行时间。具有跟随模式，轨道模式和航点飞行规划等功能。',
          onSale: true
        },
        {
          id: 25,
          name: 'Syma X500',
          image: 'https://i.ikman-st.com/mini-drone-camera-for-sale-colombo-1/3562410e-175c-4c83-8317-efac3297240c/142/107/cropped.jpg',
          originalPrice: 16999,
          currentPrice: 14999,
          description: '可折叠GPS无人机，配备4K相机，无刷电机，光流定位和23分钟飞行时间。具有跟随模式和兴趣点等智能飞行功能。',
          onSale: true
        },
        {
          id: 26,
          name: 'DEERC DE22',
          image: 'https://www.thedroneu.com/wp-content/uploads/2024/03/Guide-to-Remote-Control-RC-Drones-1024x597.png',
          originalPrice: 21999,
          currentPrice: 19999,
          description: 'GPS无人机，配备4K相机，EIS防抖，5G FPV传输和双电池共52分钟飞行时间。具有跟随模式，轨道模式和航点飞行等功能。',
          onSale: true
        },
        {
          id: 27,
          name: 'SIMREX X20',
          image: 'https://i5.walmartimages.com/asr/4825d973-3495-4341-97bb-03a01a29b0c6.c54c4131a0028bdc4db0cb8c9a4fe1d9.jpeg',
          originalPrice: 11999,
          currentPrice: 9999,
          description: '可折叠无人机，配备1080p相机，定高模式，无头模式和一键起飞/降落功能。适合初学者的18分钟总飞行时间无人机。',
          onSale: true
        },
        {
          id: 28,
          name: 'MJX Bugs 16 Pro',
          image: 'https://i.pcmag.com/imagery/articles/04m7Q0rgNCFXtr32Oxb0htj-28.fit_lim.size_1050x.jpg',
          originalPrice: 43999,
          currentPrice: 39999,
          description: 'EIS 4K相机无人机，配备3轴云台，GPS定位，5G WiFi FPV传输，无刷电机和25分钟飞行时间。具有跟随模式和航点规划等功能。',
          onSale: true
        },
        {
          id: 29,
          name: 'Eachine E520S',
          image: 'https://www.thedroneu.com/wp-content/uploads/2024/03/Guide-to-Remote-Control-RC-Drones.png',
          originalPrice: 13999,
          currentPrice: 11999,
          description: '可折叠GPS无人机，配备4K相机，5G WiFi FPV传输，定高功能和16分钟飞行时间。具有跟随模式，轨道模式和航点飞行等功能。',
          onSale: true
        },
        {
          id: 30,
          name: 'ZLRC SG906 Pro 2',
          image: 'https://i.ebayimg.com/images/g/mU0AAOSw5EFfoLRE/s-l1200.jpg',
          originalPrice: 27999,
          currentPrice: 24999,
          description: '4K相机无人机，配备3轴云台，GPS定位，5G WiFi FPV传输和26分钟飞行时间。具有避障功能，跟随模式和航点规划等智能特性。',
          onSale: true
        },
        {
          id: 31,
          name: 'Snaptain SP700',
          image: 'https://i5.walmartimages.com/seo/Holy-Stone-HS720G-2-Axis-Gimbal-Drones-4K-EIS-Camera-2-Batteries-52-Min-Flight-Time-Brushless-Motors-GPS-Auto-Return-Video-Transmission-Mini-Foldable_9652c3b9-ac8d-46fc-8c49-dea0b77d067b.b81f608714921587ea47f24bb1b2dfc8.jpeg',
          originalPrice: 24999,
          currentPrice: 21999,
          description: 'GPS无人机，配备2K相机，5G WiFi FPV传输，无刷电机和25分钟飞行时间。具有跟随模式，兴趣点和航点飞行规划等功能。',
          onSale: true
        },
        {
          id: 32,
          name: 'Potensic Dreamer Pro',
          image: 'https://i.redd.it/bvq9wxojslbb1.jpg',
          originalPrice: 49999,
          currentPrice: 44999,
          description: 'GPS无人机，配备4K相机，3轴云台，5G FPV传输和28分钟飞行时间。配备索尼传感器，跟随模式和航点规划等高级功能。',
          onSale: true
        },
        {
          id: 33,
          name: 'Holy Stone HS700D',
          image: 'https://m.media-amazon.com/images/I/61JzqgaaSAL.jpg',
          originalPrice: 38999,
          currentPrice: 34999,
          description: 'GPS无人机，配备2K相机，5G FPV传输，无刷电机和22分钟飞行时间。具有跟随模式，轨道模式和自定义飞行路径等功能。',
          onSale: true
        },
        {
          id: 34,
          name: 'DEERC D15',
          image: 'https://i.pcmag.com/imagery/articles/03H75rM3UVOqLMTurAwGTQY-7.fit_lim.size_1050x.jpg',
          originalPrice: 15999,
          currentPrice: 13999,
          description: '可折叠无人机，配备1080p相机，GPS定位，5G WiFi FPV传输和双电池共32分钟飞行时间。具有跟随模式和航点飞行规划等功能。',
          onSale: true
        },
        {
          id: 35,
          name: 'SYMA X8SW',
          image: 'https://m.media-amazon.com/images/I/71TyZaO1rvL.jpg',
          originalPrice: 12999,
          currentPrice: 10999,
          description: 'WiFi FPV无人机，配备720p相机，定高模式，无头模式和7-9分钟飞行时间。适合初学者的稳定飞行性能无人机。',
          onSale: true
        },
        {
          id: 36,
          name: 'Ruko U11',
          image: 'https://m.media-amazon.com/images/I/61GEoEqLZ+L.jpg',
          originalPrice: 26999,
          currentPrice: 23999,
          description: 'GPS无人机，配备4K相机，无刷电机，5G WiFi FPV传输和30分钟飞行时间。具有跟随模式，轨道模式和航点飞行规划等功能。',
          onSale: true
        },
        {
          id: 37,
          name: 'JJRC X11',
          image: 'https://dronelaunchacademy.com/wp-content/uploads/2024/07/dji-mini-2se-700x700.png',
          originalPrice: 29999,
          currentPrice: 26999,
          description: '可折叠5G WiFi FPV无人机，配备2K相机，GPS定位，无刷电机和22分钟飞行时间。具有跟随模式和航点规划等智能功能。',
          onSale: true
        },
        {
          id: 38,
          name: 'Holy Stone HS440',
          image: 'https://www.thedroneu.com/wp-content/uploads/2024/03/DJI-Mini-3-e1711028505363.png',
          originalPrice: 14999,
          currentPrice: 12999,
          description: '可折叠无人机，配备1080p相机，无刷电机，光流定位和20分钟飞行时间。具有定高功能和一键降落/起飞等便捷功能。',
          onSale: true
        },
        {
          id: 39,
          name: 'Contixo F16',
          image: 'https://i.ebayimg.com/images/g/vzMAAOSwEdRguem7/s-l1200.jpg',
          originalPrice: 19999,
          currentPrice: 17999,
          description: 'GPS无人机，配备1080p相机，无刷电机，5G WiFi FPV传输和25分钟飞行时间。具有跟随模式，轨道模式和航点规划等功能。',
          onSale: true
        },
        {
          id: 40,
          name: 'JJRC X12 Aurora',
          image: 'https://s.alicdn.com/@sc04/kf/H2b5cbd3f611249f894aa7e78f8585604P.jpg_720x720q50.jpg',
          originalPrice: 39999,
          currentPrice: 34999,
          description: 'GPS无人机，配备4K相机，3轴云台，5G WiFi FPV传输，无刷电机和25分钟飞行时间。具有跟随模式，轨道模式和航点规划等功能。',
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
