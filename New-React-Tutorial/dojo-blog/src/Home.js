import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My travel blog', body: "follow me across the world...", author: 'Samantha', id: 1},
        {title: 'My cooking blog', body: "healthy meal-prepping...", author: 'Michael', id: 2},
        {title: 'My skincare blog', body: "get anti-aging routines...", author: 'Jane', id: 3},
    ]);

    return (
      <div className="home">
         <BlogList blogs={blogs} title="All Blogs!"/>
         <BlogList blogs={blogs.filter((blog) => blog.author === 'Jane')} title="Jane's Blogs"/>
      </div>
    );
}

// PREV (through tutorial #8, need to push to Github)
// const Home = () => {
//     // let name = 'mario';
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('luigi');
//         setAge(30);
//     }

//     // const handleClickAgain = (name) => {
//     //     console.log('hello ' + name);

//     // }

//     return ( 
//         <div className="class">
//             <h2>Homepage</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>Click me</button>
//             {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
//         </div>
//      );
// }
 
export default Home;