import './Update.css'
import {useEffect, useState} from 'react'
import { useNavigate ,useParams} from 'react-router';
import { updateMovie ,fetchuniqueMovie} from '../../api/movieApi';

const Update = () => {

  const [title,setTitle]=useState()
  const [image,setImage]=useState()
  const[description,setDescription]=useState()
  const[rate,setRate]=useState()

  //partie navigation
  const navigate = useNavigate()

//nkapty el id mil url 
const {id}=useParams()



const updatyMovies=async (id,values)=>{
await updateMovie(id,values)
await alert('saret el update gp to movie list ')
navigate('/')
}

//get unique movie 

const getuniMovie=async(id)=>{
    const data = await fetchuniqueMovie(id)
    console.log(id)
    console.log("data =>",data.getMovie)
     setTitle(data.getMovie.title)
     setDescription(data.getMovie.description)
     setImage(data.getMovie.image)
     setRate(data.getMovie.rate)
}

useEffect(()=>{
    if(id){getuniMovie(id)}

},[id])
 

  return (
    <>
    

    <form className="form">
  <div className="flex">
    <div className="login color">Update Movie</div>
    <label className="color"></label>
    <input type="text" name='image' className="input" required='' value={image}    onChange={(e)=>setImage(e.target.value)}  />
    <label className="color"></label>
    <input type="text" name='title' className="input" required='' value={title}    onChange={(e)=>setTitle(e.target.value)} />
    <br/>
    <input type="text" name='description' className="input"  value={description}    onChange={(e)=>setDescription(e.target.value)}/>
    <br/>
    <input type="text" name='rate' className="input" value={rate}    onChange={(e)=>setRate(e.target.value)} />
    <button className="" onClick={()=>updatyMovies({image,title,description,rate})}>Update</button>
    <br />
    
  </div>
</form>

</>
  )
}

export default Update