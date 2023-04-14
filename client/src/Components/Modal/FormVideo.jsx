const FormVideo = ({ className, modal }) => {
  return (
    <div className={` ${className}`}>
      {modal ? <h2 className="font-bold text-xl mb-5">Add Video</h2> : ''}
      <div className={`flex gap-3 mb-3 `}>
        <input type="text" className="border border-white rounded-md bg-zinc-700 px-3 py-1 w-3/4" placeholder="Title Episode" />
        <input type="file" className="border border-white rounded-md file:h-full bg-zinc-700 w-1/4" />
      </div>
      <input type="text" className="border border-white rounded-md bg-zinc-700 px-3 py-1 w-full mb-3" placeholder="Link Item" />

      {modal && (
        <div className="w-full flex justify-end">
          <button className="w-1/4 px-3 py-1 rounded-md bg-red-700 text-white">Add</button>
        </div>
      )}
    </div>
  );
};

export default FormVideo;
