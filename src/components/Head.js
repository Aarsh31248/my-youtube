import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../redux/appSlice";
import { useEffect, useState, useCallback } from "react";
import { cacheResults } from "../redux/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = useCallback(async () => {
    const data = await fetch(`/.netlify/functions/search?q=${searchQuery}`);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }, [searchQuery, dispatch]);

  useEffect(() => {
    if (!searchQuery) return;

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, getSearchSuggestions]);

  return (
    <div className="sticky top-0 z-[60] bg-white flex items-center justify-between p-3 shadow-lg sm:grid sm:grid-cols-12">
      {/* Left section */}
      <div className="flex items-center gap-4 sm:col-span-2 shrink-0">
        <img
          onClick={() => dispatch(toogleMenu())}
          className="w-7 h-8 cursor-pointer"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="
              h-5 sm:h-6
              min-w-[72px] sm:min-w-[96px]
              object-contain
              cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>

      {/* Search Section*/}
      <div className="col-span-6 sm:col-span-8 px-2 flex justify-center min-w-0">
        <div className="relative w-full max-w-[195px] ml-8 sm:max-w-2xl">
          <div className="flex items-center">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              placeholder="Search"
              type="text"
              className="flex-1 min-w-0 border border-gray-400 rounded-l-full p-2 text-sm sm:text-base"
            />
            <button className="border border-gray-400 rounded-r-full px-4 hover:bg-gray-200">
              <i className="fa-solid fa-magnifying-glass py-[10px] sm:py-3"></i>
            </button>

            <i className="fa-solid fa-microphone hidden sm:block text-[22px] ml-4 cursor-pointer"></i>
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl mt-2 z-50 border border-gray-200">
              {suggestions.map((sug) => (
                <li
                  key={sug}
                  className="px-4 py-2 text-sm sm:text-lg hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                  onMouseDown={() => setSearchQuery(sug)}
                >
                  <i className="fa-solid fa-magnifying-glass text-sm text-gray-500"></i>
                  {sug}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="hidden sm:flex sm:col-span-2 justify-end items-center gap-6 pr-4">
        <i className="fa-solid fa-bell text-[22px] cursor-pointer"></i>
        <img
          className="h-9 cursor-pointer"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
