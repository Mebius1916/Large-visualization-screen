import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

import 'element-plus/dist/index.css'

import './main.less'

router.beforeEach((to, from, next) => {
  const password = localStorage.getItem('test_password');
  if (!['/', 'Login'].includes(to.name as string) && password != '132511') next({ name: 'Login' })
  else next()
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
