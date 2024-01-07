/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useMemo } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import "./listItems.scss";

interface ListItemsProps {
  index: number;
}

function ListItems({ index }: ListItemsProps) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = useMemo(
    () => ({
      left: isHovered ? `${index * 288 - 16 + index * 3}px` : 0,
    }),
    [index, isHovered]
  );

  const trailer = `https://player.vimeo.com/progressive_redirect/playback/856119472/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=57433597e685afbcd4a340bc07b0ca658469dcdc7c1813ceff125810140edd4c`;

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-72 h-32 bg-[var(--main-color)] hover:w-80 hover:h-[300px] group text-white overflow-hidden items-shadow hover:rounded-lg hover:absolute hover:-top-[150px] hover:z-20 mr-1.5"
    >
      <img
        className="h-full w-full object-cover group-hover:h-36"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cdVCUtZltqoKN_tlWeAHbAHaEK%26pid%3DApi&f=1&ipt=2fe8e8043a92ad98ae2ad3579dfe7a5bbf9dd743907b566b19617966b620f1a3&ipo=images"
        alt="movie_template"
      />
      {isHovered && (
        <>
          <video
            autoPlay
            muted
            loop
            className="w-full h-36 object-cover group-hover:h-36 absolute top-0 left-0"
            src={trailer}
          >
            <track kind="captions" label="English" srcLang="en" />
          </video>
          <div className="flex flex-col p-1.5">
            <div className="flex mb-2.5 gap-x-2.5 text-base">
              <PlayArrow className="text-white border-2 p-1 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
              <Add className="text-white border-2 p-1 rounded-full  cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
              <ThumbUpOutlined className="text-white border-2 p-1 rounded-full  cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
              <ThumbDownOutlined className="text-white border-2 p-1 rounded-full  cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
            </div>
            <div className="flex items-center mb-2.5 text-sm font-semibold text-gray-500 gap-x-2.5">
              <span>1 hour 14 mins</span>
              <span className="border border-gray-500 py-0.5 px-1">+16</span>
              <span>1996</span>
            </div>
            <div className="mb-2.5 text-[13px] ">
              Joining a rebel group, he fights to free humanity from the
              simulated world.
            </div>
            <div className="text-gray-100 text-sm">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItems;
