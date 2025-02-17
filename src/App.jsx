import { useEffect, useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { TopHeaderWithControls } from "./components/TopHeaderWithControls";
import { fontContext } from "./contexts/fontContext";
import { searchContext } from "./contexts/searchContext";
import { Dictionary } from "./components/Dictionary";
import { NotFound } from "./components/NotFound";
import { LoadingModal } from "./components/LoadingModal";
import { Footer } from "./components/Footer";

export function App() {
  const [fontMode, setFontMode] = useState(() => {
    const fontModeFromLocalStorage = localStorage.getItem("fontMode");
    if (!fontModeFromLocalStorage) {
      return "sansSerif";
    }
    return fontModeFromLocalStorage;
  });
  const [isLoading, setIsLoading] = useState(false);
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

  function handleLoadingStateChange(loadingState) {
    setIsLoading(loadingState);
  }

  return (
    <>
      <fontContext.Provider value={[fontMode, setFontMode]}>
        <searchContext.Provider value={[searchWord, setSearchWord]}>
          <div
            aria-label="dictionary application"
            className={`p-7 w-screen font-${fontMode} flex-grow md:w-[689px] lg:w-[736px]`}
          >
            <header>
              <TopHeaderWithControls />
              <SearchInput
                setData={handleSetDictionaryData}
                fetching={handleLoadingStateChange}
              />
            </header>
            {isLoading && <LoadingModal />}
            {dictionaryData.status === 404 && (
              <NotFound data={dictionaryData.responseData} />
            )}
            {dictionaryData.status === 200 && (
              <Dictionary data={dictionaryData.responseData[0]} />
            )}
          </div>
        </searchContext.Provider>
      </fontContext.Provider>
      <Footer />
    </>
  );
}
