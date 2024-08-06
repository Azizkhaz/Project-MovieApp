import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addMovie } from '../../api/movieApi';
import "./MovieAdd.css";

function MovieAdd() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');

  const navigate = useNavigate();

  const add = async (value) => {
    try {
      await addMovie(value);
      alert('Movie added successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('Failed to add movie. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && image && description && rate) {
      add({ title, image, description, rate });
    } else {
      alert('Please fill all the fields.');
    }
  };
return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="login color">Add Movie</div>
        <label className="color" htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          className="input"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label className="color" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="input"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="color" htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          className="input"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="color" htmlFor="rate">Rate</label>
        <input
          type="number"
          id="rate"
          className="input"
          required
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button className="button" type="submit">Add</button>
      </div>
    </form>
  );
}

export default MovieAdd;