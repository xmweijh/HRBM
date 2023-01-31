// 导出属于权限管理的路由规则
// 详细注释在employees中
import Layout from '@/layout'
export default {
  path: '/permissions',
  name: 'permissions',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/permissions'),
    meta: {
      title: '权限管理'
    }
  }]
}

