import { useContext, useEffect, useRef, useState } from "react";
import ARROW_DOWN_ICON from "../assets/images/icon-arrow-down.svg";
import { fontContext } from "../contexts/fontContext";

export function CustomSelect({ options }) {
  const [isOptionShown, setIsOptionShown] = useState(false);
  const listRef = useRef(null);
  const [fontMode, setFontMode] = useContext(fontContext);

  function handleSelectClick() {
    setIsOptionShown((prev) => !prev);
  }

  function handleOptionClick(className) {
    setFontMode(className);
    setIsOptionShown(false);
    localStorage.fontMode = className;
  }

  function handleOptionKeyDown(e, i) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      listRef.current?.children[i + 1]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      listRef.current?.children[i - 1]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const fontType = options[i].class;
      handleOptionClick(fontType);
    }
  }

  const listOption = options.map((opt, i) => (
    <li
      key={opt.name}
      onClick={() => handleOptionClick(opt.class)}
      onKeyDown={(e) => handleOptionKeyDown(e, i)}
      className={`font-${opt.class}  focus: outline-CustomPurple transition ease-in duration-200   hover:text-CustomPurple cursor-pointer`}
      tabIndex={0}
      role="option"
    >
      {opt.name}
    </li>
  ));

  useEffect(() => {
    if (isOptionShown) {
      listRef.current?.children[0].focus();
    }
  }, [isOptionShown]);

  let selectedFont = "";

  for (let key of options) {
    if (key.class === fontMode) {
      selectedFont = key.name;
    }
  }

  return (
    <div className="outline-CustomPurple  border-r-2 border-r-CustomGray-light-300 mr-2 relative ">
      <button
        onClick={handleSelectClick}
        className="outline-CustomPurple flex items-center justify-between w-full px-4 gap-4 "
      >
        <span className={`font-${fontMode} font-bold text-sm`}>{selectedFont}</span>
        <img src={ARROW_DOWN_ICON} alt="Arrow icon" />
      </button>

      {isOptionShown && (
        <div className="w-[120px] h-auto shadow-2xl rounded-2xl p-5 pt-3 pb-3 absolute right-3 z-20 bg-CustomGray-light-100 dark: dark-theme dark:shadow-customPurple">
          <ul ref={listRef} className="font-bold text-sm flex flex-col gap-2">
            {listOption}
          </ul>
        </div>
      )}
    </div>
  );
}
