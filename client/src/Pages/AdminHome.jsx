import React, { useState } from 'react';
import ShowsList from '../Components/Shows/ShowsList';
import MovieList from '../Components/Movies/MovieList';
import { useNavigate } from 'react-router';

const AdminHome = () => {
  const [category, setCategory] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    if (e.target.value == 'movie') {
      setCategory(true);
    } else {
      setCategory(false);
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-between px-8 pt-24 bg-black">
        <div className="flex items-center">
          <h2 className="text-white text-lg font-semibold pr-5">List Movie</h2>
          <select className="bg-transparent border-2 rounded-md font-semibold" onChange={handleOnChange}>
            <option value="default" className="hidden">
              Category
            </option>
            <option value="movie">Movie</option>
            <option value="shows">TV Shows</option>
          </select>
        </div>

        <button onClick={() => navigate('/admin-form')} className="px-8 py-2 bg-red-700 text-white rounded-md">
          Add Movie
        </button>
      </div>

      {category ? <MovieList linkTo={'/admin-movie-details/'} topComp={true} className={'py-10'} /> : <ShowsList linkTo={'/admin-shows-details/'} topComp={true} className={'py-10'} />}
    </React.Fragment>
  );
};

export default AdminHome;
