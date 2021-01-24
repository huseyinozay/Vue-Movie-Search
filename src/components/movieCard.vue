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
                        @click="addFavourite()" 
                        class="isFavourite fa fa-heart" 
                        :class="{'is_favourite':heart}" 
                        v-if = "favouriteList.filter((item)=>item.imdbID==this.movie.imdbID).length==0"
                        
                    ></i>
                    <i 
                        class="isFavourite fa fa-heart is_favourite" 
                        v-if = "favouriteList.filter((item)=>item.imdbID==this.movie.imdbID).length==1"
                        
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
    props: ["movie","favouriteList"],
    data(){
        return{
            heart : false,

        }
    },
    
    methods: {
        addFavourite(){
            if(this.heart == false){
                this.heart = !this.heart;
                this.$store.dispatch("addFavorite", this.movie);
            };
            
        },
    },

    
}
</script>