/*
 * @Author: wangqiaoling
 * @Date: 2023-11-13 10:45:50
 * @LastEditTime: 2024-03-20 20:50:46
 * @LastEditors: wangqiaoling
 * @Description: 简单路由配置
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: async () => await import("../views/HomeView.vue"),
    children: [
      {
        path: "/home/collect",
        name: "Collect",
        component: async () => await import("../views/collect/Index.vue"),
      },
      {
        path: "/home/start",
        name: "Start",
        component: async () => await import("../views/start/Index.vue"),
      },
    ],
  },
  // {
  // 配置404页面
  // path: '/:catchAll(.*)',
  // name: '404',
  // component: () => import(''),
  // }
];
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 导出
export default router;
