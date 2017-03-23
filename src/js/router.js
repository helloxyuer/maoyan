import login from '../component/login.vue'
import main from '../component/main.vue'
import cinema from '../component/cinema.vue'
import find from '../component/find.vue'
import my from '../component/my.vue'
import movie from '../component/movie.vue'
import Weather from '../component/weather.vue'
import Jocker from '../component/jocker.vue'
import Today from '../component/today.vue'
import details from '../component/details.vue'
import cinemadetails from '../component/cinemadetails.vue'

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
                next();
            }
        },{
            path:'cinema',
            component:cinema,
        },{
            path:'find',
            component:find,
            children:[{
                path: '/',
                components: {
                    default:Weather,
                    today:Today,
                    jocker:Jocker
                }
            }]
        },{
            path:'my',
            component:my,
        }]
    },{
        path: '/moveDetails/:movieid',
        name:'movieDetails',
        component: details
    },{
        path: '/cinemaDetails/:cinemaid',
        name:'cinemaDetails',
        component: cinemadetails

    }],
    linkActiveClass: 'active'
}