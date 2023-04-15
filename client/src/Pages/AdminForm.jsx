import React, { useEffect, useState } from 'react';
import FormVideo from '../Components/Modal/FormVideo';
import { useQuery } from 'react-query';
import { API } from '../Config/Api';

const AdminForm = () => {
  const [form, setForm] = useState({
    title: '',
    year: '',
    thumbnail: '',
    category_id: '',
    description: '',
  });

  const handleOnChange = () => {};

  let { data: categories, refetch } = useQuery('categoriesCache', async () => {
    const response = await API.get('/category');
    return response.data.data;
  });

  return (
    <div className="bg-black container mx-auto pt-28  px-44 h-[100vh]">
      <h2 className="font-bold text-lg text-white mb-5">Add Movie</h2>
      <form>
        <div className=" flex gap-3">
          <input onChange={handleOnChange} type="text" className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-3/4" placeholder="Title" />
          <input onChange={handleOnChange} type="file" className="mb-3 border border-white rounded-md file:h-full bg-zinc-700 w-1/4" />
        </div>
        <input onChange={handleOnChange} type="text" className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full" placeholder="Year" />
        <select onChange={handleOnChange} className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full">
          <option value="default" className="hidden">
            Category
          </option>
          {categories?.map((index) => (
            <option value={index.id}>{index.name}</option>
          ))}
        </select>
        <textarea className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full" placeholder="Description"></textarea>

        <div className="text-end">
          <button className="bg-red-700 text-white px-12 py-2 rounded-md mt-5">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
