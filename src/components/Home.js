import { useEffect } from "react";
import { useDispatch, useSelector } from "react";
import { fetchHomePageMovies } from "../redux/actions/ShowedActions";
const Home = () => {
  const initialMovies = useSelector((state) => state.movies.initialMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageMovies());
  }, []);
  return (
    <>
      {initialMovies.map((movie) => (
        <p>{movie.Title}</p>
      ))}
    </>
  );
};
export default Home;
