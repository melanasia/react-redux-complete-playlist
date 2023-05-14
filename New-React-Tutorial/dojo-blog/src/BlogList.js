const BlogList = ({blogs, title}) => {
    
    // access props on the object:
    // const blogs = props.blogs;
    // const title = props.title;
    // destructure the above (props) into ({blogs, title})

    // you don't put handleDelete here because you don't want to directly edit the blog's prop
    // instead we use the setBlogs method within the Home component to update the state

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>By { blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;