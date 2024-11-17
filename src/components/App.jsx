import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PlaceholderContent from "./PlaceholderContent";
import { useRecoilValue } from "recoil";
import { themeStateAtom } from "../atoms/themeState";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setUserData] = useState(undefined);
  const themeState = useRecoilValue(themeStateAtom);

  return (
    <div className={`${themeState}`}>
      <main className="bg-lightBlue dark:bg-deepNavy min-h-screen">
        <div className="w-full max-w-[327px] md:max-w-[573px] lg:max-w-[730px] flex flex-col items-center mx-auto justify-center py-2 pb-5 md:h-screen gap-5">
          <Header />
          <SearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
            setUserData={setUserData}
          />
          {data ? <Content data={data} /> : <PlaceholderContent />}
        </div>
      </main>
    </div>
  );
}

export default App;
