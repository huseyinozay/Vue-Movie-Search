<template>
    <div>
        <div id="movies">
            <div class="movie-container">
                <div class="image-container">
                    <img :src= movie.Poster  />
                </div>
                <div class="info">
                    <h3 class="title"> {{movie.Title}} </h3>
                    <p> {{movie.Year}} </p>
                    <div class="action_container">
                    <i 
                        @click="heart = !heart, deleteFavourite()" 
                        class="isFavourite fa fa-heart" 
                        :class="{'is_favourite':heart}" 
                        
                    ></i>
                    <a target="_blank" class="button" :href="'https://www.imdb.com/title/' + movie.imdbID ">IMDb</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["movie"],
    data(){
        return{
            heart : true
        }
    },

    methods: {
        deleteFavourite(){
            this.$store.dispatch("deleteFavourite", this.movie)
        }
    }
}
</script>