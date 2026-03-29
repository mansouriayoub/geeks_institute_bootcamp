import PostList from "./PostList";
import data from "../data.json";
import Examples from "./Examples";

const HomeScreen = () => {
  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <PostList data={data} />
        <Examples />
      </div>
    </>
  );
};
export default HomeScreen;
