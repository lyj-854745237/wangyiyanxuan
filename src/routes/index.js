import Index from '../pages/index/index.vue'
import CateList from  '../pages/cateList/cateList.vue'
import Topic from '../pages/topic/topic.vue'
import Cart from '../pages/cart/cart.vue'
import Personal from '../pages/personal/personal.vue'
import Login from '../pages/login/login.vue'
import Search from '../pages/search/search.vue'

export default [
    {path:"/Index",component:Index,meta:{showFooter:true}},
    {path:"/CateList",component:CateList,meta:{showFooter:true}},
    {
        path:"/Topic",
        component:Topic,
        name:"topic",
        meta:{showFooter:true}
    },
    {path:"/Cart",component:Cart,meta:{showFooter:true}},
    {path:"/Personal",component:Personal,meta:{showFooter:false}},
    {path:"/Login",component:Login},
    {path:"/Search",component:Search},
    {path:"/",redirect:"/Index"}
]