import SEARCH_ICON from "../assets/images/icon-search.svg";
export function SearchInput({ onSearchSubmit }) {
  return (
    <form className="relative mb-7" onSubmit={onSearchSubmit}>
      <input
        type="test"
        placeholder="Search for any word…"
        className="font-bold w-full bg-CustomGray-light-200 mt-6 rounded-2xl py-4 px-6 focus:border-CustomPurple caret-CustomPurple outline-CustomPurple"
      />
      <button className="outline-CustomPurple absolute right-0 top-7 p-4">
        <img src={SEARCH_ICON} alt="search icon" />
      </button>
    </form>
  );
}
