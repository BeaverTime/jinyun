import router from "@/router";
export const gotoLogin = (from) => {
  router.push("/login?callback=" + from)
};
