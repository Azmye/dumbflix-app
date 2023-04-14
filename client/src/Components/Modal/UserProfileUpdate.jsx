import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { API } from '../../Config/Api';
import { AlertSuccess, AlertError } from './AlertCollection';
import { ModalContext } from '../../Context/ModalContext';
import profileDummy from '../../assets/img/preview-dummy.png';

const UserProfileUpdate = (props) => {
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: '',
    password: '',
    fullname: '',
    gender: '',
    phone: '',
    address: '',
  });

  const { email, fullname, phone, address } = form;

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post('/register', form);

      console.log('register success : ', response);

      setMessage(<AlertSuccess message="Register Success" />);
      setForm({
        email: '',
        password: '',
        fullname: '',
        gender: '',
        phone: '',
        address: '',
      });
    } catch (err) {
      setMessage(<AlertError message="Failed to register!" />);
      console.log('register failed : ', err);
    }
  });

  return (
    <div className={`${props.className}`}>
      <h2 className="font-semibold mb-5 text-2xl text-white">Profile Update</h2>
      {message && message}
      <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
        <input onChange={handleOnChange} value={email} type="email" name="email" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="Email" />

        <input onChange={handleOnChange} value={fullname} type="text" name="fullname" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="FullName" />

        <select onChange={handleOnChange} name="gender" className="w-full mb-3 rounded-md p-1 placeholder-white text-white border-2 border-white bg-zinc-500 focus:outline-none">
          <option value="default" className="hidden">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input onChange={handleOnChange} value={phone} name="phone" type="text" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="Phone" />

        <textarea onChange={handleOnChange} value={address} name="address" placeholder="Address" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"></textarea>

        <div class="flex items-center space-x-6">
          <div class="shrink-0">
            <img
              class="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4  file:rounded-full file:border-0  file:text-sm file:font-semibold file:bg-red-700 file:text-white hover:file:bg-red-500 " />
          </label>
        </div>

        <button className="w-full bg-white mt-3 py-2 rounded-md mb-2 text-red-700 font-semibold">Update</button>
      </form>
    </div>
  );
};

export default UserProfileUpdate;
