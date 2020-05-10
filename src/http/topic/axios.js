import axios from 'axios'
import config from './config'

const axiosIns = axios.create({
    baseURL:config.baseUrl || '',
    timeout:config.timeout || 5000,
})
axiosIns.interceptors.request.use(
    (config)=>{
      config.hooks && config.hooks.beforeReq && config.hooks.beforeReq.call(config)
      return config
    }
)

axiosIns.interceptors.response.use(function (response) {
    config.hooks && config.hooks.afterReqSuccess && config.hooks.afterReqSuccess.call(config,response.data)
    return response.data;
  }, function (error) {
    config.hooks && config.hooks.afterReqFail && config.hooks.afterReqFail.call(config)
    return Promise.reject(error);
  });
  
  
  export default axiosIns;