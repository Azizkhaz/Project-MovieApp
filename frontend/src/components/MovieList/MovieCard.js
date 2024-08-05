import React from 'react'
import { removeovie } from '../../api/movieApi'
import {useNavigate} from "react-router-dom"

function MovieCard({el, getMovie}) {
  
  const removeM=async()=>{
    await removeovie(el._id)
    getMovie()
   }
   
   const navigate = useNavigate()

  return (
    
    <div className="card">
  <img
    src={el.image}
    alt=""
    className="card-img"
  />
  <div className="card-content">
    <h3 className="card-title">{el.title}</h3>
    <p className="card-text">
     {el.description}
    </p>
    <p>
      {el.rate}
    </p>
    <div className='button'>

<button className="btn" onClick={()=>removeM()}   >remove</button>     
<button  className="btn" onClick={()=>navigate(`/update/${el._id}`)}>update</button>

</div>
  </div>



</div>



  )
}

export default MovieCard