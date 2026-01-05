import { useEffect, useState } from "react";
import { Dictionary } from "./components/Dictionary";
import { Footer } from "./components/Footer";
import { LoadingModal } from "./components/LoadingModal";
import { NotFound } from "./components/NotFound";
import { SearchInput } from "./components/SearchInput";
import { TopHeaderWithControls } from "./components/TopHeaderWithControls";
import { fontContext } from "./contexts/fontContext";
import { searchContext } from "./contexts/searchContext";

export function App() {
  const [fontMode, setFontMode] = useState(
    () => localStorage.getItem("fontMode") || "sansSerif"
  );
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
    const removeInitialLoadingScreen = () => {
      const loadingScreen = document.querySelector("#modal");
      if (loadingScreen) {
        loadingScreen.classList.add("fade-out");

        loadingScreen.addEventListener(
          "animationend",
          () => {
            loadingScreen.remove();
          },
          { once: true }
        );
      }
    };

    removeInitialLoadingScreen();
  }, []);

  function handleLoadingStateChange(loadingState) {
    setIsLoading(loadingState);
  }

  return (
    <>
      <fontContext.Provider value={[fontMode, setFontMode]}>
        <searchContext.Provider value={[searchWord, setSearchWord]}>
          <main
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
          </main>
        </searchContext.Provider>
      </fontContext.Provider>
      <Footer />
    </>
  );
}
