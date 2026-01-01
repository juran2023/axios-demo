<script setup>
const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href;
};
</script>

<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card>
        <div class="user">
          <img :src="getImageUrl('user')" class="user" />
          <div class="user-info">
            <p>admin</p>
            <p>超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：2024-06-01 10:00:00</p>
          <p>上次登录IP：北京市</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped></style>
