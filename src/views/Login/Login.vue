<template>
  <div class="login-wrapper">
    <Form
      :model="formState"
      name="basic"
      :label-col="{ span: 2 }"
      :wrapper-col="{ span: 22 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <FormItem
        label="账号"
        name="username"
        :rules="[{ required: true, message: '请输入用户名或手机号!' }]"
      >
        <Input v-model:value="formState.username" placeholder="手机号/用户名" />
      </FormItem>

      <FormItem
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <InputPassword v-model:value="formState.password" placeholder="密码" />
      </FormItem>

      <FormItem :wrapper-col="{ offset: 2, span: 22 }">
        <Button type="primary" html-type="submit">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { Form, FormItem, Button, InputPassword, Input } from 'ant-design-vue';
const formState = reactive({
  username: '',
  password: '',
});
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped>
.login-wrapper {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    margin: 40px auto;
    width: 640px;
}
@media screen and (max-width: 800px) {
  .login-wrapper {
    width: 80%;
  }
}
</style>
