import { FETCH_MOVIES } from "./AllActions";

export const fetchHomePageMovies = () => {
  return (dispatch) => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a015017a&s=batman")
      .then((res) => res.json())
      .then((data) => {
        console.log("inital data", data);
        dispatch({
          type: FETCH_MOVIES,
          payload: {
            initialsMovies: data,
            description: "provides home page initials  movie data",
          },
        });
      });
  };
};
