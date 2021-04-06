/*
 * @Author: LIn bowen
 * @Date: 2021-04-01 14:13:25
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-04-06 16:16:01
 * @Descripttion:
 */
export default [
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
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: './Test',
  // },
  {
    path: '/custom',
    name: 'custom',
    component: './CustomComps',
  },
  {
    path: '/map',
    name: 'maptest',
    component: './MapPage',
  },
  {
    component: './404',
  },
];
