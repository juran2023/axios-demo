<template>
  <div class="cafe-component">
    <h2>咖啡店 - {{ cafeName }}</h2>

    <div class="status">
      <span :class="{ open: isOpen, closed: !isOpen }">{{ statusText }}</span>
      <button @click="toggleStatus">切换状态</button>
    </div>

    <div class="rating">
      <span>评分: {{ averageRating }}</span>
      <input type="number" v-model.number="newRating" min="0" max="5" step="0.1" />
      <button @click="setRating(newRating)">设置评分</button>
    </div>

    <div class="menu">
      <h3>咖啡菜单</h3>
      <div class="add-item">
        <input v-model="newCoffee" placeholder="添加咖啡名称" />
        <input v-model.number="newPrice" type="number" placeholder="价格" />
        <button @click="addCoffee">添加</button>
      </div>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          {{ item.name }} - ¥{{ item.price }}
          <button @click="placeOrder(item)">点单</button>
          <button @click="removeMenuItem(index)">删除</button>
        </li>
      </ul>
    </div>

    <div class="orders">
      <h3>订单列表 ({{ totalOrders }})</h3>
      <ul>
        <li v-for="order in orders" :key="order.id">
          {{ order.item.name }} - {{ order.time }}
        </li>
      </ul>
    </div>

    <!-- 咖啡店特有功能 -->
    <div class="cafe-special">
      <h3>咖啡店特色</h3>
      <label>
        <input type="checkbox" v-model="hasWifi" />
        提供 WiFi
      </label>
      <p v-if="hasWifi">WiFi 密码: {{ wifiPassword }}</p>
    </div>
  </div>
</template>

<script>
import { restaurantMixin } from '@/mixins/restaurantMixin'

export default {
  name: 'CafeComponent',
  mixins: [restaurantMixin],

  data() {
    return {
      cafeName: '星巴克咖啡',
      newCoffee: '',
      newPrice: 0,
      newRating: 0,
      // 咖啡店特有数据
      hasWifi: true,
      wifiPassword: 'cafe2024'
    }
  },

  created() {
    // 初始化咖啡菜单
    this.menuItems = [
      { name: '美式咖啡', price: 28 },
      { name: '拿铁', price: 32 },
      { name: '卡布奇诺', price: 35 }
    ]
    this.rating = 4.5
  },

  methods: {
    addCoffee() {
      if (this.newCoffee && this.newPrice > 0) {
        this.addMenuItem({
          name: this.newCoffee,
          price: this.newPrice
        })
        this.newCoffee = ''
        this.newPrice = 0
      }
    }
  }
}
</script>

<style scoped>
.cafe-component {
  padding: 20px;
  border: 2px solid #8B4513;
  border-radius: 10px;
  margin: 10px;
  background-color: #FFF8DC;
}

.status .open { color: green; font-weight: bold; }
.status .closed { color: red; font-weight: bold; }

.menu ul, .orders ul {
  list-style: none;
  padding: 0;
}

.menu li, .orders li {
  padding: 5px;
  margin: 5px 0;
  background: #f5f5f5;
  border-radius: 5px;
}

button {
  margin-left: 5px;
  padding: 3px 8px;
  cursor: pointer;
}

.cafe-special {
  margin-top: 15px;
  padding: 10px;
  background: #E6D5B8;
  border-radius: 5px;
}
</style>
