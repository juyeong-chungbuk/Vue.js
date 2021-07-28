import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';

const routes = [ // 위에 쓸수록 라우터 우선순위를 가짐
    {
        path : "/list", // 이 경로로 접속하면 
        component : List,   // 이 컴포넌트로 넘어가게 해주세요
    },
    {
        path : "/home",
        component : Home, 
    },
    {
        path : "/detail/:id",   //detail/:아무문자
        // path : "/detail/:id(\\d+)"  --> 숫자만 찾아주는 정규식 문법
        component : Detail,
    },
    {
        path : "/:asdf",    // 404 페이지 만들기
        component : Home,   // 404 컴포넌트
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;