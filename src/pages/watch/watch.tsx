import { ArrowBackOutlined } from "@mui/icons-material";

function watch() {
  const playerMovie = `https://player.vimeo.com/progressive_redirect/playback/894214406/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=9ee940082084c2198b288ea414fa82c822193735450c940b64ec6677c85363aa`;

  return (
    <div className="w-screen h-screen ">
      <div className="flex items-center gap-x-2.5 cursor-pointer absolute top-5  left-2.5 z-[2]">
        <ArrowBackOutlined className="" />
        <p className=" font-semibold ">Home</p>
      </div>
      <video className="w-full h-full" autoPlay controls src={playerMovie}>
        <track kind="captions" label="English" srcLang="en" />
      </video>
    </div>
  );
}

export default watch;
