<script setup>
import { ref } from "vue";
import axios from "axios";

const data = ref(null);
const error = ref(null);
const loading = ref(false);

const props = defineProps({
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        default: "GET",
        required: false
    },
})

async function fetchUserData() {
    loading.value = true;

    try {
        axios({
            method: props.method,
            url: props.url
        }).then(response => {
            data.value = response.data;
        });
    } catch (err) {
        error.value = err.message || "Error fetching data";
    } finally {
        loading.value = false;
    }
}

fetchUserData();

</script>

<template>
    <slot name="default" v-if="data" :data="data">
        <h2>User Profile</h2>
        <div>
            <p><strong>Name:</strong> {{ data.name }}</p>
            <p><strong>Bio:</strong> {{ data.bio }}</p>
            <p><strong>Blog:</strong> {{ data.blog }}</p>
        </div>
    </slot>

    <slot name="loading" v-if="loading">
        <div>Loading user data...</div>
    </slot>

    <slot name="error" v-if="error">
        <div>Error loading user data: {{ error }}</div>
    </slot>
</template>