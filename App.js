import { useState, useContext, useEffect } from 'react';
import './App.css';
import Blog from './Blog';

function App() {
  const [blogs, setBlogs] = useState("")
  
    const fetchBlogData = async() => {
      const data = await fetch("https://restedblog.herokuapp.com/poornima/api/")
      const jsonData = await data.json()
      setBlogs(jsonData)
    }
    useEffect(() => {
      fetchBlogData()
      
    }, [])
    
  return(
      <>
    <h1>My Blog</h1>
    <div className="article">
      <Blog blogs={blogs} setBlogs={setBlogs}/>
    </div>
    </>
  )
}

export default App;
