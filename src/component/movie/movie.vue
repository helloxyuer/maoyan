<template>
    <div>
        <div></div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                movielist: ''
            }
        },
        created:function () {
            console.log('movieCcompentCreated');
            axios.get('http://localhost:8080/movie/list.json?type=hot&offset=0&limit=1000').then((res) => {
                console.log(res.data.seller);
                this.movielist = res.data.seller
            })
        },
        methods:function () {
            
        }
    }
</script>