import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state : {
        movie: [],
        favorites: [],
        favoriteBaseURL: "http://localhost:3000",
    },
    mutations : {
        searchMovie(state, sMovie){
            state.movie = sMovie;
        },
        addFavorite(state, fMovie) {
            state.favorites.push(fMovie);
        },
        setFavorites(state, fMovies) {
            state.favorites = fMovies;
        },
        deleteFavorites(state, dmovie) {
            state.favorites = state.favorites.filter(i => i.id !== dmovie.id);
        }
    },
    actions : {
        searchMovie({commit, state}, name){
            axios
                .get(`http://www.omdbapi.com/?i=tt3896198&apikey=274b77b3&s=${name}`)
                .then(requests => {
                    commit("searchMovie", requests.data.Search  || [])
                    console.log("Requests", requests.data.Search);
                })
                .catch(e => console.log(e))
        },
        addFavorite({commit, state}, movie) {
            axios
                .post(`${state.favoriteBaseURL}/favourite_list`, movie)
                .then((favorite_response) => {
                    commit("addFavorite", favorite_response.data);
                });
        },
        initFavorites({ commit, state }) {
            axios
                .get(`${state.favoriteBaseURL}/favourite_list`)
                .then((favorites_response) => {
                    console.log("favorites_response", favorites_response);
                    commit("setFavorites", favorites_response.data || []);
                });
        },
        deleteFavourite({ commit, state }, movie){
            axios
                .delete(`${state.favoriteBaseURL}/favourite_list/${movie.id}`)
                .then(movie_delete_response => {
                    console.log("movie_delete_response", movie_delete_response);
                    commit("deleteFavorites", movie);
            });
        }
    },
    getters : {
        favoriteList: (state) => state.favorites,
        movieList: (state) => state.movie,
    }
})