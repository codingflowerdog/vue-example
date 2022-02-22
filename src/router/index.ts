import Vue from 'vue'
import VueRouter, {NavigationGuardNext, Route, RouteConfig} from 'vue-router'
import {exampleRoutes} from "@/router/example";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [];

// 예제 라우트 정보 추가
routes.push(...exampleRoutes);

// 예외 라우트 설정
routes.push( {
    path: "*",
    redirect: "/"
})

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 라우트 가드 설정
router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
    next();
})

export default router
