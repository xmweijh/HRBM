// 导出属于社保的路由规则
// 详细注释在employees中
import Layout from '@/layout'
export default {
  path: '/social_securitys',
  name: 'social_securitys',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}

