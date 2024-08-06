import { useEffect } from 'react';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../api/movieApi';
import { setMovie } from '../../store/movieSlice';
import './MovieList.css'

function MovieList() {

  const Movie = useSelector(state=> state.movie)
  const dispatch = useDispatch()
    console.log('listet eflem => ', Movie)
  
  
  const getMovie=async()=>{
  const data = await fetchMovie()
  dispatch(setMovie(data.movie))
  console.log("data =>",data)
  }
  
  
  //fi tlou" wela lecture du composant el getMovie tkhdem 
  useEffect(()=>{
  getMovie()
  },[])

  return (
    
    <div className='movielist'>
      {Movie.map(el => (
        <MovieCard el={el} getMovie={getMovie} />
      ))}
    </div>
  );
}

export default MovieList;
