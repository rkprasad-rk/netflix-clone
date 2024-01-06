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
      const distance = listCurrent.getBoundingClientRect().x - 48;
      if (direction === "left" && isSlideNumber > 0) {
        setSlideNumber(isSlideNumber - 1);
        listCurrent.style.transform = `translateX(${224 + distance}px)`;
      } else if (direction === "right" && isSlideNumber < 4) {
        setSlideNumber(isSlideNumber + 1);
        listCurrent.style.transform = `translateX(${-224 + distance}px)`;
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
          className={`${isMoved ? "block" : "hidden"}`}
        >
          <NavigateBefore
            className={`text-white bg-[#16161680] absolute left-0 z-10 top-0 bottom-0 mx-auto `}
            style={{ height: "100%", width: "48px" }}
          />
        </button>

        <div
          className="ml-16 flex w-max gap-x-2.5 transform translate-x-0 transition-all ease-in duration-300"
          ref={listRef}
        >
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
        </div>

        <button
          type="button"
          aria-label="Move_right"
          onClick={() => {
            handleClick("right");
          }}
        >
          <NavigateNext
            className="text-white w-12 bg-[#16161680] absolute right-0 z-10 top-0 bottom-0 mx-auto"
            style={{ height: "100%", width: "48px" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Lists;
