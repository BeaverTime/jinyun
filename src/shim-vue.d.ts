import { MessageApi } from "ant-design-vue/es/message";
import $wal from 'sweetalert2'
import { App } from "vue";
import {} from '@babel/core'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: MessageApi;
    $swal: typeof $wal;
  };
}