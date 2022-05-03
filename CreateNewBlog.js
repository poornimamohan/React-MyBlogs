import React, { useState, useEffect} from 'react';

const CreateBlog = ({blogs, setBlogs}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    useEffect(() => {
        console.log("inside create blogs")
    },[])
    const SampleBlog = {}

    const handleSave = () => {
        SampleBlog.id = Math.random().toString()
        SampleBlog.title = title
        SampleBlog.text = content
        
        setBlogs([...blogs, SampleBlog])
    }
    return(<div className="create-blog-wrapper">
                <div className="create-blog-titleWrapper">
                    <label className="create-blog-label">Title: </label>
                    <input type="text" className="create-blog-title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="create-blog-textWrapper">
                    <label className="create-blog-label">Content: </label>
                    <input type="text-area" className="create-blog-text" onChange={(e) => setContent(e.target.value)}/>
                </div>
                <button className="create-blog-save" onClick={() => handleSave()}>Save Blog</button>
        </div>
    ) 
};

export default CreateBlog