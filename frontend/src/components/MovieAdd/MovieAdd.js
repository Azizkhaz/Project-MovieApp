import {useState} from 'react'
import "./MovieAdd.css"
import { useNavigate } from 'react-router';
import  {addMovie} from '../../api/movieApi'
function MovieAdd() {

  const [title,setTitle]=useState()
  const [image,setImage]=useState()
  const[description,setDescription]=useState()
  const[rate,setRate]=useState()

  //partie navigation
  const navigate = useNavigate()

//fucntion ely lehya bil ajout 
const add=async(value)=>{
await addMovie(value)
 await alert('c bon tzedet')
navigate('/')
 
}
  return (
    <>
    

    <form className="form">
  <div className="flex">
    <div className="login color">Add Movie</div>
    <label className="color"></label>
    <input type="text" name='image' className="input" required='' value={image}  onChange={(e)=>setImage(e.target.value)} />
    <label className="color"></label>
    <input type="text" name='title' className="input" required='' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <br/>
    <input type="text" name='description' className="input" value={description} onChange={(e)=>setDescription(e.target.value)} />
    <br/>
    <input type="text" name='rate' className="input" value={rate} onChange={(e)=>setRate(e.target.value)}/>
    <button className="" onClick={()=>add({title,image,description,rate})}>Add</button>
    <br />
    
  </div>
</form>

</>




  )
}

export default MovieAdd