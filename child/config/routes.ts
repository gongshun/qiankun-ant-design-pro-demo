export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '子应用的欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '子应用的二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  { name: '子应用的查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
