import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My travel blog', body: "follow me across the world...", author: 'Samantha', id: 1},
        {title: 'My cooking blog', body: "healthy meal-prepping...", author: 'Michael', id: 2},
        {title: 'My skincare blog', body: "get anti-aging routines...", author: 'Jane', id: 3},
    ]);

    const [name, setName] = useState('Michael');

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs);
    }

    useEffect(() => {
      console.log('useEffect ran')
      // console.log(blogs);
      console.log(name);
    }, [name]);

    return (
      <div className="home">
         <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
         <button onClick = {() => setName('Fred')}>Change name</button>
         <p>{name}</p>
      </div>
    );
}

export default Home;