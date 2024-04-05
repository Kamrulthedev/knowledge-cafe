import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PropTypes from 'prop-types';



const Blogs = ({handlerBookMarks, handlerReadingTime}) => {
    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">


                {
                  Blogs.map(Blog => <BlogCard key={Blog.id} Blog={Blog} handlerBookMarks={handlerBookMarks} handlerReadingTime={handlerReadingTime}></BlogCard>)
                }
        </div>
    );
};
Blogs.propTypes = {
    handlerBookMarks: PropTypes.func.isRequired
};

export default Blogs;