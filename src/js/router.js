import login from '../component/login/login.vue'
import main from '../component/main/main.vue'
import cinema from '../component/cinema/cinema.vue'
import find from '../component/find/find.vue'
import my from '../component/my/my.vue'
import movie from '../component/movie/movie.vue'

module.exports = {
    routes: [{
        path: '/',
        redirect: '/login'
    },{
        path: '/main',
        redirect: '/main/movie'
    },{
        path: '/login',
        component: login
    },{
        path:'/main',
        component:main,
        children:[{
            path:'movie',
            component:movie,
            beforeEnter: (to, from, next) => {
                console.log('12');
                setTimeout(function () {
                    next();
                },1000)
            }
        },{
            path:'cinema',
            component:cinema,
        },{
            path:'find',
            component:find,
        },{
            path:'my',
            component:my,
        }]
    }],
    linkActiveClass: 'active'
}