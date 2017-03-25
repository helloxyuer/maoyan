import login from '@/components/login'
import main from '@/components/main'
import cinema from '@/components/cinema'
import find from '@/components/find'
import my from '@/components/my'
import movie from '@/components/movie'
import Weather from '@/components/weather'
import Jocker from '@/components/jocker'
import Today from '@/components/today'
import details from '@/components/details'
import cinemadetails from '@/components/cinemadetails'

export default {
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/main',
    redirect: '/main/movie'
  }, {
    path: '/login',
    component: login
  }, {
    path: '/main',
    component: main,
    children: [{
      path: 'movie',
      component: movie,
      beforeEnter: (to, from, next) => {
        console.log('12');
        next();
      }
    }, {
      path: 'cinema',
      component: cinema,
    }, {
      path: 'find',
      component: find,
      children: [{
        path: '/',
        components: {
          default: Weather,
          today: Today,
          jocker: Jocker
        }
      }]
    }, {
      path: 'my',
      component: my,
    }]
  }, {
    path: '/moveDetails/:movieid',
    name: 'movieDetails',
    component: details
  }, {
    path: '/cinemaDetails/:cinemaid',
    name: 'cinemaDetails',
    component: cinemadetails

  }],
  linkActiveClass: 'active'
}
