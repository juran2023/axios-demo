<template>
  <div class="dining-component">
    <h2>餐厅 - {{ restaurantName }}</h2>

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
      <h3>菜单</h3>
      <div class="add-item">
        <input v-model="newDish" placeholder="添加菜品名称" />
        <input v-model.number="newPrice" type="number" placeholder="价格" />
        <button @click="addDish">添加</button>
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

    <!-- 餐厅特有功能 -->
    <div class="dining-special">
      <h3>餐厅特色</h3>
      <div>
        <label>
          <input type="checkbox" v-model="hasPrivateRoom" />
          提供包间
        </label>
      </div>
      <div>
        <label>座位数量: </label>
        <input type="number" v-model.number="seatCount" min="1" />
      </div>
      <p>当前可用座位: {{ availableSeats }}</p>
    </div>
  </div>
</template>

<script>
import { restaurantMixin } from '@/mixins/restaurantMixin'

export default {
  name: 'DiningComponent',
  mixins: [restaurantMixin],

  data() {
    return {
      restaurantName: '川味轩',
      newDish: '',
      newPrice: 0,
      newRating: 0,
      // 餐厅特有数据
      hasPrivateRoom: true,
      seatCount: 50,
      occupiedSeats: 12
    }
  },

  computed: {
    // 餐厅特有计算属性
    availableSeats() {
      return this.seatCount - this.occupiedSeats
    }
  },

  created() {
    // 初始化餐厅菜单
    this.menuItems = [
      { name: '麻婆豆腐', price: 28 },
      { name: '宫保鸡丁', price: 38 },
      { name: '水煮鱼', price: 68 },
      { name: '回锅肉', price: 42 }
    ]
    this.rating = 4.2
  },

  methods: {
    addDish() {
      if (this.newDish && this.newPrice > 0) {
        this.addMenuItem({
          name: this.newDish,
          price: this.newPrice
        })
        this.newDish = ''
        this.newPrice = 0
      }
    }
  }
}
</script>

<style scoped>
.dining-component {
  padding: 20px;
  border: 2px solid #B22222;
  border-radius: 10px;
  margin: 10px;
  background-color: #FFF0F0;
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

.dining-special {
  margin-top: 15px;
  padding: 10px;
  background: #FFE4E1;
  border-radius: 5px;
}

.dining-special div {
  margin: 5px 0;
}
</style>
