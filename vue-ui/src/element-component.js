// 专门用来引入 element 组件
import Vue from "vue"
import { Button, Progress, Switch, Pagination } from "element-ui"
Vue.component(Button.name, Button)
Vue.component(Progress.name, Progress)
Vue.component(Switch.name, Switch)
Vue.component(Pagination.name, Pagination)
