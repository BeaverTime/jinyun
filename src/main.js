import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { message } from "ant-design-vue";

const app = createApp(App);
app.config.globalProperties.$meesage = message;
app.use(store).use(router).mount("#app");
