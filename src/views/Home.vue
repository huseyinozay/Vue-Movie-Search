<template>
    <div >
        <input
            type="text"
            autofocus
            placeholder="Film adını yazın ve enter tuşuna basın..."
            class="search_text"
            @keyup.enter = "searchMovie($event.target.value)"
        />
        <movie-card
          v-for="m in movie"
          :key= " m.imdbID "
          :movie="m"
          :favouriteList="favouriteList"

        />
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import movieCard from "@/components/movieCard";
export default {
    components: {
        movieCard,
    },

    created() {
        this.$store.dispatch("initFavorites");
        },

    methods:{
        ...mapActions(["searchMovie"])
    },

    computed: {
        ...mapGetters({
            movie: "movieList",
            favouriteList: "favoriteList"
        }),
    },

}
</script>