import Vue from 'vue'
import Router from 'vue-router'

//非登录路由
const Login = ()=> import('@/views/login/Login')
const Register = ()=> import('@/views/register/Register');
const Silingsi = ()=> import('@/views/components/404');

//主路由
const Home = ()=> import('@/views/home/Home');
const Common = ()=> import('@/views/home/Common');

//文档路由
const ElementUIFormat = ()=> import('@/views/doc/ElementUIFormat');
const Design = ()=> import('@/views/doc/Design');
const WebStandard = ()=> import('@/views/doc/WebStandard');
const Print = ()=> import('@/views/doc/print');


// 首页栏目下的 二级目录路由
const Shouye1 = ()=> import('@/views/home/project-shouye/shouye1');
const Shouye2 = ()=> import('@/views/home/project-shouye/shouye2');
const Shouye3 = ()=> import('@/views/home/project-shouye/shouye3');
const Shouye4 = ()=> import('@/views/home/project-shouye/shouye4');
const Shouye5 = ()=> import('@/views/home/project-shouye/shouye5');


// 天  二级目录路由
const Tian1 = ()=> import('@/views/home/project-tian/tian1');
const Tian2 = ()=> import('@/views/home/project-tian/tian2');
const Tian3 = ()=> import('@/views/home/project-tian/tian3');
const Tian4 = ()=> import('@/views/home/project-tian/tian4');
const Tian5 = ()=> import('@/views/home/project-tian/tian5');
const Tian6 = ()=> import('@/views/home/project-tian/tian6');
const Tian7 = ()=> import('@/views/home/project-tian/tian7');
const Tian8 = ()=> import('@/views/home/project-tian/tian8');
const Tian9 = ()=> import('@/views/home/project-tian/tian9');
const Tian10 = ()=> import('@/views/home/project-tian/tian10');
const Tian11 = ()=> import('@/views/home/project-tian/tian11');
const Tian12 = ()=> import('@/views/home/project-tian/tian12');


// 地  二级目录路由
const Di1 = ()=> import('@/views/home/project-di/di1');
const Di2 = ()=> import('@/views/home/project-di/di2');
const Di3 = ()=> import('@/views/home/project-di/di3');
const Di4 = ()=> import('@/views/home/project-di/di4');
const Di5 = ()=> import('@/views/home/project-di/di5');
const Di6 = ()=> import('@/views/home/project-di/di6');


// 玄  二级目录路由
const Xuan1 = ()=> import('@/views/home/project-xuan/xuan1');
const Xuan2 = ()=> import('@/views/home/project-xuan/xuan2');
const Xuan3 = ()=> import('@/views/home/project-xuan/xuan3');


// 黄  二级目录路由
const Huang1 = ()=> import('@/views/home/project-huang/huang1');
const Huang2 = ()=> import('@/views/home/project-huang/huang2');


// 去掉header和aside的登录页面路由
const Duli = ()=> import('@/views/home/independent/duli');


Vue.use(Router);

let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path:'/',
      name:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/silingsi',
      name: 'silingsi',
      component: Silingsi
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Home,
      children:[

        //首页栏目--菜单 路由
        {
          path: 'shouye/shouye1',
          name: 'shouye1',
          meta:{
             requireAuth: true,
           },
          component: Shouye1
        },
        {
          path: 'shouye/shouye2',
          name: 'shouye2',
          meta:{
             requireAuth: true,
           },
          component: Shouye2
        },
        {
          path: 'shouye/shouye3',
          name: 'shouye3',
          meta:{
             requireAuth: true,
           },
          component: Shouye3
        },
        {
          path: 'shouye/shouye4',
          name: 'shouye4',
          meta:{
             requireAuth: true,
           },
          component: Shouye4
        },
        {
          path: 'shouye/shouye5',
          name: 'shouye5',
          meta:{
             requireAuth: true,
           },
          component: Shouye5
        },



        // 
        {
          path: 'tian/tian1',
          name: 'tian1',
          meta:{
             requireAuth: true,
           },
          component: Tian1
        },
        {
          path: 'tian/tian2',
          name: 'tian2',
          meta:{
             requireAuth: true,
           },
          component: Tian2
        },
        {
          path: 'tian/tian3',
          name: 'tian3',
          meta:{
             requireAuth: true,
           },
          component: Tian3
        },
        {
          path: 'tian/tian4',
          name: 'tian4',
          meta:{
             requireAuth: true,
           },
          component: Tian4
        },
        {
          path: 'tian/tian5',
          name: 'tian5',
          meta:{
             requireAuth: true,
           },
          component: Tian5
        },
        {
          path: 'tian/tian6',
          name: 'tian6',
          meta:{
             requireAuth: true,
           },
          component: Tian6
        },
        {
          path: 'tian/tian7',
          name: 'tian7',
          meta:{
             requireAuth: true,
           },
          component: Tian7
        },
        {
          path: 'tian/tian8',
          name: 'tian8',
          meta:{
             requireAuth: true,
           },
          component: Tian8
        },
        {
          path: 'tian/tian9',
          name: 'tian9',
          meta:{
             requireAuth: true,
           },
          component: Tian9
        },
        {
          path: 'tian/tian10',
          name: 'tian10',
          meta:{
             requireAuth: true,
           },
          component: Tian10
        },
        {
          path: 'tian/tian11',
          name: 'tian11',
          meta:{
             requireAuth: true,
           },
          component: Tian11
        },
        {
          path: 'tian/tian12',
          name: 'tian12',
          meta:{
             requireAuth: true,
           },
          component: Tian12
        },



        //地
        {
          path: 'di/di1',
          name: 'di1',
          meta:{
             requireAuth: true,
           },
          component: Di1
        },
        {
          path: 'di/di2',
          name: 'di2',
          meta:{
             requireAuth: true,
           },
          component: Di2
        },
        {
          path: 'di/di3',
          name: 'di3',
          meta:{
             requireAuth: true,
           },
          component: Di3
        },
        {
          path: 'di/di4',
          name: 'di4',
          meta:{
             requireAuth: true,
           },
          component: Di4
        },
        {
          path: 'di/di5',
          name: 'di5',
          meta:{
             requireAuth: true,
           },
          component: Di5
        },
        {
          path: 'di/di6',
          name: 'di6',
          meta:{
             requireAuth: true,
           },
          component: Di6
        },


        //玄
        {
          path: 'xuan/xuan1',
          name: 'xuan1',
          meta:{
             requireAuth: true,
           },
          component: Xuan1
        },
        {
          path: 'xuan/xuan2',
          name: 'xuan2',
          meta:{
             requireAuth: true,
           },
          component: Xuan2
        },
        {
          path: 'xuan/xuan3',
          name: 'xuan3',
          meta:{
             requireAuth: true,
           },
          component: Xuan3
        },

        //黄
        {
          path: 'huang/huang1',
          name: 'huang1',
          meta:{
             requireAuth: true,
           },
          component: Huang1
        },
        {
          path: 'huang/huang2',
          name: 'huang2',
          meta:{
             requireAuth: true,
           },
          component: Huang2
        },

        {path:'*',component:Silingsi},
      ]
    },
    {
      path: '/common',
      name: 'common',
      meta:{
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Common,
      children:[
        {
          path: 'independent/duli',
          name: 'duli',
          meta:{
             requireAuth: true,
           },
          component: Duli
        },
      ]
    },
    {
      path: '/doc/elementuiformat',
      name: 'elementuiformat',
      component: ElementUIFormat
    },
    {
      path: '/doc/design',
      name: 'design',
      component: Design
    },
    {
      path: '/doc/webstandard',
      name: 'webstandard',
      component: WebStandard
    },
    {
      path: '/doc/print',
      name: 'print',
      component: Print
    },
  ]
})

//登录拦截
router.beforeEach((to,from,next)=>{
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    if(to.matched.length === 0) {
        //如果未匹配到路由
        if(from.path){
          next({ path:from.path });
        }else {
          next('/login');
        }
        //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    }else if (to.meta.requireAuth) {
        //是否存在登录的标志
        if(localStorage.getItem('hasLogin')){
            next();
        }else{
            next({
                path:'/login'
            })
        }
    }else{
        next();
    }
})

//切换页面时，页面停止在顶部
router.afterEach((to, from, next) => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
});


export default router;
