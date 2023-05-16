import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
          fetch('http://localhost:8000/blogs')
          .then(res => {
          return res.json()
          })
          .then(data => {
            setBlogs(data);
            setIsLoading(false);
          });
          // console.log('useEffect ran')
          // console.log(blogs);
          // console.log(name);
          }, 1000);
    }, []);

    return (
      <div className="home">
         {isLoading && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    );
}

export default Home;