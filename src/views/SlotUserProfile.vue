<script setup>
import FetchComponent from '../components/FetchComponent.vue';
import FunctionalComponent from '../components/FunctionalComponent.js';

FunctionalComponent.props = ['user']
FunctionalComponent.attrs = ['class', 'color']
</script>

<template>
    <div class="slot-user-profile">
        <h2>User Profile with Slot</h2>
        <FetchComponent url="http://localhost:8080/user?id=2" method="GET">
            <template #default="{ data }">
                <div>
                    <p><strong>Name:</strong> {{ data.name }}</p>
                    <p><strong>avatar:</strong> {{ data.avatarUrl }}</p>
                    <p><strong>Twitter:</strong> {{ data.twitterUsername }}</p>
                    <FunctionalComponent :user="data.name" :class="data.twitterUsername" :color="data.avatarUrl" />
                </div>
            </template>
        </FetchComponent>
    </div>
</template>