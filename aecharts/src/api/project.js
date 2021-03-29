/*
 * @Author: angula
 * @Date: 2021-03-29 11:39:51
 * @LastEditTime: 2021-03-29 11:48:40
 * @FilePath: \BOSS测试vue\echartsProject\aecharts\src\api\project.js
 */
// import request from './request'
export function getTitleStat(data) {
  return request({
    url: 'http://192.168.1.180:8080/baseline-gateway/gateway/invoiceAuth/titleStat',
    method: 'get',
    params: data
  })
}