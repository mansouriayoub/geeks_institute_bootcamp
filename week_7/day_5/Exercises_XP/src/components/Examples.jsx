import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import data from '../dataObj.json'

const Examples = () => {
  return (
    <>
      <Example1 data={data} />
      <Example2 data={data} />
      <Example3 data={data} />
    </>
  );
};
export default Examples