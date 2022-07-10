const routes = [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },

  {
    path: '/welcome',
    name: '总览',
    icon: 'rh-icon-gongyezujian-yibiaopan',
    component: './dashboard/index',
  },
  {
    path: '/table',
    name: '表格示例',
    icon: 'rh-icon-liebiao',
    routes: [
      {
        path: '/table/simple',
        name: '有标题表格',
        component: './table/simple',
      },
      {
        path: '/table/complex',
        name: '复杂查询无标题',
        component: './table/complex',
      },
      {
        name: ' CRUD 示例',
        path: '/table/curd',
        component: './table/curd',
      },
      {
        path: '/table/mock',
        name: 'mock 表格',
        component: './table/mock',
      },
    ],
  },
  {
    path: '/form',
    name: '表单',
    icon: 'rh-icon-shiyongwendang',
    routes: [
      {
        path: '/form/basic',
        name: '基础表单',
        component: './form/basic-form',
      },
    ],
  },
  {
    path: '/charts',
    name: '图表',
    icon: 'rh-icon-tubiao-bingtu',
    component: './charts',
  },
  {
    name: '权限演示',
    path: '/access',
    icon: 'rh-icon-permission',
    component: './access',
  },
  {
    name: 'Github',
    path: 'https://github.com/giscafer/rh-template-umi.git',
    icon: 'rh-icon-permission',
    isExternal: true,
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/demo',
    component: './demo',
  },
  {
    component: './404',
  },
];

export default routes;
