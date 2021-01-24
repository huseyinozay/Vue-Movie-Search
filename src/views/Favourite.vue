<template>
    <div id="app">

      <favourite-movie-card 
        v-for="movie in movies"
        :key="movie.id"
        :movie ="movie"
        @movie-delete="refreshList"
      />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import favouriteMovieCard from "@/components/favouriteMovieCard";

export default {

  components: {
    favouriteMovieCard
  }, 

  methods: {
    refreshList() {
      this.$store.dispatch("initFavorites");
    }
  },

  computed: {
    ...mapGetters({
      movies: "favoriteList",
    }),
  },

  created() {
    this.$store.dispatch("initFavorites");
    },
  
}
</script>