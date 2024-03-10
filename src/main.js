import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { message } from "ant-design-vue";
import Swal from "sweetalert2";

const app = createApp(App);
app.config.globalProperties.$meesage = message;
app.config.globalProperties.$swal = Swal
app.use(store).use(router).mount("#app");
export default app;
