import { useState } from "react";
import THEME_ICON from "/images/icon-moon.svg";
export function ThemeSwitch() {
  const [isLightMode, setIsLightMode] = useState(true);

  function handleSwitchModeClick() {
    setIsLightMode((prev) => !prev);
  }

  const svgFilter =
    "brightness(0) saturate(100%) invert(29%) sepia(100%) saturate(1419%) hue-rotate(254deg) brightness(100%) contrast(88%)";

  return (
    <div className="flex gap-3">
      <button
        onClick={(e) => handleSwitchModeClick(e)}
        className={`outline-CustomPurple transition ease-in duration-200 w-10 h-5 rounded-[10px] ${
          isLightMode ? "bg-CustomGray-light-400 p-[3px]" : "bg-CustomPurple"
        }   hover:bg-CustomPurple`}
      >
        <div
          className={`transition ease-in-out duration-300 w-[14px] h-[14px] bg-CustomGray-light-100 rounded-full ${
            isLightMode ? "" : "translate-x-[22px] "
          }`}
        ></div>
      </button>
      <img
        src={THEME_ICON}
        alt="theme icon"
        className={`w-5 h-5`}
        style={!isLightMode ? { filter: svgFilter } : {}}
      />
    </div>
  );
}
