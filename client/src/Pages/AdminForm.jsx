import React, { useState } from 'react';
import FormVideo from '../Components/Modal/FormVideo';

const AdminForm = () => {
  const [formIterate, setFormIterate] = useState(1);
  return (
    <div className="bg-black container mx-auto pt-28 pb-40 px-44">
      <h2 className="font-bold text-lg text-white mb-5">Add Item</h2>
      <form>
        <div className=" flex gap-3">
          <input type="text" className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-3/4" placeholder="Title" />
          <input type="file" className="mb-3 border border-white rounded-md file:h-full bg-zinc-700 w-1/4" />
        </div>
        <input type="text" className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full" placeholder="Year" />
        <select className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full">
          <option value="default" className="hidden">
            Category
          </option>
          <option value="shows">Shows</option>
          <option value="movie">Movie</option>
        </select>
        <textarea className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full" placeholder="Description"></textarea>
        {Array(formIterate)
          .fill()
          .map((_, key) => (
            <FormVideo key={key} className={'mb-5'} />
          ))}
        <button type="button" onClick={() => setFormIterate(formIterate + 1)} className="mb-3 border border-white rounded-md py-1 w-full bg-zinc-700 text-center">
          +
        </button>

        <div className="text-end">
          <button className="bg-red-700 text-white px-12 py-2 rounded-md mt-5">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
