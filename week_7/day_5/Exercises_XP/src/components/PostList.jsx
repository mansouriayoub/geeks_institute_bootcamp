import { useEffect, useState } from 'react';
import axios from 'axios'

const PostList =()=>{
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('../data.json')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <ul>
            <li key={item.id} >{item.content}</li>
        </ul>
        )
      )
      } 
    </div>
    )
    
}
export default PostList