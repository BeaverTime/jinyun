import { MessageApi } from "ant-design-vue/es/message";
import $wal from 'sweetalert2'
import { App } from "vue";
import COS from "cos-js-sdk-v5";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: MessageApi;
    $swal: typeof $wal;
    $COS: COS;
  };
}