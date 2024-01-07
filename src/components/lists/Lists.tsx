import { useRef, RefObject, useState } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import ListItems from "./components/ListItems";

function Lists() {
  const [isMoved, setIsMoved] = useState(false);
  const [isSlideNumber, setSlideNumber] = useState(0);
  const listRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  function handleClick(direction: string) {
    setIsMoved(true);
    const listCurrent = listRef.current;
    if (listCurrent) {
      const distance = listCurrent.getBoundingClientRect().x - 64;
      if (direction === "left" && isSlideNumber > 0) {
        setSlideNumber(isSlideNumber - 1);
        listCurrent.style.transform = `translateX(${294 + distance}px)`;
      } else if (direction === "right" && isSlideNumber < 5) {
        setSlideNumber(isSlideNumber + 1);
        listCurrent.style.transform = `translateX(${-294 + distance}px)`;
      }
    }
  }

  return (
    <div className="w-full mt-5">
      <span className="text-white font-medium text-xl ml-16">
        Continue to watch
      </span>
      <div className="relative">
        <button
          type="button"
          aria-label="Move_left"
          onClick={() => {
            handleClick("left");
          }}
          className={`${
            isMoved ? "block" : "hidden"
          } absolute left-0 z-10 top-0 bottom-0`}
        >
          <NavigateBefore
            className={`text-white bg-[#16161680]  `}
            style={{ height: "100%", width: "64px" }}
          />
        </button>

        <div
          className="ml-16 flex w-max transform translate-x-0 transition-all ease-in duration-300 h-32 relative"
          ref={listRef}
        >
          <ListItems index={0} />
          <ListItems index={1} />
          <ListItems index={2} />
          <ListItems index={3} />
          <ListItems index={4} />
          <ListItems index={5} />
          <ListItems index={6} />
          <ListItems index={7} />
          <ListItems index={8} />
          <ListItems index={9} />
        </div>

        <button
          type="button"
          aria-label="Move_right"
          onClick={() => {
            handleClick("right");
          }}
          className="absolute right-0 z-10 top-0 bottom-0 "
        >
          <NavigateNext
            className="text-white w-12 bg-[#16161680] "
            style={{ height: "100%", width: "64px" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Lists;
