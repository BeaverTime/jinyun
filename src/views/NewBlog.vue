<template>
  <div class="editor-wrapper">
    <div style="margin-bottom: 20px;">
      <Button type="primary" :size="'large'" @click="sendBlog" :loading="isSending">发送，嘿咻!~~</Button>
      <div class="title-wrapper">
        <Input v-model:value="title" :size="'large'" placeholder="标题">
          <template #prefix>
            <CoffeeOutlined style="font-size: 18px; color:green" />
          </template>
        </Input>
      </div>
    </div>
    <div class="editor-container">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="min-height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
  </div>
  
</template>
<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { getCurrentInstance, onBeforeUnmount, ref, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { Button, Input } from "ant-design-vue";
import { CoffeeOutlined } from '@ant-design/icons-vue'

export default {
  components: { Editor, Toolbar,Button,Input, CoffeeOutlined },
  setup() {
    const { $swal } = getCurrentInstance().appContext.app.config.globalProperties
    const title = ref('')
    const isSending = ref(false)
    // 编辑器实例，必须用 shallowRef
    /**@type {import('vue').ShallowRef<import('@wangeditor/editor').IDomEditor>} */
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref("");

    const toolbarConfig = {};
    const editorConfig = { placeholder: "让我想想今天发生了什么(‾◡◝)(‾◡◝)。。。" };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });
    

    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };


    const sendBlog = () => {
      if(!editorRef.value.getText().trim()) {
        $swal.fire({
          title: "空空哒",
          text: "你已经没有话要跟说了嘛(ノへ￣、)",
          icon: 'question',
          confirmButtonText:"再想想"
        });
      }
      
    }
    return {
      title,
      editorRef,
      isSending,
      valueHtml,
      mode: "default", // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      sendBlog
    };
  },
};
</script>

<style scoped>
.editor-container {
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.editor-wrapper {
  width: 80%;
  margin: auto;
  height: fit-content;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
}
.title-wrapper {
  width: 400px;
  margin-top: 20px;
  max-width: 100% ;
}
.title-wrapper >>> .ant-input {
    font-size: 20px;
    font-family: 'ZcoolSimplify';
}
</style>
