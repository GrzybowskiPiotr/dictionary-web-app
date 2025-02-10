import { CustomSelect } from "./CustomSelect";
import { ThemeSwitch } from "./ThemeSwitch";
import { fontOptions } from "../constans/fonts";
import LOGO_ICON from "/images/logo.svg";

export function TopHeaderWithControls() {
  return (
    <>
      <div className="flex justify-between">
        <img src={LOGO_ICON} alt="book icon" className="w-8 h-9" />
        <div
          aria-label="contols container"
          className="flex justify-between items-center "
        >
          <CustomSelect options={fontOptions} />
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
