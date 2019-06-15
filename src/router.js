import Vue from 'vue'
import Router from 'vue-router'
import Content from './components/Content.vue'
import i18n from './i18n'

Vue.use(Router)

let route = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'zh-CN'
      }
    }
  ]
})

Object.keys(i18n).forEach(lang => {
  route.addRoutes([
    {
      path: `/${lang}`,
      name: lang,
      component: Content
    }
  ])
})

export default route
