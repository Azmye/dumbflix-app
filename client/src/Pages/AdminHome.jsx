import React, { useState } from 'react';
import ShowsList from '../Components/Shows/ShowsList';
import MovieList from '../Components/Movies/MovieList';

const AdminHome = () => {
  const [category, setCategory] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.value == 'film') {
      setCategory(true);
    } else {
      setCategory(false);
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-between px-8 pt-24 bg-black">
        <div className="flex items-center">
          <h2 className="text-white text-lg font-semibold pr-5">List Film</h2>
          <select className="bg-transparent border-2 rounded-md font-semibold" onChange={handleOnChange}>
            <option value="default" className="hidden">
              Category
            </option>
            <option value="film">Film</option>
            <option value="shows">TV Shows</option>
          </select>
        </div>

        <button className="px-8 py-2 bg-red-700 text-white rounded-md">Add Film</button>
      </div>

      {category ? <MovieList linkTo={'/movie-details/'} topComp={true} className={'py-10'} /> : <ShowsList linkTo={'/shows-details/'} topComp={true} className={'py-10'} />}
    </React.Fragment>
  );
};

export default AdminHome;
