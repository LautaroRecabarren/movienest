// store/index.js
export const state = () => ({
  // ...
  user: null
})

export const mutations = {
  // ...
  setUser(state, user) {
    state.user = user
  }
}

// store/movies.js


export const state = () => ({
    movies: [],
    user: null
  })

  export const mutations = {
    setMovies(state, movies) {
      state.movies = movies
    },
    addMovie(state, movie) {
      state.movies.push(movie)
    },
    updateMovie(state, updatedMovie) {
      const index = state.movies.findIndex(movie => movie.id === updatedMovie.id)
      if (index !== -1) {
        state.movies[index] = updatedMovie
      }
    },
    deleteMovie(state, movieId) {
      state.movies = state.movies.filter(movie => movie.id !== movieId)
    },
    setUser(state, user) {
      state.user = user
    }
  }