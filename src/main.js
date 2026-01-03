import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./router/index.js";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import MyPlugin from "./plugins/MyPlugin.js";
const app = createApp(App);

const pinia = createPinia();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(MyPlugin, { appName: "Jfj's App name" });
app.use(router).mount("#app");
