import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { TopHeaderWithControls } from "./components/TopHeaderWithControls";
import { fontContext } from "./contexts/fontContext";
export function App() {
  function handleSearchSubmit() {
    console.log("submit");
  }

  const [fontMode, setFontMode] = useState(() => {
    const fontModeFromLocalStorage = localStorage.getItem("fontMode");
    if (!fontModeFromLocalStorage) {
      return "sansSerif";
    }
    return fontModeFromLocalStorage;
  });

  return (
    <fontContext.Provider value={[fontMode, setFontMode]}>
      <div aria-label="dictionary application" className="sm: max-w-80 pt-6 ">
        <header>
          <TopHeaderWithControls />
          <SearchInput onSearchSubmit={handleSearchSubmit} />
          <h1>Keyboard</h1>
          <button aria-label="Play pronunciation">Play pronunciation</button>
        </header>

        <main>
          <section>
            <h2>noun</h2>

            <h3>meaning</h3>

            <ul>
              <li>
                * Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias, vitae?
              </li>
              <li>
                * Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                adipisci voluptatem voluptates a similique, modi molestias
                nostrum ut accusamus in.
              </li>
              <li>
                * Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                aliquam voluptas cupiditate molestias iusto, adipisci illum
                inventore debitis hic sequi!
              </li>
            </ul>

            <p>
              Synonyms <span>electrionic keybord</span>
            </p>
          </section>
          <section>
            <h2>verb</h2>

            <h3>maining</h3>

            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor molestias dolores laudantium tenetur aliquam.
              </li>
            </ul>
          </section>
          <section>
            <p>Source</p>

            <a
              href="https://wikipedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wikipedia.com
            </a>
          </section>
        </main>
        <footer>Ja to zrobiłem</footer>
      </div>
    </fontContext.Provider>
  );
}
