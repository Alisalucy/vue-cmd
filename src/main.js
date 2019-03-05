
/* mui */
import './lib/mui/css/mui.min.css'
/* mui-icon */
import './lib/mui/css/icons-extra.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios

/* 时间格式化 */
import moment from 'moment'

/* mint-ui */
import 'mint-ui/lib/style.css'
import { Header, Button, Swipe, SwipeItem } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
// Vue.component(InfiniteScroll.name, InfiniteScroll)

Vue.config.productionTip = false

Vue.filter('dataform', function (startDate, patten = "YYYY-MM-DD HH:mm:ss") {
  return moment(startDate).format(patten)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
