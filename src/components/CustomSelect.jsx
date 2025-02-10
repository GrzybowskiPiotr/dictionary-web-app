import { useEffect, useRef, useState } from "react";
import ARROW_DOWN_ICON from "../assets/images/icon-arrow-down.svg";

export function CustomSelect({ options }) {
  const [isOptionShown, setIsOptionShown] = useState(false);
  const listRef = useRef(null);

  function handleSelectClick() {
    setIsOptionShown((prev) => !prev);
  }

  function handleOptionClick(className) {
    console.log(className);
    setIsOptionShown(false);
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

  return (
    <div className="outline-CustomPurple w-24 h-6  border-r-2 border-r-CustomGray-light-300 mr-2 relative ">
      <button
        onClick={handleSelectClick}
        className="outline-CustomPurple flex items-center justify-between w-full px-4 gap-4 "
      >
        <p className="font-mono font-bold">Mono</p>
        <img src={ARROW_DOWN_ICON} alt="Arrow icon" />
      </button>

      {isOptionShown && (
        <div className="w-[120px] h-auto shadow-2xl rounded-2xl p-5 pt-3 pb-3 absolute right-3 z-20 bg-CustomGray-light-100">
          <ul ref={listRef} className="font-bold text-sm flex flex-col gap-2">
            {listOption}
          </ul>
        </div>
      )}
    </div>
  );
}
