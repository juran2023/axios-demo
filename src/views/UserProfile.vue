<script setup>
import { useFetchUser } from "../composables/useFetchUser.js";
import { onMounted } from "vue";
const { user, loading, error, fetchUser } = useFetchUser();

onMounted(() => {
    fetchUser(1);
});
</script>

<template>
    <div class="user-profile">
        <h2>User Profile</h2>
        <div v-if="loading">Loading user data...</div>
        <div v-else-if="error">Error loading user data: {{ error }}</div>
        <div v-else-if="user">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Bio:</strong> {{ user.bio }}</p>
            <p><strong>Blog:</strong> {{ user.blog }}</p>
        </div>
        <div v-else>No user data available.</div>
    </div>
</template>