import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  // withCredentials: true, // 跨域
  baseURL: 'http://localhost:9000/api',
  timeout: 1000
});

// 请求拦截器
service.interceptors.request.use(config => {
  Toast.loading({
    duration: 0,  // 一直不消失
    message: '加载中...',
    forbidClick: true,
  });
  return config;
}, err => {
  console.log(err);
  Toast.clear(); // 关闭提示
  return Promise.reject(err);
})

// 响应拦截器
service.interceptors.response.use(res => {
  Toast.clear(); // 关闭提示
  return res.data;
}, () => {
  Toast.clear(); // 关闭提示
  Toast("请求失败，请稍后重试")
})

export default service