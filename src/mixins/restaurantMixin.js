// 餐饮服务共用逻辑 Mixin
export const restaurantMixin = {
  data() {
    return {
      isOpen: true,
      rating: 0,
      menuItems: [],
      orders: []
    }
  },

  computed: {
    averageRating() {
      return this.rating > 0 ? this.rating.toFixed(1) : '暂无评分'
    },

    statusText() {
      return this.isOpen ? '营业中' : '已打烊'
    },

    totalOrders() {
      return this.orders.length
    }
  },

  methods: {
    toggleStatus() {
      this.isOpen = !this.isOpen
    },

    addMenuItem(item) {
      this.menuItems.push(item)
    },

    removeMenuItem(index) {
      this.menuItems.splice(index, 1)
    },

    placeOrder(item) {
      if (!this.isOpen) {
        alert('店铺已打烊，无法下单')
        return
      }
      this.orders.push({
        id: Date.now(),
        item,
        time: new Date().toLocaleString()
      })
    },

    setRating(value) {
      this.rating = Math.max(0, Math.min(5, value))
    }
  },

  created() {
    console.log(`${this.$options.name || '组件'} 已创建，使用了 restaurantMixin`)
  }
}
