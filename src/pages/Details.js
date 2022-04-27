import { display } from '@mui/system'
import React,{useContext,useState} from 'react'
import { useParams ,Link, useLocation,useNavigate} from 'react-router-dom'
import { BlogContext } from '../context/BlogContext'


const Details = () => {

  const handleDelete =()=>{
    navigate("/")
    DeleteBlog(blog.id)

  }

  const handleUpdate=(item)=>{
    navigate(`/updateblog/${item.id}`, {state:{item}} )
    dataBlog()

  }

  
  const location = useLocation()
  const navigate = useNavigate()
  const blog = location.state.item
  const {DeleteBlog,dataBlog} = useContext(BlogContext)

  return (
    <>
    {(
    <div style={{marginTop:"2rem", display:"flex", justifyContent:"center" }}>   

  <div className="card" style={{width: "25rem"}}>
  <img src={blog.image } class="card-img-top" alt="..."/>
  <div className="card-body">
  <h2 className="card-title">{blog.title}</h2>
    <p className="card-text">{blog.content}</p>
  <div class="btn-group" style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", alignItems:"flex-end"}} role="group" aria-label="Basic mixed styles example">
  <button onClick={()=>handleUpdate(blog)} type="button" class="btn btn-primary">UPDATE</button>
  <button onClick={handleDelete}  type="button" class="btn btn-danger">DELETE</button>
</div>
  </div>
</div>
  
    </div>)}

   

    </>


  )
}

export default Details