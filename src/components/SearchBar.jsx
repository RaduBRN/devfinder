import { useState } from "react";
import IconSearch from "../icons/IconSearch";

function SearchBar({ inputValue, setInputValue, setUserData }) {
  const [apiError, setApiError] = useState({});

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  async function handleButtonClick(user) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      if (!response.ok) {
        console.log("Response not ok", data);
        setApiError({
          message: "No results",
          error: true,
        });
        return;
      }

      setUserData(data);
      setApiError({
        message: null,
        error: false,
      });
    } catch (err) {
      setApiError({
        message: "Unexpected Error",
        error: true,
      });
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleButtonClick(inputValue);
    }
  }

  return (
    <div className="w-full relative bg-pureWhite dark:bg-midnightBlue shadow-lg rounded-xl h-[60px] flex items-center overflow-hidden">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search GitHub username..."
        className="w-full md:text-lg truncate pl-12 md:pl-16 outline-none text-[13px] dark:bg-midnightBlue tracking-tight dark:placeholder-pureWhite dark:text-pureWhite"
      />
      <div className="absolute left-4 md:left-5 ">
        <IconSearch />
      </div>
      <div className="absolute right-2">
        <button
          className="bg-skyBlue hover:bg-[#60ABFF] py-3 px-3 md:px-6 rounded-lg text-pureWhite text-sm md:text-base"
          onClick={() => handleButtonClick(inputValue)}
        >
          Search
        </button>
      </div>
      {apiError?.error && (
        <div className="absolute right-32 top-[calc(50%-12.5px)] bg-white dark:bg-midnightBlue text-[#F74646]">
          {apiError?.message}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
