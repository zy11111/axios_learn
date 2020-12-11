import axios from axios;
import service from './contactApi'
import { Toast } from 'vant'

let instance = axios.create({
  baseURL: 'http:localhost:9000/api'，
  timeout: 1000
})

const Http = {};  // 包裹请求方法的容器

// // 遍历循环 service对象 输出不同的请求方法
// for(var key in service) {

// }