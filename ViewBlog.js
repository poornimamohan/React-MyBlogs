import React, { useState, useEffect} from 'react';

const ViewBlog = ({blog, setBlogs, blogs}) => {
    useEffect(() => {
        console.log("inside View blogs")
      console.log(blog);
    },[blog])
    const handleDelete = (blog) => {
        console.log("inside delete")
        let index = 0;
        for(let i =0; i< blogs.length; i++){
            if(blogs[i].id == blog.id){
                index = i;
                break;
            }
        }
        blogs.splice(index,1)
        setBlogs(blogs)
        console.log(blogs)
    }
    return(<>
            <div key={blog.id}>
                <p className="blog-title" >{blog.title}</p>
                <p className="blog-text">{blog.text}</p>
                   
            </div>
        </>
    ) 
};

export default ViewBlog