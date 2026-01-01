<script setup>
import { onBeforeMount } from "vue";

const message = "A message from setup";
console.log(message);

// beforeCreate打印"beforeCreate"
onBeforeMount(() => {
  console.log("beforeMount");
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <common-aside />
      <el-container>
        <el-header class="el-header">
          <common-header />
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.common-layout,
.el-container {
  height: 100vh;
}
body {
  margin: 0;
  padding: 0;
}

.el-header {
  padding: 0;
}
</style>
