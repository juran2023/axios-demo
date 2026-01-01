import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/MainView.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "mixin",
          name: "mixin",
          component: () => import("@/views/MyMixin.vue"),
        },
        {
          path: "user",
          name: "user",
          component: () => import("@/views/UserProfile.vue"),
        },
        {
          path: "user2",
          name: "user2",
          component: () => import("@/views/SlotUserProfile.vue"),
        },
      ],
    },
  ],
});
