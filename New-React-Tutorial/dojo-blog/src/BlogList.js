const BlogList = (props) => {
    
    // access props on the object
    const blogs = props.blogs

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title } </h2>
                    <p>By { blog.author} </p>

                </div>
            ))}
        </div>
    );
}

export default BlogList;