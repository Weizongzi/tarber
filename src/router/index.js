import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../views/home/Home.vue')
const Fenlei = ()=>import('../views/fenlei/fenlei.vue')

//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/fenlei',
    component:Fenlei
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})
//导出
export default router