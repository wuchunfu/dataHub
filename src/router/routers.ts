import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));

export const routers = [
    {
        element:Home,
        key:'home',
        path:'./home',
        title:'首页'
    }
];