// 时间过滤器   转化时间戳为正确格式
import Vue from 'vue'
import moment from 'moment'
Vue.filter('date-format', (value, formatStr) => {
    return moment(value).format(formatStr || 'YYYY-MM-DD HH:mm:ss')
})
  