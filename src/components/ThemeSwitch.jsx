import { useEffect, useState } from "react";
import { svgFilter } from "../constans/svgFilter";
import THEME_ICON from "/images/icon-moon.svg";
export function ThemeSwitch() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? false : true;
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  function handleSwitchModeClick() {
    setIsLightMode((prev) => !prev);
  }

  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={(e) => handleSwitchModeClick(e)}
        className={`outline-CustomPurple transition ease-in duration-200 w-10 h-5 rounded-[10px] ${
          isLightMode ? "bg-CustomGray-light-400 p-[3px]" : "bg-CustomPurple"
        }   hover:bg-CustomPurple`}
      aria-label="Toggle theme"
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
