import axios from 'axios';

export const fetchPosts = async ()=>{
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log(res.data);
        return res.data;
        
    } catch (err) {
        console.error('Error fetching data', err);
    }
}
