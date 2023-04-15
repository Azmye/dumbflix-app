import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { API } from '../../Config/Api';
import { AlertSuccess, AlertError } from './AlertCollection';
import { ModalContext } from '../../Context/ModalContext';

const AddEpisode = (props) => {
  const [message, setMessage] = useState(null);
  const [_, modalDispatch] = useContext(ModalContext);

  const handleOnChange = () => {};

  const handleOnSubmit = useMutation(async (e) => {});

  return (
    <div className={`${props.className}`}>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold mb-5 text-2xl text-white">Add Episode</h2>
      </div>
      {message && message}
      <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
        <div className="flex gap-x-3">
          <input onChange={handleOnChange} className="w-3/4 mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" type="text" name="" id="" placeholder="Title" />
          <input onChange={handleOnChange} className="w-1/4 mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none file-input-ghost file:text-white" type="file" name="" id="" />
        </div>

        <input onChange={handleOnChange} className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" type="text" name="" id="" placeholder="Link Video" />
        <button className="w-full bg-white py-2 rounded-md mb-2 text-red-700 font-semibold">Save</button>
      </form>
    </div>
  );
};

export default AddEpisode;
