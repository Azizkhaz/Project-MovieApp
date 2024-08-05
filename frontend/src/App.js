import './App.css';
import MovieList from './components/MovieList/MovieList';
import MovieAdd from './components/MovieAdd/MovieAdd';
import Update from './components/UpdateMovie/Update'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
   <>
<Routes>
  <Route path='/' element={<MovieList/>}/>
  <Route path='/add' element={<MovieAdd/>}/>
  <Route path='/update/:id' element={<Update/>}/>
</Routes>
   </>
  );
}

export default App;
