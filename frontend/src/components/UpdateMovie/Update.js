import './Update.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { updateMovie, fetchuniqueMovie } from '../../api/movieApi';

const Update = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const updatyMovies = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const values = { title, image, description, rate };
    try {
      await updateMovie(id, values);
      alert('Update successful, returning to movie list.');
      navigate('/');
    } catch (error) {
      console.error('Error updating movie:', error.message);
    }
  };

  const getuniMovie = async (id) => {
    try {
      const data = await fetchuniqueMovie(id);
      console.log(id);
      console.log('data =>', data.getmovie);
      setTitle(data.getmovie.title);
      setDescription(data.getmovie.description);
      setImage(data.getmovie.image);
      setRate(data.getmovie.rate);
    } catch (error) {
      console.error('Error fetching unique movie:', error.message);
    }
  };
useEffect(() => {
    if (id) {
      getuniMovie(id);
    }
  }, [id]);

  return (
    <form className="form" onSubmit={updatyMovies}>
      <div className="flex">
        <div className="login color">Update Movie</div>
        <label className="color"></label>
        <input
          type="text"
          name="image"
          className="input"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label className="color"></label>
        <input
          type="text"
          name="title"
          className="input"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="description"
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="rate"
          className="input"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button type="submit" className="">
          Update
        </button>
        <br />
      </div>
    </form>
  );
};

export default Update