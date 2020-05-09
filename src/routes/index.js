import Index from '../pages/index/index.vue'
import CateList from  '../pages/cateList/cateList.vue'
import Topic from '../pages/topic/topic.vue'
import Cart from '../pages/cart/cart.vue'
import Personal from '../pages/personal/personal.vue'
import Login from '../pages/login/login.vue'
import Search from '../pages/search/search.vue'

export default [
    {path:"/Index",component:Index},
    {path:"/CateList",component:CateList},
    {path:"/Topic",component:Topic},
    {path:"/Cart",component:Cart},
    {path:"/Personal",component:Personal},
    {path:"/Login",component:Login},
    {path:"/Search",component:Search},
    {path:"/",redirect:"/Index"}
]