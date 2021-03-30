/*
 * @Author: LIn bowen
 * @Date: 2021-03-02 09:04:24
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-03-30 15:29:51
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
            component: './User/login',
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
    path: '/numberInput',
    name: 'numberInput',
    icon: '一、',
    component: './Homework',
  },
  {
    path: '/map',
    name: 'map',
    icon: '二、',
    component: './Map',
    layout: {
      hideMenu: false,
      hideNav: false,
      hideFooter: true,
    },
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
  {
    component: './404',
  },
];
