import { getPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardHome from "./CardHome";

const HomePage = () => {
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.postsReducer.postsList);
  const spinner = useSelector((state) => state.postsReducer.isLoading);
  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <>
      <CardHome spinner={spinner} array={allPost.filter(((post, index) => post.image && index <=180)   )} />
    </>
  );
};
export default HomePage;
