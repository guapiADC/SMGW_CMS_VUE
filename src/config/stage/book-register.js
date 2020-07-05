const bookRegisterRouter = {
  route: null,
  name: null,
  title: '图书管理（智联）',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/book-register/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加图书',
      type: 'view',
      name: 'BookRegisterCreate',
      route: '/bookregister/add',
      filePath: 'view/book-register/book-register-create.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '图书列表',
      type: 'view',
      name: 'BookRegisterCreate',
      route: '/bookregister/list',
      filePath: 'view/book-register/book-register-list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default bookRegisterRouter
