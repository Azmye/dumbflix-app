import ApiConfig from '../../Config/ApiConfig';
import useFetch from '../../Config/useFetch';
import CardItem from '../Global/CardItem';

const MovieList = (props) => {
  const { data, loading, error } = useFetch('/movie/top_rated');
  const { tmdb_w500Image } = ApiConfig;

  return (
    <div className={`${props.className} ${props.topComp ? 'bg-gradient-to-b from-black via-black to-zinc-900' : 'bg-zinc-900'} text-white `}>
      <div className="container mx-auto lg:px-8">
        <h2 className="font-semibold text-xl  mb-5">Movies</h2>

        <div className={`${props.slides ? 'carousel rounded-box' : 'grid grid-cols-6 gap-y-10'}`}>
          {error && console.log(error.message)}
          {loading && (
            <div>
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            </div>
          )}
          {data &&
            data.data.results
              .slice(0, 12)
              .map((index) => (
                <CardItem
                  linkTo={`${props.linkTo}${index.id}`}
                  key={index.id}
                  title={index.title}
                  year={new Date(index.release_date).getFullYear()}
                  className={`${props.slides ? 'carousel-item px-5' : ''} w-48`}
                  thumbn={`${tmdb_w500Image(index.poster_path)}`}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
