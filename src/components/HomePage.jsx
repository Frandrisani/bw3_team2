import { getPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardHome from "./CardHome";

const HomePage = () => {
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state);
  const spinner = useSelector((state) => state.postsReducer.isLoading);
  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  {
    spinner === false ? console.log("test", allPost) : null;
  }
  return (
    <>
      <CardHome />
    </>
  );
};
export default HomePage;
