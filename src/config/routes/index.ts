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
        name: '精简查询表格',
        component: './table/simple',
      },
      {
        path: '/table/complex',
        name: '复杂查询表格',
        component: './table/complex',
      },
      {
        path: '/table/meta',
        name: '配置方式开发',
        component: './table/meta/index',
      },
      {
        name: '表格多选',
        path: '/table/selection',
        component: './table/selection/index',
      },
      {
        path: '/table/protable',
        name: 'ProTable 原生写法',
        component: './table/protable/index',
      },
    ],
  },
  {
    path: '/dynamic',
    name: 'Json动态渲染',
    icon: 'rh-icon-shiyongwendang',
    routes: [
      {
        path: '/dynamic/table',
        name: '表格',
        component: './dynamic/table/index',
      },
      {
        path: '/dynamic/descriptions',
        name: '高级详情页',
        component: './dynamic/descriptions/index',
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
