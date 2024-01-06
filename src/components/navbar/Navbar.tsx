import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "bg-[var(--main-color)]"
          : "bg-gradient-to-t from-transparent to-black"
      } text-white text-base fixed top-0 w-full z-[999]`}
    >
      <div className="px-12 flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <img
            className="h-20 cursor-pointer "
            src="https://imgs.search.brave.com/wgBHIIfgssVBtfwYC227BBTnm530qhqvzVGm1YSiFgg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw"
            alt="logo"
          />
          <span className="cursor-pointer">Homepage</span>
          <span className="cursor-pointer">Series</span>
          <span className="cursor-pointer">Movies</span>
          <span className="cursor-pointer">New & Popular</span>
          <span className="cursor-pointer">My List</span>
        </div>
        <div className="flex items-center gap-x-4">
          <Search className="cursor-pointer" />
          <span className="cursor-pointer">Kid</span>
          <Notifications className="cursor-pointer" />
          <img
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F78-786293_1240-x-1240-0-avatar-profile-icon-png.png&f=1&nofb=1&ipt=435dfb04f20f4fc6b6243b51d9f7d39fad20bd5ae11565a50a32118b866ec6d1&ipo=images"
            alt="profile"
          />
          <div className="relative group hover:border-white border border-transparent rounded-lg">
            <ArrowDropDown className="cursor-pointer" sx={{ fontSize: 30 }} />
            <div className="absolute top-12 -left-10 bg-white shadow-md rounded-md bg-[var(--main-color)] group-hover:flex flex-col hidden ">
              <span className="px-2.5 py-2 hover:bg-slate-600 cursor-pointer rounded-t-lg">
                Settings
              </span>
              <span className="px-2.5 py-2 hover:bg-slate-600 cursor-pointer rounded-b-lg">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
