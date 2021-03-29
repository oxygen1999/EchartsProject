import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'



// create an axios instance
const service = axios.create({
    baseURL: SERVER_BASE_URL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    // 设置10s超时
    timeout: 10000, // request timeout
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        console.log(store.getters)
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['token'] = getToken()

        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.rtnCode !== 200 && res.rtnCode !== 501) {

            if (res.rtnCode == 401) {
                MessageBox.confirm('登录失效,请重新登录', {
                    closeOnClickModal: false,
                    confirmButtonText: '去登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    store.dispatch('user/resetToken').then(() => {
                        // location.reload()
                        location.href = LOGIN_HREF;
                    })
                })
            } else if (res.rtnCode == 402) {
                return res;
            } else {
                Message({
                    message: res.msg,
                    type: 'error',
                    duration: 3 * 1000
                })
            }

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            // if (res.rtnCode === 50008 || res.rtnCode === 50012 || res.rtnCode === 50014) {
            //   // to re-login
            //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
            //     confirmButtonText: 'Re-Login',
            //     cancelButtonText: 'Cancel',
            //     type: 'warning'
            //   }).then(() => {
            //     store.dispatch('user/resetToken').then(() => {
            //       location.reload()
            //     })
            //   })
            // }
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        var mes = ''
        if (error.message.includes('timeout')) {
            mes = '请求超时'
        } else {
            mes = '请求失败'
        }
        Message({
            // message: error.message,
            message: mes,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)

export default service