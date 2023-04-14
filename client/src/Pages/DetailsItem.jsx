import React from 'react';
import useFetch from '../Config/useFetch';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ApiConfig from '../Config/ApiConfig';

const DetailsItem = (props) => {
  const { id } = useParams();
  const { data } = useFetch(`${props.endpoint}${id}`);
  const { tmdb_originalImage, tmdb_w500Image } = ApiConfig;

  return (
    <React.Fragment>
      <div className="pt-10 bg-black/60">
        {data &&
          data.data.videos.results.slice(0, 1).map((index, id) => (
            <div key={id} className="relative h-[500px]">
              <ReactPlayer
                className={'absolute top-0 left-0'}
                width={'100%'}
                height={'100%'}
                light={
                  <div className="px-40 h-[500px]">
                    <img className="w-full h-[500px] mx-auto" src={`${tmdb_originalImage(data.data.backdrop_path)}`} />
                  </div>
                }
                controls={true}
                url={`https://www.youtube.com/watch?v=${index.key}`}
              />
            </div>
          ))}
      </div>

      <div className="bg-black text-end container mx-auto px-8 pt-5 hidden">
        <button className="bg-red-700 text-white px-8 py-2 rounded-md">Add Episode</button>
      </div>

      <div className="bg-black">
        <div className={`flex container justify-between mx-auto py-20 lg:px-8`}>
          {data && (
            <div className="w-1/2 flex gap-x-8">
              <div className="w-1/3">{data && <img src={`${tmdb_w500Image(data.data.poster_path)}`} alt="" />}</div>
              <div className="w-2/3 flex flex-col justify-evenly">
                <h2 className="text-3xl font-semibold text-white">{data.data.title ? data.data.title : data.data.name}</h2>
                <div className="flex items-center gap-3">
                  <p>{new Date(data.data.release_date ? data.data.release_date : data.data.first_air_date).getFullYear()}</p>
                  <p className="border rounded-md p-1">{data.data.title ? 'Movie' : 'TV Shows'}</p>
                </div>
                <p className="text-justify">{data.data.overview.length > 240 ? `${data.data.overview.slice(0, 240)}...` : data.data.overview}</p>
              </div>
            </div>
          )}
          <div className="w-1/2 mx-auto pl-28">
            {data && <img className="rounded-md" src={`${tmdb_originalImage(data.data.backdrop_path)}`} alt="" />}
            {data && <h3>{data.data.title ? data.data.title : `${data.data.name} : Episode 1`}</h3>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailsItem;
