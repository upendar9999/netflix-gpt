import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <div className="w-32 pr-2">
        <img alt="Movie Card"
        src={IMG_CDN_URL + posterPath} />
      </div>
    </div>
  );
};

export default MovieCard;
