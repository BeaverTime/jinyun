import { getTempCredential } from './utils/request/http';
import COS from 'cos-js-sdk-v5';
import {message} from 'ant-design-vue'

const Bucket = 'yuantongphoto-1300775451';
const Region = 'ap-shanghai';
const cos = new COS({
  getAuthorization: async (option, callback) => {
    const res = await getTempCredential();
    if (res.result === 0) {
      const data = res.credentials;
      callback({
        TmpSecretId: data.credentials.tmpSecretId,
        TmpSecretKey: data.credentials.tmpSecretKey,
        SecurityToken: data.credentials.sessionToken,
        // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
        StartTime: data.startTime, // 时间戳，单位秒，如：1580000000
        ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000000
      });
    } else {
      // 获取临时密钥失败
      message.error("获取密钥失败")
    }
  },
});

export const uploadFile = (option) => {
  const { file, name } = option;
  cos.uploadFile(
    {
      Key: name,
      Bucket: Bucket,
      Region: Region,
      Body: file,
      onProgress: (progressData) => {
        /* 非必须 */
        console.log(JSON.stringify(progressData));
      },
      onFileFinish: function (err, data, options) {
        /* 非必须 */
        console.log(options.Key + '上传' + (err ? '失败' : '完成'));
      },
      onTaskReady: function (taskId) {
        /* 非必须 */
        console.log(taskId);
      },
    },
    (err, data) => {
      if (err) {
        console.log('上传失败', err);
      } else {
        console.log('上传成功', data);
      }
    }
  );
};
