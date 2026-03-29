import PostList from "./PostList";
import data from '../data.json'

const HomeScreen = () => {
  return (
    <>
      <h1>Home</h1>
      <PostList data={data} />
    </>
  );
};
export default HomeScreen;
