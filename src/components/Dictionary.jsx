import PLAY_ICON from "/images/icon-play.svg";
import LINK_ICON from "../assets/images/icon-new-window.svg";

export function Dictionary({ data }) {
  const { word, meanings, phonetic, sourceUrls, phonetics } = data;
  const audioUrl = phonetics.find((p) => p.audio !== "");

  function onPlayButtonClick() {
    const audio = new Audio(audioUrl.audio);
    audio
      .play()
      .catch((error) => console.error("Fail to play audiofile", error));
  }

  const meaning = meanings.map((m, i) => (
    <section key={m.partOfSpeech + i}>
      <div className="flex justify-between items-center gap-4 mb-7">
        <h2 className="text-lg font-bold italic ">{m.partOfSpeech}</h2>
        <div className="h-[1px] w-max border flex-grow "></div>
      </div>
      <h3 className="font-semibold text-CustomGray-light-400">Meaning</h3>
      <ul className="list-disc p-6 text-CustomPurple ">
        {m.definitions.map((def, i) => (
          <>
            <li key={def + i}>
              <p className="text-CustomGray-dark-200 mb-3 dark:text-CustomGray-light-100">
                {def.definition}
              </p>
            </li>
            <p className="text-CustomGray-light-400 mb-4">
              {def.example ? `"${def.example}"` : ""}
            </p>
          </>
        ))}
      </ul>

      {m.synonyms.length > 0 ? (
        <p className="font-semibold text-CustomGray-light-400 mb-8 ">
          Synonyms{" "}
          <span className="font-bold text-CustomPurple">
            {m.synonyms.map((syn, i) => (
              <span key={i}>{`${syn} `}</span>
            ))}
          </span>
        </p>
      ) : (
        ""
      )}
    </section>
  ));

  return (
    <main>
      <div className="flex justify-between items-center mb-7">
        <div className="items-start">
          <h1 className="text-[32px] font-bold ">{word}</h1>
          <p className="text-CustomPurple">{phonetic}</p>
        </div>

        <button
          onClick={onPlayButtonClick}
          className="w-12 h-12 bg-purple-100 rounded-full dark:bg-CustomPurpleDarkMode dark:bg-opacity-25"
        >
          <img src={PLAY_ICON} />
        </button>
      </div>
      {meaning}
      <section className="text-CustomGray-light-400 border-t border-CustomGray-light-400">
        <p className="underline mt-6">Source</p>
        <a
          href={sourceUrls}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm flex gap-[9px]"
        >
          <p className="undeline text-CustomGray-dark-200 dark:text-CustomGray-light-100">
            {sourceUrls}
          </p>
          <img src={LINK_ICON} alt="new window icon" />
        </a>
      </section>
    </main>
  );
}
