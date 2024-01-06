import { InfoOutlined, PlayArrow } from "@mui/icons-material";

interface FeaturesProps {
  type?: string;
}
function Features({ type }: FeaturesProps) {
  return (
    <div className="h-[90vh] relative">
      {type && (
        <div className="absolute  top-28 left-16 text-3xl flex items-center z-20 text-white">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            className="cursor-pointer bg-[var(--main-color)] border text-white p-1.5 ml-5"
          >
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="adventure">Adventure</option>
            <option value="biography">Biography</option>
            <option value="crime">Crime</option>
            <option value="family">Family</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="music">Music</option>
            <option value="musical">Musical</option>
            <option value="mystery">Mystery</option>
          </select>
        </div>
      )}
      <span className=" absolute bg-gradient-to-t from-black via-transparent to-black h-full w-full z-10" />
      <img
        className="h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg "
        alt="background_image"
      />

      <div className="w-2/6 left-16 bottom-24 absolute text-white z-10 flex flex-col ">
        <img
          className="w-5/6 mb-5"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F9%2FMatrix-Logo-Transparent-Image.png&f=1&nofb=1&ipt=835df921a7bd455779a44faefd0425c862ce603a41795bc1b711f3a95cd9aad5&ipo=images"
          alt="movie_name"
        />
        <span className="text-lg">
          1999 science fiction film where a hacker, Neo, discovers that the
          world is a simulated reality created by machines. Joining a rebel
          group, he fights to free humanity from the simulated world known as
          the Matrix. The film is known for its groundbreaking effects and
          explores philosophical themes.
        </span>
        <div className="flex gap-x-5 mt-5">
          <button
            type="button"
            className="flex items-center justify-center px-5 py-2.5 border-none focus:outline-none text-lg  font-bold bg-white text-[var(--main-color)] rounded-lg gap-x-1 leading-none"
          >
            <PlayArrow /> Play
          </button>
          <button
            type="button"
            className="flex items-center justify-center px-5 py-2.5 border-none focus:outline-none text-lg  font-bold bg-gray-500 text-white rounded-lg gap-x-1 leading-none"
          >
            <InfoOutlined />
            Info
          </button>
        </div>
      </div>
    </div>
  );
}

Features.defaultProps = {
  type: "",
};

export default Features;
