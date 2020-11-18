import NotFount from '@/views/notFount.vue'
import Page1 from '@/views/page1.vue'
import Page2 from '@/views/page2.vue'
import Page3 from '@/views/page3/page3.vue'

export default [
  {
    path: '/',
    component: Page1
  },
  {
    path: '/*',
    component: NotFount
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3
  }
]
