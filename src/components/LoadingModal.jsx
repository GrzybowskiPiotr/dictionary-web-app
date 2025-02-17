import LOADING_ICON from "/images/loading-icon.png";
export function LoadingModal() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center h-[200px]">
      <h1 className="font-bold text-CustomGray-dark-200 dark:text-CustomGray-light-100 text-2xl">
        Loading...
      </h1>
      <img
        src={LOADING_ICON}
        alt="loading icon"
        className="w-10 h-10 animate-spin"
      />
    </div>
  );
}
