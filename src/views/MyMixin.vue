<template>
  <div class="mixin-demo">
    <h1>Vue Mixin :‹</h1>
    <p>å$*Äöq( restaurantMixin -„;‘</p>

    <div class="components-container">
      <CafeComponent />
      <DiningComponent />
    </div>
  </div>
</template>

<script>
import CafeComponent from '@/components/CafeComponent.vue'
import DiningComponent from '@/components/DiningComponent.vue'

export default {
  name: 'MyMixin',
  components: {
    CafeComponent,
    DiningComponent
  }
}
</script>

<style scoped>
.mixin-demo {
  padding: 20px;
}

.mixin-demo h1 {
  text-align: center;
  color: #333;
}

.mixin-demo > p {
  text-align: center;
  color: #666;
  margin-bottom: 20px;
}

.components-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
