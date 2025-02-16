import { useEffect, useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { TopHeaderWithControls } from "./components/TopHeaderWithControls";
import { fontContext } from "./contexts/fontContext";
import { searchContext } from "./contexts/searchContext";
import { Dictionary } from "./components/Dictionary";
import { NotFound } from "./components/NotFound";
export function App() {
  const [fontMode, setFontMode] = useState(() => {
    const fontModeFromLocalStorage = localStorage.getItem("fontMode");
    if (!fontModeFromLocalStorage) {
      return "sansSerif";
    }
    return fontModeFromLocalStorage;
  });

  const [searchWord, setSearchWord] = useState("");

  const [dictionaryData, setDictionaryData] = useState({
    status: null,
    responseData: null,
  });

  function handleSetDictionaryData(data) {
    const { status, responseData } = data;
    setDictionaryData({ status, responseData });
  }

  useEffect(() => {
    const modal = document.getElementById("modal");
    const body = document.body;
    if (modal) {
      body.removeChild(modal);
    }
  }, []);

  return (
    <>
      <fontContext.Provider value={[fontMode, setFontMode]}>
        <searchContext.Provider value={[searchWord, setSearchWord]}>
          <div
            aria-label="dictionary application"
            className={`p-7 w-screen font-${fontMode} flex-grow lg:w-[734px]`}
          >
            <header>
              <TopHeaderWithControls />
              <SearchInput setData={handleSetDictionaryData} />
            </header>
            {dictionaryData.status === 404 && (
              <NotFound data={dictionaryData.responseData} />
            )}
            {dictionaryData.status === 200 && (
              <Dictionary data={dictionaryData.responseData[0]} />
            )}
          </div>
        </searchContext.Provider>
      </fontContext.Provider>
      <footer className="w-full bg-gray-800 text-white p-4 text-center">
        Footer Content
      </footer>
    </>
  );
}
