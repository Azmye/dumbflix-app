import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { API } from '../../Config/Api';
import { AlertSuccess, AlertError } from './AlertCollection';
import { ModalContext } from '../../Context/ModalContext';
import { useLocation, useNavigate } from 'react-router';

const DeleteConfirmation = (props) => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const [_, modalDispatch] = useContext(ModalContext);

  const handleDelete = (id) => {
    setIdDelete(id);
    modalDispatch({ type: 'CLOSE_AUTH_MODAL' });
  };

  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`movie/${id}`);
      refetch();
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div className={`${props.className}`}>
      <h2 className="font-semibold mb-5 text-2xl text-white">Confirm Delete Movie</h2>
      <div className="flex gap-x-10">
        <button onClick={(e) => deleteById.mutate(e)} className="w-1/2 bg-red-700 text-white py-2 rounded-md">
          Delete
        </button>
        <button onClick={() => modalDispatch({ type: 'CLOSE_AUTH_MODAL' })} className="w-1/2 bg-green-700 text-white py-2 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
