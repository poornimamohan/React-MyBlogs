import React, { useState, useEffect} from 'react';
import ViewBlog from './ViewBlog';
import { BrowserRouter, Path, Router, Switch} from 'react-router';
import CreateBlog from './CreateNewBlog';

const Blog = ({blogs, setBlogs}) => {
    const [showBlogContent, setShowBlogContent] = useState(false)
    const [blog, setBlog] = useState("")
    const [createBlog, setCreateBlog] = useState(false)
    let blogsLength = blogs.length;
    useEffect(() => {
        console.log("inside blogs component")
        console.log(blogs.length)
    },[blogs])
    const handleBlogClick = (blog) =>{
        setBlog(blog)
        setCreateBlog(false)
        setShowBlogContent(true)
    }
    const createNewBlog = () => {
        // Must be handled with router
        setBlog("") 
        setCreateBlog(true)
    }

    const handleDelete = (blog) =>{
        let index = 0;
        for(let i = 0; i<blogs.length; i++){
            if(blogs[i].id == blog.id){
                index = i;
                break;
            }
        }
        blogs.splice(index,1)
        console.log(blogs)
        setBlogs(blogs)
    }
    // it is better to add all these as part of navbar and use react router to display Content
    // to complete this in given time, just using basic design
    return(<>
    
    <a className="create-blog" onClick={() => createNewBlog()}>Create New Blog</a>
        {blogs && blogs.map((blog) => {
            return(
                <div className="blog-content" key={blog.id}>
                    <button className="view-blog" onClick={() => handleBlogClick(blog)}>View Blog</button>
                                   
                    <a className="blog-title" onClick={() => handleBlogClick(blog)}>{blog.title}</a>
                    
                    <hr />
                </div>
            )
        })}
        <hr />
        {showBlogContent && (<>
                {blog && (<>
                <h2 className="blog-details">Blog Details</h2>
                <button className="blog-delete" onClick={() => setShowBlogContent(false)} >Go Back Blog Details</button>
                <button className="blog-delete" onClick={() => handleDelete(blog)} >Delete Blog</button>  
                </>
                )}
                <ViewBlog blog={blog} setBlogs={setBlogs} blogs={blogs}/> 
                  
                </>)
        } 
        {createBlog && <>
                    <h2 className="blog-details">Create Blog</h2>
                    <CreateBlog blogs={blogs} setBlogs={setBlogs}/> 
                    </>
                }
        </>
    ) 
};

export default Blog