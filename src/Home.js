import {useState} from 'react';
import PostList from './PostList';

const Home = () => {
    const [posts, setPosts] = useState([
        {title: 'Title 1', body: 'post body', author: 'Poitier', id: 1},
        {title: 'Title 2', body: 'post body', author: 'Poitier', id: 2},
        {title: 'Title 3', body: 'post body', author: 'Poitier', id: 3},
    ]);

    return ( 
        <div className='home'>
            <h1>Home</h1>
            <PostList posts={posts} />
        </div>
    );
}
 
export default Home
