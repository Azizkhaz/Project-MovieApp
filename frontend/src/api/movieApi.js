
import axios from 'axios'

//funcrion lecture de tt les movies  => get all 
export const fetchMovie =async()=>{

    const {data} = await axios.get('http://localhost:4000/movie/getall')
    return data 
}


//function lecture de tt les movies  => get by id  
export const fetchuniqueMovie =async (id)=>{

    const {data} = await axios.get(`http://localhost:4000/movie/getunique/${id}`)
    return data 
}


//function add movie 

export const addMovie =async (value)=>{
    const addingMovie = await axios.post('http://localhost:4000/movie/addmovie',value)
}

//function update movie
export const updateMovie=async (id,values)=>{
    const updatedMovie = await  axios.put(`http://localhost:4000/movie/update/${id}`,{...values})
}

//function remove movie 

export const removeovie=async (id)=>{
    const removedMovie = await axios.delete(`http://localhost:4000/movie/delete/${id}`)
}