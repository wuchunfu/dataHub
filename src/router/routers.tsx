import  { lazy } from "react"
import { useRoutes } from "react-router-dom";
import SuspenseRoute from "./suspenseRoute";


const Login = lazy(() => import('@pages/login'))
const Home = lazy(() => import('@pages/home'));
const DataCenter = lazy(() => import('@pages/dataCenter'))
export const router = [
  {
    element:Home,
    keepAlive:true,
    label:'首页',
    key:'home',
    path:'/',
  },
  {
    element:Login,
    keepAlive:true,
    label:'登录',
    key:'login',
    path:'/login'
  },
  {
    element:DataCenter,
    keepAlive:true,
    label:'数据中台',
    key:'data-center',
    path:'/data-center'
  }
]

const BaseRoutes:React.FC = () => {
  return useRoutes(router.map(item => {
    return {
      path:item.path,
      element:<SuspenseRoute lazyChildren={item.element} title={item.label}/>
    }
  }))
}
export default BaseRoutes
