import { FETCH_MOVIES } from "../actions/AllActions.js";
const initialMovieState = {
  initialMovies: [],
};
export const MovieReducer = (state = initialMovieState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MOVIES: {
      return {
        ...state,
        initialMovies: [payload.initialMovies],
      };
    }
    default: {
      return state;
    }
  }
};
