import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Classify from '@/components/category/classify'
import Goods from '@/components/category/goods'
import ShopCar from '@/components/car/shopCar'
import Usercenter from '@/components/user/userCenter'
import ProductDetail from '@/components/productDetail/productDetails'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/classify/:id',
      name: "goods",
      component: Goods,
      meta: {
        title: '商品'
      }
    },
    {
      path: '/car',
      name: 'shopCar',
      component: ShopCar,
      meta: {
        title: '购物车'
      }
    },
  {
      path: '/center',
      name: 'user-center',
      component: Usercenter,
      meta: {
        title: '个人中心'
      }
    },
  {
      path: '/prodetail',
      name: 'product-details',
      component: ProductDetail,
      meta: {
        title: '商品详情'
      }
    }
  ]
})
