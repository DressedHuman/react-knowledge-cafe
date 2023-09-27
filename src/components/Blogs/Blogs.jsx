import { useEffect } from "react";
import { useState } from "react";
import { Blog } from "../Blog/Blog";
import PropTypes from "prop-types"

const Blogs = ({handleAddToBookmarks, handleAddToRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])


    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-20 m-7 mt-0">
                {
                    blogs.map(blog => <Blog 
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmarks={handleAddToBookmarks}
                        handleAddToRead={handleAddToRead}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks : PropTypes.func.isRequired,
    handleAddToRead: PropTypes.func.isRequired,
}

export default Blogs;