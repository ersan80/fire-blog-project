import { display } from '@mui/system'
import React,{useContext,useState} from 'react'
import { useParams ,Link, useLocation} from 'react-router-dom'
import { BlogContext } from '../context/BlogContext'


const Detailss = () => {
  const {index} = useParams()
  console.log(index);
  
  const {data} = useContext(BlogContext)
console.log(data);
  return (
   
  
    <div style={{marginTop:"2rem", display:"flex", justifyContent:"center" }}>   

  <div className="card" style={{width: "25rem"}}>
  <img src={data[index].image } class="card-img-top" alt="..."/>
  <div className="card-body">
  <h2 className="card-title">{data[index].title}</h2>
    <p className="card-text">{data[index].content}</p>
    <Link to={-1}>Go Back</Link>
   
  </div>
</div>
  
    </div>

   




  )
}

export default Detailss