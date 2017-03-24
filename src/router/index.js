import login from '../components/login.vue'
import main from '../components/main.vue'
import cinema from '../components/cinema.vue'
import find from '../components/find.vue'
import my from '../components/my.vue'
import movie from '../components/movie.vue'
import Weather from '../components/weather.vue'
import Jocker from '../components/jocker.vue'
import Today from '../components/today.vue'
import details from '../components/details.vue'
import cinemadetails from '../components/cinemadetails.vue'

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