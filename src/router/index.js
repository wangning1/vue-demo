import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import ProductList from '@/views/goods/ProductList'
import Detail from '@/views/goods/Detail'

Vue.use(Router)

export const asyncRouterMap = [
  {
    path: '/productList',
    component: ProductList,
    name: 'productList',
    meta: { title: '商品列表', icon: 'product' }
  },
  {
    path: '/detail',
    component: Detail,
    name: 'detail',
    meta: { title: '商品详情', icon: 'product' }
  }
]

export default new Router({
  routes: [
    {
      path: '',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index')
        }, {
          path: '/productList',
          component: ProductList,
          name: 'productList',
          meta: { title: '商品列表', icon: 'product' }
        }, {
          path: '/detail',
          component: Detail,
          name: 'detail',
          meta: { title: '商品详情', icon: 'product' }
        }

      ]
    }

  ]
})
